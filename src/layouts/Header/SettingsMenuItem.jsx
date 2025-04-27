import { useState, useContext, useEffect } from "react";
import { AdminPortal } from "@frontegg/react";
// Components
import SettingsIcon from "@/components/icons/SettingsIcon";
import { SettingsHoverContext } from "@/contexts/SettingsHoverContext"
import { useSettingsHover } from "@/stores";


const handleSettingsBtnClick = () => {
    AdminPortal.openHosted();
};


const SettingsMenuItem = () => {
    const [isHovered, setisHovered] = useState(false)
    const { isAnchorHovered } = useContext(SettingsHoverContext)

    return (
        <div className={`flex h-full justify-center aspect-square rounded-full menu-item
                        p-1 relative cursor-pointer hover:bg-frontegg-accent
                        ${isAnchorHovered ? 'bg-frontegg-accent/80 attention-flash-bg' : 'bg-frontegg-lightpink'}`}
            onMouseEnter={() => setisHovered(true)}
            onMouseLeave={() => setisHovered(false)}
            onClick={() => handleSettingsBtnClick()}
        >
            <SettingsIcon isHovered={(isAnchorHovered || isHovered)} />
            { (isHovered) ? (
                <p className={`border-1 bg-white border-frontegg-accent text-center text-black
                    top-9 px-2 text-sm rounded-full absolute shadow-frontegg-pinkhover 
                    shadow-sm text-nowrap ${(isHovered || isAnchorHovered) ? 'visible open-tooltip' : 'hidden'}`}
                >
                    Settings
                </p>
            ) : null }
        </div>
    );
};

export default SettingsMenuItem;
