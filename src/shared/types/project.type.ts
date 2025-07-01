import type { ProjectColor } from "@/src/shared/types/project-color.type"

export interface Project {
  id: string
  label: string
  color: ProjectColor
}
