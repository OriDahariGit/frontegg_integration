import { useEffect } from 'react'
import { useTenantsState } from '@frontegg/react'
import { useTenantsStore } from '@/stores/tenantsMenuStore'
// Components
import TenantMenuSlot from './TenantMenuSlot'
import ErrorMessage from '@/components/ErrorMessage'


const buildMenu = (tenants) => {
  return tenants 
    ? tenants.map((tenant, idx) => <TenantMenuSlot key={tenant.id} tenant={tenant} />)
    : (<ErrorMessage>
      Couldn't find any tenatns
    </ErrorMessage>)
}


const TenantList = () => {
  const { tenants, activeTenant } = useTenantsState()
  const setTenants = useTenantsStore(state => state?.setTenants)
  const setActiveTenant = useTenantsStore(state => state?.setActiveTenant)

  useEffect(() => {
    setTenants(tenants)
  }, [tenants, setTenants])

  useEffect(() => {
    setActiveTenant(tenants)
  }, [activeTenant, setActiveTenant])

  return (
    <div className='flex flex-col w-full h-full'>
      {buildMenu(tenants)}
    </div>
  )
}


export default TenantList