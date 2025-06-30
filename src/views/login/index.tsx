import type { FC } from "react"

import { Button } from "@/src/shared/ui/button"
import { Input } from "@/src/shared/ui/input"

export const LoginPage: FC = () => {
  return (
    <section className="bg-linear-95 from-primary-dark to-primary-light flex h-full w-full flex-auto items-center justify-center">
      <div className="bg-gray-sidebar flex w-full max-w-80 flex-col gap-5 rounded-2xl p-4">
        <h1 className="text-4xl font-bold">Login</h1>
        <form className="flex flex-col gap-2">
          <Input fullWidth placeholder="Email" />
          <Input fullWidth placeholder="Password" />
          <Button className="px-4 py-2">Login</Button>
        </form>
      </div>
    </section>
  )
}
