import { create } from 'zustand'


const useSettingsHoverStore = create((set) => ({
    isBtnHovered: false,
    isTxtHovered: false,

    setIsBtnHovered: (value) => set((state) => ({ isBtnHovered: value })),
    setIsTxtHovered: (value) => set((state) => ({ isTxtHovered: value })),
}));


export default useSettingsHoverStore