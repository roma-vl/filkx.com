import { defineEventHandler } from 'h3'
import { useDb } from '../composables/useDb'

export default defineEventHandler(async (event) => {
    try {
        const { query } = useDb()
        await query('SELECT 1')
        return { status: 'ok' }
    } catch (e) {
        console.error('DB health check failed:', e)
        return { status: 'error' }
    }
})
