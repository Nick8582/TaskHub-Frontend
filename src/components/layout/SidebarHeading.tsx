import type { FC } from 'react'

interface SidebarHeadingProps {
  title: string
}

export const SidebarHeading: FC<SidebarHeadingProps> = ({ title }) => {
  return (
    <div className='mb-1.5 font-medium text-neutral-400 opacity-70 dark:text-white'>{title}</div>
  )
}
