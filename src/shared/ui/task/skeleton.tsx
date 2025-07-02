import type { FC } from "react"

export const TaskSkeleton: FC = () => (
  <div className="bg-gray-dashboard h-full rounded-lg p-4 shadow-sm">
    <div className="animate-pulse space-y-3">
      <div className="flex items-start gap-3">
        <div className="bg-gray-sidebar h-10 w-10 rounded-full" />
        <div className="flex flex-auto flex-col gap-2">
          <div className="bg-gray-sidebar h-10 w-full rounded"></div>
          <div className="bg-gray-sidebar h-4 w-1/3 rounded"></div>
        </div>
        <div className="flex min-w-20 items-center justify-end -space-x-2">
          <div className="bg-gray-sidebar h-8 w-8 rounded-full"></div>
          <div className="bg-gray-sidebar h-8 w-8 rounded-full"></div>
          <div className="bg-gray-sidebar h-8 w-8 rounded-full"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="bg-gray-sidebar h-10 w-full rounded-full"></div>
      </div>
      <div className="flex justify-between gap-2 pt-2">
        <div className="flex items-center gap-2">
          <div className="bg-gray-sidebar h-5 w-10 rounded-2xl"></div>
          <div className="bg-gray-sidebar h-5 w-10 rounded-2xl"></div>
          <div className="bg-gray-sidebar h-5 w-10 rounded-2xl"></div>
        </div>
        <div className="flex gap-2">
          <div className="bg-gray-sidebar h-10 w-10 rounded-full"></div>
          <div className="bg-gray-sidebar h-10 w-10 rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
)
