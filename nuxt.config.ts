import { defineNuxtConfig } from 'nuxt/config'
import en from './locales/en.js'
import uk from './locales/uk.js'

export default defineNuxtConfig({
    // Enable TypeScript support (default in Nuxt 3)
    typescript: {
        strict: true
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n'
    ],
    i18n: {
        locales: [
            { code: 'en', iso: 'en-US', name: 'English' },
            { code: 'uk', iso: 'uk-UA', name: 'Українська' }
        ],
        defaultLocale: 'en',
        strategy: 'prefix',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root',
        },
        vueI18n: './i18n.config.ts'
    },
    css: ['~/assets/css/main.css'],
    app: {
        head: {
            title: 'Filkx Studio | Scaling SaaS Visions',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'High-end software engineering studio for scalable SaaS ecosystems.' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ]
        }
    },
    runtimeConfig: {
        // Private keys that are only available server-side
        databaseUrl: process.env.DATABASE_URL || '',
        geminiApiKey: process.env.GEMINI_API_KEY || '',
        geminiModel: process.env.GEMINI_MODEL || 'gemini-1.5-flash',
        jwtSecret: process.env.JWT_SECRET || 'fallback-secret-for-dev',
        adminEmail: process.env.ADMIN_EMAIL,
        adminPassword: process.env.ADMIN_PASSWORD,

        // Notification Config
        mail: {
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
            from: process.env.MAIL_FROM_ADDRESS || 'noreply@filkx.com',
            fromName: process.env.MAIL_FROM_NAME || 'Filkx System'
        },
        telegram: {
            botToken: process.env.TELEGRAM_BOT_TOKEN,
            chatId: process.env.TELEGRAM_CHAT_ID
        },

        public: {
            appUrl: process.env.NUXT_PUBLIC_APP_URL || 'http://localhost:3000',
            nodeVersion: process.version
        }
    },
    // Nitro server options
    nitro: {
        preset: 'node-server'
    },
    // Build options
    build: {
        transpile: []
    },
    // Server listening port (default 3000)
    devServer: {
        port: 3000,
        host: '0.0.0.0'
    },
    // Vite configuration
    vite: {
        server: {
            allowedHosts: process.env.ALLOWED_HOSTS ? process.env.ALLOWED_HOSTS.split(',') : ['dev.filkx.com', 'localhost']
        }
    }
})
