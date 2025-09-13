'use server'

import { createClientFromServer } from '@/utils/supabase/server'

export async function taskServerGetAll() {
  const client = await createClientFromServer()
  return client.from('task').select('*, sub_task(*)')
}

export async function getTodayTasks() {
  const client = await createClientFromServer()
  return client
    .from('task')
    .select('*, sub_task(*)')
    .eq('due_date', new Date().toISOString().split('T')[0])
}
