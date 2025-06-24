import { FC } from "react"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  iconLeft?: React.ReactNode
}

export const Input: FC<InputProps> = ({
  iconLeft,
  className = "",
  ...props
}) => {
  return (
    <label
      className={`relative flex items-center rounded-2xl bg-white px-3 py-2 ${className}`}
    >
      {iconLeft && <span className="mr-2">{iconLeft}</span>}
      <input {...props} className={` ${props.disabled ? "opacity-50" : ""}`} />
    </label>
  )
}
