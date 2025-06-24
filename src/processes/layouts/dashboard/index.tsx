import { type FC } from "react"

import {
  HeaderDashboard,
  SidebarDashboard,
} from "@/src/processes/layouts/dashboard/ui"
import { type LayoutProps } from "@/src/shared/types/layout-type"

export const DashboardLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-dvh w-full overflow-hidden">
      <SidebarDashboard />
      <div className="flex-auto bg-purple-100 p-4">
        <HeaderDashboard />
        {children}
      </div>
    </div>
  )
}
