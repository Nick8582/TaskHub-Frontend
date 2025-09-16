'use client'

import type { FC } from 'react'
import Image from 'next/image'

import { getServerProfile } from '@/services/profile/profile-server.service'

interface SidebarProfileProps {
  data: Awaited<ReturnType<typeof getServerProfile>>
}

export const SidebarProfile: FC<SidebarProfileProps> = ({ data }) => {
  if (!data) return null

  return (
    <div className='mb-10 flex items-center gap-2'>
      {data.avatar_path ? (
        <Image
          src={data.avatar_path}
          alt={data.name || 'User avatar'}
          className='h-7 w-7 shrink-0 rounded-full'
          width={36}
          height={36}
        />
      ) : (
        <div className='h-8 w-8 shrink-0 rounded-full bg-primary' aria-hidden={true} />
      )}

      <div className='leading-snug'>
        <div className='font-medium'>{data.name}</div>
        <div className='text-xs font-medium opacity-60'>{data.email}</div>
      </div>
    </div>
  )
}
