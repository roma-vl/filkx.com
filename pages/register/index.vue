<template>
  <div class="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-grid pt-20">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="w-full max-w-md reveal">
      <div class="text-center mb-12">
        <NuxtLink :to="localePath('/')" class="inline-block mb-8 group">
          <div class="w-16 h-16 rounded-2xl bg-indigo-600 grid place-items-center text-white shadow-[0_0_30px_rgba(79,70,229,0.4)] group-hover:scale-110 transition-transform">
            <IconsLogo :size="32" />
          </div>
        </NuxtLink>
        <h1 class="text-4xl font-display font-black text-white mb-2">{{ $t('auth.register.title') }}</h1>
        <p class="text-gray-500 font-medium tracking-wide uppercase text-[10px]">{{ $t('auth.register.subtitle') }}</p>
      </div>

      <div class="glass p-8 md:p-10 rounded-[40px] border border-white/5 shadow-2xl">
        <form @submit.prevent="handleRegister" class="space-y-6">
          <div class="space-y-2">
            <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">{{ $t('auth.register.email') }}</label>
            <input
              v-model="form.email"
              type="email"
              required
              placeholder="name@filkx.com"
              class="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-indigo-500 transition-all duration-300"
            />
          </div>
          <div class="space-y-2">
            <label class="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">{{ $t('auth.register.password') }}</label>
            <input
              v-model="form.password"
              type="password"
              required
              placeholder="••••••••"
              class="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-indigo-500 transition-all duration-300"
            />
          </div>

          <div v-if="error" class="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium">
            {{ error }}
          </div>

          <button
            type="submit"
            :disabled="isLoading"
            class="w-full py-6 rounded-2xl bg-indigo-600 text-white font-black text-xs uppercase tracking-[0.2em] hover:bg-indigo-500 transition-all duration-500 flex items-center justify-center gap-3 disabled:opacity-50 border-none cursor-pointer outline-none shadow-xl shadow-indigo-500/10 active:scale-95 mt-4"
          >
            <Loader2 v-if="isLoading" class="animate-spin" :size="18" />
            <UserPlus v-else :size="18" />
            {{ isLoading ? $t('auth.register.loading') : $t('auth.register.submit') }}
          </button>
        </form>

        <div class="mt-8 pt-8 border-t border-white/5 text-center">
          <p class="text-gray-500 text-xs font-medium">
            {{ $t('auth.register.has_account') }}
            <NuxtLink :to="localePath('/login')" class="text-indigo-400 hover:text-indigo-300 font-black transition-colors ml-1">{{ $t('auth.register.sign_in') }}</NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserPlus, Loader2 } from 'lucide-vue-next'
import { useAuth } from '~/composables/useAuth'

definePageMeta({
  layout: 'default'
})

const { register } = useAuth()
const { t } = useI18n()
const localePath = useLocalePath()
const form = reactive({
  email: '',
  password: ''
})
const isLoading = ref(false)
const error = ref('')

const handleRegister = async () => {
  isLoading.value = true
  error.value = ''
  try {
    await register(form)
    navigateTo(localePath('/admin'))
  } catch (e: any) {
    error.value = e.data?.statusMessage || t('auth.register.error_generic')
  } finally {
    isLoading.value = false
  }
}
</script>
