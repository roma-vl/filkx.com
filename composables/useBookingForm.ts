import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { bookingSchema, type BookingInput } from '~/shared/submission.schema'

export const useBookingForm = () => {
    const isSubmitted = ref(false)
    const isLoading = ref(false)
    const serverError = ref<string | null>(null)

    const { handleSubmit, errors, defineField, resetForm } = useForm<BookingInput>({
        validationSchema: toTypedSchema(bookingSchema),
        initialValues: {
            name: '',
            email: '',
            phone: '',
            preferredTime: '',
            description: '',
            source: 'booking_page',
            honeypot: ''
        }
    })

    const [name] = defineField('name')
    const [email] = defineField('email')
    const [phone] = defineField('phone')
    const [preferredTime] = defineField('preferredTime')
    const [description] = defineField('description')
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
            serverError.value = e.data?.statusMessage || 'Помилка при бронюванні. Спробуйте пізніше.'
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
        phone,
        preferredTime,
        description,
        honeypot,
        onSubmit
    }
}
