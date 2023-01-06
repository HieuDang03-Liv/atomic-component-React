import { useState } from 'react'
import DropDown from '@molecules/DropDown'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { DropDownProps, ItemOption } from '@molecules/DropDown/entity'
import useDarkMode from '@hooks/useDarkMode'
import { getPrefersTheme, getLocalStorage } from '@common/utility'

const HeaderBar = () => {
  const prefersTheme = getPrefersTheme()
  const storedTheme = getLocalStorage('dark-theme')
  const [themeObj, setThemeObj] = useState<DropDownProps>({
    items: [
      {
        name: 'theme',
        icon: faSun,
        title: 'Light',
        isSelected: storedTheme === 'false'
      },
      {
        name: 'theme',
        icon: faMoon,
        title: 'Dark',
        isSelected: storedTheme === 'true'
      },
      {
        name: 'theme',
        icon: prefersTheme === 'LIGHT' ? faSun : faMoon,
        title: 'System',
        isSelected: storedTheme === null
      }
    ]
  })

  const [darkTheme, setDarkTheme] = useDarkMode()
  function handleMode() {
    const currentTheme = getThemeName(themeObj.items).title
    const prefersTheme = getPrefersTheme()
    if (currentTheme === 'Dark' || (currentTheme === 'System' && prefersTheme === 'DARK')) {
      setDarkTheme(true)
    } else {
      setDarkTheme(false)
    }
  }

  function getThemeName(themes: ItemOption[]): ItemOption {
    const currenTheme = themes.find((theme) => theme.isSelected)
    return currenTheme ?? themes[0]
  }

  return (
    <div className="fixed top-0 right-4">
      <DropDown items={themeObj.items} handleDropDown={handleMode}></DropDown>
    </div>
  )
}

export default HeaderBar
