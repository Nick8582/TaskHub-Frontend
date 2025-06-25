import type { FC } from "react"

import { Card } from "@/src/shared/ui/card"

export const ActiveCards: FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <Card className="px-6 py-5" color="purple">
        <div className="flex items-center gap-2">
          <div>
            <span className="text-5xl font-black">92</span>
            <p>Active project</p>
          </div>
        </div>
      </Card>
      <Card className="px-6 py-5" color="yellow">
        <div className="flex items-center gap-2">
          <div>
            <span className="text-5xl font-black">92</span>
            <p>Active project</p>
          </div>
        </div>
      </Card>
      <Card className="px-6 py-5" color="rose">
        <div className="flex items-center gap-2">
          <div>
            <span className="text-5xl font-black">92</span>
            <p>Active project</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
