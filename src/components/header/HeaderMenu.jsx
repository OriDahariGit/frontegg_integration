import settingsIcon from '../icons/SettingsIcon'

// Components
import HeaderMenuItem from "./HeaderMenuItem"


const HeaderMenu = () => {

  const menuItems = [
    ["settings", settingsIcon]
  ]

  return (
    <div className="flex h-full gap-2">
      {menuItems.map((item, idx) => {
        return (<HeaderMenuItem key={idx} label={item[0]} Icon={settingsIcon} />)
      })}
    </div>
  )
}

export default HeaderMenu