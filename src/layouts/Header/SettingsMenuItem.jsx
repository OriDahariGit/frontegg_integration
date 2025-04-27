import { AdminPortal } from "@frontegg/react";
// Components
import SettingsIcon from "@/components/icons/SettingsIcon";
import { useSettingsHoverStore } from "@/stores";
import { useEffect } from "react";


const SettingsMenuItem = () => {
    const { isBtnHovered, isTxtHovered, setIsBtnHovered } = useSettingsHoverStore()
    let isAnyHovered = isBtnHovered || isTxtHovered

    useEffect(() => {
        isAnyHovered = isBtnHovered || isTxtHovered
    }, [isBtnHovered, isTxtHovered])
    

    return (
        <div className={`flex h-full justify-center aspect-square rounded-full menu-item
                        p-1 relative cursor-pointer hover:bg-frontegg-accent
                        bg-frontegg-lightpink`}
            onMouseEnter={() => {setIsBtnHovered(true)}}
            onMouseLeave={() => {setIsBtnHovered(false)}}
            onClick={() => AdminPortal.openHosted()}
        >
            <SettingsIcon isHovered={isAnyHovered} />
            { isBtnHovered ? (
                <p className={`border-1 bg-white border-frontegg-accent text-center text-black
                    top-9 px-2 text-sm rounded-full absolute shadow-frontegg-pinkhover 
                    shadow-sm text-nowrap ${isAnyHovered ? 'visible open-tooltip' : 'hidden'}`}
                >
                    Settings
                </p>
            ) : null }
        </div>
    );
};

export default SettingsMenuItem;
