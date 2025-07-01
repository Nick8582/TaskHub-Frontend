import { MockTasks } from "@/src/data/tasks.data"

export const filterTasks = (tasks: typeof MockTasks, filterValue: string) => {
  switch (filterValue) {
    case "all":
      return tasks

    case "completed":
      return tasks.filter(
        task =>
          task.subTasks.length > 0 &&
          task.subTasks.every(subTask => subTask.isCompleted)
      )

    case "incomplete":
      return tasks.filter(
        task =>
          task.subTasks.length > 0 &&
          task.subTasks.every(subTask => !subTask.isCompleted)
      )

    case "partial":
      return tasks.filter(
        task =>
          task.subTasks.some(subTask => subTask.isCompleted) &&
          task.subTasks.some(subTask => !subTask.isCompleted)
      )

    default:
      return tasks
  }
}
