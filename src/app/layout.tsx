import type { Metadata } from 'next'

import './globals.css'

import type { ReactNode } from 'react'
import { Poppins } from 'next/font/google'

import { Providers } from '@/app/providers'
import { SITE_NAME } from '@/shared/constants/seo.constants'

const font = Poppins({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Track projects, tasks, and team performance with our intuitive dashboard. Manage workflows efficiently.',
  keywords: 'dashboard, project management, tasks, team collaboration, productivity',
  manifest: 'manifest.json',
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel='manifest' href='manifest.json' />
        <meta name='theme-color' content='#ffffff' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-title' content={SITE_NAME} />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='mobile-web-app-capable' content='yes' />
      </head>
      <body className={`${font.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
