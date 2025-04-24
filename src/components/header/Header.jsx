import React from 'react'

// Components
import SiteTitle from './SiteTitle'
import HeaderMenu from './HeaderMenu'
import LoginBtn from './LoginBtn'
import LogOutBtn from './LogoutBtn'
import { useAuth } from '@frontegg/react'


const Header = () => {
  const { isAuthenticated } = useAuth()

  return (
    <div className='w-full h-[50px] flex justify-between bg-white px-4 py-2 relative'>
      <HeaderMenu />
      <SiteTitle />
      {isAuthenticated ? <LogOutBtn /> : <LoginBtn />}
    </div>
  )
}

export default Header