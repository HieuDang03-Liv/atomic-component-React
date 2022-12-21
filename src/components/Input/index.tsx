import { FC } from 'react'
import { InputProps } from './entity'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Input: FC<InputProps> = (props) => {
  return (
    <div className="relative">
      <label className="absolute top-0 -translate-y-full">{props.label}</label>
      <input
        ref={props.refValue}
        type={props.inputType}
        placeholder={props.placeholder}
        className="border rounded-md px-4 py-2 ring-offset-1 focus:ring-2 focus:ring-cyan-500 w-96 outline-none placeholder:text-sm"
      />
      {props.prefixIcon ? (
        <span>
          <FontAwesomeIcon icon={props.prefixIcon} />
        </span>
      ) : null}
      {props.suffixIcon ? (
        <span className="absolute top-1/2 -translate-y-1/2 right-4 text-cyan-500">
          <FontAwesomeIcon icon={props.suffixIcon} />
        </span>
      ) : null}
    </div>
  )
}

export default Input
