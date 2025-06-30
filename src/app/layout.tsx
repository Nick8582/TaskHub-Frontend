import type { Metadata } from "next"

import "../processes/styles/globals.css"

import { Providers } from "@/src/app/providers"
import { SITE_NAME } from "@/src/shared/constants/seo.constants"

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Track projects, tasks, and team performance with our intuitive dashboard. Manage workflows efficiently.",
  keywords:
    "dashboard, project management, tasks, team collaboration, productivity",
  manifest: "manifest.json",
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content={SITE_NAME} />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
