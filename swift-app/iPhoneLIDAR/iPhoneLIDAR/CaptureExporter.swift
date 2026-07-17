import SwiftUI
import UIKit
import ZIPFoundation

enum CaptureExporter {
    static func archive(_ captureURL: URL) async throws -> URL {
        try await Task.detached(priority: .userInitiated) {
            let exports = try FileManager.default.url(
                for: .cachesDirectory,
                in: .userDomainMask,
                appropriateFor: nil,
                create: true
            ).appendingPathComponent("CaptureExports", isDirectory: true)
            try FileManager.default.createDirectory(at: exports, withIntermediateDirectories: true)
            let destination = exports.appendingPathComponent(captureURL.lastPathComponent).appendingPathExtension("zip")
            if FileManager.default.fileExists(atPath: destination.path) {
                try FileManager.default.removeItem(at: destination)
            }
            try FileManager.default.zipItem(
                at: captureURL,
                to: destination,
                shouldKeepParent: true,
                compressionMethod: .deflate
            )
            return destination
        }.value
    }
}

struct ActivityShareView: UIViewControllerRepresentable {
    let items: [Any]

    func makeUIViewController(context: Context) -> UIActivityViewController {
        UIActivityViewController(activityItems: items, applicationActivities: nil)
    }

    func updateUIViewController(_ controller: UIActivityViewController, context: Context) {}
}
