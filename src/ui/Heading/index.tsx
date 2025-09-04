import type { FC, ReactNode } from 'react'

interface HeadingProps {
  children: ReactNode
}

export const Heading: FC<HeadingProps> = ({ children }) => {
  return <h1 className='text-3xl font-medium'>{children}</h1>
}
