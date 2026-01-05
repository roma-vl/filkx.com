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
        const db = useDb()
        await db.query(
            'INSERT INTO contact_submissions (name, email, message) VALUES ($1, $2, $3)',
            [name, email, message]
        )

        return { status: 'success' }
    } catch (error) {
        console.error("Contact form submission error:", error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to save submission',
        })
    }
})
