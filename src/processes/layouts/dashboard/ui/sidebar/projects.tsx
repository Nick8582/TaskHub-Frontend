import { type FC } from "react"

import { MockProjects } from "@/src/data/projects.data"

const squareColor = {
  purple: "bg-primary",
  pink: "bg-hard-rose",
  yellow: "bg-hard-yellow",
  orange: "bg-accent",
  green: "bg-secondary",
}

export const ProjectsDashboard: FC = () => {
  return (
    <div className="w-full">
      <p className="text-gray-text mb-2 text-lg">Projects</p>
      <ul className="flex flex-col gap-2">
        {MockProjects.map(item => (
          <li key={item.id} className="flex items-center gap-2">
            <div className={`${squareColor[item.color]} h-3 w-3`}></div>
            <span className="text-gray-text text-lg">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
