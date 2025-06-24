import { ForwardedRef, forwardRef, ReactNode } from "react"
import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form"

type InputSize = "sm" | "md" | "lg"
type InputVariant = "outline" | "filled" | "flushed"

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
  outline:
    "border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200",
  filled:
    "bg-white border border-transparent focus:bg-white focus:border-blue-500",
  flushed:
    "border-b-2 border-gray-300 bg-transparent px-0 focus:border-blue-500 rounded-none",
}

export const Input = forwardRef<HTMLInputElement, InputProps<FieldValues>>(
  (
    {
      iconLeft,
      size = "md",
      variant = "outline",
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
          className={`relative flex items-center rounded-xl transition-all ${sizeClasses[size]} ${variantClasses[variant]} ${disabled ? "cursor-not-allowed opacity-60" : ""} ${error ? "border-red-500 focus:border-red-500 focus:ring-red-200" : ""} ${className} `}
        >
          {iconLeft && (
            <span className="mr-2 flex items-center">{iconLeft}</span>
          )}
          <input
            {...registration}
            {...props}
            ref={inputRef || ref}
            disabled={disabled}
            className={`w-full bg-transparent outline-none placeholder:text-gray-400 disabled:cursor-not-allowed ${inputClassName} `}
          />
        </label>

        {error && <span className="pl-2 text-sm text-red-500">{error}</span>}
      </div>
    )
  }
)

Input.displayName = "Input"
