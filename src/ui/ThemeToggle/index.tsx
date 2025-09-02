"use client"

import type { FC } from "react"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export const ThemeToggle: FC = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="fixed right-6 bottom-6 z-50">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="cursor-pointer rounded-full bg-neutral-200 p-2 text-neutral-800 transition-colors hover:bg-neutral-300 dark:bg-neutral-700 dark:text-white dark:hover:bg-neutral-600"
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  )
}
