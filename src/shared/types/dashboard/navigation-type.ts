import * as LucideIcons from "lucide-react"

import type { RouteDashboard } from "@/src/shared/constants/route.constants"

type LucideIconName = keyof typeof LucideIcons

export type DashboardNavigationType = {
  label: string
  href: RouteDashboard
  icon: LucideIconName
  notification?: boolean
}
