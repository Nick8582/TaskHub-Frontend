import type { FC } from "react"
import Image from "next/image"

import { DATA_CARDS_DASHBOARD } from "@/src/feature/active-cards/data"
import { Card } from "@/src/shared/ui/card"

export const ActiveCards: FC = () => {
  return (
    <div className="flex flex-col gap-3">
      {DATA_CARDS_DASHBOARD.map((item, index) => (
        <Card key={index} className="px-6 py-5" color={item.color}>
          <div className="flex items-center justify-between gap-2">
            <div>
              <span className="text-5xl font-black">{item.number}</span>
              <p>{item.label}</p>
            </div>
            <div>
              <Image alt={item.label} src={item.img} className="w-20" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
