'use client'

import type { FC } from 'react'
import { useRouter } from 'next/navigation'

import { LogOut } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { SidebarHeading } from '@/components/layout/SidebarHeading'
import { SidebarMenu } from '@/components/layout/SidebarMenu'
import { SidebarProfile } from '@/components/layout/SidebarProfile'
import { SidebarProjects } from '@/components/layout/SidebarProjects'
import { PublicPages } from '@/shared/constants/public-pages.constants'
import { createClient } from '@/utils/supabase/client'

export const Sidebar: FC = () => {
  const router = useRouter()

  async function signOut() {
    const { error } = await createClient().auth.signOut()

    if (!error) {
      router.push(PublicPages.LOGIN)
    }
  }

  return (
    <aside className='bg-white p-5 dark:bg-neutral-800'>
      <div className='flex items-center justify-between'>
        <SidebarHeading title='Account' />
        <Button variant={'ghost'} className='opacity-30 hover:opacity-100' onClick={signOut}>
          <LogOut />
        </Button>
      </div>
      <SidebarProfile />

      <SidebarHeading title='Main Menu' />
      <SidebarMenu />

      <SidebarHeading title='Projects' />
      <SidebarProjects />
    </aside>
  )
}
