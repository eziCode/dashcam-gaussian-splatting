import SceneKit
import SwiftUI
import UIKit
import UniformTypeIdentifiers

struct ContentView: View {
    @StateObject private var capture = LiDARCaptureController()
    @State private var showingViewer = false
    @State private var showingSplatImporter = false
    @State private var showingSplatViewer = false
    @State private var splatURL: URL?
    @State private var exportURL: URL?
    @State private var isPreparingExport = false
    @State private var showingShareSheet = false

    var body: some View {
        ZStack {
            ARCameraView(session: capture.session)
                .ignoresSafeArea()

            VStack(spacing: 12) {
                HStack {
                    Label(capture.status, systemImage: capture.isSupported ? "viewfinder" : "exclamationmark.triangle")
                        .font(.subheadline.weight(.semibold))
                        .padding(.horizontal, 14)
                        .padding(.vertical, 9)
                        .background(.ultraThinMaterial, in: Capsule())
                    Spacer()
                }

                Spacer()

                if capture.isRecording {
                    Text("\(capture.frameCount) frames")
                        .font(.system(.headline, design: .monospaced))
                        .padding(.horizontal, 14)
                        .padding(.vertical, 8)
                        .background(.ultraThinMaterial, in: Capsule())
                }

                if !capture.isRecording, capture.latestCaptureURL != nil {
                    Button {
                        showingViewer = true
                    } label: {
                        Label("View 3D Capture", systemImage: "cube.transparent")
                            .font(.headline)
                            .padding(.horizontal, 18)
                            .padding(.vertical, 11)
                    }
                    .buttonStyle(.borderedProminent)

                    Button {
                        prepareExport()
                    } label: {
                        Label(isPreparingExport ? "Preparing ZIP…" : "Export Capture", systemImage: "square.and.arrow.up")
                            .font(.headline)
                            .padding(.horizontal, 18)
                            .padding(.vertical, 11)
                    }
                    .buttonStyle(.bordered)
                    .disabled(isPreparingExport)
                }

                if !capture.isRecording {
                    Button {
                        showingSplatImporter = true
                    } label: {
                        Label("Open Gaussian Splat", systemImage: "sparkles.rectangle.stack")
                            .font(.headline)
                            .padding(.horizontal, 18)
                            .padding(.vertical, 11)
                    }
                    .buttonStyle(.bordered)
                }

                Button(action: capture.toggleRecording) {
                    ZStack {
                        Circle()
                            .stroke(.white, lineWidth: 4)
                            .frame(width: 76, height: 76)
                        RoundedRectangle(cornerRadius: capture.isRecording ? 7 : 30)
                            .fill(capture.isRecording ? .red : .white)
                            .frame(width: capture.isRecording ? 34 : 60,
                                   height: capture.isRecording ? 34 : 60)
                    }
                }
                .disabled(!capture.isSupported)
                .accessibilityLabel(capture.isRecording ? "Stop recording" : "Start recording")

                Text(capture.isRecording ? "Move slowly and keep surfaces in view" : "Tap to record RGB + LiDAR depth")
                    .font(.footnote)
                    .foregroundStyle(.white)
                    .shadow(radius: 3)
            }
            .padding()
        }
        .preferredColorScheme(.dark)
        .sheet(isPresented: $showingViewer) {
            if let url = capture.latestCaptureURL {
                NavigationStack {
                    PointCloudView(captureURL: url)
                        .ignoresSafeArea(edges: .bottom)
                        .navigationTitle("LiDAR Capture")
                        .navigationBarTitleDisplayMode(.inline)
                        .toolbar {
                            ToolbarItem(placement: .confirmationAction) {
                                Button("Done") { showingViewer = false }
                            }
                        }
                }
            }
        }
        .sheet(isPresented: $showingSplatViewer) {
            if let url = splatURL {
                NavigationStack {
                    NativeSplatView(url: url)
                        .ignoresSafeArea(edges: .bottom)
                        .navigationTitle(url.deletingPathExtension().lastPathComponent)
                        .navigationBarTitleDisplayMode(.inline)
                        .toolbar {
                            ToolbarItem(placement: .confirmationAction) {
                                Button("Done") { showingSplatViewer = false }
                            }
                        }
                }
            }
        }
        .sheet(isPresented: $showingShareSheet) {
            if let exportURL {
                ActivityShareView(items: [exportURL])
            }
        }
        .fileImporter(
            isPresented: $showingSplatImporter,
            allowedContentTypes: [.data],
            allowsMultipleSelection: false
        ) { result in
            do {
                guard let selected = try result.get().first else { return }
                splatURL = try SplatFileStore.importFile(selected)
                showingSplatViewer = true
            } catch {
                capture.errorMessage = error.localizedDescription
            }
        }
        .onAppear { capture.startSession() }
        .onDisappear { capture.pauseSession() }
        .alert("Capture error", isPresented: Binding(
            get: { capture.errorMessage != nil },
            set: { if !$0 { capture.errorMessage = nil } }
        )) {
            Button("OK", role: .cancel) { capture.errorMessage = nil }
        } message: {
            Text(capture.errorMessage ?? "Unknown error")
        }
    }

    private func prepareExport() {
        guard let captureURL = capture.latestCaptureURL else { return }
        isPreparingExport = true
        Task {
            do {
                exportURL = try await CaptureExporter.archive(captureURL)
                isPreparingExport = false
                showingShareSheet = true
            } catch {
                isPreparingExport = false
                capture.errorMessage = error.localizedDescription
            }
        }
    }
}

struct PointCloudView: UIViewRepresentable {
    let captureURL: URL

    func makeUIView(context: Context) -> SCNView {
        let view = SCNView(frame: .zero)
        view.backgroundColor = UIColor(red: 0.025, green: 0.03, blue: 0.04, alpha: 1)
        view.allowsCameraControl = true
        view.antialiasingMode = .multisampling4X
        view.scene = PointCloudBuilder.scene(from: captureURL)
        view.defaultCameraController.interactionMode = .orbitTurntable
        view.defaultCameraController.inertiaEnabled = true
        view.defaultCameraController.frameNodes(view.scene?.rootNode.childNodes ?? [])
        return view
    }

    func updateUIView(_ uiView: SCNView, context: Context) {}
}

private enum PointCloudBuilder {
    private struct Metadata: Decodable {
        let index: Int
        let imageWidth: Int
        let imageHeight: Int
        let depthWidth: Int
        let depthHeight: Int
        let intrinsics: [Float]
        let cameraTransform: [Float]
    }

    private struct RGBAImage {
        let width: Int
        let height: Int
        let bytes: [UInt8]

        init?(url: URL) {
            guard let image = UIImage(contentsOfFile: url.path), let cgImage = image.cgImage else { return nil }
            width = cgImage.width
            height = cgImage.height
            var pixels = [UInt8](repeating: 0, count: width * height * 4)
            guard let context = CGContext(
                data: &pixels,
                width: width,
                height: height,
                bitsPerComponent: 8,
                bytesPerRow: width * 4,
                space: CGColorSpaceCreateDeviceRGB(),
                bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue
            ) else { return nil }
            context.translateBy(x: 0, y: CGFloat(height))
            context.scaleBy(x: 1, y: -1)
            context.draw(cgImage, in: CGRect(x: 0, y: 0, width: width, height: height))
            bytes = pixels
        }

        func color(originalX: Float, originalY: Float, originalHeight: Int) -> SIMD4<UInt8> {
            let x = min(max(Int(Float(originalHeight - 1) - originalY), 0), width - 1)
            let y = min(max(Int(originalX), 0), height - 1)
            let offset = (y * width + x) * 4
            return SIMD4(bytes[offset], bytes[offset + 1], bytes[offset + 2], 255)
        }
    }

    static func scene(from directory: URL) -> SCNScene {
        let scene = SCNScene()
        let metadataURL = directory.appendingPathComponent("frames.jsonl")
        guard let contents = try? String(contentsOf: metadataURL, encoding: .utf8) else { return scene }

        let decoder = JSONDecoder()
        let frames = contents.split(separator: "\n").compactMap {
            try? decoder.decode(Metadata.self, from: Data($0.utf8))
        }
        var vertices: [SCNVector3] = []
        var colors: [SIMD4<UInt8>] = []
        vertices.reserveCapacity(frames.count * 700)
        colors.reserveCapacity(frames.count * 700)

        for frame in frames where frame.index.isMultiple(of: 2) {
            let stem = String(format: "%06d", frame.index)
            guard let depthData = try? Data(contentsOf: directory.appendingPathComponent("depth/\(stem).bin")),
                  let image = RGBAImage(url: directory.appendingPathComponent("rgb/\(stem).jpg")),
                  frame.intrinsics.count == 9,
                  frame.cameraTransform.count == 16 else { continue }
            let expectedBytes = frame.depthWidth * frame.depthHeight * MemoryLayout<Float32>.size
            guard depthData.count >= expectedBytes else { continue }

            let fx = frame.intrinsics[0]
            let fy = frame.intrinsics[4]
            let cx = frame.intrinsics[6]
            let cy = frame.intrinsics[7]
            let sx = Float(frame.imageWidth) / Float(frame.depthWidth)
            let sy = Float(frame.imageHeight) / Float(frame.depthHeight)
            let m = frame.cameraTransform

            depthData.withUnsafeBytes { raw in
                let depths = raw.bindMemory(to: Float32.self)
                for y in stride(from: 0, to: frame.depthHeight, by: 6) {
                    for x in stride(from: 0, to: frame.depthWidth, by: 6) {
                        let depth = depths[y * frame.depthWidth + x]
                        guard depth.isFinite, depth > 0.12, depth < 8 else { continue }
                        let u = (Float(x) + 0.5) * sx
                        let v = (Float(y) + 0.5) * sy
                        let cameraX = (u - cx) * depth / fx
                        let cameraY = -(v - cy) * depth / fy
                        let cameraZ = -depth
                        vertices.append(SCNVector3(
                            m[0] * cameraX + m[4] * cameraY + m[8] * cameraZ + m[12],
                            m[1] * cameraX + m[5] * cameraY + m[9] * cameraZ + m[13],
                            m[2] * cameraX + m[6] * cameraY + m[10] * cameraZ + m[14]
                        ))
                        colors.append(image.color(originalX: u, originalY: v, originalHeight: frame.imageHeight))
                    }
                }
            }
        }

        guard !vertices.isEmpty else { return scene }
        let vertexSource = SCNGeometrySource(vertices: vertices)
        let colorSource = SCNGeometrySource(
            data: colors.withUnsafeBytes { Data($0) },
            semantic: .color,
            vectorCount: colors.count,
            usesFloatComponents: false,
            componentsPerVector: 4,
            bytesPerComponent: 1,
            dataOffset: 0,
            dataStride: 4
        )
        let element = SCNGeometryElement(data: nil, primitiveType: .point, primitiveCount: vertices.count, bytesPerIndex: 0)
        element.pointSize = 3
        element.minimumPointScreenSpaceRadius = 1
        element.maximumPointScreenSpaceRadius = 5
        let geometry = SCNGeometry(sources: [vertexSource, colorSource], elements: [element])
        let material = SCNMaterial()
        material.lightingModel = .constant
        geometry.materials = [material]
        scene.rootNode.addChildNode(SCNNode(geometry: geometry))
        return scene
    }
}
