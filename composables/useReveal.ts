import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'

export const useReveal = () => {
    const observer = ref<IntersectionObserver | null>(null)

    const initReveal = () => {
        if (!process.client) return

        observer.value = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active')
                }
            })
        }, { threshold: 0.1 })

        document.querySelectorAll('.reveal').forEach(el => observer.value?.observe(el))
    }

    const refreshReveal = () => {
        if (!process.client) return
        document.querySelectorAll('.reveal').forEach(el => observer.value?.observe(el))
    }

    onMounted(() => {
        initReveal()
    })

    // Watch for route changes to re-observe elements
    const route = useRoute()
    watch(() => route.path, () => {
        nextTick(() => {
            refreshReveal()
        })
    })

    onUnmounted(() => {
        observer.value?.disconnect()
    })

    return {
        refreshReveal
    }
}
