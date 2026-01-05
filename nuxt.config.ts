import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    // Enable TypeScript support (default in Nuxt 3)
    typescript: {
        strict: true
    },
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    // Runtime config for environment variables
    runtimeConfig: {
        // Private keys that are only available server-side
        databaseUrl: process.env.DATABASE_URL || '',
        geminiApiKey: process.env.GEMINI_API_KEY || '',
        public: {
            nodeVersion: process.version
        }
    },
    // Nitro server options
    nitro: {
        // Enable server routes auto import
        preset: 'node-server'
    },
    // Build options
    build: {
        transpile: []
    },
    // Server listening port (default 3000)
    server: {
        port: 3000,
        host: '0.0.0.0'
    },
    // Vite configuration
    vite: {
        server: {
            allowedHosts: ['dev.filkx.com']
        }
    }
})
