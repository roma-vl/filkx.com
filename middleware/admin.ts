import { useAuth } from '~/composables/useAuth'

export default defineNuxtRouteMiddleware(async (to, from) => {
    const { user, fetchUser } = useAuth()

    // Always try to fetch session if state is empty (supports SSR)
    if (!user.value) {
        await fetchUser()
    }

    if (!user.value) {
        const localePath = useLocalePath()
        return navigateTo(localePath('/login'))
    }

    if (user.value.role !== 'admin') {
        const localePath = useLocalePath()
        return navigateTo(localePath('/'))
    }
})
