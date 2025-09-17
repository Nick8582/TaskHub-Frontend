'use server'

import { createClientFromServer } from '@/utils/supabase/server'

export async function getServerProjects() {
  const client = await createClientFromServer()

  return client.from('project').select('*').order('due_date', { ascending: true })
}

export async function getServerProjectBySlug(slug: string) {
  const client = await createClientFromServer()

  return client
    .from('project')
    .select('*, task(*), project_participants(profile(*))')
    .eq('slug', slug)
}
