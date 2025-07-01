import { type FC } from "react"

import { AccountDashboard } from "@/src/processes/layouts/dashboard/ui/sidebar/account"
import { NavigationDashboard } from "@/src/processes/layouts/dashboard/ui/sidebar/navigation"
import { ProjectsDashboard } from "@/src/processes/layouts/dashboard/ui/sidebar/projects"

export const SidebarDashboard: FC = () => {
  return (
    <aside className="max-w-62 bg-gray-dashboard h-full w-full overflow-hidden">
      <div className="flex h-full flex-col gap-4 overflow-y-auto p-4">
        <AccountDashboard />
        <NavigationDashboard />
        <ProjectsDashboard />
      </div>
    </aside>
  )
}
