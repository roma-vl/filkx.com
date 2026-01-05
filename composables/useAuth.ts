export const useAuth = () => {
    const user = useState<any>('auth_user', () => null)
    const isLoading = useState('auth_loading', () => false)

    const fetchUser = async () => {
        // If user already exists in state, return it immediately
        if (user.value) return user.value

        isLoading.value = true
        try {
            // Use useFetch with a fixed key for proper hydration between SSR and CSR
            const { data } = await useFetch<any>('/api/auth/session', {
                key: 'auth_session_data'
            })

            if (data.value?.user) {
                user.value = data.value.user
            } else {
                user.value = null
            }
            return user.value
        } catch (e) {
            user.value = null
            return null
        } finally {
            isLoading.value = false
        }
    }

    const login = async (credentials: any) => {
        isLoading.value = true
        try {
            const data: any = await $fetch('/api/auth/login', {
                method: 'POST',
                body: credentials
            })
            user.value = data.user
            return data.user
        } finally {
            isLoading.value = false
        }
    }

    const register = async (data: any) => {
        isLoading.value = true
        try {
            const res: any = await $fetch('/api/auth/register', {
                method: 'POST',
                body: data
            })
            user.value = res.user
            return res.user
        } finally {
            isLoading.value = false
        }
    }

    const logout = async () => {
        await $fetch('/api/auth/logout', { method: 'POST' })
        user.value = null
        navigateTo('/login')
    }

    return {
        user,
        isLoading,
        fetchUser,
        login,
        register,
        logout
    }
}
