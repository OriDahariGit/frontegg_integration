import { useState, createContext } from 'react'
import { useTenantsStore } from '@/stores/tenantsMenuStore'
// Components
import SideBarContent from './SideBarContent'
import ToggleMenuBtn from './ToggleMenuBtn'


export const MenuOpenContext = createContext(false)


const SideBar = () => {
    const { setSelectedTenant } = useTenantsStore(state => state.setSelectedTenant)
    const [isOpen, setIsOpen] = useState(false)

    const handleToggleClick = () => {
        setIsOpen(isOpen ? false : true)
        setSelectedTenant(null)
    }
    return (
        <MenuOpenContext.Provider value={{isOpen, handleToggleClick}} >
            <div className={`flex h-full min-w-[250px] absolute left-0 z-10`}>
                <SideBarContent />
                <ToggleMenuBtn />
            </div>
        </MenuOpenContext.Provider>
    )
}


export default SideBar