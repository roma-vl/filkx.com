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
        const users = await prisma.user.findMany({
            select: {
                id: true,
                email: true,
                role: true,
                createdAt: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        })
        return users
    } catch (error) {
        console.error("Admin users fetch error:", error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to fetch users',
        })
    }
})
