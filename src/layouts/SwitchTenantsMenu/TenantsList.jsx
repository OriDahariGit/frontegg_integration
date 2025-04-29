import { useEffect, useState } from 'react'
import { useTenantsActions, useAuth } from '@frontegg/react'
import { useTenantsStore } from '@/stores/tenantsMenuStore'
// Components
import TenantMenuSlot from './TenantMenuSlot'
import ErrorMessage from '@/components/ErrorMessage'


const buildMenu = (tenants) => {
  return tenants 
    ? tenants.map((tenant) => <TenantMenuSlot key={tenant.id} tenant={tenant} />)
    : (<ErrorMessage>
      No Tenants :(
    </ErrorMessage>)
}


const TenantList = () => {
  const tenants = useTenantsStore(state => state.tenants)
  const setTenants = useTenantsStore(state => state.setTenants)
  const setActiveTenant = useTenantsStore(state => state.setActiveTenant)

  const { loadTenants } = useTenantsActions()
  const { tenantsState } = useAuth()

  useEffect(() => {
    loadTenants().then(() => {
      setTenants(tenantsState.tenants)
      setActiveTenant(tenantsState?.activeTenant)
    })   
  }, [setTenants, setActiveTenant, loadTenants])

  const fetchTenants = async () => {
    await loadTenants()
  }

  return (
    <div className='flex flex-col w-full h-full'>
      {buildMenu(tenants)}
    </div>
  )
}


export default TenantList