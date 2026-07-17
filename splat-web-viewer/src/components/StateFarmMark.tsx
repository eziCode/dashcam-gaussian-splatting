export function StateFarmMark({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/state-farm-logo.svg"
        alt="State Farm"
        className="h-[26px] w-auto"
      />
    </div>
  )
}
