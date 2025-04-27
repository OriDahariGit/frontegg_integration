import { create } from 'zustand'


const useSettingsHover = create((set) => {
    return {
        isHovered: false,
        invert: () => set(state => ({isHovered: !state})),
        setTrue: () => set(() => ({isHovered: true})),
        setFalse: () => set(() => ({isHovered: false}))
    }
})

export default useSettingsHover;