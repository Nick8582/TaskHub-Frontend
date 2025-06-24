import { FC, ReactNode } from "react"

import { cn } from "@/src/shared/utils/cn"

interface ButtonProps {
  children: ReactNode
  square?: boolean
  className?: string
}

export const Button: FC<ButtonProps> = ({
  children,
  square = false,
  className,
}) => {
  return (
    <button
      className={cn(
        "rounded-2xl border-none bg-white p-1 text-black",
        square && "aspect-square",
        className
      )}
    >
      {children}
    </button>
  )
}
