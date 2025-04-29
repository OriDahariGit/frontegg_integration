// Components
import SideBarContent from './SideBarContent'
import ToggleMenuBtn from './ToggleMenuBtn'


const SideBar = () => {

    return (
        <div className="flex h-full min-w-fit absolute left-0 z-10">
            <SideBarContent />
            <ToggleMenuBtn />
        </div>
    )
}


export default SideBar