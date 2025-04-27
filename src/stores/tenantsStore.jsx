import { create } from "zustand";
import { useTenantsActions, useAuth } from "@frontegg/react";

const { loadTenants } = useTenantsActions()

const getUserTenants = () => {
    loadTenants()
}

await getUserTenants().then(resolve => console.log(resolve))

const tenantStore = (set, get) => ({
    tenants: [],
    activeTenant: undefined,

    fetchTenants: async () => {
        const tenants = await loadTenants()
            .then(res => console.log(res))
        set(() => ({ tenants }))
    },
    setActiveTenant: (tenantId) => set((state) => {
        const index = state.tenants.find((t) => t.tenantId === tenantId)
        if (index !== undefined) {
            return { activeTenant: tenantId }
        } else {
            return {}
        }
      }),
    getActiveTenant: () => {
        const { tenants, activeTenant } = get()
        return tenants[activeTenant]
    },
})

const useTenantStore = create(tenantStore)

export default useTenantStore