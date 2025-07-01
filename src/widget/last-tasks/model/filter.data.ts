import type { LastTaskFilter } from "@/src/shared/types/dashboard/filter-last-task.type"

export const filterLastTaskData: LastTaskFilter[] = [
  { label: "All tasks", value: "all" },
  { label: "Completed tasks", value: "completed" },
  { label: "Incomplete tasks", value: "incomplete" },
  { label: "Partially done", value: "partial" },
]
