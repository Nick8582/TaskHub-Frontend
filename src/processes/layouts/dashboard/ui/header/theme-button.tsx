import { useCallback, useEffect, useState, type FC } from "react"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/src/shared/ui/button"

export const ThemeButton: FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const { theme, setTheme } = useTheme()

  const sizeIcon = 30

  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light")
  }, [setTheme, theme])

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    setIsDarkMode(savedTheme === "dark")
  }, [theme])

  return (
    <Button
      square
      className="p-4"
      onClick={() => toggleTheme()}
      aria-label={"Переключить тему"}
    >
      {isDarkMode ? <Sun size={sizeIcon} /> : <Moon size={sizeIcon} />}
    </Button>
  )
}
