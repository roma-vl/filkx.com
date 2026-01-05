export default defineEventHandler(async (event) => {
    // In a real app, you would add authentication middleware here
    try {
        const db = useDb()
        const { rows } = await db.query(
            'SELECT * FROM contact_submissions ORDER BY created_at DESC'
        )
        return rows
    } catch (error) {
        console.error("Admin fetch error:", error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to fetch submissions',
        })
    }
})
