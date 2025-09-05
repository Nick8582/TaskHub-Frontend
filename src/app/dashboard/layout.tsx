import type { PropsWithChildren } from 'react'

import { Sidebar } from '@/components/layout/Sidebar'

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className='grid h-screen grid-cols-[250px_1fr]'>
      <Sidebar />
      <main className='p-5'>{children}</main>
    </div>
  )
}
