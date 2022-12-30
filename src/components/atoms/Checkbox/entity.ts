import { ChangeEvent } from "react"

export interface CheckboxProps {
  name: string
  value?: any
  checkedState: boolean
  setCheckedState: (setAction: ChangeEvent<HTMLInputElement>) => void
}
