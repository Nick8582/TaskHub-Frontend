'use client'

import type { FC } from 'react'
import { useRouter } from 'next/navigation'

import { LogOut } from 'lucide-react'
import { observer } from 'mobx-react-lite'

import { Button } from '@/components/ui/button'
import { SidebarHeading } from '@/components/layout/SidebarHeading'
import { SidebarMenu } from '@/components/layout/SidebarMenu'
import { SidebarProfile } from '@/components/layout/SidebarProfile'
import { SidebarProjects } from '@/components/layout/SidebarProjects'
import { PublicPages } from '@/shared/constants/public-pages.constants'
import { authStore } from '@/stores/auth.store'

export const Sidebar: FC = observer(() => {
  const router = useRouter()

  return (
    <aside className='bg-white p-5 dark:bg-neutral-800'>
      {authStore.isLoggedIn && (
        <>
          <div className='flex items-center justify-between'>
            <SidebarHeading title='Account' />
            <Button
              variant={'ghost'}
              className='opacity-30 hover:opacity-100'
              onClick={() => {
                authStore.logout()
                router.push(PublicPages.LOGIN)
              }}
            >
              <LogOut />
            </Button>
          </div>
          <SidebarProfile />
        </>
      )}

      <SidebarHeading title='Main Menu' />
      <SidebarMenu />

      <SidebarHeading title='Projects' />
      <SidebarProjects />
    </aside>
  )
})
