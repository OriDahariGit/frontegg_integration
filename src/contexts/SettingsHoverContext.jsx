import { createContext, useState } from "react";

export const SettingsHoverContext = createContext(false)

export const SettingsHover = ({children}) => {
    const [ isAnchorHovered, setIsAnchorHovered ] = useState(false)


    return (
        <SettingsHoverContext.Provider value={ {isAnchorHovered, setIsAnchorHovered} } >
            {children}
        </SettingsHoverContext.Provider>
    )
}