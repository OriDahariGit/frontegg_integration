import { AdminPortal } from '@frontegg/react'

// Components
import HeaderMenuItem from "./HeaderMenuItem"
import SettingsIcon from '../icons/SettingsIcon'

const handleSettingsBtnClick = () => {
  AdminPortal.openHosted()
}


const HeaderMenu = () => {

  const menuItems = [
    ["Settings", SettingsIcon, handleSettingsBtnClick],
  ]

  return (
    <div>
      {menuItems.map( (item, idx) => {
        return (
          <HeaderMenuItem key={idx} label={item[0]} Icon={item[1]} onClick={item[2]} />
        )
      })}
    </div>
  )
}

export default HeaderMenu