declare module '@mkkellogg/gaussian-splats-3d' {
  export const SceneRevealMode: { Gradual: number }
  export const SceneFormat: { Splat: number; KSplat: number; Ply: number; Spz: number }
  export class Viewer {
    camera: { position: { x: number; y: number; z: number; set(x: number, y: number, z: number): void } }
    controls: { target: { x: number; y: number; z: number; set(x: number, y: number, z: number): void }; update(): void }
    splatMesh: {
      scenes: Array<{ rotation: { set(x: number, y: number, z: number): void } }>
      setSplatScale(scale: number): void
      updateTransforms(): void
    }
    renderer: { dispose(): void; domElement: HTMLElement }
    usingExternalRenderer: boolean
    constructor(options: Record<string, unknown>)
    addSplatScene(url: string, options?: Record<string, unknown>): Promise<void>
    start(): void
    dispose(): Promise<void>
    resetCamera?(): void
    forceRenderNextFrame?(): void
  }
}
