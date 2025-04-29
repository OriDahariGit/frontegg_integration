import { useTenantsStore } from "@/stores/tenantsMenuStore"


const TenantMenuSlot = ({tenant}) => {
  const selectedTenant = useTenantsStore(state => state.selectedTenant)
  const setSelectedTenant = useTenantsStore(state => state.setSelectedTenant)


  const handleClick = () => {
    if (selectedTenant === tenant) {
      setSelectedTenant(null)
    } else {
      setSelectedTenant(tenant)
    }
  }

  return (
    <div 
        className={`flex flex-col w-full h-slot-height border-b-1 border-b-lime-100/60 
                    relative text-white/60 hover:text-white/80 justify-center 
                    font-primary cursor-pointer text-center transition-m px-10
                    ${selectedTenant?.id === tenant?.id ? 
                          'bg-secondary/35 text-white/100' 
                          : 'bg-frontegg-callout/20'}`}
        onClick={() => handleClick()}
    >
        <h3 className="text-lg inherit">{tenant?.name}</h3>
    </div>
  )
}

export default TenantMenuSlot