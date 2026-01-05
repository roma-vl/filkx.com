export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { name, email, message } = body

    if (!name || !email || !message) {
        throw createError({
            statusCode: 400,
            statusMessage: 'All fields are required',
        })
    }

    try {
        const prisma = useDb()
        await prisma.contactSubmission.create({
            data: { name, email, message }
        })

        return { status: 'success' }
    } catch (error) {
        console.error("Contact form submission error:", error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to save submission',
        })
    }
})
