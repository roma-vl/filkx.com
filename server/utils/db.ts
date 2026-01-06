export async function useDb() {
    // Dynamic import to avoid top-level evaluation issues
    const { default: pkg } = await import('@prisma/client')
    const { PrismaClient } = pkg
    const { PrismaPg } = await import('@prisma/adapter-pg')
    const { default: pg } = await import('pg')

    // globalThis pattern for HMR stability
    const globalForPrisma = globalThis as unknown as { prisma: any }

    if (!globalForPrisma.prisma) {
        const connectionString = process.env.DATABASE_URL
        if (!connectionString) {
            throw new Error('DATABASE_URL is not defined')
        }
        const pool = new pg.Pool({ connectionString })
        const adapter = new PrismaPg(pool)
        globalForPrisma.prisma = new PrismaClient({ adapter })
        console.log('Prisma Client initialized (ESM Dynamic)')
    }

    return globalForPrisma.prisma
}
