import { FC } from "react"

import { AccountDashboard } from "@/src/processes/layouts/dashboard/ui/sidebar/account"
import { NavigationDashboard } from "@/src/processes/layouts/dashboard/ui/sidebar/navigation"
import { ProjectsDashboard } from "@/src/processes/layouts/dashboard/ui/sidebar/projects"

export const SidebarDashboard: FC = () => {
  return (
    <aside className="col-span-2 my-auto flex">
      <div className="max-w-62 ml-auto flex h-full w-full flex-auto flex-col items-center gap-4 p-4">
        <AccountDashboard />
        <NavigationDashboard />
        <ProjectsDashboard />
      </div>
    </aside>
  )
}
