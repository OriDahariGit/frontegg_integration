import React, { useEffect, useState } from 'react'
import LogoIcon from '../icons/LogoIcon'

const UserProfileImage = ({user}) => {
  const [src, setSrc] = useState(user.profilePictureUrl || null)

  useEffect(() => {
    setSrc(user.profilePictureUrl || null)
  }, [user])

  return (
    <div className={`flex h-full min-h-[160px] aspect-square justify-center items-center rounded-full 
            bg-white border-gray-100 border-4 overflow-hidden shadow-sm shadow-frontegg-dark text-center text-gray-400
            ${src ? '' : 'p-5'}`}
    >
        {src ? <img src={src} className='object-contain w-full rounded-full' alt="Profile Picture" /> : <LogoIcon />}
    </div>
  )
}

export default UserProfileImage