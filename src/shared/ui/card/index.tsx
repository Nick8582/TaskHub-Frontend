import type { FC, ReactNode } from "react"

import { cn } from "@/src/shared/utils/cn"

export type UICardColor = "yellow" | "rose" | "purple" | "dashboard"

interface CardProps {
  children: ReactNode
  color?: UICardColor
  className?: string
}

const colors = {
  purple: "bg-hard-purple",
  yellow: "bg-hard-yellow",
  rose: "bg-hard-rose",
  dashboard: "bg-gray-dashboard",
}

export const Card: FC<CardProps> = ({
  children,
  color = "purple",
  className,
}) => {
  return (
    <div
      className={cn(colors[color], "text-hard-dark rounded-2xl p-3", className)}
    >
      {children}
    </div>
  )
}
