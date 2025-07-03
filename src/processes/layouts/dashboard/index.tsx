import { type FC } from "react"

import {
  ChatDashboard,
  HeaderDashboard,
  SidebarDashboard,
} from "@/src/processes/layouts/dashboard/ui"
import { type LayoutProps } from "@/src/shared/types/layout.type"

export const DashboardLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-dvh w-full overflow-hidden">
      <SidebarDashboard />
      <div className="bg-gray-sidebar flex w-full max-w-7xl flex-auto flex-col overflow-hidden p-4">
        <HeaderDashboard />
        <div className="min-h-0 flex-1 overflow-y-auto">
          <main className="grid grid-cols-3 gap-3">{children}</main>
        </div>
      </div>
      <ChatDashboard />
    </div>
  )
}
