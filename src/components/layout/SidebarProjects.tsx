import type { FC } from 'react'
import Link from 'next/link'

import clsx from 'clsx'

import { DashboardPages } from '@/shared/constants/dashboard-pages.constants'
import type { TProjectList } from '@/types/project.types'

interface SidebarProjectsProps {
  projects: TProjectList
}

export const SidebarProjects: FC<SidebarProjectsProps> = ({ projects }) => {
  if (!projects?.length) {
    return null
  }

  return (
    <div>
      <ul className='mt-2.5 space-y-3 pl-4'>
        {projects.map(project => (
          <li key={project.name}>
            <Link
              href={DashboardPages.PROJECT_DETAILS(project.slug)}
              className='flex items-center gap-2'
            >
              <div className={clsx(project.color, 'h-3 w-3')} />
              <span className='text-neutral-500 dark:text-white'>{project.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
