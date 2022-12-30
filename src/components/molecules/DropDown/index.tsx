import { FC } from 'react'
import Option from '../../atoms/Option'
import { faSun, faMoon, faComputer } from '@fortawesome/free-solid-svg-icons'
import { DropDownProps } from './entity'

const DropDown: FC<DropDownProps> = (props) => {
  return (
    <div>
      <div>
        {props.items.map((item) => (
          <Option name={item.name} icon={item.icon}>
            {item.title}
          </Option>
        ))}
      </div>
    </div>
  )
}

export default DropDown
