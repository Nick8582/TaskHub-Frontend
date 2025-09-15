import type { ReactNode } from 'react'

import { Sidebar } from '@/components/layout/Sidebar'
import { getServerProfile } from '@/services/profile/profile-server.service'
import { getServerAuth } from '@/utils/supabase/get-server-auth'

interface DashboardLayoutProps {
  children: ReactNode
  modals: ReactNode
}

export default async function DashboardLayout({ children, modals }: DashboardLayoutProps) {
  await getServerAuth(true)
  const data = await getServerProfile()

  return (
    <div className='min- grid min-h-screen grid-cols-[250px_1fr]'>
      <Sidebar data={data} />
      <main>{children}</main>
      {modals}
    </div>
  )
}
