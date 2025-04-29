import { useContext } from 'react'
import { MenuOpenContext } from './SideBar'
// Components
import TenantList from './TenantsList'
import HintAndSave from './HintAndSave'


const sideBarVariants = {
    hidden: { width: 0, display: 'none'},
    show: { width: "fit", display: 'show'},
    exit: { width: 0, display: 'none'},
}


const SideBarContent = () => {
    const { isOpen, handleToggleSwitch } = useContext(MenuOpenContext)
    return (
        // <div className='flex h-full w-full'>
            <div className='flex flex-col h-min w-full max-h-full overflow-hidden
                            box-content bg-tenants-bg/[0.97]'
            >
                {isOpen ? <TenantList  /> : null}
                <HintAndSave isOpen={isOpen} clickHandler={handleToggleSwitch} />
            </div>
        // </div>
    )
}

export default SideBarContent