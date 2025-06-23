import type { Metadata } from "next"

import "../processes/styles/globals.css"

import { Providers } from "@/src/app/providers"
import { SITE_NAME } from "@/src/shared/constants/seo.constants"

// TODO: сделать SEO
export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: "",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
