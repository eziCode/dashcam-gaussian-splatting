export function StateFarmMark({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="https://static1.st8fm.com/en_US/dxl-1x/prod/css/images/header/state-farm-logo-4.svg"
        alt="State Farm"
        className="h-[26px] w-auto"
      />
    </div>
  )
}
