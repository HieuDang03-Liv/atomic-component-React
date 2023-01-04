import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface DropDownProps {
  items: ItemOption[]
  handleDropDown?: () => void
}

export interface ItemOption {
  name: string
  icon: IconProp
  title: string
  isSelected?: boolean
}
