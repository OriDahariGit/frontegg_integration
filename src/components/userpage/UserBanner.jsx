import React from 'react'
import { useAuth } from '@frontegg/react'

// Components
import UserProfileImage from './UserProfileImage'


const UserBanner = () => {
    const { user } = useAuth()
    
    return (
        <div className='flex flex-col w-full h-[250px] bg-white p-4 rounded-xl items-center justify-center gap-5
                shadow-frontegg-pinkhover shadow-lg backdrop-blur-xl'>
            <UserProfileImage user={user} />
            <h2 className="text-3xl text-center font-frontegg">Hello <span className='font-semibold'>{user.name}</span></h2>
        </div>
    )
}

export default UserBanner