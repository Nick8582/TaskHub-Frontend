import { memo, useMemo, type FC } from 'react'

import type { TTask } from '@/types/task.types'
import { Task } from '@/ui/Task'
import { getTaskCardPercent } from '@/view/dashboard/components/task-timeline/task-card-percent'

interface TimelineCardProps {
  task: TTask
}

const TimelineCard: FC<TimelineCardProps> = ({ task }) => {
  const percent = useMemo(() => getTaskCardPercent(task), [task])

  return (
    <div
      className='absolute top-8'
      style={{ left: `${percent?.startPercent}%`, width: `${percent?.widthPercent}%` }}
    >
      <Task task={task} isColor isMinimal />
    </div>
  )
}

export default memo(TimelineCard)
