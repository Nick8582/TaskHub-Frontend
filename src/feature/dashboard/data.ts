import type { StaticImageData } from "next/image"

import ImageActive from "@/public/image/active-projects.svg"
import ImageOngoing from "@/public/image/ongoing-projects.svg"
import ImageWorking from "@/public/image/working-hours.svg"

export const DATA_CARDS_DASHBOARD: {
  number: string
  label: string
  img: StaticImageData
  color: "purple" | "yellow" | "rose"
}[] = [
  {
    number: "92",
    label: "Active project",
    img: ImageActive,
    color: "purple",
  },
  {
    number: "35",
    label: "Ongoing projects",
    img: ImageOngoing,
    color: "yellow",
  },
  {
    number: "19h 9m",
    label: "Working hours",
    img: ImageWorking,
    color: "rose",
  },
]
