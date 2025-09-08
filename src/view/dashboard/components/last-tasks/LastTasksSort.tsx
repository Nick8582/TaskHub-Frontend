import type { FC } from 'react'

import { observer } from 'mobx-react-lite'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { taskStore } from '@/stores/task.store'
import type { TTaskSortBy } from '@/types/task.types'

const sortTypes: Array<TTaskSortBy> = ['asc', 'desc']

export const LastTasksSort: FC = observer(() => {
  const sortByDueDate = taskStore.sortByDueDate

  return (
    <div>
      <Select
        defaultValue={sortByDueDate}
        onValueChange={(value: TTaskSortBy) => taskStore.setSortByDueDate(value)}
      >
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='Sort by due date' />
        </SelectTrigger>
        <SelectContent>
          {sortTypes.map(type => (
            <SelectItem key={type} value={type}>
              {type === 'asc' ? 'Ascending' : 'Descending'}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
})
