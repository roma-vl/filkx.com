export default defineEventHandler(async (event) => {
    const user = getAuthUser(event)
    if (!user) {
        return { user: null }
    }
    return { user }
})
