import { AdminPortal } from '@frontegg/react'
// Components
import SettingsMenuItem from './SettingsMenuItem'
import { SettingsIcon } from '@/components/icons'

const handleSettingsBtnClick = () => {
  AdminPortal.openHosted()
}


const HeaderMenu = () => {

  return (
    <div>
      <SettingsMenuItem />
    </div>
  )
}

export default HeaderMenu