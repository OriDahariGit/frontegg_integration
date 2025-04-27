// Components
import SettingsMenuItem from './SettingsMenuItem'

import SwitchTenantBtn from '../TenantList/SwitchTenantBtn'


const HeaderMenu = () => {

  return (
    <div className="inline-flex h-full gap-3">
      <SettingsMenuItem />
      <SwitchTenantBtn />
    </div>
  )
}

export default HeaderMenu