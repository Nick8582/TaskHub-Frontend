import type { FC } from "react"

import { ProjectStatCard } from "@/view/dashboard/components/stat/ProjectStatCard"
import { PROJECT_STATS_DATA } from "@/view/dashboard/data/project-stats.data"

export const ProjectStats: FC = () => {
  return (
    <div className="space-y-4">
      {PROJECT_STATS_DATA.map(projectStats => (
        <ProjectStatCard key={projectStats.id} projectStat={projectStats} />
      ))}
    </div>
  )
}
