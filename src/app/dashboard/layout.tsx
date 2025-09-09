import type { ReactNode } from 'react'
import { redirect } from 'next/navigation'

import { Sidebar } from '@/components/layout/Sidebar'
import { PublicPages } from '@/shared/constants/public-pages.constants'
import { getServerAuth } from '@/utils/supabase/get-server-auth'

interface DashboardLayoutProps {
  children: ReactNode
  modals: ReactNode
}

export default async function DashboardLayout({ children, modals }: DashboardLayoutProps) {
  const user = await getServerAuth()

  if (!user) {
    redirect(PublicPages.LOGIN)
  }

  return (
    <div className='min- grid min-h-screen grid-cols-[250px_1fr]'>
      <Sidebar />
      <main className='p-5'>{children}</main>
      {modals}
    </div>
  )
}
