import type { FC } from 'react'
import Image from 'next/image'

import {
  Edit2,
  Image as LucideImage,
  Link as LucideLink,
  MessageSquareMore,
  Plus,
} from 'lucide-react'

import type { ITask } from '@/types/task.types'

interface TaskProps {
  task: ITask
}

export const Task: FC<TaskProps> = ({ task }) => {
  const completedCount = task.subTasks.filter(t => t.isCompleted).length
  const totalCount = task.subTasks.length
  const progress = Math.round((completedCount / totalCount) * 100)

  return (
    <div>
      <div className='mb-4 flex items-center gap-2'>
        <div className='flex items-center justify-center rounded-full bg-primary/30 p-1.5'>
          <task.icon />
        </div>
        <span>{task.title}</span>
        <div className='flex items-center -space-x-1'>
          {task.users.map(item => (
            <div key={item.id}>
              <Image src={item.avatarPath || ''} alt={item.name} width={24} height={24} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <span>Due: {Math.ceil((+task.dueDate - Date.now()) / (1000 * 60 * 60 * 24))} days</span>
      </div>
      <div>
        <span>{progress} %</span>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <span className='flex items-center gap-1'>
            <MessageSquareMore /> {task.comments.length}
          </span>
          <span className='flex items-center gap-1'>
            <LucideImage />
            {task.resources.length}
          </span>
          <span className='flex items-center gap-1'>
            <LucideLink />
            {task.links.length}
          </span>
        </div>
        <div className='flex items-center gap-2'>
          <button>
            <Plus />
          </button>
          <button>
            <Edit2 />
          </button>
        </div>
      </div>
    </div>
  )
}
