import { useMemo, type FC } from "react"

import { timeRanges } from "@/src/shared/constants/chart-time-range.constants"
import type { TimeRangeValue } from "@/src/shared/types/dashboard/project-charts.type"
import { DropdownButton } from "@/src/shared/ui/dropdown-button"

interface ChartHeaderProps {
  selectedValue: TimeRangeValue
  onSelectRange: (value: TimeRangeValue) => void
}

export const ChartHeader: FC<ChartHeaderProps> = ({
  selectedValue,
  onSelectRange,
}) => {
  const dropdownOptions = useMemo(
    () =>
      timeRanges.map(range => ({
        value: range.value,
        label: range.label,
      })),
    []
  )

  return (
    <div className="text-gray-text flex items-center justify-between">
      <h2 className="text-2xl font-medium">Project Statistic</h2>
      <DropdownButton
        value={selectedValue}
        options={dropdownOptions}
        onSelect={onSelectRange}
        activeOptionClassName="bg-primary text-white"
        buttonClassName="w-36"
      />
    </div>
  )
}
