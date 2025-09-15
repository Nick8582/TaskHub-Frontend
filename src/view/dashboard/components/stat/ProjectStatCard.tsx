import type { FC } from 'react'
import Image from 'next/image'

import clsx from 'clsx'

import type { TGetProjectStatsResponse } from '@/types/statistics.types'
import { formatMinutes } from '@/utils/format-minutes'

interface ProjectStatCardProps {
  projectStat: TGetProjectStatsResponse[0]
  isLast: boolean
}

export const ProjectStatCard: FC<ProjectStatCardProps> = ({ projectStat, isLast }) => {
  return (
    <div className={clsx(projectStat.bg_color, 'relative overflow-hidden rounded-2xl p-5 shadow')}>
      <div className='relative z-10 flex items-center justify-between'>
        <div className='flex flex-col text-foreground'>
          <span className='mb-1 text-4xl font-semibold'>
            {isLast ? formatMinutes(projectStat.number) : projectStat.number}
          </span>
          <span className='text-sm'>{projectStat.label}</span>
        </div>
        <div className='ml-4 flex-shrink-0'>
          <Image src={projectStat.icon || ''} alt={projectStat.label} width={80} height={80} />
        </div>
      </div>
    </div>
  )
}
