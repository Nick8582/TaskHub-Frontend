import type { FC } from "react"

export const TaskSkeleton: FC = () => (
  <div className="h-full rounded-lg bg-white p-4 shadow-sm">
    <div className="animate-pulse space-y-3">
      <div className="h-6 w-3/4 rounded bg-gray-200"></div>
      <div className="h-4 w-1/2 rounded bg-gray-200"></div>
      <div className="space-y-2">
        <div className="h-3 w-full rounded bg-gray-200"></div>
        <div className="h-3 w-5/6 rounded bg-gray-200"></div>
      </div>
      <div className="flex gap-2 pt-2">
        <div className="h-6 w-6 rounded-full bg-gray-200"></div>
        <div className="h-6 w-6 rounded-full bg-gray-200"></div>
      </div>
    </div>
  </div>
)
