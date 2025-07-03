import {
  memo,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactElement,
  type ReactNode,
} from "react"

import { ChevronDown } from "lucide-react"

import { useClickOutside } from "@/src/shared/hooks/use-click-outside"
import { cn } from "@/src/shared/utils/cn"

type DropdownOption<T extends React.Key> = {
  value: T
  label: ReactNode
}
interface DropdownButtonProps<T extends React.Key> {
  value: T
  options: ReadonlyArray<DropdownOption<T>>
  onSelect: (value: T) => void
  className?: string
  buttonClassName?: string
  dropdownClassName?: string
  optionClassName?: string
  activeOptionClassName?: string
}

const DropdownButtonComponent = <T extends React.Key>({
  value,
  options,
  onSelect,
  className,
  buttonClassName,
  dropdownClassName,
  optionClassName,
  activeOptionClassName,
}: DropdownButtonProps<T>): ReactElement => {
  const [isOpen, setIsOpen] = useState(false)

  const listRef = useRef<HTMLUListElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const buttonId = useId()
  const listboxId = useId()

  useClickOutside(listRef, () => setIsOpen(false), [buttonRef])

  const selectedOption = useMemo(
    () => options.find(option => option.value === value),
    [options, value]
  )

  const handleSelect = useCallback(
    (optionValue: T) => {
      onSelect(optionValue)
      setIsOpen(false)
    },
    [onSelect]
  )

  useEffect(() => {
    if (isOpen) {
      listRef.current?.focus()
    } else {
      buttonRef.current?.focus()
    }
  }, [isOpen])

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Escape") {
      setIsOpen(false)
      return
    }

    if (event.key === "Enter" || event.key === " ") {
      if (document.activeElement?.getAttribute("role") === "option") {
        const selectedValue = document.activeElement.getAttribute("data-value")
        if (selectedValue) {
          handleSelect(selectedValue as T)
        }
      }
      return
    }

    const list = listRef.current
    if (!list) return

    const options = Array.from(
      list.querySelectorAll<HTMLLIElement>("[role='option']")
    )
    const activeIndex = options.findIndex(el => el === document.activeElement)

    let nextIndex = -1
    if (event.key === "ArrowDown") {
      event.preventDefault()
      nextIndex = activeIndex >= options.length - 1 ? 0 : activeIndex + 1
    } else if (event.key === "ArrowUp") {
      event.preventDefault()
      nextIndex = activeIndex <= 0 ? options.length - 1 : activeIndex - 1
    }

    if (nextIndex !== -1) {
      options[nextIndex]?.focus()
    }
  }

  return (
    <div className={cn("relative w-max", className)} onKeyDown={handleKeyDown}>
      <button
        ref={buttonRef}
        id={buttonId}
        type="button"
        className={cn(
          "border-gray-border bg-gray-dashboard flex cursor-pointer items-center justify-between gap-2 rounded-2xl border px-3 py-1 text-sm transition-transform",
          buttonClassName
        )}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
      >
        {selectedOption?.label ?? "Selected..."}
        <ChevronDown
          size={16}
          className={cn(
            "transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <ul
          ref={listRef}
          id={listboxId}
          className={cn(
            "border-gray-border bg-gray-sidebar absolute right-0 top-full z-10 mt-1 flex w-max flex-col rounded-2xl border p-2 shadow-lg",
            dropdownClassName
          )}
          role="listbox"
          aria-labelledby={buttonId}
          tabIndex={-1}
        >
          {options.map(option => (
            <li
              key={option.value}
              className={cn(
                "hover:bg-gray-hover focus:bg-gray-focus cursor-pointer rounded-xl px-3 py-1 text-sm outline-none transition-colors",
                optionClassName,
                option.value === value &&
                  cn("bg-blue-active text-white", activeOptionClassName)
              )}
              onClick={() => handleSelect(option.value)}
              role="option"
              aria-selected={option.value === value}
              tabIndex={0}
              data-value={option.value}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export const DropdownButton = memo(
  DropdownButtonComponent
) as typeof DropdownButtonComponent
