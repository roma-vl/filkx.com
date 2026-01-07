import { contactSchema, bookingSchema } from '../../shared/submission.schema'
import { SubmissionService } from '../services/submission.service'
import { logger } from '../utils/logger'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const ip = getHeader(event, 'x-forwarded-for') || event.node.req.socket.remoteAddress
    const userAgent = getHeader(event, 'user-agent')

    try {
        // 1. Detect type and Validate
        // If 'phone' is present, we assume it's a booking request
        const isBooking = !!body.phone
        const schema = isBooking ? bookingSchema : contactSchema
        const validatedData = schema.parse(body)

        // 2. Process via Service
        await SubmissionService.create(validatedData, { ip, userAgent })

        return { status: 'success' }
    } catch (error: any) {
        if (error.name === 'ZodError') {
            logger.warn({ errors: error.errors }, 'Validation failed for submission')
            throw createError({
                statusCode: 400,
                statusMessage: 'Validation Error',
                data: error.errors
            })
        }

        logger.error(error, 'Form submission error')
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to save submission',
        })
    }
})
