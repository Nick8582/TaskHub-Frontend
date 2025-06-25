import type { FC, ReactNode } from "react"

import { cn } from "@/src/shared/utils/cn"

interface ButtonProps {
  children: ReactNode
  square?: boolean
  className?: string
  onClick?: () => void
}

export const Button: FC<ButtonProps> = ({
  children,
  square = false,
  className,
  onClick,
}) => {
  return (
    <button
      className={cn(
        "bg-gray-dashboard text-gray-text cursor-pointer rounded-2xl border-none p-1",
        square && "aspect-square",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
