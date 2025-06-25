import type { FC } from "react"

import { Card } from "@/src/shared/ui/card"

interface ChartProps {
  className?: string
}

export const Chart: FC<ChartProps> = ({ className }) => {
  return (
    <Card className={className} color="dashboard">
      <div className="text-gray-text flex items-center justify-between">
        <h2 className="text-2xl font-medium">Project Statistic</h2>
      </div>
    </Card>
  )
}
