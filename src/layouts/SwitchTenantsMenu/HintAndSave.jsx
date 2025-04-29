import { useAuthActions } from '@frontegg/react'
import { useTenantsStore } from "@/stores/tenantsMenuStore";

const HintAndSave = () => {
  const selectedTenant = useTenantsStore(state => state.selectedTenant)
  const { switchTenant } = useAuthActions()

  const handleSwitchTenant = () => {
    switchTenant({tenantId: selectedTenant.id})
  }
    
  return (
    <div className={`flex w-full min-h-[60px] items-center h-full transition-m
            ${ selectedTenant ? 'bg-callout/50 cursor-pointer font-medium' 
                : 'cursor-default opacity-70'
            }`
          }
          onClick={selectedTenant ? handleSwitchTenant : null}
    >
      <div className='flex h-full w-full justify-center items-center  
                    text-white font-primary text-center text-md'>
        {selectedTenant 
          ? `Switch to ${selectedTenant?.name || 'a new tenant'}`
          : "Choose a tenant to switch into"
        }
        </div>
    </div>
  )
}

export default HintAndSave