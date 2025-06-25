import { forwardRef, type ForwardedRef, type ReactNode } from "react"
import {
  type FieldValues,
  type Path,
  type RegisterOptions,
  type UseFormRegister,
} from "react-hook-form"

type InputSize = "sm" | "md" | "lg"
type InputVariant = "filled"

type OmittedInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "className"
>

export interface InputProps<T extends FieldValues = FieldValues>
  extends OmittedInputProps {
  iconLeft?: ReactNode
  size?: InputSize
  variant?: InputVariant
  register?: UseFormRegister<T>
  name?: Path<T>
  validation?: RegisterOptions<T>
  error?: string
  fullWidth?: boolean
  inputRef?: ForwardedRef<HTMLInputElement>
  className?: string
}

const sizeClasses: Record<InputSize, string> = {
  sm: "py-1 px-3 text-sm",
  md: "py-2 px-4 text-base",
  lg: "py-3 px-5 text-lg",
}

const variantClasses: Record<InputVariant, string> = {
  filled: "bg-gray-dashboard border border-transparent",
}

export const Input = forwardRef<HTMLInputElement, InputProps<FieldValues>>(
  (
    {
      iconLeft,
      size = "md",
      variant = "filled",
      register,
      name,
      validation,
      error,
      className = "",
      fullWidth = false,
      disabled = false,
      inputRef,
      ...props
    },
    ref
  ) => {
    const registration = register && name ? register(name, validation) : {}

    const inputClassName = className || ""

    return (
      <div className={`flex flex-col gap-1 ${fullWidth ? "w-full" : "w-fit"}`}>
        <label
          className={`text-gray-text relative flex items-center rounded-xl transition-all ${sizeClasses[size]} ${variantClasses[variant]} ${disabled ? "cursor-not-allowed opacity-60" : ""} ${error ? "border-status-overdue focus:border-status-overdue focus:ring-status-inprogress" : ""} ${className} `}
        >
          {iconLeft && (
            <span className="text-gray-text mr-2 flex items-center">
              {iconLeft}
            </span>
          )}
          <input
            {...registration}
            {...props}
            ref={inputRef || ref}
            disabled={disabled}
            className={`placeholder:text-gray-text text-gray-text w-full bg-transparent outline-none disabled:cursor-not-allowed ${inputClassName} `}
          />
        </label>

        {error && (
          <span className="text-status-overdue pl-2 text-sm">{error}</span>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"
