import { type FC } from "react"

import type { TimeRange } from "@/src/shared/types/dashboard/project-charts.type"
import { DropdownButton } from "@/src/shared/ui/dropdown-button"
import { timeRanges } from "@/src/widget/chart/mock-data"

interface ChartHeaderProps {
  selectRange: TimeRange
  setSelectRange: (item: TimeRange) => void
}

export const ChartHeader: FC<ChartHeaderProps> = ({
  selectRange,
  setSelectRange,
}) => {
  const dropdownOptions = timeRanges.map(range => ({
    value: range,
    label: range.label,
  }))

  return (
    <div className="text-gray-text flex items-center justify-between">
      <h2 className="text-2xl font-medium">Project Statistic</h2>
      <DropdownButton<TimeRange>
        value={selectRange}
        options={dropdownOptions}
        onSelect={setSelectRange}
        activeOptionClassName="bg-primary text-white"
      />
    </div>
  )
}
