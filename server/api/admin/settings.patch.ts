export default defineEventHandler(async (event) => {
    const user = getAuthUser(event) as any
    if (!user || user.role !== 'admin') {
        throw createError({
            statusCode: 401,
            statusMessage: 'Unauthorized access'
        })
    }

    const { key, value } = await readBody(event)

    if (!key || value === undefined) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Key and value are required'
        })
    }

    try {
        const prisma = useDb()
        const setting = await prisma.systemSetting.upsert({
            where: { key },
            update: { value: String(value) },
            create: { key, value: String(value) }
        })
        return setting
    } catch (error) {
        console.error("Admin settings update error:", error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to update setting',
        })
    }
})
