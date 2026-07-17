import Metal
import MetalKit
import MetalSplatter
import SplatIO
import SwiftUI

struct NativeSplatView: UIViewRepresentable {
    let url: URL

    final class Coordinator {
        var renderer: NativeSplatRenderer?
    }

    func makeCoordinator() -> Coordinator { Coordinator() }

    func makeUIView(context: Context) -> MTKView {
        let view = MTKView(frame: .zero, device: MTLCreateSystemDefaultDevice())
        view.colorPixelFormat = .bgra8Unorm_srgb
        view.depthStencilPixelFormat = .depth32Float
        view.clearColor = MTLClearColor(red: 0.015, green: 0.02, blue: 0.03, alpha: 1)
        view.preferredFramesPerSecond = 60

        let renderer = NativeSplatRenderer(view: view)
        context.coordinator.renderer = renderer
        view.delegate = renderer
        renderer?.installControls(on: view)
        Task { try? await renderer?.load(url) }
        return view
    }

    func updateUIView(_ uiView: MTKView, context: Context) {
        guard context.coordinator.renderer?.loadedURL != url else { return }
        Task { try? await context.coordinator.renderer?.load(url) }
    }
}

@MainActor
final class NativeSplatRenderer: NSObject, MTKViewDelegate {
    private static let maxFramesInFlight = 3
    private let view: MTKView
    private let commandQueue: MTLCommandQueue
    private let semaphore = DispatchSemaphore(value: maxFramesInFlight)
    private var splatRenderer: SplatRenderer?
    private var yaw: Float = 0
    private var pitch: Float = 0
    private var distance: Float = 3
    private var previousPan = CGPoint.zero
    private var previousPinch: CGFloat = 1
    private(set) var loadedURL: URL?

    init?(view: MTKView) {
        guard let device = view.device, let queue = device.makeCommandQueue() else { return nil }
        self.view = view
        self.commandQueue = queue
        super.init()
    }

    func installControls(on view: MTKView) {
        let pan = UIPanGestureRecognizer(target: self, action: #selector(didPan(_:)))
        let pinch = UIPinchGestureRecognizer(target: self, action: #selector(didPinch(_:)))
        view.addGestureRecognizer(pan)
        view.addGestureRecognizer(pinch)
    }

    func load(_ url: URL) async throws {
        guard loadedURL != url, let device = view.device else { return }
        let renderer = try SplatRenderer(
            device: device,
            colorFormat: view.colorPixelFormat,
            depthFormat: view.depthStencilPixelFormat,
            sampleCount: view.sampleCount,
            maxViewCount: 1,
            maxSimultaneousRenders: Self.maxFramesInFlight
        )
        let points = try await AutodetectSceneReader(url).readAll()
        let chunk = try SplatChunk(device: device, from: points)
        await renderer.addChunk(chunk)
        splatRenderer = renderer
        loadedURL = url
    }

    func draw(in view: MTKView) {
        guard let renderer = splatRenderer,
              renderer.isReadyToRender,
              let drawable = view.currentDrawable,
              let commandBuffer = commandQueue.makeCommandBuffer() else { return }
        semaphore.wait()
        commandBuffer.addCompletedHandler { [semaphore] _ in semaphore.signal() }

        let size = view.drawableSize
        let projection = perspective(fovY: .pi / 3, aspect: Float(size.width / max(size.height, 1)), near: 0.01, far: 1000)
        let viewMatrix = translation(0, 0, -distance) * rotation(pitch, SIMD3(1, 0, 0)) * rotation(yaw, SIMD3(0, 1, 0)) * rotation(.pi, SIMD3(0, 0, 1))
        let viewport = SplatRenderer.ViewportDescriptor(
            viewport: MTLViewport(originX: 0, originY: 0, width: size.width, height: size.height, znear: 0, zfar: 1),
            projectionMatrix: projection,
            viewMatrix: viewMatrix,
            screenSize: SIMD2(Int(size.width), Int(size.height))
        )
        do {
            let rendered = try renderer.render(
                viewports: [viewport],
                colorTexture: drawable.texture,
                colorStoreAction: .store,
                depthTexture: view.depthStencilTexture,
                rasterizationRateMap: nil,
                renderTargetArrayLength: 0,
                to: commandBuffer
            )
            if rendered { commandBuffer.present(drawable) }
            commandBuffer.commit()
        } catch {
            semaphore.signal()
        }
    }

    func mtkView(_ view: MTKView, drawableSizeWillChange size: CGSize) {}

    @objc private func didPan(_ gesture: UIPanGestureRecognizer) {
        let point = gesture.translation(in: view)
        if gesture.state == .began { previousPan = point }
        yaw += Float(point.x - previousPan.x) * 0.006
        pitch = min(max(pitch + Float(point.y - previousPan.y) * 0.006, -.pi / 2), .pi / 2)
        previousPan = point
    }

    @objc private func didPinch(_ gesture: UIPinchGestureRecognizer) {
        if gesture.state == .began { previousPinch = gesture.scale }
        distance = min(max(distance / Float(gesture.scale / previousPinch), 0.1), 100)
        previousPinch = gesture.scale
    }
}

enum SplatFileStore {
    static func importFile(_ source: URL) throws -> URL {
        let didAccess = source.startAccessingSecurityScopedResource()
        defer { if didAccess { source.stopAccessingSecurityScopedResource() } }
        let ext = source.pathExtension.lowercased()
        guard ["ply", "spz", "splat"].contains(ext) else { throw SplatImportError.unsupportedFormat }
        let root = try FileManager.default.url(for: .documentDirectory, in: .userDomainMask, appropriateFor: nil, create: true)
            .appendingPathComponent("GaussianSplats", isDirectory: true)
        try FileManager.default.createDirectory(at: root, withIntermediateDirectories: true)
        let destination = root.appendingPathComponent(source.lastPathComponent)
        if FileManager.default.fileExists(atPath: destination.path) { try FileManager.default.removeItem(at: destination) }
        try FileManager.default.copyItem(at: source, to: destination)
        return destination
    }
}

private enum SplatImportError: LocalizedError {
    case unsupportedFormat
    var errorDescription: String? { "Choose a Gaussian .ply, .spz, or .splat file." }
}

private func translation(_ x: Float, _ y: Float, _ z: Float) -> simd_float4x4 {
    simd_float4x4(columns: (SIMD4(1, 0, 0, 0), SIMD4(0, 1, 0, 0), SIMD4(0, 0, 1, 0), SIMD4(x, y, z, 1)))
}

private func rotation(_ angle: Float, _ axis: SIMD3<Float>) -> simd_float4x4 {
    let q = simd_quatf(angle: angle, axis: simd_normalize(axis))
    return simd_float4x4(q)
}

private func perspective(fovY: Float, aspect: Float, near: Float, far: Float) -> simd_float4x4 {
    let y = 1 / tan(fovY * 0.5)
    let x = y / aspect
    let z = far / (near - far)
    return simd_float4x4(columns: (SIMD4(x, 0, 0, 0), SIMD4(0, y, 0, 0), SIMD4(0, 0, z, -1), SIMD4(0, 0, z * near, 0)))
}
