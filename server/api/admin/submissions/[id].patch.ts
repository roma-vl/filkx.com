import { SubmissionService } from '../../../services/submission.service'
import { logger } from '../../../utils/logger'

export default defineEventHandler(async (event) => {
    const user = getAuthUser(event) as any
    if (!user || user.role !== 'admin') {
        throw createError({
            statusCode: 401,
            statusMessage: 'Unauthorized access'
        })
    }

    const id = getRouterParam(event, 'id')
    const body = await readBody(event)
    const { status } = body

    if (!id || !status) {
        throw createError({
            statusCode: 400,
            statusMessage: 'ID and status are required'
        })
    }

    try {
        return await SubmissionService.updateStatus(parseInt(id), status)
    } catch (error) {
        logger.error(error, 'Admin update submission status error')
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to update status',
        })
    }
})
