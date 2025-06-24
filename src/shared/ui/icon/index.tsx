import React from "react"

import { type IconName } from "@/src/shared/types/icon-names"

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: IconName
  size?: number | string
  className?: string
}

export const Icon = ({
  name,
  size = 24,
  className = "",
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    className={`inline-block align-middle ${className}`}
    {...props}
  >
    <use href={`/sprite.svg#icon-${name}`} />
  </svg>
)
