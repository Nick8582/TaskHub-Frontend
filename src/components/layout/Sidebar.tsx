'use client'

import type { FC } from 'react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { AnimateIcon } from '@/components/animate-ui/icons/icon'
import { LogOut } from '@/components/animate-ui/icons/log-out'
import { SidebarHeading } from '@/components/layout/SidebarHeading'
import { SidebarMenu } from '@/components/layout/SidebarMenu'
import { SidebarProfile } from '@/components/layout/SidebarProfile'
import { SidebarProjects } from '@/components/layout/SidebarProjects'
import type { getServerProfile } from '@/services/profile/profile-server.service'
import { PublicPages } from '@/shared/constants/public-pages.constants'
import type { TProjectList } from '@/types/project.types'
import { createClient } from '@/utils/supabase/client'

interface SidebarProps {
  data: Awaited<ReturnType<typeof getServerProfile>>
  projects: TProjectList
}

export const Sidebar: FC<SidebarProps> = ({ data, projects }) => {
  const router = useRouter()

  async function signOut() {
    const { error } = await createClient().auth.signOut()

    if (!error) {
      router.push(PublicPages.LOGIN)
    }
  }

  return (
    <aside className='h-screen overflow-y-auto bg-white p-4 dark:bg-neutral-800'>
      <div className='flex items-center justify-between'>
        <SidebarHeading title='Account' />
        <AnimateIcon animateOnHover>
          <Button
            variant={'ghost'}
            className='!p-0 opacity-30 hover:opacity-100'
            aria-label='Sign out'
            onClick={signOut}
          >
            <LogOut />
          </Button>
        </AnimateIcon>
      </div>
      <SidebarProfile data={data} />

      <SidebarHeading title='Main Menu' />
      <SidebarMenu />

      <SidebarHeading title='Projects' />
      <SidebarProjects projects={projects} />
    </aside>
  )
}
