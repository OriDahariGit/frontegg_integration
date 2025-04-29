import { useEffect, useState } from "react";
import { AdminPortal } from "@frontegg/react";
// Components
import SettingsIcon from "@/components/icons/SettingsIcon";


const SettingsMenuItem = () => {
    const [isBtnHovered, setIsBtnHovered] = useState(false)

    useEffect(() => {

    }, [isBtnHovered])
    

    return (
        <div className={`flex h-full justify-center aspect-square rounded-full menu-item
                        p-1 relative cursor-pointer hover:bg-frontegg-accent
                        bg-frontegg-lightpink`}
            onMouseEnter={() => {setIsBtnHovered(true)}}
            onMouseLeave={() => {setIsBtnHovered(false)}}
            onClick={() => AdminPortal.openHosted()}
        >
            <SettingsIcon isHovered={isBtnHovered} />
            { isBtnHovered ? (
                <p className={`border-1 bg-white border-frontegg-accent text-center text-black
                    absolute top-9 -left-2 px-2 text-sm rounded-full 
                    shadow-frontegg-pinkhover shadow-sm text-nowrap`}
                >
                    Admin Portal
                </p>
            ) : null }
        </div>
    );
};

export default SettingsMenuItem;
