import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { H3Event } from 'h3'

export const hashPassword = async (password: string) => {
    return await bcrypt.hash(password, 10)
}

export const comparePassword = async (password: string, hash: string) => {
    return await bcrypt.compare(password, hash)
}

export const signToken = (payload: any) => {
    const config = useRuntimeConfig()
    return jwt.sign(payload, config.jwtSecret, { expiresIn: '7d' })
}

export const verifyToken = (token: string) => {
    const config = useRuntimeConfig()
    try {
        return jwt.verify(token, config.jwtSecret)
    } catch (e) {
        return null
    }
}

export const setAuthCookie = (event: H3Event, token: string) => {
    // Check if we are on HTTPS (proxied or direct)
    const protocol = getHeader(event, 'x-forwarded-proto') || 'http'
    const isSecure = protocol === 'https' || process.env.NODE_ENV === 'production'

    setCookie(event, 'auth_token', token, {
        httpOnly: true,
        secure: isSecure,
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/' // Ensure it's available for all routes
    })
}

export const getAuthUser = (event: H3Event) => {
    const token = getCookie(event, 'auth_token')
    if (!token) return null
    return verifyToken(token)
}
