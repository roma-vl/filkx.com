import en from './locales/en.js'
import uk from './locales/uk.js'

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en,
        uk
    }
}))
