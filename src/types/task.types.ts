import type { Database } from './db.types'

export type TSubTask = Database['public']['Tables']['sub_task']['Row']
export type TTask = Database['public']['Tables']['task']['Row'] & { sub_task?: TSubTask[] }

export type TTaskStatus = 'not-started' | 'in-progress' | 'completed'
export type TTaskSortBy = 'asc' | 'desc'

export type TTaskFormData = Database['public']['Tables']['task']['Update']
export type TSubTaskFormData = Database['public']['Tables']['task']['Insert']
