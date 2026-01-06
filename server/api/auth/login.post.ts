export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { email, password } = body

    if (!email || !password) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Email and password are required'
        })
    }

    try {
        const prisma = await useDb()

        const user = await prisma.user.findUnique({
            where: { email }
        })

        if (!user || !(await comparePassword(password, user.passwordHash))) {
            throw createError({
                statusCode: 401,
                statusMessage: 'Invalid email or password'
            })
        }

        const token = signToken({ id: user.id, email: user.email, role: user.role })
        setAuthCookie(event, token)

        return {
            user: {
                id: user.id,
                email: user.email,
                role: user.role
            }
        }
    } catch (error: any) {
        console.error('Login error:', error)
        throw createError({
            statusCode: error.statusCode || 500,
            statusMessage: error.statusMessage || 'Internal server error'
        })
    }
})
