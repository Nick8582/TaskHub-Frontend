import type { FC } from 'react'
import Link from 'next/link'

import { MAIN_MENU } from '@/components/layout/data/main-menu.data'

export const SidebarMenu: FC = () => {
  return (
    <nav className='mt-3 mb-10'>
      <ul className='space-y-4'>
        {MAIN_MENU.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className='flex items-center justify-between pl-2 text-neutral-500 transition-colors hover:text-neutral-900 dark:text-white hover:dark:text-primary'
            >
              <span className='flex items-center gap-2'>
                <item.icon size={18} />
                <span>{item.label}</span>
              </span>
              {item.label === 'Messages' && (
                <span className='rounded-lg bg-[#DCDEF6] px-2 text-xs font-medium text-primary dark:bg-neutral-600'>
                  4
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
