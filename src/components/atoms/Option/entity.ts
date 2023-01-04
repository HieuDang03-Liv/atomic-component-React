import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface OptionProps {
  name: string
  icon: IconProp
  isSelected?: boolean
  handleSelecting?: () => void
}
