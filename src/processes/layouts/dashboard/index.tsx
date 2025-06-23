import { FC } from "react"

import { SidebarDashboard } from "@/src/processes/layouts/dashboard/ui"
import { LayoutProps } from "@/src/shared/types/layout-type"

export const DashboardLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="grid h-dvh grid-cols-12 overflow-hidden">
      <SidebarDashboard />
      <div className="col-span-10 bg-purple-100">{children}</div>
    </div>
  )
}
