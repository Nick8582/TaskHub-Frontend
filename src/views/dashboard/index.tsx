import type { FC } from "react"

import { ActiveCards } from "@/src/feature/active-cards"
import { Chart } from "@/src/feature/chart"

export const DashboardPage: FC = () => {
  return (
    <>
      <ActiveCards />
      <Chart className="col-span-2" />
    </>
  )
}
