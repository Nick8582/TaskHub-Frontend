import { type FC, type RefObject } from "react"

import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from "lucide-react"

import type { LastTaskFilter } from "@/src/shared/types/dashboard/filter-last-task.type"
import type { ITask } from "@/src/shared/types/task.types"
import { Button } from "@/src/shared/ui/button"
import { DropdownButton } from "@/src/shared/ui/dropdown-button"
import { cn } from "@/src/shared/utils/cn"

interface LastTaskHeaderProps {
  isLoading?: boolean
  filteredTasks: ITask[]
  sortOrder: "asc" | "desc"
  setSortOrder: (value: "asc" | "desc") => void
  selectedValue: LastTaskFilter["value"]
  filterOptions: LastTaskFilter[]
  setSelectedValue: (value: LastTaskFilter["value"]) => void
  navigationPrevRef: RefObject<HTMLButtonElement | null>
  navigationNextRef: RefObject<HTMLButtonElement | null>
}

export const LastTaskHeader: FC<LastTaskHeaderProps> = ({
  filteredTasks,
  isLoading,
  sortOrder,
  setSortOrder,
  selectedValue,
  filterOptions,
  setSelectedValue,
  navigationPrevRef,
  navigationNextRef,
}) => {
  const handleDedLine = () => {
    if (sortOrder === "asc") {
      setSortOrder("desc")
    } else {
      setSortOrder("asc")
    }
  }

  return (
    <div className="flex w-full items-center justify-between">
      <h2 className="text-gray-text text-2xl font-bold">
        Last Tasks{" "}
        <span className="text-lg opacity-50">({filteredTasks.length})</span>
      </h2>

      <div className="flex items-center gap-4">
        {filteredTasks.length > 3 && (
          <div className={cn("flex gap-2", isLoading && "hidden")}>
            <button
              ref={navigationPrevRef}
              className="bg-gray-dashboard hover:bg-gray-dashboard/80 cursor-pointer rounded-full p-1 shadow-md transition-colors disabled:cursor-default disabled:opacity-50"
              aria-label="Previous tasks"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              ref={navigationNextRef}
              className="bg-gray-dashboard hover:bg-gray-dashboard/80 cursor-pointer rounded-full p-1 shadow-md transition-colors disabled:cursor-default disabled:opacity-50"
              aria-label="Next tasks"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
        <Button
          onClick={handleDedLine}
          className="flex items-center gap-2 px-2 py-1"
        >
          {sortOrder === "asc" ? <ChevronDown /> : <ChevronUp />}
          By deadline
        </Button>

        <DropdownButton
          value={selectedValue}
          options={filterOptions}
          onSelect={setSelectedValue}
          activeOptionClassName="bg-primary text-white"
        />
      </div>
    </div>
  )
}
