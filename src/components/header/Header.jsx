import React from 'react'

// Components
import SiteTitle from './SiteTitle'
import HeaderMenu from './HeaderMenu'
import LogInBtn from './LoginBtn'
import LogOutBtn from './LogoutBtn'
import { useAuth } from '@frontegg/react'


const Header = () => {
  const { isAuthenticated } = useAuth()

  return (
    <div className='w-full h-[50px] flex justify-between bg-white px-5 py-2 relative z-50'>
      <HeaderMenu />
      <SiteTitle />
      {isAuthenticated ? <LogOutBtn /> : <LogInBtn />}
    </div>
  )
}

export default Header