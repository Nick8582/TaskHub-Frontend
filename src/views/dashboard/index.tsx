import type { FC } from "react"

import { ActiveCards } from "@/src/widget/active-cards"
import { Chart } from "@/src/widget/chart"
import { LastTasks } from "@/src/widget/last-tasks"

export const DashboardPage: FC = () => {
  return (
    <>
      <ActiveCards />
      <Chart className="col-span-2 flex flex-col justify-between gap-2" />
      <LastTasks className="col-span-3" />
    </>
  )
}
