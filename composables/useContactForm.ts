import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { contactSchema, type ContactInput } from '~/shared/submission.schema'

export const useContactForm = () => {
    const isSubmitted = ref(false)
    const isLoading = ref(false)
    const serverError = ref<string | null>(null)

    const { handleSubmit, errors, defineField, resetForm, setFieldValue } = useForm<ContactInput>({
        validationSchema: toTypedSchema(contactSchema),
        initialValues: {
            name: '',
            email: '',
            message: '',
            source: 'landing',
            honeypot: ''
        }
    })

    // Capture UTM parameters on mount
    onMounted(() => {
        const route = useRoute()
        const utmSource = route.query.utm_source as string
        const utmMedium = route.query.utm_medium as string
        const utmCampaign = route.query.utm_campaign as string

        if (utmSource || utmMedium || utmCampaign) {
            const sourceStr = [utmSource, utmMedium, utmCampaign].filter(Boolean).join(' / ')
            setFieldValue('source', sourceStr)
        }
    })

    // Define fields for easy binding
    const [name] = defineField('name')
    const [email] = defineField('email')
    const [message] = defineField('message')
    const [honeypot] = defineField('honeypot')

    const onSubmit = handleSubmit(async (values) => {
        isLoading.value = true
        serverError.value = null

        try {
            await $fetch('/api/contact', {
                method: 'POST',
                body: values
            })
            isSubmitted.value = true
            resetForm()
        } catch (e: any) {
            serverError.value = e.data?.statusMessage || 'Під час відправки сталася помилка. Спробуйте пізніше.'
        } finally {
            isLoading.value = false
        }
    })

    return {
        isSubmitted,
        isLoading,
        serverError,
        errors,
        name,
        email,
        message,
        honeypot,
        onSubmit
    }
}
