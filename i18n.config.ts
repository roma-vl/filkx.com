import en from './locales/en.js'
import uk from './locales/uk.js'

export default defineI18nConfig(() => ({
    legacy: false,
    fallbackLocale: 'en',
    messages: {
        en,
        uk
    }
}))
