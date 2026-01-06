import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    // Enable TypeScript support (default in Nuxt 3)
    typescript: {
        strict: true
    },
    modules: [
        '@nuxtjs/tailwindcss'
    ],
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
        public: {
            appUrl: process.env.NUXT_PUBLIC_APP_URL || 'http://localhost:3000',
            nodeVersion: process.version
        }
    },
    // Nitro server options
    nitro: {
        // Enable server routes auto import
        preset: 'node-server',
        externals: {
            external: ['@prisma/client', '@prisma/adapter-pg', 'pg', '@prisma/config']
        }
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
