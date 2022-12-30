import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface DropDownProps {
  items: Array<ItemOption>
}

interface ItemOption {
  name: string
  icon: IconProp
  title: string
}
