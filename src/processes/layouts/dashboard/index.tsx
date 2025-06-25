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
      <div className="bg-gray-sidebar flex-auto p-4">
        <HeaderDashboard />
        <main className="grid grid-cols-3">{children}</main>
      </div>
      <div className="w-3xs">Chat</div>
    </div>
  )
}
