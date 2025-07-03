import type { FC } from "react"

export const ChatDashboard: FC = () => {
  return (
    <div className="flex w-full max-w-80 flex-col">
      <div className="h-1/2 bg-[url(/image/right-bg.png)] bg-cover bg-center bg-no-repeat"></div>
      <div className="bg-primary text-hard-white flex h-1/2 flex-col">
        <div className="bg-primary p-4">Header</div>
        <div className="bg-primary-dark flex-auto p-4">Main</div>
        <div className="bg-primary p-4">Footer</div>
      </div>
    </div>
  )
}
