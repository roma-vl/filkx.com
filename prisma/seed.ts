import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
    const passwordHash = await bcrypt.hash('11111111', 10)

    const user = await prisma.user.upsert({
        where: { email: 'admin@filkx.com' },
        update: {},
        create: {
            email: 'admin@filkx.com',
            passwordHash,
            role: 'admin'
        }
    })

    await prisma.systemSetting.upsert({
        where: { key: 'registration_enabled' },
        update: {},
        create: {
            key: 'registration_enabled',
            value: 'true'
        }
    })

    console.log('Seeded:', user.email)
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
