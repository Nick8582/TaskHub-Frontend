import type { ComponentType, SVGProps } from "react"

import * as LucideIcons from "lucide-react"

type LucideIconName = keyof typeof LucideIcons

interface LucideIconProps extends SVGProps<SVGSVGElement> {
  name: LucideIconName
  size?: number
  strokeWidth?: number
  color?: string
  className?: string
}

export const LucideIcon = ({
  name,
  size = 24,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
  ...props
}: LucideIconProps) => {
  const IconComponent = LucideIcons[name] as ComponentType<{
    size?: number
    strokeWidth?: number
    color?: string
    className?: string
  }>

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`)
    return null
  }

  return (
    <IconComponent
      size={size}
      strokeWidth={strokeWidth}
      color={color}
      className={className}
      {...props}
    />
  )
}
