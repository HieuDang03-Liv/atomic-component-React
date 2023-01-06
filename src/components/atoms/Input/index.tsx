import { FC } from 'react'
import { InputProps } from './entity'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Input: FC<InputProps> = (props) => {
  return (
    <div className="relative">
      <label className="absolute -translate-y-full">{props.label}</label>
      <input
        ref={props.refValue}
        type={props.inputType}
        placeholder={props.placeholder}
        className={`border rounded-lg px-4 py-2 ring-offset-1 focus:ring-2 focus:ring-cyan-500 w-full outline-none placeholder:text-sm ${
          props.errorMessage ? 'ring-2 ring-red-500 focus:ring-red-500' : ''
        }`}
        {...props.handleValidateForm}
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
      <p className="text-red-500 absolute text-sm translate-y-1">{props.errorMessage}</p>
    </div>
  )
}

export default Input
