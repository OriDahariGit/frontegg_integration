// Components
import defaultImage from '@/assets/egg_96x400.png'
import { useState } from 'react'


const UserProfileIcon = ({imageURL}) => {
  const [isValidImage , setIsValidImage ] = useState(imageURL)

  const handleImageError = () => {
    setIsValidImage(false)
  }

  return (
    <div className='flex flex-col h-full max-h-[200px] max-w-[200px] 
        aspect-square justify-center items-center rounded-full font-beauty
        bg-white border-frontegg-lightpink border-4 shadow-md shadow-frontegg-dark'
    >
      <img src={isValidImage ? imageURL : defaultImage} 
          className='flex object-contain w-full h-full
          justigy-center items-center aspect-square rounded-full text-center content-center' 
          alt="profile picture" 
          onError={handleImageError}
      />
    </div>
  )
}

export default UserProfileIcon