import { useAuth } from '~/composables/useAuth'

export default defineNuxtRouteMiddleware(async (to, from) => {
    const { user, fetchUser } = useAuth()

    // If on client and user state is empty, try to fetch session
    if (process.client && !user.value) {
        await fetchUser()
    }

    if (!user.value) {
        return navigateTo('/login')
    }

    if (user.value.role !== 'admin') {
        return navigateTo('/')
    }
})
