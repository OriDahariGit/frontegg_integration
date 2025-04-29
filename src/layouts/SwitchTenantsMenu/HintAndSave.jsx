import { useContext } from 'react';
import { useAuthActions } from '@frontegg/react'
import { useTenantsStore } from "@/stores/tenantsMenuStore";
import { MenuOpenContext } from './SideBar';

const HintAndSave = () => {
  const { isOpen, handleToggleClick } = useContext(MenuOpenContext)
  const selectedTenant = useTenantsStore(state => state.selectedTenant)
  const { switchTenant } = useAuthActions()

  const handleSwitchTenant = () => {
    switchTenant({tenantId: selectedTenant.id})
  }
    
  return (
    <div className={`flex w-full min-h-slot-height items-center h-full transition-m 
            ${ selectedTenant || !isOpen ? 'bg-callout/70 cursor-pointer' 
                : 'cursor-default opacity-60'
            }`
          }
          onClick={onClickSwitch(
              selectedTenant, 
              handleSwitchTenant,
              isOpen,
              handleToggleClick
          )}
    >
      <div className='flex h-full w-full justify-center items-center  
                    text-white font-primary text-center text-md'>
        {printHintSwitch(selectedTenant, isOpen)
        }
        </div>
    </div>
  )
}

const printHintSwitch = (selectedTenant, isOpen) => {
  if (isOpen) {
    return selectedTenant
        ? `Switch to ${selectedTenant?.name || 'a new tenant'}`
        : "Choose a tenant to switch into"
  } else {
    return 'Switch Tenant'
  }
}

const onClickSwitch = (selectedTenant, switchHandler, isOpen, openHandler, ) => {
  if (isOpen) {
    return selectedTenant ? switchHandler : null
  } else {
    return openHandler
  }
}

export default HintAndSave