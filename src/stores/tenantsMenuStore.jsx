import { create } from "zustand";

export const useTenantsStore = create((set) => ({
    tenants: [],
    selectedTenant: null,
    activeTenant: null,

    setTenants: (tenants) => set(() => {
        return tenants ? ({tenants}) : {}
    }),
    setSelectedTenant: (tenant) => set(() => ({selectedTenant: tenant})),
    setActiveTenant: (tenant) => set(() => ({activeTenant: tenant}))
}))
