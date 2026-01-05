<template>
  <div class="container mx-auto p-8">
    <h1 class="text-3xl font-bold mb-4">Nuxt SSR is working</h1>
    <p>Node.js version: {{ nodeVersion }}</p>
    <p>Database status: {{ dbStatus }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRuntimeConfig } from '#app'

const nodeVersion = ref('')
const dbStatus = ref('checking...')

onMounted(async () => {
  // Node version from environment (exposed via runtime config)
  const config = useRuntimeConfig()
  nodeVersion.value = config.public.nodeVersion || 'unknown'
  try {
    const res = await $fetch('/api/db-health')
    dbStatus.value = res.status === 'ok' ? 'ok' : 'error'
  } catch (e) {
    dbStatus.value = 'error'
  }
})
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
