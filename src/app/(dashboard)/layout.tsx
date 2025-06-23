import { DashboardLayout } from "@/src/processes/layouts"

export default function RootDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <DashboardLayout>{children}</DashboardLayout>
}
