import { useState, type FC } from "react"

import { ChevronDown } from "lucide-react"

import { timeRanges } from "@/src/feature/chart/mock-data"
import type { TimeRange } from "@/src/shared/types/dashboard/project-charts-type"
import { cn } from "@/src/shared/utils/cn"

interface ChartHeaderProps {
  selectRange: TimeRange
  setSelectRange: (item: TimeRange) => void
}

export const ChartHeader: FC<ChartHeaderProps> = ({
  selectRange,
  setSelectRange,
}) => {
  const [dropdown, setDropdown] = useState(false)

  const onSelectRange = (item: TimeRange) => {
    setSelectRange(item)
    setDropdown(false)
  }

  return (
    <div className="text-gray-text flex items-center justify-between">
      <h2 className="text-2xl font-medium">Project Statistic</h2>
      <div className="relative">
        <button
          className="border-gray-border flex cursor-pointer items-center justify-between gap-2 rounded-2xl border px-3 py-1"
          onClick={() => setDropdown(!dropdown)}
        >
          {selectRange.label}
          <ChevronDown size={14} className={cn(dropdown && "rotate-180")} />
        </button>
        {dropdown && (
          <div className="border-gray-border bg-gray-sidebar absolute right-0 top-full z-10 flex w-max flex-col rounded-2xl border p-2">
            {timeRanges.map(item => (
              <button
                className={cn(
                  "cursor-pointer rounded-2xl px-3 py-1",
                  item.value === selectRange.value && "bg-primary text-white"
                )}
                onClick={() => onSelectRange(item)}
                key={item.value}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
