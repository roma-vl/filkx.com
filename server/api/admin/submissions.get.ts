import { SubmissionService } from '../../services/submission.service'
import { logger } from '../../utils/logger'

export default defineEventHandler(async (event) => {
    const user = getAuthUser(event) as any
    if (!user || user.role !== 'admin') {
        throw createError({
            statusCode: 401,
            statusMessage: 'Unauthorized access'
        })
    }

    try {
        return await SubmissionService.listAll()
    } catch (error) {
        logger.error(error, 'Admin fetch submissions error')
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to fetch submissions',
        })
    }
})
