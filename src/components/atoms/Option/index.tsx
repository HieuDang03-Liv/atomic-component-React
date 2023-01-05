import { FC, PropsWithChildren } from 'react'
import { OptionProps } from './entity'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Option: FC<PropsWithChildren<OptionProps>> = (props) => {
  const paramsForHandling = {
    name: props.name,
    title: props.children as string,
    icon: props.icon,
    isSelected: props.isSelected
  }

  return (
    <div
      role="menuitem"
      className={`flex items-center gap-2 pl-2 pr-6 py-1 cursor-pointer ${
        props.children ? 'hover:bg-hoverGray w-full' : 'max-w-fit'
      }`}
      onClick={() => props.handleSelecting && props.handleSelecting(paramsForHandling)}
    >
      <div className={`flex items-center justify-center p-2 ${props.isSelected ? 'text-cyan-500' : 'text-slate-500'}`}>
        <FontAwesomeIcon icon={props.icon} size={!props.children ? '2x' : '1x'}></FontAwesomeIcon>
      </div>
      <span className={`${props.isSelected ? 'text-cyan-500' : 'text-slate-500'} font-semibold`}>{props.children}</span>
    </div>
  )
}

export default Option
