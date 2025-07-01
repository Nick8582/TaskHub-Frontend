"use client"

import { useEffect, useState, type FC } from "react"

import { CircleCheckBig } from "lucide-react"

interface ProgressBarProps {
  progress: number
}

export const ProgressBar: FC<ProgressBarProps> = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedProgress(progress)
    }, 100)
    return () => clearTimeout(timeout)
  }, [progress])

  const getColorClass = () => {
    if (progress === 100) return "bg-status-complete"
    if (progress >= 70) return "bg-status-inprogress"
    if (progress >= 40) return "bg-status-scheduled"
    return "bg-status-overdue"
  }

  return (
    <div className="bg-primary/20 relative mb-3 h-10 w-full overflow-hidden rounded-full">
      <div
        className={`${getColorClass()} duration-3000 flex h-full items-center justify-center rounded-3xl bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.1)_0,rgba(255,255,255,0.1)_10px,transparent_10px,transparent_20px)] text-sm font-semibold text-white transition-all ease-out`}
        style={{ width: `${animatedProgress}%` }}
      >
        {progress === 100 ? (
          <span className="flex items-center gap-1">
            <CircleCheckBig className="h-4 w-4" />
            Done
          </span>
        ) : (
          progress !== 0 && `${progress}%`
        )}
      </div>
      {progress === 0 && (
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center text-sm font-semibold">
          Incomplete task
        </div>
      )}
    </div>
  )
}
