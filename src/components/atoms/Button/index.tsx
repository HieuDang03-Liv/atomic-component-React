import { FC, PropsWithChildren } from 'react'
import { ButtonProps } from './entity'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  return (
    <div>
      <button
        type={props.type ?? 'button'}
        className="bg-cyan-500 rounded-lg w-full py-4 text-white flex justify-center items-center gap-2 outline-cyan-700 hover:bg-cyan-600"
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
