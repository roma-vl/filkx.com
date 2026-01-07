export class TelegramService {
    static async sendMessage(message: string) {
        const config = useRuntimeConfig()
        const { botToken, chatId } = config.telegram

        if (!botToken || !chatId) {
            console.warn('Telegram bot not configured')
            return false
        }

        try {
            const url = `https://api.telegram.org/bot${botToken}/sendMessage`
            await $fetch(url, {
                method: 'POST',
                body: {
                    chat_id: chatId,
                    text: message,
                    parse_mode: 'HTML'
                }
            })
            console.log('Telegram message sent')
            return true
        } catch (error) {
            console.error('Failed to send Telegram message:', error)
            return false
        }
    }

    static async sendSubmissionNotification(submission: any) {
        const typeEmoji = submission.type === 'BOOKING' ? '📞' : '📩'
        const typeLabel = submission.type === 'BOOKING' ? 'Call Request' : 'Contact Inquiry'

        let text = `<b>${typeEmoji} New ${typeLabel}</b>\n\n`
        text += `👤 <b>Name:</b> ${submission.name}\n`
        text += `📧 <b>Email:</b> ${submission.email}\n`

        if (submission.phone) {
            text += `📱 <b>Phone:</b> ${submission.phone}\n`
        }

        if (submission.preferredTime) {
            text += `⏰ <b>Time:</b> ${submission.preferredTime}\n`
        }

        text += `\n📝 <b>Message:</b>\n${submission.message}\n`

        if (submission.source) {
            text += `\n🔗 Source: ${submission.source}`
        }

        return await this.sendMessage(text)
    }
}
