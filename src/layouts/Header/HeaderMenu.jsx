// Components
import SettingsMenuItem from './SettingsMenuItem'


const HeaderMenu = () => {

  return (
    <div className="inline-flex h-full gap-3">
      <SettingsMenuItem />
      {/* <SwitchTenantBtn /> */}
    </div>
  )
}

export default HeaderMenu