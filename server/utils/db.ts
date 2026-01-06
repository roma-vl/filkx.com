import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const { PrismaClient } = require('@prisma/client')
import type { PrismaClient as PrismaClientType } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'

let prisma: PrismaClientType | null = null

export function useDb() {
    if (!prisma) {
        const connectionString = process.env.DATABASE_URL
        if (!connectionString) {
            throw new Error('DATABASE_URL is not defined')
        }
        const pool = new pg.Pool({ connectionString })
        const adapter = new PrismaPg(pool)
        prisma = new PrismaClient({ adapter })
    }
    return prisma
}
