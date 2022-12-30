import { FC, PropsWithChildren } from 'react'
import { OptionProps } from './entity'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Option: FC<PropsWithChildren<OptionProps>> = (props) => {
  return (
    <div className="ml-4 flex justify-start items-center gap-2 max-w-fit pl-1 pr-6 py-1 rounded-md hover:bg-hoverGray">
      <div className="h-6 w-6 rounded-md bg-white flex items-center justify-center p-2 text-cyan-500 ring-1 ring-gray-400">
        <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon>
      </div>
      <span>{props.children}</span>
    </div>
  )
}

export default Option
