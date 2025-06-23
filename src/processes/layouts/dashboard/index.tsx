import { FC } from "react"

import { SidebarDashboard } from "@/src/processes/layouts/dashboard/ui/sidebar"
import { LayoutProps } from "@/src/shared/types/layout-type"

export const DashboardLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <SidebarDashboard />
      <div>{children}</div>
    </>
  )
}
