import React, { useEffect, useState } from 'react'
import { useAuthUser } from '@frontegg/react'

// Components
import defaultImage from '../../assets/egg_96x400.png'


const UserProfileImage = () => {
  const { user } = useAuthUser()
  const [src, setSrc] = useState(user?.profilePictureUrl)

  const updateImageSource = () => {
    if (!src) {
      setSrc(user?.profilePictureUrl)
    }
  }

  useEffect(() => {
    updateImageSource()
  }, [user])
  
  const ProfileImage = () => {
    return (<img src={src || defaultImage} className='object-contain w-full rounded-full' alt="profile picture" />)
  }
  return (
    <div className={`flex h-full min-h-[160px] aspect-square justify-center items-center rounded-full font-beauty
            bg-white border-gray-100 border-4 overflow-hidden shadow-sm shadow-frontegg-dark text-center text-gray-400
            ${src ? '' : 'p-5'}`}
    >
      <ProfileImage />
    </div>
  )
}

export default UserProfileImage