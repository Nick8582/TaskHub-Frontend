import { type Metadata } from "next"

import { DashboardLayout } from "@/src/processes/layouts"
import { NO_INDEX_PAGE } from "@/src/shared/constants/seo.constants"

export const metadata: Metadata = {
  ...NO_INDEX_PAGE,
}

export default function RootDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <DashboardLayout>{children}</DashboardLayout>
}
