import React, { useEffect, useState } from 'react'
import { useAuthUser } from '@frontegg/react'

// Components
import defaultImage from '@/assets/egg_96x400.png'


const UserProfileImage = ({imageUrl}) => {
  return (
    <div className={`flex h-full max-h-[150px] aspect-square justify-center items-center rounded-full font-beauty
            bg-white border-gray-100 border-4 overflow-hidden shadow-sm shadow-gray-400 text-center text-gray-400
            ${imageUrl ? '' : 'p-5'}`}
    >
      <img src={imageUrl || defaultImage} className='object-contain w-full rounded-full' alt="profile picture" />
    </div>
  )
}

export default UserProfileImage