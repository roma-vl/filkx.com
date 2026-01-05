import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient | null = null

export function useDb() {
    if (!prisma) {
        prisma = new PrismaClient()
    }
    return prisma
}
