import type { FC } from 'react'

import type { TGetProjectStatsResponse } from '@/types/statistics.types'
import { ProjectStatCard } from '@/view/dashboard/components/stat/ProjectStatCard'

interface ProjectStatsProps {
  projectStats: TGetProjectStatsResponse
}

export const ProjectStats: FC<ProjectStatsProps> = ({ projectStats }) => {
  return (
    <div className='space-y-4'>
      {projectStats.map((projectStat, index) => (
        <ProjectStatCard
          key={projectStat.id}
          projectStat={projectStat}
          isLast={index === projectStats.length - 1}
        />
      ))}
    </div>
  )
}
