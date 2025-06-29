import { type FC } from "react"

import {
  HeaderDashboard,
  SidebarDashboard,
} from "@/src/processes/layouts/dashboard/ui"
import { type LayoutProps } from "@/src/shared/types/layout.type"

export const DashboardLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-dvh w-full overflow-hidden">
      <SidebarDashboard />
      <div className="bg-gray-sidebar flex-auto p-4">
        <HeaderDashboard />
        <main className="grid grid-cols-3 gap-3">{children}</main>
      </div>
      <div className="flex w-1/5 flex-col">
        <div className="h-1/2 bg-[url(/image/right-bg.png)] bg-cover bg-center bg-no-repeat"></div>
        <div className="bg-primary text-hard-white flex h-1/2 flex-col">
          <div className="bg-primary-light p-4">Header</div>
          <div className="bg-primary-dark flex-auto p-4">Main</div>
          <div className="bg-primary-light p-4">Footer</div>
        </div>
      </div>
    </div>
  )
}
