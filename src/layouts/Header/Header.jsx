import React from 'react'
import { useAuth } from '@frontegg/react'
// Components
import SiteTitle from './SiteTitle'
import HeaderMenu from './HeaderMenu'
import LogInBtn from '@/components/LogInBtn'
import LogOutBtn from '@/components/LogoutBtn'


const Header = () => {
  const { isAuthenticated } = useAuth()

  return (
    <div className='grid grid-cols-3 w-full h-[50px] justify-between bg-white shadow-sm 
        shadow-gray-600/20 px-5 py-2 fixed z-40'>
          <div className="flex">
            <HeaderMenu />
          </div>
          <div className="flex justify-center">
            <SiteTitle />
          </div>
          <div className="flex h-full justify-end">
            {isAuthenticated ? <LogOutBtn /> : <LogInBtn  />}
          </div>
    </div>
  )
}

export default Header