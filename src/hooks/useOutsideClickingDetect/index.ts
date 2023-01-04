import { useState, RefObject, Dispatch, SetStateAction } from 'react'

type StateReturn = [boolean, Dispatch<SetStateAction<boolean>>]

const useOutsideClickingDetect = (ref: RefObject<HTMLElement>): StateReturn => {
  const [isOutside, setIsOutside] = useState<boolean>(true)

  const handleClickOutside = (event: MouseEvent): void => {
    if (!ref?.current?.contains(event.target as Node)) {
      setIsOutside(true)
    }
  }

  document.addEventListener('mousedown', (e) => {
    handleClickOutside(e)
  })

  return [isOutside, setIsOutside]
}

export default useOutsideClickingDetect
