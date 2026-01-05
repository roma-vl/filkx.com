export default defineEventHandler(async (event) => {
    const user = getAuthUser(event) as any
    if (!user || user.role !== 'admin') {
        throw createError({
            statusCode: 401,
            statusMessage: 'Unauthorized access'
        })
    }

    try {
        const prisma = useDb()
        const settings = await prisma.systemSetting.findMany()

        // Convert array to object for easier consumption
        return settings.reduce((acc: any, curr) => {
            acc[curr.key] = curr.value
            return acc
        }, {})
    } catch (error) {
        console.error("Admin settings fetch error:", error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to fetch settings',
        })
    }
})
