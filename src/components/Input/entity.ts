import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { LegacyRef } from 'react'

export interface InputProps {
  refValue: LegacyRef<HTMLInputElement>
  inputType: string
  placeholder?: string
  label?: string
  prefixIcon?: IconProp
  suffixIcon?: IconProp
}
