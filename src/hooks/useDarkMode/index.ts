import useLocalStorage from '@hooks/useLocalStorage'
import { useEffect } from 'react'

const useDarkMode = () => {
  const [enabled, setEnabled] = useLocalStorage('dark-theme', false)

  useEffect(() => {
    const className = 'dark'
    const bodyClass = window.document.body.classList

    enabled ? bodyClass.add(className) : bodyClass.remove(className)
  }, [enabled])

  return [enabled, setEnabled]
}

export default useDarkMode
