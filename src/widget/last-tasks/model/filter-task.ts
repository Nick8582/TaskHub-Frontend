import { MockTasks } from "@/src/data/tasks.data"
import type { ITask } from "@/src/shared/types/task.types"

export const getTaskCounts = (tasks: ITask[]) => {
  return {
    all: tasks.length,
    completed: tasks.filter(
      task =>
        task.subTasks.length > 0 &&
        task.subTasks.every(subTask => subTask.isCompleted)
    ).length,
    incomplete: tasks.filter(
      task =>
        task.subTasks.length > 0 &&
        task.subTasks.every(subTask => !subTask.isCompleted)
    ).length,
    partial: tasks.filter(
      task =>
        task.subTasks.some(subTask => subTask.isCompleted) &&
        task.subTasks.some(subTask => !subTask.isCompleted)
    ).length,
  }
}

export const filterTasks = (
  tasks: typeof MockTasks,
  filterValue: string,
  sortOrder: "asc" | "desc" | "" = ""
) => {
  const sortedTasks =
    sortOrder === ""
      ? [...tasks]
      : [...tasks].sort((a, b) => {
          const dateA = a.dueDate.getTime()
          const dateB = b.dueDate.getTime()
          return sortOrder === "asc" ? dateA - dateB : dateB - dateA
        })

  switch (filterValue) {
    case "completed":
      return sortedTasks.filter(
        task =>
          task.subTasks.length > 0 &&
          task.subTasks.every(subTask => subTask.isCompleted)
      )
    case "incomplete":
      return sortedTasks.filter(
        task =>
          task.subTasks.length > 0 &&
          task.subTasks.every(subTask => !subTask.isCompleted)
      )
    case "partial":
      return sortedTasks.filter(
        task =>
          task.subTasks.some(subTask => subTask.isCompleted) &&
          task.subTasks.some(subTask => !subTask.isCompleted)
      )
    case "all":
    default:
      return sortedTasks
  }
}
