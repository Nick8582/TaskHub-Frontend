import type { getServerProjectBySlug } from '@/services/projects/project-server.service'

export interface IProject {
  color: string
  name: string
}

export type TProjectWithSlug = NonNullable<
  Awaited<ReturnType<typeof getServerProjectBySlug>>['data']
>[0]
