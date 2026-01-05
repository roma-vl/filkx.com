import { Pool } from 'pg'

let pool: Pool | null = null

export function useDb() {
    if (!pool) {
        const config = useRuntimeConfig()
        const connectionString = config.databaseUrl
        if (!connectionString) {
            throw new Error('DATABASE_URL is not set')
        }
        pool = new Pool({ connectionString })
    }
    return {
        query: (text: string, params?: any[]) => pool!.query(text, params)
    }
}
