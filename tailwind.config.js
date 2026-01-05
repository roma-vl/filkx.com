/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Manrope', 'system-ui', 'sans-serif'],
            },
            colors: {
                space: {
                    950: '#030507',
                    900: '#070b10',
                    800: '#0d121a',
                    700: '#151d29'
                }
            },
            animation: {
                'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 4s ease-in-out infinite',
                'spin-slow': 'spin 12s linear infinite',
                'spin-reverse': 'spin-reverse 15s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0) translateX(0)' },
                    '50%': { transform: 'translateY(-20px) translateX(10px)' },
                },
                glow: {
                    '0%, 100%': { opacity: '0.4', filter: 'blur(100px)' },
                    '50%': { opacity: '0.8', filter: 'blur(130px)' },
                },
                'spin-reverse': {
                    'from': { transform: 'rotate(360deg)' },
                    'to': { transform: 'rotate(0deg)' }
                }
            }
        },
    },
    plugins: [],
}
