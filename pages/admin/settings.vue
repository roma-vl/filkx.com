<template>
  <div class="reveal max-w-2xl">
    <h1 class="text-4xl font-display font-black text-white mb-6">System Settings</h1>
    <p class="text-gray-400 text-lg mb-12">Global configurations for the Filkx Studio platform.</p>
    
    <div class="glass p-20 rounded-[48px] border border-white/5 text-center">
      <Settings :size="64" class="text-indigo-500/20 mx-auto mb-6" />
      <h3 class="text-xl font-black text-white mb-2">Settings Panel</h3>
      <p class="text-gray-500 text-sm">Deployment, API keys, and notification settings are in progress.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Settings, ShieldAlert, Bell } from 'lucide-vue-next'
import { useReveal } from '~/composables/useReveal'

definePageMeta({ 
  middleware: 'admin', 
  layout: 'admin' 
})

const { refreshReveal } = useReveal()

onMounted(() => {
  refreshReveal()
})

const channels = [
  { name: 'Admin Email', status: 'Active' },
  { name: 'Telegram Bot', status: 'Disabled' },
  { name: 'Slack Hook', status: 'Disabled' }
]
</script>
