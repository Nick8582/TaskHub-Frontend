import { type Metadata } from "next"

import { DashboardPage } from "@/src/views/dashboard"

export const metadata: Metadata = {
  title: "Dashboard",
}

export default function RootDashboard() {
  return <DashboardPage />
}
