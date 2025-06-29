import type { FC, ReactNode } from "react"

import { cn } from "@/src/shared/utils/cn"

export type UICardColor = "yellow" | "rose" | "purple" | "dashboard"

interface CardProps {
  children: ReactNode
  color?: UICardColor
  className?: string
}

const colors = {
  purple: "bg-hard-purple text-hard-dark",
  yellow: "bg-hard-yellow text-hard-dark",
  rose: "bg-hard-rose text-hard-dark",
  dashboard: "bg-gray-dashboard text-gray-text",
}

export const Card: FC<CardProps> = ({
  children,
  color = "purple",
  className,
}) => {
  return (
    <div className={cn(colors[color], "rounded-2xl p-3", className)}>
      {children}
    </div>
  )
}
