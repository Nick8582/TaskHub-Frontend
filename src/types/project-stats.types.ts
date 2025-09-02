import type { StaticImageData } from "next/image"

export interface IProjectStat {
  id: number
  number: number
  label: string
  bgColor: string
  icon: StaticImageData
}
