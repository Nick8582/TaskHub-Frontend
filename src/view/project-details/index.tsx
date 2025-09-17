import type { FC } from 'react'

import type { TProjectWithSlug } from '@/types/project.types'

interface ProjectDetailsProps {
  project: TProjectWithSlug
}

export const ProjectDetails: FC<ProjectDetailsProps> = ({ project }) => {
  return <div>{project.name}</div>
}
