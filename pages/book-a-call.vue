<template>
  <div class="min-h-screen bg-space-950 pt-24 md:pt-32 pb-12 md:pb-20 px-6">
    <div class="container mx-auto max-w-2xl">
      <div class="glass rounded-[32px] md:rounded-[48px] border border-white/10 p-8 md:p-16 shadow-2xl relative overflow-hidden">
        <div class="absolute top-0 right-0 p-8 opacity-10">
          <PhoneOutgoing :size="80" class="md:hidden" />
          <PhoneOutgoing :size="120" class="hidden md:block" />
        </div>

        <!-- Back Button -->
        <NuxtLink :to="localePath('/')" class="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-2 rounded-full border border-white/10 glass text-gray-400 hover:text-white transition-all duration-300 text-[10px] uppercase font-black tracking-widest no-underline group mb-6 md:mb-8">
          <ArrowLeft :size="14" class="group-hover:-translate-x-1 transition-transform" />
          {{ $t('common.back') }}
        </NuxtLink>

        <Transition name="fade" mode="out-in">
          <div v-if="isSubmitted" class="text-center py-6 md:py-10 animate-fade-in">
            <div class="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-green-500/20 mb-6 md:mb-8">
              <CheckCircle class="text-green-400" :size="48" />
            </div>
            <h1 class="text-3xl md:text-4xl font-display font-black text-white mb-4">{{ $t('pages.book_call.success_title') }}</h1>
            <p class="text-gray-400 text-base md:text-lg mb-8 md:mb-10">{{ $t('pages.book_call.success_desc') }}</p>
            <NuxtLink :to="localePath('/')" class="text-indigo-400 font-bold uppercase tracking-widest hover:text-white transition-colors">{{ $t('common.back_home') }}</NuxtLink>
          </div>

          <div v-else>
            <h1 class="text-3xl md:text-4xl font-display font-black text-white mb-2">{{ $t('pages.book_call.title') }}</h1>
            <p class="text-gray-400 text-sm md:text-base mb-8 md:mb-10">{{ $t('pages.book_call.desc') }}</p>

            <form @submit.prevent="onSubmit" class="space-y-5 md:space-y-6">
              <div v-if="serverError" class="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-3">
                <AlertCircle :size="18" />
                {{ serverError }}
              </div>

              <div class="space-y-2">
                <label class="text-[10px] font-black text-gray-500 uppercase tracking-widest flex justify-between">
                  {{ $t('pages.book_call.form.name') }}
                  <span v-if="errors.name" class="text-red-400 lowercase italic">{{ errors.name }}</span>
                </label>
                <input v-model="name" type="text" :placeholder="$t('pages.book_call.form.placeholders.name')" class="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-indigo-500 transition-all duration-300">
              </div>

              <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="text-[10px] font-black text-gray-500 uppercase tracking-widest flex justify-between">
                    {{ $t('pages.book_call.form.email') }}
                    <span v-if="errors.email" class="text-red-400 lowercase italic">{{ errors.email }}</span>
                  </label>
                  <input v-model="email" type="email" :placeholder="$t('pages.book_call.form.placeholders.email')" class="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-indigo-500 transition-all duration-300">
                </div>
                <div class="space-y-2">
                  <label class="text-[10px] font-black text-gray-500 uppercase tracking-widest flex justify-between">
                    {{ $t('pages.book_call.form.phone') }}
                    <span v-if="errors.phone" class="text-red-400 lowercase italic">{{ errors.phone }}</span>
                  </label>
                  <input v-model="phone" type="text" :placeholder="$t('pages.book_call.form.placeholders.phone')" class="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-indigo-500 transition-all duration-300">
                </div>
              </div>

              <div class="space-y-2">
                <label class="text-[10px] font-black text-gray-500 uppercase tracking-widest flex justify-between">
                  {{ $t('pages.book_call.form.time') }}
                  <span v-if="errors.preferredTime" class="text-red-400 lowercase italic">{{ errors.preferredTime }}</span>
                </label>
                <input v-model="preferredTime" type="text" :placeholder="$t('pages.book_call.form.placeholders.time')" class="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-indigo-500 transition-all duration-300">
              </div>

              <div class="space-y-2">
                <label class="text-[10px] font-black text-gray-500 uppercase tracking-widest flex justify-between">
                  {{ $t('pages.book_call.form.desc') }}
                  <span v-if="errors.description" class="text-red-400 lowercase italic">{{ errors.description }}</span>
                </label>
                <textarea v-model="description" rows="4" :placeholder="$t('pages.book_call.form.placeholders.desc')" class="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-indigo-500 transition-all duration-300 resize-none"></textarea>
              </div>

              <!-- Honeypot -->
              <input v-model="honeypot" type="text" class="hidden" tabindex="-1" autocomplete="off">

              <button
                type="submit"
                :disabled="isLoading"
                class="w-full flex items-center justify-center gap-4 py-6 rounded-2xl bg-indigo-50/95 text-space-950 border border-transparent hover:border-indigo-500/50 hover:bg-indigo-950 hover:text-white font-black text-xl uppercase tracking-widest transition-all duration-500 shadow-xl active:scale-95 border-none cursor-pointer outline-none disabled:opacity-50"
              >
                <Loader2 v-if="isLoading" class="animate-spin" />
                <span v-else class="flex items-center gap-3">
                  {{ $t('pages.book_call.form.submit') }} <PhoneOutgoing :size="22" />
                </span>
              </button>
            </form>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhoneOutgoing, CheckCircle, Loader2, AlertCircle, ArrowLeft } from 'lucide-vue-next'
import { useBookingForm } from '~/composables/useBookingForm'

const {
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
} = useBookingForm()

const localePath = useLocalePath()

useHead({
  title: 'Забронювати дзвінок | Filkx Studio',
  meta: [
    { name: 'description', content: 'Залиште ваші контакти для детальної консультації.' }
  ]
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
