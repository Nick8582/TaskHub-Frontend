import type { FC } from "react"
import clsx from "clsx"

import { PROJECTS } from "@/components/layout/data/projects.data"

export const SidebarProjects: FC = () => {
  return (
    <div>
      <ul className="mt-2.5 space-y-3 pl-4">
        {PROJECTS.map(project => (
          <li key={project.name} className="flex items-center gap-2">
            <div className={clsx(project.color, "h-3 w-3")} />
            <span className="text-neutral-500 dark:text-white">
              {project.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
