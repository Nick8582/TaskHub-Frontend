import type { FC } from 'react'

import { observer } from 'mobx-react-lite'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { taskStore } from '@/stores/task.store'
import type { TTaskStatus } from '@/types/task.types'
import { cn } from '@/utils'

const statuses: Array<TTaskStatus | 'all'> = ['all', 'not-started', 'in-progress', 'completed']

export const LastTasksFilter: FC = observer(() => {
  const currentStatus = taskStore.status
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={'outline'} className='capitalize'>
            {currentStatus ? currentStatus.replace('-', ' ') : 'All'}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          {statuses.map(item => (
            <DropdownMenuItem
              key={item}
              onClick={() => taskStore.setStatus(item === 'all' ? null : item)}
              className={cn(currentStatus === item ? 'font-bold' : '', 'cursor-pointer capitalize')}
            >
              {item.replace('-', ' ')}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
})
