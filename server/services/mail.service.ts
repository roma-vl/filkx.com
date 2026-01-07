import nodemailer from 'nodemailer'

interface MailOptions {
    to: string
    subject: string
    html: string
}

export class MailService {
    private static transporter: any

    private static getTransporter() {
        if (!this.transporter) {
            const config = useRuntimeConfig()

            // Only initialize if host is configured
            if (!config.mail.host) {
                console.warn('Mail host not configured. Email sending disabled.')
                return null
            }

            this.transporter = nodemailer.createTransport({
                host: config.mail.host,
                port: Number(config.mail.port),
                secure: config.mail.port === '465',
                auth: {
                    user: config.mail.user,
                    pass: config.mail.pass,
                },
            })
        }
        return this.transporter
    }

    static async send(options: MailOptions) {
        const transporter = this.getTransporter()
        if (!transporter) return false

        const config = useRuntimeConfig()

        try {
            await transporter.sendMail({
                from: `"${config.mail.fromName}" <${config.mail.from}>`,
                to: options.to,
                subject: options.subject,
                html: options.html,
            })
            console.log(`Email sent to ${options.to}`)
            return true
        } catch (error) {
            console.error('Failed to send email:', error)
            return false
        }
    }

    static async sendSubmissionNotification(submission: any) {
        const config = useRuntimeConfig()
        if (!config.adminEmail) return

        const typeLabel = submission.type === 'BOOKING' ? 'Call Request' : 'Contact Inquiry'
        const subject = `[Filkx] New ${typeLabel}: ${submission.name}`

        const html = `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #4f46e5;">New ${typeLabel} Received</h2>
                <div style="background: #f3f4f6; padding: 20px; border-radius: 8px;">
                    <p><strong>Name:</strong> ${submission.name}</p>
                    <p><strong>Email:</strong> ${submission.email}</p>
                    ${submission.phone ? `<p><strong>Phone:</strong> ${submission.phone}</p>` : ''}
                    ${submission.preferredTime ? `<p><strong>Preferred Time:</strong> ${submission.preferredTime}</p>` : ''}
                    <hr style="border: 0; border-top: 1px solid #d1d5db; margin: 20px 0;">
                    <p><strong>Message:</strong></p>
                    <p style="white-space: pre-wrap;">${submission.message}</p>
                </div>
                <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
                    Source: ${submission.source || 'Direct'}
                </p>
            </div>
        `

        return await this.send({
            to: config.adminEmail,
            subject,
            html
        })
    }
}
