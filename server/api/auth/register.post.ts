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
        const prisma = useDb()

        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email }
        })

        if (existingUser) {
            throw createError({
                statusCode: 400,
                statusMessage: 'User already exists'
            })
        }

        const passwordHash = await hashPassword(password)

        const user = await prisma.user.create({
            data: {
                email,
                passwordHash,
                role: 'admin'
            }
        })

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
        console.error('Registration error:', error)
        throw createError({
            statusCode: error.statusCode || 500,
            statusMessage: error.statusMessage || 'Internal server error'
        })
    }
})
