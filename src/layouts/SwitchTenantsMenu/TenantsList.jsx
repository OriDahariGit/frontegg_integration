import { useEffect } from 'react'
import { useAuth } from '@frontegg/react'
import { useTenantsStore } from '@/stores/tenantsMenuStore'
// Components
import TenantMenuSlot from './TenantMenuSlot'
import ErrorMessage from '@/components/ErrorMessage'


const TenantList = () => {
  const tenants = useTenantsStore(state => state.tenants)
  const setTenants = useTenantsStore(state => state.setTenants)

  const { tenantsState, isLoading } = useAuth()

  useEffect(() => {
    if (!isLoading) {
      setTenants(tenantsState.tenants)
    }
  }, [setTenants, tenantsState])

  return (
    <div className='flex flex-col w-full h-full'>
      {buildMenu(tenants)}
    </div>
  )
}

// Helpers
const buildMenu = (tenants) => {
  return tenants 
    ? tenants.map((tenant) => <TenantMenuSlot key={tenant.id} tenant={tenant} />)
    : (<ErrorMessage>
      No Tenants :(
    </ErrorMessage>)
}


export default TenantList