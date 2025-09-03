import { useState, type FC } from "react"

import { ChevronDown } from "lucide-react"

import type { ITimeRange } from "@/types/project-chart.types"
import { timeRanges } from "@/view/dashboard/data/project-chart.data"

interface ProjectChartHeaderProps {
  onRangeChange: (range: ITimeRange) => void
  selectedRange: ITimeRange
}

export const ProjectChartHeader: FC<ProjectChartHeaderProps> = ({
  onRangeChange,
  selectedRange,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleRangeChange = (range: ITimeRange) => {
    onRangeChange(range)
    setIsDropdownOpen(false)
  }

  return (
    <div className="mb-6 flex items-center justify-between">
      <h2 className="text-xl font-medium">Project Statistics</h2>
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-2 rounded-2xl border border-neutral-200 px-3 py-1.5 text-sm"
        >
          {selectedRange.label}
          <ChevronDown size={16} />
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 z-10 mt-2 w-32 rounded-2xl border border-neutral-200 bg-white py-1">
            {timeRanges.map(item => (
              <button
                key={item.value}
                className="w-full px-3 py-2 text-left text-sm transition-colors hover:text-primary"
                onClick={() => handleRangeChange(item)}
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
