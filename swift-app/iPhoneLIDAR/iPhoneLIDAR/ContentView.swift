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

            VStack(spacing: 0) {
                header
                Spacer()
                controlPanel
            }
        }
        .preferredColorScheme(.light)
        .sheet(isPresented: $showingViewer) {
            if let url = capture.latestCaptureURL {
                NavigationStack {
                    Group {
                        if capture.latestCaptureHasDepth {
                            PointCloudView(captureURL: url)
                                .ignoresSafeArea(edges: .bottom)
                        } else {
                            ContentUnavailableView(
                                "RGB Capture Ready",
                                systemImage: "photo.stack",
                                description: Text("Export this capture and reconstruct it on your Mac to view it in 3D.")
                            )
                        }
                    }
                        .navigationTitle(capture.latestCaptureHasDepth ? "LiDAR Capture" : "RGB Capture")
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

    private var header: some View {
        HStack(spacing: 12) {
            StateFarmMark()
                .frame(width: 44, height: 36)

            VStack(alignment: .leading, spacing: 1) {
                Text("STATE FARM")
                    .font(.system(size: 15, weight: .bold, design: .rounded))
                    .tracking(0.8)
                    .foregroundStyle(Brand.red)
                Text("Scene Capture")
                    .font(.caption.weight(.medium))
                    .foregroundStyle(Brand.charcoal.opacity(0.72))
            }

            Spacer()

            HStack(spacing: 6) {
                Circle()
                    .fill(capture.isSupported ? (capture.isRecording ? Brand.red : Brand.success) : Brand.warning)
                    .frame(width: 8, height: 8)
                Text(capture.status)
                    .font(.caption.weight(.semibold))
                    .lineLimit(1)
            }
            .foregroundStyle(Brand.charcoal)
        }
        .padding(.horizontal, 18)
        .padding(.vertical, 12)
        .background(Color.white)
        .overlay(alignment: .bottom) {
            Rectangle().fill(Color.black.opacity(0.08)).frame(height: 1)
        }
    }

    private var controlPanel: some View {
        VStack(spacing: 16) {
            HStack {
                VStack(alignment: .leading, spacing: 3) {
                    Text(capture.isRecording ? "Capturing scene" : capture.latestCaptureURL == nil ? "Ready to capture" : "Capture ready")
                        .font(.title3.weight(.bold))
                        .foregroundStyle(Brand.charcoal)
                    Text(capture.isRecording ? "Move slowly and keep surfaces in view." : capture.hasLiDAR ? "Record a complete view of the surrounding area." : "Record overlapping views for Mac reconstruction.")
                        .font(.subheadline)
                        .foregroundStyle(Brand.charcoal.opacity(0.65))
                }
                Spacer()
                if capture.isRecording {
                    VStack(alignment: .trailing, spacing: 2) {
                        Text("\(capture.frameCount)")
                            .font(.system(.title2, design: .rounded, weight: .bold))
                            .foregroundStyle(Brand.red)
                        Text("FRAMES")
                            .font(.caption2.weight(.bold))
                            .tracking(0.8)
                            .foregroundStyle(Brand.charcoal.opacity(0.55))
                    }
                }
            }

            Button(action: capture.toggleRecording) {
                HStack(spacing: 10) {
                    Image(systemName: capture.isRecording ? "stop.fill" : "record.circle")
                        .font(.title3)
                    Text(capture.isRecording ? "Stop Capture" : "Start Capture")
                        .font(.headline)
                }
                .frame(maxWidth: .infinity)
                .frame(height: 54)
                .foregroundStyle(.white)
                .background(capture.isSupported ? Brand.red : Color.gray, in: RoundedRectangle(cornerRadius: 12))
            }
            .disabled(!capture.isSupported)

            if !capture.isRecording {
                HStack(spacing: 10) {
                    if capture.latestCaptureURL != nil {
                        CompactAction(title: "Preview", icon: "cube.transparent") { showingViewer = true }
                        CompactAction(title: isPreparingExport ? "Preparing" : "Export", icon: "square.and.arrow.up") { prepareExport() }
                            .disabled(isPreparingExport)
                    }
                    CompactAction(title: "Open Splat", icon: "sparkles.rectangle.stack") { showingSplatImporter = true }
                }
            }
        }
        .padding(.horizontal, 20)
        .padding(.top, 20)
        .padding(.bottom, 14)
        .background(Color.white, in: UnevenRoundedRectangle(topLeadingRadius: 22, topTrailingRadius: 22))
        .shadow(color: Color.black.opacity(0.14), radius: 16, y: -4)
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

private enum Brand {
    static let red = Color(red: 0.82, green: 0.08, blue: 0.05)
    static let charcoal = Color(red: 0.12, green: 0.13, blue: 0.14)
    static let success = Color(red: 0.10, green: 0.55, blue: 0.28)
    static let warning = Color(red: 0.88, green: 0.52, blue: 0.06)
}

private struct StateFarmMark: View {
    var body: some View {
        ZStack {
            Ellipse().stroke(Brand.red, lineWidth: 2.4).frame(width: 24, height: 16).offset(y: -8)
            Ellipse().stroke(Brand.red, lineWidth: 2.4).frame(width: 24, height: 16).offset(x: -10, y: 7)
            Ellipse().stroke(Brand.red, lineWidth: 2.4).frame(width: 24, height: 16).offset(x: 10, y: 7)
        }
        .accessibilityHidden(true)
    }
}

private struct CompactAction: View {
    let title: String
    let icon: String
    let action: () -> Void

    var body: some View {
        Button(action: action) {
            VStack(spacing: 6) {
                Image(systemName: icon).font(.title3)
                Text(title).font(.caption.weight(.semibold)).lineLimit(1)
            }
            .foregroundStyle(Brand.charcoal)
            .frame(maxWidth: .infinity)
            .frame(height: 58)
            .background(Color(red: 0.95, green: 0.95, blue: 0.95), in: RoundedRectangle(cornerRadius: 10))
            .overlay(RoundedRectangle(cornerRadius: 10).stroke(Color.black.opacity(0.08)))
        }
        .buttonStyle(.plain)
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
