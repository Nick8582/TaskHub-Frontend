import type { ReactNode } from 'react'

import { Sidebar } from '@/components/layout/Sidebar'

interface DashboardLayoutProps {
  children: ReactNode
  modals: ReactNode
}

export default function DashboardLayout({ children, modals }: DashboardLayoutProps) {
  return (
    <div className='min- grid min-h-screen grid-cols-[250px_1fr]'>
      <Sidebar />
      <main className='p-5'>{children}</main>
      {modals}
    </div>
  )
}
