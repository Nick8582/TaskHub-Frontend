import { AuthLayout } from "@/src/processes/layouts"

export default function RootAuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <AuthLayout>{children}</AuthLayout>
}
