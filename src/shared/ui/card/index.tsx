import type { FC, ReactNode } from "react"

import { cn } from "@/src/shared/utils/cn"

interface CardProps {
  children: ReactNode
  color?: "yellow" | "rose" | "purple"
  className?: string
}

export const Card: FC<CardProps> = ({
  children,
  color = "purple",
  className,
}) => {
  const colors = {
    purple: "bg-gray-border",
    yellow: "bg-status-inprogress",
    rose: "bg-status-complete",
  }

  return (
    <div className={cn(colors[color], "rounded-2xl p-3", className)}>
      {children}
    </div>
  )
}
