import { PropsWithChildren, FC, useRef, useState, ChangeEvent } from 'react'
import { CheckboxProps } from './entity'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Checkbox: FC<PropsWithChildren<CheckboxProps>> = (props) => {
  const [isChecked, setIsChecked] = useState<boolean>()

  const handleChecked = (event: ChangeEvent<HTMLInputElement>): void => {
    const checked = event.target.checked
    setIsChecked(checked)
  }

  return (
    <div className="flex gap-2 items-center relative">
      <input
        type="checkbox"
        id={props.name}
        onChange={(event) => handleChecked(event)}
        className="w-6 h-6 rounded-sm appearance-none border checked:ring-2 checked:ring-cyan-500"
      />
      {isChecked ? (
        <span className="absolute text-cyan-500 left-1 -z-10">
          <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
        </span>
      ) : null}
      <label htmlFor={props.name} className="text-sm font-semibold relative">
        <span>{props.children}</span>
      </label>
    </div>
  )
}

export default Checkbox
