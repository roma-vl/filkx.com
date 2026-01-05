export default defineEventHandler(async (event) => {
    try {
        const prisma = useDb()
        await prisma.$queryRaw`SELECT 1`
        return { status: 'ok' }
    } catch (e) {
        console.error('DB health check failed:', e)
        return { status: 'error' }
    }
})
