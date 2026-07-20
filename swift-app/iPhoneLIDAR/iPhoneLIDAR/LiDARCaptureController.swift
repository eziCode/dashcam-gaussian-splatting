@preconcurrency import ARKit
import CoreImage
import Combine
import Foundation
import UIKit

final class LiDARCaptureController: NSObject, ObservableObject, ARSessionDelegate {
    let session = ARSession()

    @Published private(set) var isRecording = false
    @Published private(set) var frameCount = 0
    @Published private(set) var status = "Checking LiDAR…"
    @Published private(set) var latestCaptureURL: URL?
    @Published var errorMessage: String?

    var isSupported: Bool { ARWorldTrackingConfiguration.isSupported }
    var hasLiDAR: Bool { ARWorldTrackingConfiguration.supportsFrameSemantics(.sceneDepth) }
    var latestCaptureHasDepth: Bool {
        guard let latestCaptureURL else { return false }
        let depth = latestCaptureURL.appendingPathComponent("depth", isDirectory: true)
        return ((try? FileManager.default.contentsOfDirectory(at: depth, includingPropertiesForKeys: nil)) ?? [])
            .contains { $0.pathExtension == "bin" }
    }

    private let writerQueue = DispatchQueue(label: "com.iphoneLIDAR.frame-writer", qos: .userInitiated)
    private let ciContext = CIContext(options: [.cacheIntermediates: false])
    private var sessionDirectory: URL?
    private var metadataHandle: FileHandle?
    private var lastSavedTimestamp: TimeInterval = -.infinity
    private let captureInterval: TimeInterval = 0.1

    override init() {
        super.init()
        session.delegate = self
        session.delegateQueue = .main
        status = isSupported ? (hasLiDAR ? "LiDAR ready" : "RGB reconstruction ready") : "ARKit is unavailable"
        latestCaptureURL = Self.findLatestCapture()
    }

    func startSession() {
        guard isSupported else { return }
        let configuration = ARWorldTrackingConfiguration()
        if hasLiDAR {
            configuration.frameSemantics.insert(.sceneDepth)
        }
        configuration.worldAlignment = .gravity
        session.run(configuration)
    }

    func pauseSession() {
        if isRecording { stopRecording() }
        session.pause()
    }

    func toggleRecording() {
        isRecording ? stopRecording() : startRecording()
    }

    private func startRecording() {
        do {
            let root = try FileManager.default.url(
                for: .documentDirectory,
                in: .userDomainMask,
                appropriateFor: nil,
                create: true
            ).appendingPathComponent("LiDARCaptures", isDirectory: true)
            try FileManager.default.createDirectory(at: root, withIntermediateDirectories: true)

            let formatter = DateFormatter()
            formatter.dateFormat = "yyyyMMdd-HHmmss"
            let directory = root.appendingPathComponent(formatter.string(from: Date()), isDirectory: true)
            for folder in ["rgb", "depth", "confidence"] {
                try FileManager.default.createDirectory(
                    at: directory.appendingPathComponent(folder, isDirectory: true),
                    withIntermediateDirectories: true
                )
            }

            let metadataURL = directory.appendingPathComponent("frames.jsonl")
            FileManager.default.createFile(atPath: metadataURL.path, contents: nil)
            metadataHandle = try FileHandle(forWritingTo: metadataURL)
            sessionDirectory = directory
            frameCount = 0
            lastSavedTimestamp = -.infinity
            isRecording = true
            status = "Recording"
        } catch {
            errorMessage = error.localizedDescription
        }
    }

    private func stopRecording() {
        isRecording = false
        status = "Saving…"
        writerQueue.async { [weak self] in
            self?.metadataHandle?.closeFile()
            DispatchQueue.main.async {
                self?.metadataHandle = nil
                self?.status = "Saved \(self?.frameCount ?? 0) frames"
                self?.latestCaptureURL = self?.sessionDirectory
            }
        }
    }

    func session(_ session: ARSession, didUpdate frame: ARFrame) {
        guard isRecording,
              frame.timestamp - lastSavedTimestamp >= captureInterval,
              let directory = sessionDirectory else { return }

        lastSavedTimestamp = frame.timestamp
        let index = frameCount
        frameCount += 1

        let cameraImage = frame.capturedImage
        let depthMap = frame.sceneDepth?.depthMap
        let confidenceMap = frame.sceneDepth?.confidenceMap
        let intrinsics = frame.camera.intrinsics
        let transform = frame.camera.transform
        let timestamp = frame.timestamp

        writerQueue.async { [weak self] in
            guard let self else { return }
            do {
                let stem = String(format: "%06d", index)
                try self.writeJPEG(cameraImage, to: directory.appendingPathComponent("rgb/\(stem).jpg"))
                if let depthMap, let confidenceMap {
                    try Self.writePixelBuffer(depthMap, to: directory.appendingPathComponent("depth/\(stem).bin"))
                    try Self.writePixelBuffer(confidenceMap, to: directory.appendingPathComponent("confidence/\(stem).bin"))
                }

                let record = FrameMetadata(
                    index: index,
                    timestamp: timestamp,
                    imageWidth: CVPixelBufferGetWidth(cameraImage),
                    imageHeight: CVPixelBufferGetHeight(cameraImage),
                    depthWidth: depthMap.map { CVPixelBufferGetWidth($0) },
                    depthHeight: depthMap.map { CVPixelBufferGetHeight($0) },
                    intrinsics: Self.flatten(intrinsics),
                    cameraTransform: Self.flatten(transform)
                )
                var data = try JSONEncoder().encode(record)
                data.append(0x0A)
                self.metadataHandle?.write(data)
            } catch {
                DispatchQueue.main.async { self.errorMessage = error.localizedDescription }
            }
        }
    }

    private func writeJPEG(_ buffer: CVPixelBuffer, to url: URL) throws {
        let image = CIImage(cvPixelBuffer: buffer).oriented(.right)
        guard let colorSpace = CGColorSpace(name: CGColorSpace.sRGB),
              let data = ciContext.jpegRepresentation(of: image, colorSpace: colorSpace, options: [:]) else {
            throw CaptureError.jpegEncodingFailed
        }
        try data.write(to: url, options: .atomic)
    }

    private static func writePixelBuffer(_ buffer: CVPixelBuffer, to url: URL) throws {
        CVPixelBufferLockBaseAddress(buffer, .readOnly)
        defer { CVPixelBufferUnlockBaseAddress(buffer, .readOnly) }
        guard let base = CVPixelBufferGetBaseAddress(buffer) else { throw CaptureError.missingPixelData }

        let width = CVPixelBufferGetWidth(buffer)
        let height = CVPixelBufferGetHeight(buffer)
        let bytesPerRow = CVPixelBufferGetBytesPerRow(buffer)
        let bytesPerPixel: Int
        switch CVPixelBufferGetPixelFormatType(buffer) {
        case kCVPixelFormatType_DepthFloat32:
            bytesPerPixel = MemoryLayout<Float32>.size
        case kCVPixelFormatType_OneComponent8:
            bytesPerPixel = MemoryLayout<UInt8>.size
        default:
            throw CaptureError.unsupportedPixelFormat
        }

        var data = Data(capacity: width * height * bytesPerPixel)
        for row in 0..<height {
            data.append(Data(bytes: base.advanced(by: row * bytesPerRow), count: width * bytesPerPixel))
        }
        try data.write(to: url, options: .atomic)
    }

    private static func flatten(_ matrix: simd_float3x3) -> [Float] {
        (0..<3).flatMap { column in (0..<3).map { row in matrix[column][row] } }
    }

    private static func flatten(_ matrix: simd_float4x4) -> [Float] {
        (0..<4).flatMap { column in (0..<4).map { row in matrix[column][row] } }
    }

    private static func findLatestCapture() -> URL? {
        guard let documents = try? FileManager.default.url(
            for: .documentDirectory,
            in: .userDomainMask,
            appropriateFor: nil,
            create: false
        ) else { return nil }
        let root = documents.appendingPathComponent("LiDARCaptures", isDirectory: true)
        return try? FileManager.default.contentsOfDirectory(
            at: root,
            includingPropertiesForKeys: nil,
            options: [.skipsHiddenFiles]
        ).filter { FileManager.default.fileExists(atPath: $0.appendingPathComponent("frames.jsonl").path) }
            .sorted { $0.lastPathComponent > $1.lastPathComponent }
            .first
    }
}

private struct FrameMetadata: Codable {
    let index: Int
    let timestamp: TimeInterval
    let imageWidth: Int
    let imageHeight: Int
    let depthWidth: Int?
    let depthHeight: Int?
    let intrinsics: [Float]
    let cameraTransform: [Float]
}

private enum CaptureError: LocalizedError {
    case jpegEncodingFailed
    case missingPixelData
    case unsupportedPixelFormat

    var errorDescription: String? {
        switch self {
        case .jpegEncodingFailed: "Could not encode the camera frame."
        case .missingPixelData: "A LiDAR pixel buffer was empty."
        case .unsupportedPixelFormat: "ARKit returned an unsupported LiDAR pixel format."
        }
    }
}
