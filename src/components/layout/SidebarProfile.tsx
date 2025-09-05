import type { FC } from 'react'

import { ChevronDown } from 'lucide-react'

import { PROFILE } from '@/components/layout/data/profile.data'

export const SidebarProfile: FC = () => {
  return (
    <div className='mb-10 flex items-center gap-2.5'>
      <div className='h-8 w-8 shrink-0 rounded-full bg-primary' />
      <div className='leading-snug'>
        <div className='font-medium'>{PROFILE.name}</div>
        <div className='text-xs font-medium opacity-60'>{PROFILE.email}</div>
      </div>
      <div className='ml-1'>
        <ChevronDown size={16} className='opacity-60' />
      </div>
    </div>
  )
}
