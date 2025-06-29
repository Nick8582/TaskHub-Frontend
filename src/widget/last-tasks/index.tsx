import type { FC } from "react"

import { MockTasks } from "@/src/data/tasks.data"
import { Card } from "@/src/shared/ui/card"
import { Task } from "@/src/shared/ui/task"
import { cn } from "@/src/shared/utils/cn"

interface LastTasksProps {
  className?: string
}

export const LastTasks: FC<LastTasksProps> = ({ className }) => {
  return (
    <div className={cn(className, "flex flex-col gap-3")}>
      <h2 className="text-gray-text text-2xl font-bold">
        Last Tasks{" "}
        <span className="text-lg opacity-50">({MockTasks.length})</span>
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {MockTasks.length ? (
          MockTasks.map(task => <Task task={task} key={task.id} />)
        ) : (
          <Card color="dashboard" className="col-span-3 py-6">
            <p className="text-gray-text text-center text-lg font-bold">
              No tasks available
            </p>
          </Card>
        )}
      </div>
    </div>
  )
}
