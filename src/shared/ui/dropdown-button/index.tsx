import { useRef, useState } from "react"

import { ChevronDown } from "lucide-react"

import { useClickOutside } from "@/src/shared/hooks/use-click-outside"
import { cn } from "@/src/shared/utils/cn"

interface DropdownButtonProps<T> {
  value: T
  options: Array<{ value: T; label: string }>
  onSelect: (value: T) => void
  className?: string
  buttonClassName?: string
  dropdownClassName?: string
  optionClassName?: string
  activeOptionClassName?: string
}

export const DropdownButton = <T,>({
  value,
  options,
  onSelect,
  className = "",
  buttonClassName = "",
  dropdownClassName = "",
  optionClassName = "",
  activeOptionClassName = "",
}: DropdownButtonProps<T>) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useClickOutside(dropdownRef, () => setIsOpen(false), [buttonRef])

  const selectedOption = options.find(option => option.value === value)

  const handleSelect = (optionValue: T) => {
    onSelect(optionValue)
    setIsOpen(false)
  }

  return (
    <div className={cn("relative", className)}>
      <button
        ref={buttonRef}
        className={cn(
          "border-gray-border flex cursor-pointer items-center justify-between gap-2 rounded-2xl border px-3 py-1",
          buttonClassName
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption?.label}
        <ChevronDown size={14} className={cn(isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className={cn(
            "border-gray-border bg-gray-sidebar absolute right-0 top-full z-10 flex w-max flex-col rounded-2xl border p-2",
            dropdownClassName
          )}
        >
          {options.map((option, index) => (
            <button
              key={index}
              className={cn(
                "cursor-pointer rounded-2xl px-3 py-1",
                optionClassName,
                option.value === value && activeOptionClassName
              )}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
