import { useAuth } from '~/composables/useAuth'

export default defineNuxtRouteMiddleware(async (to, from) => {
    const { user, fetchUser } = useAuth()

    // Always try to fetch session if state is empty (supports SSR)
    if (!user.value) {
        await fetchUser()
    }

    if (!user.value) {
        return navigateTo('/login')
    }

    if (user.value.role !== 'admin') {
        return navigateTo('/')
    }
})
