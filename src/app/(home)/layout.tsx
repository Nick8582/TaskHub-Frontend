import { HomeLayout } from "@/src/processes/layouts"

export default function RootHomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <HomeLayout>{children}</HomeLayout>
}
