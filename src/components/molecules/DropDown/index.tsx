import { Fragment, FC, useRef, useState } from 'react'
import Option from '@atoms/Option'
import { DropDownProps, ItemOption } from './entity'
import useOutsideClickingDetect from '@hooks/useOutsideClickingDetect'

const DropDown: FC<DropDownProps> = ({ items }) => {
  const initSelected = items.find((item) => item.isSelected) ?? items[0]
  const [selectedOption, setSelectedOption] = useState<ItemOption>(initSelected)
  const selectedOptionName = selectedOption.name
  const selectedOptionIcon = selectedOption.icon

  const dropDownRef = useRef<HTMLDivElement>(null)
  const [isOutside, setIsOutside] = useOutsideClickingDetect(dropDownRef)

  const handleSelectingOption = (selected: ItemOption): void => {
    items.forEach((item) => {
      item.isSelected = false
    })
    selected.isSelected = true
    setSelectedOption(selected)
  }

  return (
    <Fragment>
      <div className="w-32 relative" ref={dropDownRef}>
        <button onClick={() => setIsOutside((pre) => !pre)}>
          <Option name={selectedOptionName} icon={selectedOptionIcon} isSelected={true}></Option>
        </button>
        <div
          className={`w-32 py-1 bg-white rounded-md ring-1 ring-slate-500 flex flex-col items-center justify-between absolute ${
            !isOutside ? 'block' : 'hidden'
          }`}
        >
          {items.map((option) => (
            <Option
              name={option.name}
              icon={option.icon}
              isSelected={option.isSelected}
              key={option.title}
              handleSelecting={() => handleSelectingOption(option)}
            >
              {option.title}
            </Option>
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default DropDown
