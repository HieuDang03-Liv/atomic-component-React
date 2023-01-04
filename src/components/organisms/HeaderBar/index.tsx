import DropDown from '../../molecules/DropDown'
import { faSun, faMoon, faComputer } from '@fortawesome/free-solid-svg-icons'
import { DropDownProps } from '@molecules/DropDown/entity'
import useDarkMode from '@hooks/useDarkMode'

const HeaderBar = () => {
  const obj: DropDownProps = {
    items: [
      {
        name: 'theme',
        icon: faSun,
        title: 'Light',
        isSelected: true
      },
      {
        name: 'theme',
        icon: faMoon,
        title: 'Dark',
        isSelected: false
      },
      {
        name: 'theme',
        icon: faComputer,
        title: 'System',
        isSelected: false
      }
    ]
  }

  const [darkTheme, setDarkTheme] = useDarkMode()

  // const handleMode = () => {
  //   setDarkTheme(pre => !pre)
  // }

  return (
    <div className="fixed top-0 right-4">
      <DropDown items={obj.items}></DropDown>
    </div>
  )
}

export default HeaderBar
