export default defineEventHandler(async (event) => {
    const user = getAuthUser(event) as any
    if (!user || user.role !== 'admin') {
        throw createError({
            statusCode: 401,
            statusMessage: 'Unauthorized access'
        })
    }

    const id = getRouterParam(event, 'id')
    const body = await readBody(event)
    const { status } = body

    if (!id || !status) {
        throw createError({
            statusCode: 400,
            statusMessage: 'ID and status are required'
        })
    }

    try {
        const prisma = useDb()
        const updated = await prisma.contactSubmission.update({
            where: { id: parseInt(id) },
            data: { status }
        })

        return updated
    } catch (error) {
        console.error("Status update error:", error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to update status',
        })
    }
})
