import { useAuthActions } from '@frontegg/react'
import { useTenantsStore } from "@/stores/tenantsMenuStore";

const HintAndSave = () => {
  const selectedTenant = useTenantsStore(state => state.selectedTenant)
  const { switchTenant } = useAuthActions()

  const handleSwitchTenant = () => {
    switchTenant({tenantId: selectedTenant.id})
  }
    
  return (
    <div className='flex w-full h-[60px] items-center absolute bottom-0
                    cursor-pointer'
          onClick={selectedTenant ? handleSwitchTenant : null}
    >
      <div className={`flex justify-center text-white font-primary w-full 
                    h-full items-center text-center text-lg font-bold 
                    ${ selectedTenant ? 'bg-success cursor-pointer' : 'bg-dark cursor-default'}`}
      >
        {selectedTenant 
          ? `Switch to ${selectedTenant?.name || 'a new tenant'}`
          : "Choose a tenant to switch into"
        }
        </div>
    </div>
  )
}

export default HintAndSave