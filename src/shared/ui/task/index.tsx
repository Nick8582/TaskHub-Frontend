import type { FC } from "react"
import Image from "next/image"

import { Folder, Link, MessageCircleMore, Pencil, Plus } from "lucide-react"

import type { ITask } from "@/src/shared/types/task.types"
import { Card } from "@/src/shared/ui/card"
import { ProgressBar } from "@/src/shared/ui/progress"

interface TaskProps {
  task: ITask
}

export const Task: FC<TaskProps> = ({ task }) => {
  const completedCount = task.subTasks.filter(t => t.isCompleted).length
  const totalCount = task.subTasks.length
  const progress = Math.round((completedCount / totalCount) * 100)

  return (
    <Card color="dashboard">
      <div className="mb-1 flex items-center justify-between gap-1.5">
        <div className="bg-primary-light/10 text-primary mr-2 flex h-10 w-10 items-center justify-center rounded-full p-1">
          <task.icon />
        </div>
        <span className="text-lg/tight font-bold">{task.title}</span>
        <div className="flex items-center -space-x-2">
          {task.users.map(user => (
            <div key={user.id} className="bg-hard-white rounded-full p-0.5">
              <Image
                src={user.avatar || ""}
                alt={user.name}
                width={30}
                height={30}
                className="aspect-square rounded-full"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="text-gray-text mb-3 opacity-45">
        <span>
          Due: {Math.ceil((+task.dueDate - Date.now()) / (1000 * 60 * 60 * 24))}{" "}
          days
        </span>
      </div>
      <ProgressBar progress={progress} />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <MessageCircleMore size={20} />
            <span>{task.comments.length}</span>
          </span>
          <span className="flex items-center gap-1">
            <Folder size={20} />
            <span>{task.resources.length}</span>
          </span>
          <span className="flex items-center gap-1">
            <Link size={20} />
            <span>{task.links.length}</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-primary text-hard-white border-primary hover:bg-hard-white hover:text-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border transition-all">
            <Plus />
          </button>
          <button className="bg-hard-white text-primary hover:bg-primary hover:text-hard-white border-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border transition-all">
            <Pencil />
          </button>
        </div>
      </div>
    </Card>
  )
}
