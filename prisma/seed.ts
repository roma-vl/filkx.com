import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@filkx.com'
    const adminPassword = process.env.ADMIN_PASSWORD || '11111111'
    const passwordHash = await bcrypt.hash(adminPassword, 10)

    const user = await prisma.user.upsert({
        where: { email: adminEmail },
        update: {},
        create: {
            email: adminEmail,
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
