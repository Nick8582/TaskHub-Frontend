'use client'

import { type PropsWithChildren } from 'react'
import dynamic from 'next/dynamic'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'sonner'

const DynamicThemeToggle = dynamic(() => import('@/ui/ThemeToggle').then(mod => mod.ThemeToggle), {
  ssr: false,
})

const queryClient = new QueryClient()
export function Providers({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        {children}
        <Toaster position='bottom-right' duration={2500} />
        <DynamicThemeToggle />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
