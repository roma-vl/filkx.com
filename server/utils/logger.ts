import { appendFileSync, mkdirSync, existsSync } from 'fs'
import { join } from 'path'

const LOG_DIR = join(process.cwd(), 'storage', 'logs')
const LOG_FILE = join(LOG_DIR, 'filkx.log')

// Ensure log directory exists
if (!existsSync(LOG_DIR)) {
    try {
        mkdirSync(LOG_DIR, { recursive: true })
    } catch (e) {
        console.error('Failed to create log directory:', e)
    }
}

const formatMessage = (level: string, message: string, context?: any) => {
    const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19)
    let contextStr = ''

    if (context) {
        try {
            if (context instanceof Error) {
                contextStr = `\nStack: ${context.stack}`
            } else {
                contextStr = ` ${JSON.stringify(context)}`
            }
        } catch (e) {
            contextStr = ' [Circular/Invalid Context]'
        }
    }

    return `[${timestamp}] ${level.toUpperCase()}: ${message}${contextStr}\n`
}

const writeLog = (level: string, message: string, context?: any) => {
    const logLine = formatMessage(level, message, context)

    // 1. Write to Console
    if (level === 'error') {
        console.error(logLine.trim())
    } else {
        console.log(logLine.trim())
    }

    // 2. Write to File
    try {
        appendFileSync(LOG_FILE, logLine)
    } catch (e) {
        console.error('Failed to write to log file:', e)
    }
}

export const logger = {
    info: (context: any, message?: string) => {
        // Handle (obj, msg) or (msg) signature somewhat flexibly, 
        // though our codebase uses (obj, msg) primarily.
        if (typeof context === 'string' && !message) {
            writeLog('info', context)
        } else {
            writeLog('info', message || 'Info', context)
        }
    },
    warn: (context: any, message?: string) => writeLog('warning', message || 'Warning', context),
    error: (error: any, message?: string) => writeLog('error', message || 'Error', error)
}
