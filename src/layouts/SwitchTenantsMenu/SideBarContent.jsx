import { useTenantsStore } from '@/stores/tenantsMenuStore'
// Components
import TenantList from './TenantsList'
import HintAndSave from './HintAndSave'

const SideBarContent = () => {
    const { selectedTenant } = useTenantsStore()

    return (
        <div className='flex h-full w-full'>
            <div className='flex flex-col h-min w-full max-h-full overflow-hidden rounded-b-2xl 
                            box-content bg-tenants-bg/[0.97]'>
                <TenantList  />
                <HintAndSave />
            </div>
        </div>
    )
}

export default SideBarContent