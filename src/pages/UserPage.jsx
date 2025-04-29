import UserBanner from '@/layouts/UserBanner/UserBanner'
import SideBar from '@/layouts/SwitchTenantsMenu/SideBar'

const UserPage = () => {

  return (
    <div className='flex w-full h-full relative'>
      <SideBar />
      <div className='flex flex-col w-full h-full items-center justify-center px-10 py-4'>
        <UserBanner />
      </div>
    </div>
  )
}

export default UserPage