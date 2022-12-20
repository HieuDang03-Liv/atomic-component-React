import { FC } from 'react'
import { InputProps } from './entity'

const Input: FC<InputProps> = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      {props.type === 'input' ? (
        <input value={props.value} type={props.inputType} placeholder={props.placeholder} />
      ) : (
        <textarea value={props.value} placeholder={props.placeholder} />
      )}
    </div>
  )
}

export default Input
