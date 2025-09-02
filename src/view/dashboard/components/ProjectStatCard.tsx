import type { FC } from "react"
import clsx from "clsx"
import Image from "next/image"

import type { IProjectStat } from "@/types/project-stats.types"
import { formatMinutes } from "@/utils/format-minutes"

interface ProjectStatCardProps {
  projectStat: IProjectStat
}

export const ProjectStatCard: FC<ProjectStatCardProps> = ({ projectStat }) => {
  return (
    <div
      className={clsx(
        projectStat.bgColor,
        "relative overflow-hidden rounded-2xl p-5 shadow"
      )}
    >
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex flex-col text-neutral-800">
          <span className="mb-1 text-4xl font-semibold">
            {projectStat.id === 3
              ? formatMinutes(projectStat.number)
              : projectStat.number}
          </span>
          <span className="text-sm">{projectStat.label}</span>
        </div>
        <div className="ml-4 flex-shrink-0">
          <Image
            src={projectStat.icon}
            alt={projectStat.label}
            width={80}
            height={80}
          />
        </div>
      </div>
    </div>
  )
}
