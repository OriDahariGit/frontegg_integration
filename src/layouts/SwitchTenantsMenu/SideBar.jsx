// Components
import TenantList from './TenantsList'
import HintAndSave from './HintAndSave'


const SideBar = () => {

    return (
            <div className='flex h-full min-w-[320px] max-w-full absolute 
                            z-10 rounded-b-xl overflow-hidden '
            >
                <div className='flex flex-col h-full w-full bg-tenants-bg/[0.99]'>
                    <TenantList  />
                    <HintAndSave />
                </div>
            </div>
    )
}

export default SideBar