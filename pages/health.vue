<template>
    <div class="glass p-10 rounded-2xl border border-white/10 text-center max-w-md w-full">
      <div v-if="status === 'success'" class="text-green-400 text-5xl mb-4 animate-bounce">
        <CheckCircle :size="64" class="mx-auto" />
      </div>
      <div v-else class="text-yellow-400 text-5xl mb-4 animate-pulse">
        <Loader2 :size="64" class="mx-auto animate-spin" />
      </div>
      
      <h1 class="text-3xl font-black text-white mb-6">{{ $t('pages.health.title') }}</h1>
      
      <div class="space-y-4 text-left bg-black/20 p-6 rounded-xl font-mono text-sm text-gray-300">
        <p class="flex justify-between border-b border-white/5 pb-2">
          <span>{{ $t('pages.health.node') }}:</span>
          <span class="text-indigo-400 font-bold">{{ data?.api || $t('pages.health.checking') }}</span>
        </p>
        <p class="flex justify-between">
          <span>{{ $t('pages.health.db') }}:</span>
          <span :class="data?.db ? 'text-green-400' : 'text-red-400'" class="font-bold">
            {{ data?.db ? 'Connected' : 'Disconnected' }}
          </span>
        </p>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { CheckCircle, Loader2 } from 'lucide-vue-next'
const { t } = useI18n()

const status = ref('pending')
const data = ref({ api: '', db: false })

onMounted(async () => {
  const config = useRuntimeConfig()
  data.value.api = config.public.nodeVersion || 'v20.10.0' // Mock or real
  
  try {
    const res = await $fetch('/api/health').catch(() => ({ status: 'error' }))
    // If api not exists, mock it for now or assume error
    // Assuming backend exist
    data.value.db = res?.status === 'ok'
    status.value = res?.status === 'ok' ? 'success' : 'error'
  } catch (e) {
    status.value = 'error'
    data.value.db = false
  }
})
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
