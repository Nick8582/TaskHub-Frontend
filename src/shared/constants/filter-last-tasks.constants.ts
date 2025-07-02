import type { LastTaskFilter } from "@/src/shared/types/dashboard/filter-last-task.type"

export const filterLastTaskData = (counts: {
  all: number
  completed: number
  incomplete: number
  partial: number
}): LastTaskFilter[] => [
  {
    label: `All tasks (${counts.all})`,
    value: "all",
  },
  {
    label: `Completed (${counts.completed})`,
    value: "completed",
  },
  {
    label: `Incomplete (${counts.incomplete})`,
    value: "incomplete",
  },
  {
    label: `Partially done (${counts.partial})`,
    value: "partial",
  },
]
