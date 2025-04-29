import { useTenantsStore } from "../../stores/tenantsMenuStore"


const TenantMenuSlot = ({tenant}) => {
  const selectedTenant = useTenantsStore(state => state.selectedTenant)
  const setSelectedTenant = useTenantsStore(state => state.setSelectedTenant)
  const activeTenant = useTenantsStore(state => state.activeTenants)

  const handleClick = () => {
    console.log("Active Tenant", activeTenant)
    // setSelectedTenant(tenant)
  }
  
  return (
    <div 
        className={`flex flex-col w-full h-[50px] justify-between border-b-1 border-b-lime-100/60 
                    relative p-2 text-white/50
                    ${selectedTenant == tenant ? 'bg-success/70' : 'bg-frontegg-callout/20'}`}
        onClick={() => handleClick()}
    >
        <h3 className="text-xl">{tenant?.name}</h3>
    </div>
  )
}

export default TenantMenuSlot