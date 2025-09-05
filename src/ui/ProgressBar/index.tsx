import { useMemo, type FC } from 'react'

import clsx from 'clsx'
import { CheckCircle } from 'lucide-react'

interface ProgressBarProps {
  progress: number
}

export const ProgressBar: FC<ProgressBarProps> = ({ progress }) => {
  const clamped = Math.min(100, Math.max(0, progress))

  const progressText = useMemo(() => {
    if (clamped >= 100)
      return (
        <>
          <CheckCircle className='mr-1.5' />
          Done
        </>
      )
    return `${clamped}% `
  }, [clamped])

  const colorProgressBar = useMemo(() => {
    if (clamped >= 100) return 'bg-emerald-500'
    if (clamped >= 75) return 'bg-amber-400'
    if (clamped >= 50) return 'bg-primary'
    if (clamped >= 25) return 'bg-rose-400'
    return 'bg-neutral-300'
  }, [clamped])

  return (
    <div className='relative h-12 w-full overflow-hidden rounded-full bg-primary/15'>
      <div
        className={clsx(
          'animate-stripes flex h-full items-center justify-center rounded-full bg-[length:56px_56px] font-medium text-white',
          colorProgressBar
        )}
        style={{
          width: `${clamped}%`,
          backgroundImage:
            'repeating-linear-gradient(45deg, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 20px, transparent 20px, transparent 40px)',
        }}
      >
        {progressText}
      </div>
    </div>
  )
}
