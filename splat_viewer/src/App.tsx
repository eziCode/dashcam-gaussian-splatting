import { useCallback, useEffect, useRef, useState } from 'react'
import * as GaussianSplats3D from '@mkkellogg/gaussian-splats-3d'
import { Aperture, Box, Check, ChevronDown, Focus, HelpCircle, Info, Maximize, Rotate3D, RotateCcw, ShieldCheck, Sparkles, Upload, X, ZoomIn } from 'lucide-react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as Tooltip from '@radix-ui/react-tooltip'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'
import { StateFarmMark } from '@/components/StateFarmMark'

type Status = 'empty' | 'loading' | 'ready' | 'error'

const formats = ['.ply', '.splat', '.ksplat', '.spz']

function App() {
  const mountRef = useRef<HTMLDivElement>(null)
  const viewerRef = useRef<any>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const objectUrlRef = useRef<string | null>(null)
  const [status, setStatus] = useState<Status>('empty')
  const [progress, setProgress] = useState(0)
  const [fileName, setFileName] = useState('')
  const [fileSize, setFileSize] = useState('')
  const [error, setError] = useState('')
  const [dragging, setDragging] = useState(false)
  const [splatScale, setSplatScale] = useState([100])
  const [sceneRotation, setSceneRotation] = useState({ yaw: 0, pitch: 0, roll: 0 })
  const [showPanel, setShowPanel] = useState(true)

  const destroyViewer = useCallback(async () => {
    const viewer = viewerRef.current
    if (!viewer) return
    viewerRef.current = null

    // gaussian-splats-3d assumes a supplied rootElement is a direct child of
    // document.body during dispose(). Marking the renderer as external avoids
    // that invalid removal; we then release the captured renderer ourselves.
    const renderer = viewer.renderer
    viewer.usingExternalRenderer = true
    try {
      await viewer.dispose()
    } finally {
      renderer?.dispose?.()
      renderer?.domElement?.remove?.()
    }
  }, [])

  useEffect(() => () => {
    void destroyViewer()
    if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current)
  }, [destroyViewer])

  useEffect(() => {
    if (status !== 'ready') return

    const pressed = new Set<string>()
    let frame = 0
    let lastTime = performance.now()

    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null
      if (target?.matches('input, textarea, select, button, [contenteditable="true"]')) return
      if (event.code === 'ShiftLeft') {
        pressed.add('shiftleft')
        return
      }
      const key = event.key.toLowerCase()
      if (['w', 'a', 's', 'd'].includes(key)) {
        event.preventDefault()
        pressed.add(key)
      }
    }
    const onKeyUp = (event: KeyboardEvent) => {
      if (event.code === 'ShiftLeft') pressed.delete('shiftleft')
      pressed.delete(event.key.toLowerCase())
    }
    const clearKeys = () => pressed.clear()

    const moveCamera = (time: number) => {
      const viewer = viewerRef.current
      const camera = viewer?.camera
      const target = viewer?.controls?.target
      const deltaSeconds = Math.min((time - lastTime) / 1000, 0.05)
      lastTime = time

      if (camera && target && pressed.size) {
        const dx = target.x - camera.position.x
        const dz = target.z - camera.position.z
        const length = Math.hypot(dx, dz) || 1
        const forwardX = dx / length
        const forwardZ = dz / length
        const rightX = forwardZ
        const rightZ = -forwardX
        const forwardAmount = (pressed.has('w') ? 1 : 0) - (pressed.has('s') ? 1 : 0)
        const rightAmount = (pressed.has('d') ? 1 : 0) - (pressed.has('a') ? 1 : 0)
        const diagonalScale = forwardAmount && rightAmount ? Math.SQRT1_2 : 1
        const speedMultiplier = pressed.has('shiftleft') ? 3 : 1
        const distance = 3.5 * speedMultiplier * deltaSeconds * diagonalScale
        const moveX = (forwardX * forwardAmount + rightX * rightAmount) * distance
        const moveZ = (forwardZ * forwardAmount + rightZ * rightAmount) * distance

        camera.position.x += moveX
        camera.position.z += moveZ
        target.x += moveX
        target.z += moveZ
        viewer.controls.update()
      }
      frame = requestAnimationFrame(moveCamera)
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)
    window.addEventListener('blur', clearKeys)
    frame = requestAnimationFrame(moveCamera)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
      window.removeEventListener('blur', clearKeys)
    }
  }, [status])

  const loadScene = useCallback(async (url: string, name: string, size: string, format: number) => {
    if (!mountRef.current) return
    setStatus('loading'); setProgress(8); setError(''); setFileName(name); setFileSize(size)
    await destroyViewer()
    try {
      const viewer = new GaussianSplats3D.Viewer({
        rootElement: mountRef.current,
        cameraUp: [0, -1, -0.6],
        initialCameraPosition: [1, -4, 6],
        initialCameraLookAt: [0, 0, 0],
        selfDrivenMode: true,
        dynamicScene: true,
        useBuiltInControls: true,
        sphericalHarmonicsDegree: 2,
        sharedMemoryForWorkers: false,
        sceneRevealMode: GaussianSplats3D.SceneRevealMode.Gradual,
        antialiased: true,
      })
      viewerRef.current = viewer
      setProgress(25)
      await viewer.addSplatScene(url, {
        format,
        progressiveLoad: true,
        showLoadingUI: false,
        position: [0, 0, 0],
        rotation: [0, 0, 0, 1],
        scale: [1, 1, 1],
      })
      setProgress(94)
      viewer.start()
      setSceneRotation({ yaw: 0, pitch: 0, roll: 0 })
      setStatus('ready'); setProgress(100)
    } catch (reason) {
      console.error(reason)
      await destroyViewer()
      setStatus('error')
      setError('We couldn’t open that scene. Confirm the file is a supported Gaussian splat format.')
    }
  }, [destroyViewer])

  const handleFile = useCallback((file?: File) => {
    if (!file) return
    const ext = `.${file.name.split('.').pop()?.toLowerCase()}`
    if (!formats.includes(ext)) {
      setStatus('error'); setError(`Unsupported format. Choose ${formats.join(', ')}.`); return
    }
    if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current)
    objectUrlRef.current = URL.createObjectURL(file)
    const size = file.size > 1_000_000 ? `${(file.size / 1_000_000).toFixed(1)} MB` : `${Math.round(file.size / 1000)} KB`
    const formatByExtension: Record<string, number> = {
      '.ply': GaussianSplats3D.SceneFormat.Ply,
      '.splat': GaussianSplats3D.SceneFormat.Splat,
      '.ksplat': GaussianSplats3D.SceneFormat.KSplat,
      '.spz': GaussianSplats3D.SceneFormat.Spz,
    }
    loadScene(objectUrlRef.current, file.name, size, formatByExtension[ext])
  }, [loadScene])

  const loadDemo = () => loadScene('/demo/splat.ply', 'Dashcam reconstruction', '57 MB', GaussianSplats3D.SceneFormat.Ply)
  const resetCamera = () => {
    const viewer = viewerRef.current
    if (!viewer) return
    viewer.camera?.position?.set(1, -4, 6)
    viewer.controls?.target?.set(0, 0, 0)
    viewer.controls?.update?.()
  }
  const updateSplatScale = (value: number[]) => {
    setSplatScale(value)
    viewerRef.current?.splatMesh?.setSplatScale?.(value[0] / 100)
  }
  const updateSceneRotation = (rotation: { yaw: number; pitch: number; roll: number }) => {
    setSceneRotation(rotation)
    const scene = viewerRef.current?.splatMesh?.scenes?.[0]
    if (!scene) return
    const radians = Math.PI / 180
    scene.rotation.set(rotation.pitch * radians, rotation.yaw * radians, rotation.roll * radians)
    viewerRef.current.splatMesh.updateTransforms()
    viewerRef.current.forceRenderNextFrame?.()
  }
  const fullscreen = () => document.documentElement.requestFullscreen?.()

  return (
    <Tooltip.Provider delayDuration={250}>
      <main className="relative h-screen min-h-[650px] overflow-hidden bg-[#f7f7f7] text-neutral-950">
        <div className="absolute inset-0 z-0" ref={mountRef} />
        {status === 'ready' && <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-28 bg-white/20" />}
        {(status === 'empty' || status === 'error') && <EmptyState onBrowse={() => inputRef.current?.click()} onDemo={loadDemo} dragging={dragging} error={error} onDrop={(event) => { event.preventDefault(); setDragging(false); handleFile(event.dataTransfer.files[0]) }} onDrag={setDragging} />}
        {status === 'loading' && <LoadingState progress={progress} fileName={fileName} />}

        <header className="absolute inset-x-0 top-0 z-20 flex h-[72px] items-center justify-between border-b border-neutral-200 bg-white/95 px-5 md:px-8">
          <div className="flex items-center gap-5">
            <StateFarmMark />
            <span className="hidden h-5 w-px bg-neutral-200 sm:block" />
            <div className="hidden items-center gap-2 sm:flex"><Aperture className="h-4 w-4 text-[#ec0c21]"/><span className="text-sm font-medium text-neutral-700">Scene Studio</span><Badge className="ml-1 py-0.5 text-[10px] uppercase tracking-wider">Beta</Badge></div>
          </div>
          <div className="flex items-center gap-2">
            {status === 'ready' && <Button variant="outline" size="sm" onClick={() => inputRef.current?.click()}><Upload className="h-4 w-4"/><span className="hidden sm:inline">Open scene</span></Button>}
            <TooltipButton label="Help"><HelpCircle className="h-[18px] w-[18px]"/></TooltipButton>
            <div className="ml-1 grid h-9 w-9 place-items-center rounded-full bg-[#ec0c21] text-xs font-semibold text-white">EA</div>
          </div>
        </header>

        {status === 'ready' && <>
          <div className="absolute left-5 top-[92px] z-20 animate-fade-up rounded-xl border border-neutral-200 bg-white/95 px-4 py-3 shadow-sm md:left-8">
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500"/><span className="text-xs font-medium text-neutral-500">Scene ready</span></div>
            <h1 className="mt-2 max-w-[55vw] truncate text-lg font-medium tracking-tight">{fileName}</h1>
            <p className="mt-1 text-xs text-neutral-500">{fileSize} · WASD to move · Shift to speed up · Drag to look</p>
          </div>
          {showPanel && <aside className="absolute right-5 top-[92px] z-20 w-[280px] animate-fade-up rounded-2xl border border-neutral-200 bg-white/95 p-4 shadow-lg md:right-8">
            <div className="flex items-center justify-between"><div><p className="text-sm font-medium">Scene controls</p><p className="mt-0.5 text-xs text-neutral-500">Fine-tune your view</p></div><Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => setShowPanel(false)}><X className="h-4 w-4"/></Button></div>
            <div className="my-4 h-px bg-neutral-200"/>
            <ControlRow icon={<Sparkles/>} title="Splat size" value={`${splatScale[0]}%`}><Slider value={splatScale} onValueChange={updateSplatScale} min={50} max={150} step={1}/></ControlRow>
            <div className="my-5 h-px bg-neutral-200"/>
            <RotationControl value={sceneRotation} onChange={updateSceneRotation}/>
            <div className="mt-5 grid grid-cols-2 gap-2"><Button variant="outline" size="sm" onClick={resetCamera}><RotateCcw className="h-3.5 w-3.5"/>Reset view</Button><Button variant="outline" size="sm" onClick={fullscreen}><Maximize className="h-3.5 w-3.5"/>Fullscreen</Button></div>
          </aside>}
          <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1 rounded-2xl border border-neutral-200 bg-white/95 p-1.5 shadow-lg">
            <TooltipButton label="Orbit" active><Box className="h-[18px] w-[18px]"/></TooltipButton>
            <TooltipButton label="Reset view" onClick={resetCamera}><Focus className="h-[18px] w-[18px]"/></TooltipButton>
            <TooltipButton label="Zoom"><ZoomIn className="h-[18px] w-[18px]"/></TooltipButton>
            <span className="mx-1 h-5 w-px bg-neutral-200"/>
            <TooltipButton label="Scene info" onClick={() => setShowPanel(!showPanel)}><Info className="h-[18px] w-[18px]"/></TooltipButton>
          </div>
        </>}

        <footer className="absolute bottom-5 left-5 z-10 hidden items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[11px] text-neutral-500 md:flex md:left-8"><ShieldCheck className="h-3.5 w-3.5"/><span>Your scene stays on this device</span></footer>
        <input ref={inputRef} type="file" className="hidden" accept=".ply,.splat,.ksplat,.spz" onChange={(e) => handleFile(e.target.files?.[0])}/>
      </main>
    </Tooltip.Provider>
  )
}

function EmptyState({ onBrowse, onDemo, dragging, error, onDrop, onDrag }: { onBrowse: () => void; onDemo: () => void; dragging: boolean; error: string; onDrop: (e: React.DragEvent) => void; onDrag: (v: boolean) => void }) {
  return <div className="absolute inset-0 z-10 grid place-items-center overflow-hidden bg-[#f7f7f7] px-5 pt-16">
    <section className="relative z-10 w-full max-w-[620px] animate-fade-up text-center">
      <Badge className="mb-5 border-[#ec0c21]/20 bg-[#ec0c21]/5 text-[#c20a1b]"><span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#ec0c21]"/>3D claims visualization</Badge>
      <h1 className="text-balance text-[42px] font-medium leading-[1.06] tracking-[-.045em] text-neutral-950 md:text-[58px]">See every angle.<br/><span className="text-neutral-500">Understand the whole scene.</span></h1>
      <p className="mx-auto mt-5 max-w-[500px] text-balance text-sm leading-6 text-neutral-600 md:text-base">Explore Gaussian splat scenes with a focused, secure workspace built for clearer decisions.</p>
      <div className={`group relative mx-auto mt-8 max-w-[520px] rounded-2xl border bg-white p-2 shadow-sm transition-all duration-300 ${dragging ? 'scale-[1.01] border-[#ec0c21]' : 'border-neutral-200 hover:border-neutral-300'}`} onDragOver={(e) => { e.preventDefault(); onDrag(true) }} onDragLeave={() => onDrag(false)} onDrop={onDrop}>
        <div className="flex min-h-[108px] items-center justify-between rounded-xl border border-dashed border-neutral-300 px-5 text-left md:px-6">
          <div className="flex items-center gap-4"><div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-neutral-100"><Upload className="h-5 w-5 text-neutral-600"/></div><div><p className="text-sm font-medium">Drop a splat scene here</p><p className="mt-1 text-xs text-neutral-500">PLY, SPLAT, KSPLAT or SPZ</p></div></div>
          <Button variant="brand" onClick={onBrowse}>Choose file</Button>
        </div>
      </div>
      {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
      <div className="mt-5 flex items-center justify-center gap-3 text-xs text-neutral-500"><span>No scene handy?</span><button className="inline-flex items-center gap-1.5 font-medium text-[#c20a1b] transition hover:text-[#ec0c21]" onClick={onDemo}>Explore the demo <span aria-hidden>→</span></button></div>
    </section>
  </div>
}

function LoadingState({ progress, fileName }: { progress: number; fileName: string }) {
  return <div className="absolute inset-0 z-10 grid place-items-center bg-[#f7f7f7]"><div className="w-[280px] text-center"><div className="mx-auto mb-5 grid h-12 w-12 place-items-center rounded-2xl border border-neutral-200 bg-white"><Aperture className="h-5 w-5 animate-spin text-[#ec0c21]"/></div><p className="truncate text-sm font-medium">Preparing {fileName}</p><p className="mt-1.5 text-xs text-neutral-500">Optimizing the scene for your device</p><div className="mt-5 h-1 overflow-hidden rounded-full bg-neutral-200"><div className="h-full rounded-full bg-[#ec0c21] transition-all duration-500" style={{ width: `${progress}%` }}/></div></div></div>
}

function TooltipButton({ label, children, onClick, active }: { label: string; children: React.ReactNode; onClick?: () => void; active?: boolean }) {
  return <Tooltip.Root><Tooltip.Trigger asChild><Button aria-label={label} size="icon" variant="ghost" onClick={onClick} className={active ? 'bg-neutral-100 text-neutral-950' : ''}>{children}</Button></Tooltip.Trigger><Tooltip.Portal><Tooltip.Content sideOffset={8} className="z-50 rounded-md bg-neutral-900 px-2 py-1 text-xs font-medium text-white shadow-lg">{label}</Tooltip.Content></Tooltip.Portal></Tooltip.Root>
}

function ControlRow({ icon, title, value, children }: { icon: React.ReactNode; title: string; value: string; children: React.ReactNode }) {
  return <div><div className="mb-3 flex items-center justify-between"><div className="flex items-center gap-2 text-xs text-neutral-600"><span className="[&>svg]:h-3.5 [&>svg]:w-3.5">{icon}</span>{title}</div><span className="text-[11px] tabular-nums text-neutral-500">{value}</span></div>{children}</div>
}

function RotationControl({ value, onChange }: { value: { yaw: number; pitch: number; roll: number }; onChange: (value: { yaw: number; pitch: number; roll: number }) => void }) {
  const dragRef = useRef<{ x: number; y: number; yaw: number; pitch: number } | null>(null)
  const updateAxis = (axis: 'yaw' | 'pitch' | 'roll', degrees: number) => onChange({ ...value, [axis]: degrees })

  return <div>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 text-xs font-medium text-neutral-700"><Rotate3D className="h-3.5 w-3.5"/>Scene orientation</div>
      <button className="text-[11px] font-medium text-[#c20a1b] hover:text-[#ec0c21]" onClick={() => onChange({ yaw: 0, pitch: 0, roll: 0 })}>Reset</button>
    </div>
    <div className="mt-3 flex items-center gap-4">
      <div
        className="rotation-orb relative h-[88px] w-[88px] shrink-0 cursor-grab touch-none rounded-full border border-neutral-300 bg-neutral-50 active:cursor-grabbing"
        role="slider"
        aria-label="Scene yaw and pitch"
        tabIndex={0}
        onPointerDown={(event) => {
          event.currentTarget.setPointerCapture(event.pointerId)
          dragRef.current = { x: event.clientX, y: event.clientY, yaw: value.yaw, pitch: value.pitch }
        }}
        onPointerMove={(event) => {
          const start = dragRef.current
          if (!start) return
          onChange({ ...value, yaw: start.yaw + (event.clientX - start.x) * 0.8, pitch: Math.max(-180, Math.min(180, start.pitch - (event.clientY - start.y) * 0.8)) })
        }}
        onPointerUp={() => { dragRef.current = null }}
        onPointerCancel={() => { dragRef.current = null }}
      >
        <span className="absolute inset-[13px] rounded-full border border-[#ec0c21]/35" style={{ transform: `rotate(${value.roll}deg)` }}/>
        <span className="absolute left-1/2 top-[8px] h-[72px] w-[34px] -translate-x-1/2 rounded-[50%] border border-neutral-300" style={{ transform: `translateX(-50%) rotate(${value.yaw}deg)` }}/>
        <span className="absolute left-[8px] top-1/2 h-[34px] w-[72px] -translate-y-1/2 rounded-[50%] border border-neutral-300" style={{ transform: `translateY(-50%) rotate(${value.pitch}deg)` }}/>
        <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ec0c21]"/>
      </div>
      <div className="min-w-0 flex-1 space-y-3">
        <AxisSlider label="Yaw" value={value.yaw} onChange={(degrees) => updateAxis('yaw', degrees)}/>
        <AxisSlider label="Pitch" value={value.pitch} onChange={(degrees) => updateAxis('pitch', degrees)}/>
        <AxisSlider label="Roll" value={value.roll} onChange={(degrees) => updateAxis('roll', degrees)}/>
      </div>
    </div>
    <p className="mt-2 text-[10px] leading-4 text-neutral-500">Drag the orb to tilt and turn the scene.</p>
  </div>
}

function AxisSlider({ label, value, onChange }: { label: string; value: number; onChange: (value: number) => void }) {
  const normalized = Math.round(((value + 180) % 360 + 360) % 360 - 180)
  return <div><div className="mb-1.5 flex justify-between text-[10px] text-neutral-500"><span>{label}</span><span className="tabular-nums">{normalized}°</span></div><Slider value={[normalized]} onValueChange={([degrees]) => onChange(degrees)} min={-180} max={180} step={1}/></div>
}

export default App
