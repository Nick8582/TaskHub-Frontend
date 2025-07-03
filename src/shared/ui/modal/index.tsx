import { type FC, type ReactNode } from "react"

import { X } from "lucide-react"

import type { DefaultModalProp } from "@/src/shared/types/modal.type"
import { Button } from "@/src/shared/ui/button"
import { cn } from "@/src/shared/utils/cn"

interface DialogProp extends DefaultModalProp {
  children: ReactNode
  title?: string
}

export const Dialog: FC<DialogProp> = ({
  isOpen,
  onClose,
  children,
  title,
}) => {
  return (
    <div
      className={
        "bg-black-opacity fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center"
      }
    >
      <div
        className={cn(
          "bg-gray-sidebar min-h-40 w-full max-w-2xl rounded-2xl p-3",
          isOpen && ""
        )}
      >
        <div className="mb-4 flex items-start justify-between gap-2">
          <h2 className="text-2xl font-bold">{!!title && title}</h2>
          <Button square onClick={onClose}>
            <X />
          </Button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}
