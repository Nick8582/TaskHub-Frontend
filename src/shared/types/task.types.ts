import type { LucideIcon } from "lucide-react"

import type { Profile } from "@/src/shared/types/user/user.type"

export interface ISubTask {
  id: string
  title: string
  isCompleted: boolean
}
export interface ITask extends Omit<ISubTask, "isCompleted"> {
  icon: LucideIcon
  dueDate: Date
  users: Profile[]
  subTasks: ISubTask[]
  comments: string[]
  resources: string[]
  links: string[]
}
