import { useContext } from 'react'
import { MenuOpenContext } from './SideBar'
// Components
import ExpandIcon from '@/components/icons/ExpandIcon'

const ToggleMenuBtn = () => {
  const { isOpen, handleToggleClick } = useContext(MenuOpenContext)
  return (
    <div className={`flex w-slot-height aspect-square items-center justify-center
              bg-callout/70 absolute -right-slot-height transition-m`}
          onClick={handleToggleClick}
    >
          
      <ExpandIcon />
    </div>
  )
}

export default ToggleMenuBtn