"use client"

import { type PropsWithChildren } from "react"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { Toaster } from "sonner"

import { ModalManager } from "@/src/entities/modals"

export function Providers({ children }: PropsWithChildren) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <Toaster position="bottom-right" duration={2500} theme="system" />
      <ModalManager />
    </NextThemesProvider>
  )
}
