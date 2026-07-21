import { useCallback, useEffect, useRef, useState } from 'react'
import * as GaussianSplats3D from '@mkkellogg/gaussian-splats-3d'
import * as THREE from 'three'
import {
  ArrowDown, ArrowRight, Box, Camera, Check, ChevronDown, CircleDot,
  Cloud, Code2, Database, Download, Focus, Layers3, Maximize, Menu,
  MousePointer2, Move3D, Play, RotateCcw, ScanLine, ShieldCheck,
  Smartphone, Sparkles, Upload, X,
} from 'lucide-react'
import { StateFarmMark } from '@/components/StateFarmMark'

type ViewerStatus = 'idle' | 'loading' | 'ready' | 'error'
type CameraPath = { centers: number[][]; forwards: number[][]; ups: number[][]; names: string[]; radius: number }

const runtimeParams = new URLSearchParams(window.location.search)
const runtimeEnvironment = (import.meta as any).env as Record<string, string | undefined>
const runtimeScene = runtimeParams.get('scene') ?? runtimeEnvironment.VITE_SCENE_URL ?? '/demo/merged-rooms.ply'
const guidedMode = runtimeEnvironment.VITE_GUIDED_MODE === '1' || runtimeParams.get('guided') === '1'
const timelineUrl = runtimeEnvironment.VITE_TIMELINE_URL

type DynamicTimeline = { frameCount: number; frames: Array<{ index: number; frameId: string; objects: Array<{ id: string; center: number[]; size: number[]; yawDegrees: number }> }> }

function installDynamicTimeline(viewer: any, root: HTMLElement, timeline: DynamicTimeline) {
  const group = new THREE.Group(); viewer.threeScene.add(group)
  const panel = document.createElement('div')
  panel.dataset.viewerUi = 'true'
  panel.className = 'absolute bottom-24 left-1/2 z-20 w-[min(620px,calc(100%-2rem))] -translate-x-1/2 rounded-xl border border-white/10 bg-black/75 px-4 py-3 text-white backdrop-blur'
  const label = document.createElement('div'); label.className = 'mb-2 text-xs font-semibold'
  const slider = document.createElement('input')
  slider.type = 'range'; slider.min = '0'; slider.max = String(Math.max(0, timeline.frameCount - 1)); slider.value = '0'; slider.className = 'w-full accent-red-600'
  panel.append(label, slider); root.append(panel)
  const renderFrame = (index: number) => {
    while (group.children.length) {
      const child = group.children.pop() as THREE.Mesh
      child.geometry?.dispose(); (child.material as THREE.Material)?.dispose()
    }
    const frame = timeline.frames[index]
    label.textContent = `Timestep ${index + 1} / ${timeline.frameCount} · source ${frame.frameId}`
    frame.objects.forEach((object) => {
      const material = new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL((Number(object.id) * .137) % 1, .8, .55), transparent: true, opacity: .7, wireframe: true })
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(object.size[0], object.size[1], object.size[2]), material)
      mesh.position.set(object.center[0], object.center[1], object.center[2]); mesh.rotation.z = -object.yawDegrees * Math.PI / 180; group.add(mesh)
    })
    viewer.forceRenderNextFrame?.()
  }
  slider.addEventListener('input', () => renderFrame(Number(slider.value))); renderFrame(0)
  return { dispose: () => { panel.remove(); viewer.threeScene.remove(group); group.clear() } }
}

function installGuidedControls(viewer: any, root: HTMLElement, path: CameraPath) {
  const camera = viewer.camera
  const start = path.centers[0]
  let startIndex = 0
  let baseForward = new THREE.Vector3(...path.forwards[0]).normalize()
  let sceneUp = new THREE.Vector3(...path.ups[0]).normalize()
  let yaw = 0
  let pitch = 0
  let dragging = false
  let previousX = 0
  let previousY = 0
  let frame = 0
  let lastTime = performance.now()
  const keys = new Set<string>()

  const direction = () => {
    const forward = baseForward.clone().applyAxisAngle(sceneUp, yaw).normalize()
    const right = sceneUp.clone().cross(forward).normalize()
    return forward.applyAxisAngle(right, pitch).normalize()
  }
  const renderCamera = () => {
    const forward = direction()
    camera.up.copy(sceneUp)
    camera.lookAt?.(
      camera.position.x + forward.x,
      camera.position.y + forward.y,
      camera.position.z + forward.z,
    )
    viewer.forceRenderNextFrame?.()
  }
  const inside = (x: number, y: number, z: number) => {
    const limit = path.radius * path.radius
    return path.centers.some((center) => {
      const dx = x - center[0], dy = y - center[1], dz = z - center[2]
      return dx * dx + dy * dy + dz * dz <= limit
    })
  }
  const tryMove = (dx: number, dy: number, dz: number) => {
    const x = camera.position.x + dx, y = camera.position.y + dy, z = camera.position.z + dz
    if (inside(x, y, z)) camera.position.set(x, y, z)
  }
  const reset = () => {
    const position = path.centers[startIndex] ?? start
    const forward = path.forwards[startIndex] ?? path.forwards[0]
    const up = path.ups[startIndex] ?? path.ups[0]
    camera.position.set(position[0], position[1], position[2])
    baseForward = new THREE.Vector3(...forward).normalize()
    sceneUp = new THREE.Vector3(...up).normalize()
    yaw = 0; pitch = 0
    renderCamera()
  }
  const nextRecordedView = () => { startIndex = (startIndex + 1) % path.centers.length; reset() }
  const animate = (now: number) => {
    const dt = Math.min((now - lastTime) / 1000, 0.05)
    lastTime = now
    const look = direction()
    const forward = look.clone().addScaledVector(sceneUp, -look.dot(sceneUp)).normalize()
    const right = sceneUp.clone().cross(forward).normalize()
    const movement = new THREE.Vector3()
    if (keys.has('KeyW') || keys.has('ArrowUp')) movement.add(forward)
    if (keys.has('KeyS') || keys.has('ArrowDown')) movement.sub(forward)
    if (keys.has('KeyD') || keys.has('ArrowRight')) movement.add(right)
    if (keys.has('KeyA') || keys.has('ArrowLeft')) movement.sub(right)
    if (keys.has('ControlLeft') || keys.has('ControlRight') || keys.has('KeyE')) movement.add(sceneUp)
    if (keys.has('Space') || keys.has('KeyQ')) movement.sub(sceneUp)
    if (movement.lengthSq()) { movement.normalize().multiplyScalar(dt * .7); tryMove(movement.x, movement.y, movement.z) }
    renderCamera()
    frame = requestAnimationFrame(animate)
  }
  const keyDown = (event: KeyboardEvent) => {
    if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'KeyQ', 'KeyE', 'Space', 'ControlLeft', 'ControlRight', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.code)) {
      event.preventDefault(); keys.add(event.code)
    }
  }
  const keyUp = (event: KeyboardEvent) => keys.delete(event.code)
  const clearKeys = () => keys.clear()
  const pointerDown = (event: PointerEvent) => {
    if ((event.target as HTMLElement)?.closest?.('[data-viewer-ui="true"]')) return
    event.stopPropagation()
    dragging = true; previousX = event.clientX; previousY = event.clientY
    root.setPointerCapture(event.pointerId); root.focus()
  }
  const pointerMove = (event: PointerEvent) => {
    event.stopPropagation()
    if (!dragging) return
    yaw += (event.clientX - previousX) * 0.003
    pitch = Math.max(-1.45, Math.min(1.45, pitch + (event.clientY - previousY) * 0.003))
    previousX = event.clientX; previousY = event.clientY
  }
  const pointerUp = (event: PointerEvent) => { event.stopPropagation(); dragging = false }
  const wheel = (event: WheelEvent) => {
    if ((event.target as HTMLElement)?.closest?.('[data-viewer-ui="true"]')) return
    event.preventDefault(); event.stopPropagation()
  }

  window.addEventListener('keydown', keyDown, true)
  window.addEventListener('keyup', keyUp, true)
  window.addEventListener('blur', clearKeys)
  root.addEventListener('pointerdown', pointerDown, true)
  root.addEventListener('pointermove', pointerMove, true)
  root.addEventListener('pointerup', pointerUp, true)
  root.addEventListener('pointercancel', pointerUp, true)
  root.addEventListener('wheel', wheel, { passive: false, capture: true })
  reset(); frame = requestAnimationFrame(animate)
  return { reset, nextRecordedView, dispose: () => {
    cancelAnimationFrame(frame)
    window.removeEventListener('keydown', keyDown, true); window.removeEventListener('keyup', keyUp, true)
    window.removeEventListener('blur', clearKeys)
    root.removeEventListener('pointerdown', pointerDown, true); root.removeEventListener('pointermove', pointerMove, true)
    root.removeEventListener('pointerup', pointerUp, true); root.removeEventListener('pointercancel', pointerUp, true)
    root.removeEventListener('wheel', wheel, true)
  } }
}

const steps = [
  { number: '01', icon: Smartphone, title: 'Record every viewpoint', text: 'LiDAR dashcams capture synchronized video, metric depth, time, and camera motion before and during the collision.' },
  { number: '02', icon: Cloud, title: 'Reconstruct each stream', text: 'A containerized worker projects depth frames into 3D and builds a time-indexed representation of each camera’s view.' },
  { number: '03', icon: Layers3, title: 'Align the vehicles', text: 'Shared road geometry, landmarks, timestamps, and positioning data place separate recordings into one coordinate system.' },
  { number: '04', icon: Move3D, title: 'Walk through the accident', text: 'The claims workspace lets an investigator scrub through time, move freely around the scene, and compare recorded perspectives.' },
]

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
}

function App() {
  useReveal()
  const [menuOpen, setMenuOpen] = useState(false)

  if (guidedMode) {
    return <main className="fixed inset-0 bg-[#beb9b0] text-white"><SplatViewer /></main>
  }

  return (
    <main className="overflow-clip bg-[#f6f5f2] text-[#171717]">
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <section className="relative flex min-h-screen items-end overflow-hidden border-b border-black/10 bg-white px-5 pb-14 pt-32 md:px-10 md:pb-20 lg:px-16">
        <div className="hero-grid absolute inset-0 opacity-35" aria-hidden />

        <div className="relative z-10 max-w-[1120px]">
          <div className="mb-9 flex items-center gap-5 text-[11px] font-semibold uppercase tracking-[.16em] text-black/48 animate-enter">
            <span className="h-px w-10 bg-[#d71920]" /> Prototype · July 2026
          </div>
          <h1 className="max-w-[1120px] text-balance text-[clamp(3rem,7vw,7rem)] font-medium leading-[.94] tracking-[-.06em] animate-enter [animation-delay:100ms]">
            Walk through an accident from every recorded angle.
          </h1>
          <div className="mt-9 grid max-w-[980px] gap-8 md:grid-cols-[1fr_1.2fr] md:items-end animate-enter [animation-delay:200ms]">
            <p className="text-sm font-semibold leading-6 text-[#d71920]">Multiple LiDAR dashcams → one navigable accident scene</p>
            <div>
              <p className="max-w-[650px] text-lg leading-8 text-black/62 md:text-xl">A prototype claims tool that combines synchronized camera and LiDAR recordings from multiple vehicles, reconstructs the collision, and lets an investigator move through the event in 3D.</p>
              <a href="#reconstruction" className="mt-7 inline-flex items-center gap-3 border-b-2 border-[#d71920] pb-2 text-sm font-semibold text-[#b5121b] transition hover:text-[#d71920]">
                See the result <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-7 right-8 hidden items-center gap-3 text-[11px] font-semibold uppercase tracking-[.15em] text-black/45 lg:flex">
          Scroll to investigate <ChevronDown className="h-4 w-4 animate-bounce" />
        </div>
      </section>

      <section id="prototype" className="px-5 py-24 md:px-10 md:py-36 lg:px-16">
        <div className="mx-auto max-w-[1380px]">
          <SectionLabel index="01" text="The idea" />
          <div className="mt-16 grid gap-12 lg:grid-cols-[.75fr_1.45fr] lg:gap-24">
            <p data-reveal className="reveal text-sm font-semibold uppercase leading-6 tracking-[.14em] text-black/48">Video gives each driver one view. A spatial reconstruction can bring every available view into the same place and time.</p>
            <div data-reveal className="reveal">
              <h2 className="text-balance text-[clamp(2.4rem,4.5vw,4.7rem)] font-medium leading-[1.02] tracking-[-.05em]">A walkable record of the collision</h2>
              <p className="mt-8 max-w-[790px] text-lg leading-8 text-black/58 md:text-xl">Each participating dashcam sees only part of an accident. The proposed system synchronizes those recordings by time, uses LiDAR to preserve metric geometry, and aligns overlapping observations into one shared reconstruction.</p>
              <p className="mt-5 max-w-[790px] text-base leading-7 text-black/52">A claims professional could pause at a moment, move anywhere inside the reconstructed scene, inspect vehicle positions and sight lines, and compare what each camera observed.</p>
            </div>
          </div>
          <div className="mt-20 grid border-y border-black/10 sm:grid-cols-3">
            <Stat value="3" label="Independent views merged" />
            <Stat value="797,928" label="Rendered Gaussians" />
            <Stat value="≈ 5 cm" label="Registration RMSE" />
          </div>
        </div>
      </section>

      <section id="reconstruction" className="bg-[#111] px-4 py-5 text-white md:px-6 md:py-6">
        <div className="mx-auto max-w-[1500px] overflow-hidden border border-white/10 bg-[#090909]">
          <div className="flex flex-col justify-between gap-5 border-b border-white/10 px-6 py-5 md:flex-row md:items-center md:px-8">
            <div>
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.16em] text-white/48"><span className="h-2 w-2 rounded-full bg-[#43b875]" /> Live reconstruction</div>
              <h2 className="mt-2 text-xl font-medium tracking-tight md:text-2xl">Registration proof: three live feeds, one walkable space</h2>
            </div>
            <div className="flex flex-wrap gap-2 text-[11px] font-medium text-white/65">
              <Chip>52 MB PLY</Chip><Chip>WebGL</Chip><Chip>Real capture</Chip>
            </div>
          </div>
          <SplatViewer />
        </div>
      </section>

      <section id="capture" className="bg-white px-5 py-24 md:px-10 md:py-36 lg:px-16">
        <div className="mx-auto max-w-[1380px]">
          <SectionLabel index="02" text="Capture experience" />
          <div className="mt-16 grid items-center gap-16 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
            <PhoneMockup />
            <div data-reveal className="reveal">
              <p className="text-xs font-semibold uppercase tracking-[.14em] text-[#d71920]">Native Swift + ARKit</p>
              <h2 className="mt-7 text-balance text-[clamp(2.5rem,4.5vw,4.8rem)] font-medium leading-[1] tracking-[-.05em]">The LiDAR dashcam prototype</h2>
              <p className="mt-8 max-w-[650px] text-lg leading-8 text-black/58">The iPhone stands in for a future LiDAR-enabled dashcam. It records color, depth, confidence data, camera intrinsics, poses, and timestamps together—the measurements needed to place each observation in a shared accident scene.</p>
              <div className="mt-10 space-y-0 border-t border-black/10">
                <FeatureLine icon={ScanLine} title="Metric LiDAR depth" text="Preserves road, vehicle, and surrounding geometry" />
                <FeatureLine icon={Camera} title="Synchronized video" text="Keeps appearance and motion tied to every depth frame" />
                <FeatureLine icon={Database} title="Time and camera pose" text="Places observations along a common incident timeline" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pipeline" className="px-5 py-24 md:px-10 md:py-36 lg:px-16">
        <div className="mx-auto max-w-[1380px]">
          <SectionLabel index="03" text="Working pipeline" />
          <div className="mt-16 grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
            <div data-reveal className="reveal lg:sticky lg:top-28 lg:self-start">
              <h2 className="text-balance text-[clamp(2.5rem,4.5vw,4.8rem)] font-medium leading-[1] tracking-[-.05em]">How it works</h2>
              <p className="mt-7 max-w-[570px] text-lg leading-8 text-black/58">The current prototype proves spatial alignment and rendering. The finished pipeline adds clock synchronization and dynamic object tracking so the reconstructed scene can be explored at any moment in the accident.</p>
              <div className="mt-9 flex items-center gap-2 border-l-2 border-[#d71920] pl-4 text-xs font-semibold"><Code2 className="h-4 w-4 text-[#d71920]" /> Uses existing Open3D algorithms; no custom model training</div>
            </div>
            <div className="space-y-4">
              {steps.map((step, index) => <PipelineStep key={step.number} {...step} delay={index * 80} />)}
            </div>
          </div>
          <Architecture />
        </div>
      </section>

      <section id="outcome" className="bg-[#d71920] px-5 py-24 text-white md:px-10 md:py-36 lg:px-16">
        <div className="mx-auto max-w-[1380px]">
          <SectionLabel index="04" text="Prototype outcome" light />
          <div className="mt-16 grid gap-12 lg:grid-cols-[1.3fr_.7fr] lg:gap-24">
            <h2 data-reveal className="reveal text-balance text-[clamp(2.8rem,5.5vw,5.8rem)] font-medium leading-[.96] tracking-[-.055em]">The room test proves the spatial foundation.</h2>
            <div data-reveal className="reveal flex flex-col justify-end">
              <p className="text-lg leading-8 text-white/78">The three recordings were captured separately and had no shared ARKit origin. Aligning them from overlap alone demonstrates the core capability a multi-dashcam system needs: placing independent views into one space.</p>
              <div className="mt-8 space-y-4 text-sm font-medium">
                <OutcomeLine text="Main room used as the spatial anchor" />
                <OutcomeLine text="Hallway registered at 0.217 overlap fitness" />
                <OutcomeLine text="Room A registered at 0.398 overlap fitness" />
                <OutcomeLine text="Merged output rendered interactively above" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 md:px-10 md:py-36 lg:px-16">
        <div className="mx-auto max-w-[1380px]">
          <SectionLabel index="05" text="The iPhone is the dashcam" />
          <div className="mt-16 grid items-start gap-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-24">
            <div data-reveal className="reveal">
              <h2 className="text-balance text-[clamp(2.7rem,4.8vw,5rem)] font-medium leading-[1] tracking-[-.05em]">No separate camera to install. Mount the iPhone and it records the road.</h2>
              <p className="mt-8 max-w-[720px] text-xl leading-9 text-black/58">The phone is not a remote control for another dashcam—it is the LiDAR dashcam. Mounted with its rear cameras facing the road and connected to power, the iPhone captures video, depth, pose, and time for the entire trip.</p>
              <p className="mt-6 max-w-[720px] text-base leading-7 text-black/52">This fits naturally beside Drive Safe &amp; Save. That program already uses the State Farm app, smartphone sensors and location, and a Bluetooth beacon assigned to the vehicle to recognize and record trips automatically. Scene Capture would be a separate, opt-in mode that uses the same trip start signal to begin a rolling camera and LiDAR recording.</p>

              <div className="mt-10 border-y border-black/10">
                <ComparisonRow label="Trip detection" current="Beacon + phone motion" proposed="Same automatic trigger" />
                <ComparisonRow label="Phone input" current="Location + driving sensors" proposed="Video + LiDAR + camera pose" />
                <ComparisonRow label="Purpose" current="Driving feedback and savings" proposed="Accident scene reconstruction" />
              </div>

              <p className="mt-6 max-w-[700px] text-sm leading-6 text-black/45">Scene Capture is a prototype concept, not a current Drive Safe &amp; Save feature. It would require explicit consent, clear retention controls, safe mounting, power management, redaction, encryption, and review before use in a claim.</p>
              <a href="https://www.statefarm.com/customer-care/download-mobile-apps/drive-safe-and-save-mobile" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-[#b5121b] hover:text-[#d71920]">How Drive Safe &amp; Save works today <ArrowRight className="h-4 w-4" /></a>
            </div>
            <DriveSafeModeMockup />
          </div>

          <div className="mt-28 grid gap-12 border-t border-black/10 pt-16 lg:grid-cols-2 lg:gap-24">
            <h2 data-reveal className="reveal text-balance text-[clamp(2.4rem,4vw,4.2rem)] font-medium leading-[1] tracking-[-.05em]">An accident scene organized by time</h2>
            <div data-reveal className="reveal"><p className="text-xl leading-9 text-black/58">The finished experience is not just a static model. A timeline controls the reconstructed event: vehicles move through the scene, available camera coverage changes, and the investigator can pause before, during, or after impact and walk to any useful viewpoint.</p><a href="#reconstruction" className="mt-9 inline-flex items-center gap-3 text-sm font-semibold text-[#b5121b] hover:text-[#d71920]">Return to the live scene <ArrowRight className="h-4 w-4" /></a></div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 bg-[#f6f5f2] px-5 py-10 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1380px] flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div><StateFarmMark /><p className="mt-4 max-w-[430px] text-xs leading-5 text-black/45">Independent product prototype exploring spatial capture for claims. State Farm trademarks are the property of State Farm Mutual Automobile Insurance Company.</p></div>
          <div className="text-xs font-semibold uppercase tracking-[.14em] text-black/40">iPhone LiDAR · Open3D · Gaussian splats · React</div>
        </div>
      </footer>
    </main>
  )
}

function Navigation({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (open: boolean) => void }) {
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-md">
    <div className="mx-auto flex h-[74px] max-w-[1510px] items-center justify-between px-5 md:px-10">
      <a href="#" aria-label="Home"><StateFarmMark /></a>
      <nav className="hidden items-center gap-8 text-xs font-semibold md:flex">
        <a className="nav-link" href="#prototype">Concept</a><a className="nav-link" href="#capture">Capture</a><a className="nav-link" href="#pipeline">Pipeline</a><a className="nav-link" href="#outcome">Outcome</a>
        <a href="#reconstruction" className="bg-[#d71920] px-5 py-2.5 text-white transition hover:bg-[#b5121b]">View 3D scene</a>
      </nav>
      <button className="grid h-10 w-10 place-items-center rounded-full border border-black/10 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
    </div>
    {menuOpen && <nav className="border-t border-black/10 bg-white p-5 text-sm font-semibold md:hidden"><div className="flex flex-col gap-4"><a href="#prototype" onClick={() => setMenuOpen(false)}>Concept</a><a href="#capture" onClick={() => setMenuOpen(false)}>Capture</a><a href="#pipeline" onClick={() => setMenuOpen(false)}>Pipeline</a><a href="#reconstruction" onClick={() => setMenuOpen(false)}>View 3D scene</a></div></nav>}
  </header>
}

function SplatViewer() {
  const rootRef = useRef<HTMLDivElement>(null)
  const viewerRef = useRef<any>(null)
  const guidedRef = useRef<ReturnType<typeof installGuidedControls> | null>(null)
  const timelineRef = useRef<ReturnType<typeof installDynamicTimeline> | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<ViewerStatus>('idle')
  const [progress, setProgress] = useState(0)

  const destroy = useCallback(async () => {
    const viewer = viewerRef.current
    if (!viewer) return
    viewerRef.current = null
    guidedRef.current?.dispose(); guidedRef.current = null
    timelineRef.current?.dispose(); timelineRef.current = null
    const renderer = viewer.renderer
    viewer.usingExternalRenderer = true
    try { await viewer.dispose() } finally { renderer?.dispose?.(); renderer?.domElement?.remove?.() }
  }, [])

  const load = useCallback(async () => {
    if (!rootRef.current || viewerRef.current || status === 'loading') return
    setStatus('loading'); setProgress(12)
    try {
      const viewer = new GaussianSplats3D.Viewer({
        rootElement: rootRef.current,
        cameraUp: [0, -1, -0.6],
        initialCameraPosition: [1, -4, 6],
        initialCameraLookAt: [0, 0, 0],
        selfDrivenMode: true,
        dynamicScene: true,
        useBuiltInControls: !guidedMode,
        sphericalHarmonicsDegree: 0,
        sharedMemoryForWorkers: false,
        sceneRevealMode: GaussianSplats3D.SceneRevealMode.Gradual,
        antialiased: true,
      })
      viewerRef.current = viewer
      setProgress(35)
      await viewer.addSplatScene(runtimeScene, {
        format: GaussianSplats3D.SceneFormat.Ply, progressiveLoad: true, showLoadingUI: false,
        // ARKit and the web renderer use opposite vertical conventions for
        // this capture, so turn the merged reconstruction over on the X axis.
        position: [0, 0, 0], rotation: [1, 0, 0, 0], scale: [1, 1, 1],
      })
      ;(viewer.renderer as any)?.setClearColor?.(0xbeb9b0, 1)
      if (guidedMode) {
        if (viewer.controls) (viewer.controls as any).enabled = false
        if ((viewer as any).perspectiveControls) (viewer as any).perspectiveControls.enabled = false
        if ((viewer as any).orthographicControls) (viewer as any).orthographicControls.enabled = false
        const response = await fetch('/runtime/camera-path.json')
        if (!response.ok) throw new Error('Could not load guided camera path')
        guidedRef.current = installGuidedControls(viewer, rootRef.current, await response.json())
        if (timelineUrl) {
          const timelineResponse = await fetch(timelineUrl)
          if (timelineResponse.ok) timelineRef.current = installDynamicTimeline(viewer, rootRef.current, await timelineResponse.json())
        }
      }
      setProgress(94); viewer.start(); setProgress(100); setStatus('ready')
    } catch (error) { console.error(error); setStatus('error'); await destroy() }
  }, [destroy, status])

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { void load(); observer.disconnect() } }, { rootMargin: '180px' })
    observer.observe(node)
    return () => observer.disconnect()
  }, [load])

  useEffect(() => () => { void destroy() }, [destroy])

  const reset = () => {
    if (guidedRef.current) return guidedRef.current.reset()
    const viewer = viewerRef.current; viewer?.camera?.position?.set(1, -4, 6); viewer?.controls?.target?.set(0, 0, 0); viewer?.controls?.update?.()
  }
  const fullscreen = () => sectionRef.current?.requestFullscreen?.()

  return <div ref={sectionRef} tabIndex={0} className={guidedMode ? "relative h-screen w-screen bg-[#beb9b0] outline-none" : "relative h-[72vh] min-h-[520px] max-h-[880px] bg-[#080808] outline-none"}>
    <div ref={rootRef} className="absolute inset-0" />
    {status !== 'ready' && <div className="absolute inset-0 z-10 grid place-items-center bg-[#0a0a0a]">
      <div className="w-[300px] text-center">
        {status === 'error' ? <><Box className="mx-auto h-8 w-8 text-[#d71920]" /><p className="mt-4 text-sm font-semibold">The scene could not be loaded.</p><button onClick={() => { setStatus('idle'); void load() }} className="mt-5 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-black">Try again</button></> : <><div className="scan-loader mx-auto"><ScanLine className="h-7 w-7 text-[#d71920]" /></div><p className="mt-5 text-sm font-semibold">Loading the merged scene</p><p className="mt-2 text-xs text-white/45">797,928 Gaussians · this may take a moment</p><div className="mt-5 h-1 overflow-hidden rounded-full bg-white/10"><div className="h-full bg-[#d71920] transition-all duration-700" style={{ width: `${progress}%` }} /></div></>}
      </div>
    </div>}
    {status === 'ready' && <>
      <div className="pointer-events-none absolute left-5 top-5 rounded-xl border border-white/10 bg-black/65 px-4 py-3 backdrop-blur md:left-7 md:top-7"><p className="text-[10px] font-semibold uppercase tracking-[.15em] text-white/45">Interactive scene</p><p className="mt-1.5 text-sm font-medium">{guidedMode ? 'Drag to look · WASD to move · Ctrl up / Space down · boundary locked' : 'Drag to orbit · scroll to zoom'}</p></div>
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/10 bg-black/75 p-1.5 backdrop-blur">
        <ViewerButton label="Recorded view" onClick={() => guidedRef.current?.nextRecordedView?.()}><Camera className="h-4 w-4" /></ViewerButton><ViewerButton label="Reset" onClick={reset}><RotateCcw className="h-4 w-4" /></ViewerButton><ViewerButton label="Fullscreen" onClick={fullscreen}><Maximize className="h-4 w-4" /></ViewerButton>
      </div>
    </>}
  </div>
}

function PhoneMockup() {
  return <div data-reveal className="reveal mx-auto w-full max-w-[440px]">
    <div className="phone-shell relative mx-auto aspect-[.52] w-[78%] max-w-[330px] overflow-hidden rounded-[54px] border-[9px] border-[#171717] bg-[#222] shadow-2xl">
      <div className="absolute left-1/2 top-2 z-20 h-7 w-24 -translate-x-1/2 rounded-full bg-black" />
      <div className="capture-scene absolute inset-0">
        <div className="absolute inset-0 opacity-55"><div className="lidar-lines" /></div>
        <div className="absolute inset-x-0 top-0 flex items-center gap-3 border-b border-white/15 bg-white/95 px-4 pb-3 pt-12 text-black"><div className="grid h-8 w-8 place-items-center rounded-full bg-[#d71920] text-[9px] font-bold text-white">SF</div><div><p className="text-xs font-bold tracking-wider text-[#d71920]">STATE FARM</p><p className="text-[10px] text-black/55">Scene Capture</p></div><div className="ml-auto flex items-center gap-1.5 text-[10px] font-semibold"><span className="h-2 w-2 rounded-full bg-[#34a464]" /> Ready</div></div>
        <div className="absolute bottom-0 inset-x-0 rounded-t-[28px] bg-white px-5 pb-8 pt-6 text-black">
          <p className="text-lg font-bold">Ready to scan</p><p className="mt-1 text-[11px] text-black/50">Record a complete view of the surrounding area.</p>
          <div className="mt-5 flex h-12 items-center justify-center gap-2 rounded-xl bg-[#d71920] text-sm font-semibold text-white"><CircleDot className="h-5 w-5" /> Start Capture</div>
          <div className="mt-3 grid grid-cols-2 gap-2"><div className="phone-action"><Box className="h-4 w-4" /> Preview</div><div className="phone-action"><Upload className="h-4 w-4" /> Export</div></div>
        </div>
      </div>
    </div>
    <p className="mt-7 text-center text-xs font-medium text-black/42">SwiftUI capture interface · running on iPhone Pro</p>
  </div>
}

function DriveSafeModeMockup() {
  return <div data-reveal className="reveal mx-auto w-full max-w-[430px] lg:pt-4">
    <div className="border border-black/15 bg-[#f7f7f7] p-3 shadow-[12px_14px_0_0_#eceae6]">
      <div className="bg-white px-5 pb-5 pt-6">
        <div className="flex items-center justify-between border-b border-black/10 pb-5">
          <StateFarmMark />
          <div className="grid h-9 w-9 place-items-center rounded-full bg-[#f2f2f2] text-xs font-semibold">EA</div>
        </div>
        <div className="pt-6">
          <p className="text-xs font-semibold uppercase tracking-[.14em] text-black/42">Safe &amp; Save</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight">Your vehicle</h3>

          <div className="mt-5 border border-black/10 p-4">
            <div className="flex items-center justify-between"><div><p className="text-sm font-semibold">2024 Vehicle</p><p className="mt-1 text-xs text-black/45">Beacon connected</p></div><span className="h-2.5 w-2.5 rounded-full bg-[#21945a]" /></div>
          </div>

          <div className="mt-4 border-2 border-[#d71920] bg-[#fffafa] p-5">
            <div className="flex items-start justify-between gap-5">
              <div className="grid h-10 w-10 shrink-0 place-items-center bg-[#d71920] text-white"><Camera className="h-5 w-5" /></div>
              <span className="bg-[#f3dddd] px-2 py-1 text-[9px] font-bold uppercase tracking-[.12em] text-[#a90f18]">Concept</span>
            </div>
            <h4 className="mt-5 text-lg font-semibold">Scene Capture</h4>
            <p className="mt-2 text-sm leading-6 text-black/55">Use this iPhone as a LiDAR dashcam whenever a trip is active.</p>

            <div className="mt-5 space-y-3 border-y border-black/10 py-4 text-xs">
              <div className="flex items-center justify-between"><span className="text-black/52">Trip detection</span><span className="font-semibold">Automatic</span></div>
              <div className="flex items-center justify-between"><span className="text-black/52">Rolling history</span><span className="font-semibold">Last 10 minutes</span></div>
              <div className="flex items-center justify-between"><span className="text-black/52">Upload</span><span className="font-semibold">Only after an incident</span></div>
            </div>

            <button className="mt-5 flex w-full items-center justify-center gap-2 bg-[#d71920] px-4 py-3 text-sm font-semibold text-white"><ScanLine className="h-4 w-4" /> Set up Scene Capture</button>
          </div>
          <p className="mt-4 text-center text-[10px] leading-4 text-black/38">Proposed placement inside the existing State Farm app</p>
        </div>
      </div>
    </div>
  </div>
}

function ComparisonRow({ label, current, proposed }: { label: string; current: string; proposed: string }) {
  return <div className="grid gap-3 border-b border-black/10 py-5 last:border-b-0 sm:grid-cols-[.65fr_1fr_1fr] sm:items-center">
    <p className="text-xs font-semibold uppercase tracking-[.12em] text-black/40">{label}</p>
    <div><p className="text-[10px] font-semibold uppercase tracking-[.1em] text-black/35">Drive Safe &amp; Save today</p><p className="mt-1.5 text-sm font-medium">{current}</p></div>
    <div><p className="text-[10px] font-semibold uppercase tracking-[.1em] text-[#b5121b]">Scene Capture proposal</p><p className="mt-1.5 text-sm font-medium">{proposed}</p></div>
  </div>
}

function Architecture() {
  const items = [{ icon: Smartphone, label: 'iPhone LiDAR', sub: 'Swift + ARKit' }, { icon: Download, label: 'Capture ZIP', sub: 'Depth + RGB + poses' }, { icon: Cloud, label: 'Docker worker', sub: 'Open3D registration' }, { icon: Box, label: 'Gaussian PLY', sub: 'Merged metric scene' }, { icon: MousePointer2, label: 'Web viewer', sub: 'React + WebGL' }]
  return <div data-reveal className="reveal mt-24 border border-black/10 bg-[#171717] p-6 text-white md:p-10">
    <div className="flex items-center justify-between"><p className="text-xs font-semibold uppercase tracking-[.15em] text-white/45">Prototype architecture</p><ShieldCheck className="h-5 w-5 text-white/35" /></div>
    <div className="mt-10 grid gap-4 md:grid-cols-5">
      {items.map(({ icon: Icon, label, sub }, index) => <div key={label} className="relative border border-white/10 bg-white/[.04] p-5"><Icon className="h-5 w-5 text-[#ef3940]" /><p className="mt-8 text-sm font-semibold">{label}</p><p className="mt-1 text-[11px] text-white/45">{sub}</p>{index < items.length - 1 && <ArrowRight className="absolute -right-5 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-white/25 md:block" />}</div>)}
    </div>
  </div>
}

function SectionLabel({ index, text, light = false }: { index: string; text: string; light?: boolean }) { return <div className={`flex items-center gap-4 border-b pb-4 text-[11px] font-semibold uppercase tracking-[.16em] ${light ? 'border-white/25 text-white/65' : 'border-black/10 text-black/45'}`}><span className={light ? 'text-white' : 'text-[#d71920]'}>{index}</span><span>{text}</span></div> }
function Stat({ value, label }: { value: string; label: string }) { return <div data-reveal className="reveal border-b border-black/10 py-8 sm:border-b-0 sm:border-r sm:px-8 sm:first:pl-0 sm:last:border-r-0"><p className="text-[clamp(2.4rem,4vw,4.7rem)] font-medium tracking-[-.055em]">{value}</p><p className="mt-2 text-xs font-semibold uppercase tracking-[.13em] text-black/42">{label}</p></div> }
function Chip({ children }: { children: React.ReactNode }) { return <span className="border border-white/10 bg-white/[.06] px-3 py-1.5">{children}</span> }
function ViewerButton({ label, children, onClick }: { label: string; children: React.ReactNode; onClick?: () => void }) { return <button onClick={onClick} className="flex h-10 items-center gap-2 rounded-full px-3 text-xs font-medium text-white/70 transition hover:bg-white/10 hover:text-white" aria-label={label}>{children}<span className="hidden sm:inline">{label}</span></button> }
function FeatureLine({ icon: Icon, title, text }: { icon: React.ElementType; title: string; text: string }) { return <div className="grid grid-cols-[auto_1fr] gap-4 border-b border-black/10 py-5"><div className="grid h-10 w-10 place-items-center rounded-full bg-[#f4f3f1]"><Icon className="h-4 w-4 text-[#d71920]" /></div><div><p className="text-sm font-semibold">{title}</p><p className="mt-1 text-sm text-black/48">{text}</p></div></div> }
function PipelineStep({ number, icon: Icon, title, text, delay }: { number: string; icon: React.ElementType; title: string; text: string; delay: number }) { return <article data-reveal className="reveal group grid gap-6 border-t border-black/15 bg-white p-6 transition duration-300 hover:border-[#d71920] md:grid-cols-[60px_1fr] md:p-8" style={{ transitionDelay: `${delay}ms` }}><div className="flex items-center justify-between md:block"><span className="text-xs font-semibold text-[#d71920]">{number}</span><div className="mt-0 grid h-11 w-11 place-items-center bg-[#f4f3f1] md:mt-8"><Icon className="h-5 w-5" /></div></div><div><h3 className="text-2xl font-medium tracking-tight">{title}</h3><p className="mt-3 max-w-[600px] text-base leading-7 text-black/52">{text}</p></div></article> }
function OutcomeLine({ text }: { text: string }) { return <div className="flex items-center gap-3"><span className="grid h-5 w-5 place-items-center rounded-full bg-white text-[#d71920]"><Check className="h-3 w-3 stroke-[3]" /></span><span>{text}</span></div> }

export default App
