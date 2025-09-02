import type { FC } from "react"

import { SidebarHeading } from "@/components/layout/SidebarHeading"
import { SidebarMenu } from "@/components/layout/SidebarMenu"
import { SidebarProfile } from "@/components/layout/SidebarProfile"
import { SidebarProjects } from "@/components/layout/SidebarProjects"

export const Sidebar: FC = () => {
  return (
    <aside className="bg-white p-5 dark:bg-neutral-800">
      <SidebarHeading title="Account" />
      <SidebarProfile />

      <SidebarHeading title="Main Menu" />
      <SidebarMenu />

      <SidebarHeading title="Projects" />
      <SidebarProjects />
    </aside>
  )
}
