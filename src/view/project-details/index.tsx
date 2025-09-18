import type { FC } from 'react'

import { TaskList } from '@/components/elements/TaskList'
import type { TProjectWithSlug } from '@/types/project.types'
import { Heading } from '@/ui/Heading'

interface ProjectDetailsProps {
  project: TProjectWithSlug
}

export const ProjectDetails: FC<ProjectDetailsProps> = ({ project }) => {
  return (
    <div className='overflow-y-auto p-5'>
      <Heading>{project.name}</Heading>
      <div className='mt-5'>
        <TaskList data={project.task} />
      </div>
    </div>
  )
}
