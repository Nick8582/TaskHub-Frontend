import type { CSSProperties, FC } from 'react'

import { twMerge } from 'tailwind-merge'

interface SkeletonLoaderProps {
  count?: number
  style?: CSSProperties
  className?: string
}

export const SkeletonLoader: FC<SkeletonLoaderProps> = ({ count = 1, style, className }) => {
  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <div
          key={index}
          className={twMerge(
            'mb-[0.65rem] h-10 animate-pulse rounded-sm bg-card/80 last:mb-0',
            className
          )}
          style={style}
        />
      ))}
    </>
  )
}
