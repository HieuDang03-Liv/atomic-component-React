import { FC, PropsWithChildren } from 'react'
import { ButtonProps } from './entity'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  return (
    <div>
      <button
        type={props.type ?? 'button'}
        className="bg-cyan-500 rounded-md w-96 py-2 text-white flex justify-center items-center gap-2"
      >
        {props.icon ? (
          <span>
            <FontAwesomeIcon icon={props.icon} />
          </span>
        ) : null}
        <span>{props.children}</span>
      </button>
    </div>
  )
}

export default Button
