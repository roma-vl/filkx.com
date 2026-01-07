<template>
  <div class="reveal max-w-2xl">
    <h1 class="text-4xl font-display font-black text-white mb-6">{{ $t('admin.settings.title') }}</h1>
    <p class="text-gray-400 text-lg mb-12">{{ $t('admin.settings.subtitle') }}</p>
    
    <div class="space-y-8">
      <!-- Registration Control Card -->
      <div class="glass p-8 rounded-3xl border border-white/5 reveal">
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <ShieldAlert :size="24" />
            </div>
            <div>
              <h3 class="text-xl font-black text-white">{{ $t('admin.settings.registration.title') }}</h3>
              <p class="text-gray-500 text-xs">{{ $t('admin.settings.registration.desc') }}</p>
            </div>
          </div>
          
          <button 
            @click="toggleRegistration"
            class="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
            :class="[settings?.registration_enabled === 'true' ? 'bg-indigo-600' : 'bg-gray-700']"
          >
            <span 
              class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
              :class="[settings?.registration_enabled === 'true' ? 'translate-x-5' : 'translate-x-0']"
            ></span>
          </button>
        </div>
        
        <div class="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10">
          <p class="text-[10px] font-bold text-indigo-300 uppercase tracking-widest leading-relaxed">
            {{ $t('admin.settings.registration.warning') }}
          </p>
        </div>
      </div>

      <!-- Notifications Settings -->
      <div class="glass p-8 rounded-3xl border border-white/5 reveal">
        <div class="flex items-center gap-4 mb-8">
           <div class="w-12 h-12 rounded-2xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
              <Bell :size="24" />
            </div>
          <div>
            <h3 class="text-xl font-black text-white">{{ $t('admin.settings.notifications.title') }}</h3>
            <p class="text-gray-500 text-xs">{{ $t('admin.settings.notifications.desc') }}</p>
          </div>
        </div>

        <div class="space-y-6">
          <!-- Email Toggle -->
          <div class="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
            <div class="flex items-center gap-4">
              <Mail :size="20" class="text-gray-400" />
              <div>
                <h4 class="text-sm font-bold text-white">{{ $t('admin.settings.notifications.email') }}</h4>
                <p class="text-[10px] text-gray-500">{{ $t('admin.settings.notifications.email_desc') }}</p>
              </div>
            </div>
             <button 
              @click="toggleSetting('email_notifications_enabled')"
              class="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
              :class="[settings?.email_notifications_enabled === 'true' ? 'bg-violet-600' : 'bg-gray-700']"
            >
              <span 
                class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                :class="[settings?.email_notifications_enabled === 'true' ? 'translate-x-5' : 'translate-x-0']"
              ></span>
            </button>
          </div>

          <!-- Telegram Toggle -->
          <div class="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
             <div class="flex items-center gap-4">
              <Send :size="20" class="text-gray-400" />
              <div>
                <h4 class="text-sm font-bold text-white">{{ $t('admin.settings.notifications.telegram') }}</h4>
                <p class="text-[10px] text-gray-500">{{ $t('admin.settings.notifications.telegram_desc') }}</p>
              </div>
            </div>
             <button 
              @click="toggleSetting('telegram_notifications_enabled')"
              class="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
              :class="[settings?.telegram_notifications_enabled === 'true' ? 'bg-blue-500' : 'bg-gray-700']"
            >
              <span 
                class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                :class="[settings?.telegram_notifications_enabled === 'true' ? 'translate-x-5' : 'translate-x-0']"
              ></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Settings, ShieldAlert, Bell, Mail, Send } from 'lucide-vue-next'
import { useReveal } from '~/composables/useReveal'

definePageMeta({ 
  middleware: 'admin', 
  layout: 'admin' 
})

const { data: settings, refresh } = useFetch<any>('/api/admin/settings')
const { refreshReveal } = useReveal()

const toggleRegistration = async () => {
  await toggleSetting('registration_enabled')
}

const toggleSetting = async (key: string) => {
  const currentVal = settings.value?.[key] === 'true'
  const newValue = currentVal ? 'false' : 'true'
  
  // Optimistic update
  if (settings.value) {
    settings.value[key] = newValue
  }

  try {
    await $fetch('/api/admin/settings', {
      method: 'PATCH',
      body: { key, value: newValue }
    })
    await refresh()
  } catch (e) {
    console.error("Failed to update setting:", e)
    // Revert on failure
    if (settings.value) {
      settings.value[key] = String(currentVal)
    }
  }
}

onMounted(() => {
  refreshReveal()
})
</script>
