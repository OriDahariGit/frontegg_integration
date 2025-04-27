// Components
import defaultImage from '@/assets/gangster-egg.png'
import { useAuth } from '@frontegg/react'
import { useEffect, useState } from 'react'


const UserProfileIcon = () => {
  const { user } = useAuth()
  const [imgSrc, setImgSrc] = useState(user?.profilePictureUrl || defaultImage)

  useEffect(() => {
    setImgSrc(user?.profilePictureUrl || defaultImage)
  }, [user])

  return (
    <div className='flex flex-col h-full max-h-[200px] max-w-[200px] 
        aspect-square justify-center items-center rounded-full font-beauty
        bg-white border-frontegg-lightpink border-4 shadow-md shadow-frontegg-dark'
    >
      {imgSrc ? (<img src={imgSrc} 
        className='flex object-contain w-full h-full
        justigy-center items-center aspect-square rounded-full text-center' 
        alt="profile picture" 
        onError={() => setImgSrc(defaultImage)}
      />) : (<img src={defaultImage} 
        className='flex object-contain w-full h-full
        justigy-center items-center aspect-square rounded-full text-center'
        alt="default picture"
        onError={() => setImgSrc(defaultImage)}
      />)}
    </div>
  )
}

export default UserProfileIcon