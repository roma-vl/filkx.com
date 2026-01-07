<template>
  <div class="min-h-screen bg-space-950 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
    <!-- Overlay Loader -->
    <Loader :loading="isLoading" />

    <div class="relative z-10 flex flex-col min-h-screen">
      <Navbar />
      <main class="flex-grow">
        <slot />
      </main>
      <Footer />
    </div>

    <!-- Global Mesh Decor -->
    <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div class="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div class="absolute bottom-1/4 -right-20 w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-[150px] animate-pulse-slow" style="animation-delay: 2s"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAuth } from '~/composables/useAuth'
import { useReveal } from '~/composables/useReveal'

const isLoading = ref(true)
const { fetchUser } = useAuth()
const { refreshReveal } = useReveal()

fetchUser()

onMounted(async () => {
  setTimeout(() => {
    isLoading.value = false
    setTimeout(() => {
      refreshReveal()
    }, 100)
  }, 1000)
})
</script>
