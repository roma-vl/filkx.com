<template>
  <section id="contact" class="py-24 lg:py-40 px-6">
    <div class="container mx-auto max-w-5xl">
      <div class="glass rounded-[32px] md:rounded-[48px] border border-white/10 overflow-hidden shadow-2xl reveal relative group">
        <div class="grid lg:grid-cols-2">
          <!-- AI Brainstorming Column -->
          <div class="p-8 md:p-16 bg-gradient-to-br from-indigo-950/40 to-space-950 lg:border-r border-white/10">
            <div class="flex items-center gap-4 mb-6 md:mb-8">
              <Sparkles class="text-indigo-400" :size="32" />
              <h3 class="text-2xl md:text-3xl font-display font-black text-white">{{ $t('contact.ai_column.title') }}</h3>
            </div>
            <p class="text-gray-400 mb-8 md:mb-10 text-sm md:text-base leading-relaxed">{{ $t('contact.ai_column.desc') }}</p>

            <textarea
              v-model="idea"
              :placeholder="$t('contact.ai_column.placeholder')"
              class="w-full bg-space-950/50 border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-6 text-sm text-white focus:outline-none focus:border-indigo-500 h-40 md:h-44 transition-all"
            ></textarea>

            <button
              @click="handleBrainstorm"
              :disabled="isAnalyzing || !idea"
              class="mt-6 w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-indigo-600/10 text-indigo-400 font-bold text-[10px] uppercase tracking-widest border border-indigo-500/30 hover:bg-indigo-600/20 transition-all duration-500 disabled:opacity-50 border-none cursor-pointer outline-none"
            >
              <Loader2 v-if="isAnalyzing" class="animate-spin" :size="18" />
              <Sparkles v-else :size="18" />
              {{ isAnalyzing ? $t('contact.ai_column.button_analyze') : $t('contact.ai_column.button_generate') }}
            </button>

            <Transition name="fade">
              <div v-if="aiResponse" class="mt-10 p-8 rounded-3xl bg-white/5 border border-white/5 animate-fade-in">
                <div class="space-y-6">
                  <div>
                    <p class="text-[10px] uppercase font-black text-indigo-400 mb-2 tracking-widest">{{ $t('contact.ai_column.stack_label') }}</p>
                    <p class="text-sm text-white font-medium">{{ aiResponse.stack }}</p>
                  </div>
                  <div>
                    <p class="text-[10px] uppercase font-black text-indigo-400 mb-2 tracking-widest">{{ $t('contact.ai_column.strategy_label') }}</p>
                    <p class="text-sm text-white font-medium">{{ aiResponse.strategy }}</p>
                  </div>
                </div>
              </div>
            </Transition>
          </div>

          <!-- Traditional Form Column -->
          <div class="p-8 md:p-16">
            <Transition name="fade" mode="out-in">
              <div v-if="isSubmitted" class="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                <CheckCircle class="text-green-400 mb-6 md:mb-8" :size="64" />
                <h3 class="text-3xl md:text-4xl font-display font-black text-white mb-4">{{ $t('contact.form_column.success_title') }}</h3>
                <p class="text-gray-400 text-base md:text-lg">{{ $t('contact.form_column.success_desc') }}</p>
                <button @click="isSubmitted = false" class="mt-8 text-indigo-400 text-sm font-bold uppercase tracking-widest hover:text-white transition-colors">{{ $t('contact.form_column.retry') }}</button>
              </div>

              <form v-else @submit.prevent="onSubmit" class="space-y-6 md:space-y-8">
                <h2 class="text-3xl md:text-4xl font-display font-black text-white mb-4">{{ $t('contact.form_column.title') }}</h2>

                <div v-if="serverError" class="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3 text-red-400 text-sm">
                  <AlertCircle :size="18" />
                  {{ serverError }}
                </div>

                <div class="space-y-6">
                  <!-- Honeypot -->
                  <input v-model="honeypot" type="text" class="hidden" tabindex="-1" autocomplete="off">

                  <div class="space-y-2">
                    <label class="text-[10px] font-black text-gray-500 uppercase tracking-widest flex justify-between">
                      {{ $t('contact.form_column.labels.name') }}
                      <span v-if="errors.name" class="text-red-400 lowercase italic">{{ errors.name }}</span>
                    </label>
                    <input v-model="name" type="text" :placeholder="$t('contact.form_column.placeholders.name')" :class="[errors.name ? 'border-red-500/50' : 'border-white/10']" class="w-full bg-white/5 border rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-indigo-500 transition-all duration-300">
                  </div>

                  <div class="space-y-2">
                    <label class="text-[10px] font-black text-gray-500 uppercase tracking-widest flex justify-between">
                      {{ $t('contact.form_column.labels.email') }}
                      <span v-if="errors.email" class="text-red-400 lowercase italic">{{ errors.email }}</span>
                    </label>
                    <input v-model="email" type="email" :placeholder="$t('contact.form_column.placeholders.email', { email: 'email@example.com' })" :class="[errors.email ? 'border-red-500/50' : 'border-white/10']" class="w-full bg-white/5 border rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-indigo-500 transition-all duration-300">
                  </div>

                  <div class="space-y-2">
                    <label class="text-[10px] font-black text-gray-500 uppercase tracking-widest flex justify-between">
                      {{ $t('contact.form_column.labels.project') }}
                      <span v-if="errors.message" class="text-red-400 lowercase italic">{{ errors.message }}</span>
                    </label>
                    <textarea v-model="message" rows="4" :placeholder="$t('contact.form_column.placeholders.project')" :class="[errors.message ? 'border-red-500/50' : 'border-white/10']" class="w-full bg-white/5 border rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-indigo-500 transition-all duration-300 resize-none"></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  :disabled="isLoading"
                  class="px-12 py-6 rounded-2xl bg-indigo-50/95 text-space-950 border border-transparent hover:border-indigo-500/50 hover:bg-indigo-950 hover:text-white font-black text-xl uppercase tracking-widest transition-all duration-500 active:scale-95 shadow-xl relative z-10 text-center w-full lg:w-auto outline-none cursor-pointer"
                >
                  <Loader2 v-if="isLoading" class="animate-spin" />
                  <span v-else class="flex items-center gap-3">
                    {{ $t('contact.form_column.submit') }} <Send :size="22" />
                  </span>
                </button>
                <p class="text-center text-[10px] text-gray-600 font-bold uppercase tracking-widest">{{ $t('contact.form_column.disclaimer') }}</p>
              </form>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Send, CheckCircle, Sparkles, Loader2, AlertCircle } from 'lucide-vue-next'
import { useContactForm } from '~/composables/useContactForm'

const isAnalyzing = ref(false)
const idea = ref('')
const aiResponse = ref<any>(null)

const {
  isSubmitted,
  isLoading,
  serverError,
  errors,
  name,
  email,
  message,
  honeypot,
  onSubmit
} = useContactForm()

const handleBrainstorm = async () => {
  if (!idea.value || idea.value.length < 10) return
  isAnalyzing.value = true

  try {
    const { data } = await useFetch('/api/studio/brainstorm', {
      method: 'POST',
      body: { concept: idea.value }
    })

    if (data.value) {
      aiResponse.value = {
        stack: (data.value as any).techStack.join(', '),
        strategy: (data.value as any).scalabilityPlan
      }
    }
  } catch (e) {
    console.error("Brainstorm error:", e)
  } finally {
    isAnalyzing.value = false
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
