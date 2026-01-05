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
        const submissions = await prisma.contactSubmission.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        })
        return submissions
    } catch (error) {
        console.error("Admin fetch error:", error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to fetch submissions',
        })
    }
})
