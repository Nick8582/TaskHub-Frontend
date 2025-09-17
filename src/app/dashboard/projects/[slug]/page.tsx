import type { Metadata } from 'next'

import { getServerProjectBySlug } from '@/services/projects/project-server.service'
import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants'

export const metadata: Metadata = {
  title: 'Project details',
  ...NO_INDEX_PAGE,
}

interface Props {
  params: Promise<{ slug: string }>
}

export default async function ProjectDetailsPageRoot(props: Props) {
  const params = await props.params
  const { slug } = params

  const project = await getServerProjectBySlug(slug)

  return <div></div>
}
