import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { ItemOption } from '@molecules/DropDown/entity'

export interface OptionProps {
  name: string
  icon: IconProp
  isSelected: boolean
  handleSelecting?: (pram: ItemOption) => void
}
