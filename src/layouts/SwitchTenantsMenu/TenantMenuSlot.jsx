import { useTenantsStore } from "@/stores/tenantsMenuStore"


const TenantMenuSlot = ({tenant}) => {
  const selectedTenant = useTenantsStore(state => state.selectedTenant)
  const setSelectedTenant = useTenantsStore(state => state.setSelectedTenant)
  const activeTenant = useTenantsStore(state => state.activetenant)
  const setActiveTenant = useTenantsStore(state => state.setActiveTenant)


  const handleClick = () => {
    if (selectedTenant === tenant) {
      setSelectedTenant(null)
    } else {
      setSelectedTenant(tenant)
    }
  }

  return (
    <div 
        className={`flex flex-col w-full h-[60px] border-b-1 border-b-lime-100/60 
                    relative p-2 text-white/50 justify-center font-primary cursor-pointer
                    ${selectedTenant?.id === tenant?.id ? 
                          'bg-success/60' 
                          : 'bg-frontegg-callout/20'}`}
        onClick={() => handleClick()}
    >
        <h3 className="text-xl inherit">{tenant?.name}</h3>
    </div>
  )
}

export default TenantMenuSlot