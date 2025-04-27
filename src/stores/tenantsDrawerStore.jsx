import { create } from "zustand";


const useTenantsDrawer = create((set) => {
    return {
        isOpened: false,
        open: () => set(() => ({isOpened: true})),
        close: () => set(() => ({isOpened: false})),
        toggleState: () => set(state => ({isOpened: !state}))
    }
})

export default useTenantsDrawer