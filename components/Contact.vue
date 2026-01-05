<template>
  <section id="contact" class="py-40 px-6">
    <div class="container mx-auto max-w-5xl">
      <div class="glass rounded-[48px] border border-white/10 overflow-hidden shadow-2xl reveal relative group">
        <div class="grid lg:grid-cols-2">
          <!-- AI Brainstorming Column -->
          <div class="p-12 md:p-16 bg-gradient-to-br from-indigo-950/40 to-space-950 lg:border-r border-white/10">
            <div class="flex items-center gap-4 mb-8">
              <Sparkles class="text-indigo-400" :size="32" />
              <h3 class="text-3xl font-display font-black text-white">AI Architect</h3>
            </div>
            <p class="text-gray-400 mb-10 text-base leading-relaxed">Поділіться вашою ідеєю, і наш ШІ миттєво згенерує технічну дорожню карту вашого майбутнього продукту.</p>
            
            <textarea
              v-model="idea"
              placeholder="Наприклад: Marketplace для AI-моделей..."
              class="w-full bg-space-950/50 border border-white/10 rounded-3xl p-6 text-sm text-white focus:outline-none focus:border-indigo-500 h-44 transition-all"
            ></textarea>
            
            <button
              @click="handleBrainstorm"
              :disabled="isAnalyzing || !idea"
              class="mt-6 w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-indigo-600/10 text-indigo-400 font-bold text-[10px] uppercase tracking-widest border border-indigo-500/30 hover:bg-indigo-600/20 transition-all duration-500 disabled:opacity-50 border-none cursor-pointer outline-none"
            >
              <Loader2 v-if="isAnalyzing" class="animate-spin" :size="18" />
              <Sparkles v-else :size="18" />
              {{ isAnalyzing ? 'Проектуємо...' : 'Згенерувати стратегію' }}
            </button>
            
            <Transition name="fade">
              <div v-if="aiResponse" class="mt-10 p-8 rounded-3xl bg-white/5 border border-white/5 animate-fade-in">
                <div class="space-y-6">
                  <div>
                    <p class="text-[10px] uppercase font-black text-indigo-400 mb-2 tracking-widest">Технологічний стек</p>
                    <p class="text-sm text-white font-medium">{{ aiResponse.stack }}</p>
                  </div>
                  <div>
                    <p class="text-[10px] uppercase font-black text-indigo-400 mb-2 tracking-widest">Стратегія масштабування</p>
                    <p class="text-sm text-white font-medium">{{ aiResponse.strategy }}</p>
                  </div>
                </div>
              </div>
            </Transition>
          </div>

          <!-- Traditional Form Column -->
          <div class="p-12 md:p-16">
            <Transition name="fade" mode="out-in">
              <div v-if="isSubmitted" class="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                <CheckCircle class="text-green-400 mb-8" :size="80" />
                <h3 class="text-4xl font-display font-black text-white mb-4">Отримано</h3>
                <p class="text-gray-400 text-lg">Наш архітектор зв’яжеться з вами протягом робочого дня для глибинного інтерв’ю.</p>
              </div>
              
              <form v-else @submit.prevent="handleSubmit" class="space-y-8">
                <h2 class="text-4xl font-display font-black text-white mb-4">Розпочати співпрацю</h2>
                <div class="space-y-6">
                  <div class="space-y-2">
                    <label class="text-[10px] font-black text-gray-500 uppercase tracking-widest">Ваше ім'я</label>
                    <input v-model="form.name" required type="text" placeholder="Elon Musk" class="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-indigo-500 transition-all duration-300">
                  </div>
                  <div class="space-y-2">
                    <label class="text-[10px] font-black text-gray-500 uppercase tracking-widest">Email</label>
                    <input v-model="form.email" required type="email" placeholder="elon@x.com" class="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-indigo-500 transition-all duration-300">
                  </div>
                  <div class="space-y-2">
                    <label class="text-[10px] font-black text-gray-500 uppercase tracking-widest">Про проект</label>
                    <textarea v-model="form.message" required rows="4" placeholder="Опишіть ваші бізнес-цілі..." class="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-indigo-500 transition-all duration-300 resize-none"></textarea>
                  </div>
                </div>
                
                <button
                  type="submit"
                  :disabled="isLoading"
                  class="w-full flex items-center justify-center gap-4 py-6 rounded-2xl bg-indigo-50/95 text-space-950 border border-transparent hover:border-indigo-500/50 hover:bg-indigo-950 hover:text-white font-black text-xl uppercase tracking-widest transition-all duration-500 shadow-xl active:scale-95 border-none cursor-pointer outline-none"
                >
                  <Loader2 v-if="isLoading" class="animate-spin" />
                  <span v-else class="flex items-center gap-3">
                    Надіслати запит <Send :size="22" />
                  </span>
                </button>
                <p class="text-center text-[10px] text-gray-600 font-bold uppercase tracking-widest">100% Конфіденційність. NDA за запитом.</p>
              </form>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Send, CheckCircle, Sparkles, Loader2 } from 'lucide-vue-next'

const isSubmitted = ref(false)
const isLoading = ref(false)
const isAnalyzing = ref(false)
const idea = ref('')
const aiResponse = ref<any>(null)

const form = reactive({
  name: '',
  email: '',
  message: ''
})

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
        stack: data.value.techStack.join(', '),
        strategy: data.value.scalabilityPlan
      }
    }
  } catch (e) {
    console.error("Brainstorm error:", e)
  } finally {
    isAnalyzing.value = false
  }
}

const handleSubmit = async () => {
  isLoading.value = true
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: form
    })
    isSubmitted.value = true
  } catch (e) {
    console.error("Form submission error:", e)
  } finally {
    isLoading.value = false
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
