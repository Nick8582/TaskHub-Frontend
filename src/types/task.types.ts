import type { getClientTasks } from '@/services/tasks/task-client.service'
import type { getServerTasks, getServerTodayTasks } from '@/services/tasks/task-server.service'

import type { Database } from './db.types'

export type TGetTasksResponse = NonNullable<Awaited<ReturnType<typeof getServerTasks>>['data']>
export type TGetTodayTasksResponse = NonNullable<
  Awaited<ReturnType<typeof getServerTodayTasks>>['data']
>

export type TSubTask = Database['public']['Tables']['sub_task']['Row']
export type TTask = Database['public']['Tables']['task']['Row'] & {
  sub_task: TSubTask[]
  task_participants: TGetTasksResponse[0]['task_participants']
}

export type TTaskStatus = 'not-started' | 'in-progress' | 'completed'
export type TTaskSortBy = 'asc' | 'desc'

export type TTaskFormData = Database['public']['Tables']['task']['Update']
export type TSubTaskFormData = Database['public']['Tables']['task']['Insert']

export type TClientTaskResponse = Awaited<ReturnType<typeof getClientTasks>>
