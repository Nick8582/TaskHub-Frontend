'use client'

import { type PropsWithChildren } from 'react'
import dynamic from 'next/dynamic'

import { ThemeProvider } from 'next-themes'
import { Toaster } from 'sonner'

const DynamicThemeToggle = dynamic(() => import('@/ui/ThemeToggle').then(mod => mod.ThemeToggle), {
  ssr: false,
})

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      {children}
      <Toaster position='bottom-right' duration={2500} theme='system' />
      <DynamicThemeToggle />
    </ThemeProvider>
  )
}
