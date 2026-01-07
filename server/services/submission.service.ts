import { useDb } from '../utils/db'
import { logger } from '../utils/logger'
import type { ContactInput, BookingInput } from '../../shared/submission.schema'

export class SubmissionService {
    static async create(data: ContactInput | BookingInput, metadata: { ip?: string, userAgent?: string }) {
        const prisma = await useDb()

        logger.info({ email: data.email }, 'Processing new submission')

        // Map BookingInput fields to Submission model if it's a booking
        const isBooking = 'phone' in data

        const submission = await prisma.submission.create({
            data: {
                name: data.name,
                email: data.email,
                phone: isBooking ? (data as BookingInput).phone : null,
                message: isBooking ? (data as BookingInput).description : (data as ContactInput).message,
                preferredTime: isBooking ? (data as BookingInput).preferredTime : null,
                type: isBooking ? 'BOOKING' : 'CONTACT',
                source: data.source || (isBooking ? 'booking_page' : 'direct'),
                ip: metadata.ip,
                userAgent: metadata.userAgent,
                status: 'NEW'
            }
        })

        logger.info({ submissionId: submission.id, type: submission.type }, 'Submission saved successfully')

        return submission
    }

    static async listAll() {
        const prisma = await useDb()
        return prisma.submission.findMany({
            orderBy: { createdAt: 'desc' }
        })
    }

    static async updateStatus(id: number, status: any) {
        const prisma = await useDb()
        return prisma.submission.update({
            where: { id },
            data: { status }
        })
    }
}
