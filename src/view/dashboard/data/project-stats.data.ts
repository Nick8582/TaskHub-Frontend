import type { IProjectStat } from '@/types/project-stats.types'

import ActiveProjectsImage from '@@/image/active-projects.svg'
import OnGoingProjectsImage from '@@/image/ongoing-projects.svg'
import WorkingHoursImage from '@@/image/working-hours.svg'

export const PROJECT_STATS_DATA: IProjectStat[] = [
  {
    id: 1,
    number: 92,
    label: 'Active Projects',
    bgColor: 'bg-violet-300 dark:bg-violet-400/60',
    icon: ActiveProjectsImage,
  },
  {
    id: 2,
    number: 35,
    label: 'On Going Projects',
    bgColor: 'bg-yellow-300 dark:bg-yellow-400/60',
    icon: OnGoingProjectsImage,
  },
  {
    id: 3,
    number: 1149,
    label: 'Working Hours',
    bgColor: 'bg-pink-300 dark:bg-pink-400/60',
    icon: WorkingHoursImage,
  },
]
