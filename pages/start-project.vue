<template>
  <div class="pt-32 pb-40 px-6">
    <div class="container-wide max-w-5xl mx-auto">
        <NuxtLink
          :to="localePath('/')"
          class="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 font-bold group w-fit"
        >
          <ArrowLeft :size="20" class="group-hover:-translate-x-1 transition-transform" />
          {{ $t('common.back_main') }}
        </NuxtLink>

      <div v-if="isSubmitted" class="glass p-20 rounded-[48px] border border-white/5 text-center animate-fade-in">
        <CheckCircle :size="100" class="text-green-400 mx-auto mb-10" />
        <h1 class="text-5xl font-black text-white mb-6">{{ $t('pages.start_project.success_title') }}</h1>
        <p class="text-gray-400 text-2xl">{{ $t('pages.start_project.success_desc') }}</p>
      </div>

      <div v-else class="glass p-8 md:p-20 rounded-[48px] border border-white/5 reveal overflow-hidden relative">
        <!-- Progress Bar -->
        <div class="absolute top-0 left-0 h-1.5 bg-indigo-600 transition-all duration-700" :style="{ width: `${(step / 2) * 100}%` }"></div>

        <Transition name="fade" mode="out-in">
          <!-- Step 1: AI Architect Input -->
          <div v-if="step === 1" class="animate-fade-in">
            <div class="flex items-center gap-4 mb-10">
              <Sparkles :size="40" class="text-indigo-500" />
              <h1 class="text-4xl md:text-5xl font-display font-black text-white">{{ $t('pages.start_project.step1.title') }}</h1>
            </div>
            <p class="text-gray-400 text-xl mb-12 leading-relaxed">{{ $t('pages.start_project.step1.desc') }}</p>
            <textarea
              v-model="idea"
              :placeholder="$t('pages.start_project.step1.placeholder')"
              class="w-full bg-white/5 border border-white/10 rounded-3xl p-8 text-xl text-white focus:outline-none focus:border-indigo-500 h-64 transition-all mb-10"
            ></textarea>
            <button
              @click="handleBrainstorm"
              :disabled="isAnalyzing || idea.length < 15"
              class="w-full py-6 rounded-2xl bg-indigo-600 text-white font-black text-2xl hover:bg-indigo-500 transition-all duration-500 flex items-center justify-center gap-4 disabled:opacity-50 border-none cursor-pointer outline-none"
            >
              <Loader2 v-if="isAnalyzing" class="animate-spin" />
              <Sparkles v-else />
              {{ isAnalyzing ? $t('pages.start_project.step1.button_analyzing') : $t('pages.start_project.step1.button_analyze') }}
            </button>
          </div>

          <!-- Step 2: Review & Contact -->
          <div v-else-if="step === 2" class="animate-fade-in">
            <div class="flex items-center gap-4 mb-12">
              <CheckCircle :size="40" class="text-green-500" />
              <h1 class="text-4xl font-display font-black text-white">{{ $t('pages.start_project.step2.title') }}</h1>
            </div>

            <div v-if="aiResponse" class="grid md:grid-cols-2 gap-10 mb-16">
              <div class="p-8 rounded-3xl bg-white/5 border border-white/5">
                <h3 class="text-indigo-400 font-black uppercase text-xs tracking-widest mb-4">{{ $t('pages.start_project.step2.stack_label') }}</h3>
                <p class="text-white text-lg leading-relaxed">{{ aiResponse.techStack.join(', ') }}</p>

                <h3 class="text-indigo-400 font-black uppercase text-xs tracking-widest mt-8 mb-4">{{ $t('pages.start_project.step2.scale_label') }}</h3>
                <p class="text-white text-sm leading-relaxed">{{ aiResponse.scalabilityPlan }}</p>
              </div>
              <div class="p-8 rounded-3xl bg-white/5 border border-white/5">
                <h3 class="text-indigo-400 font-black uppercase text-xs tracking-widest mb-4">{{ $t('pages.start_project.step2.roadmap_label') }}</h3>
                <ul class="space-y-3">
                  <li v-for="r in aiResponse.roadmap" :key="r" class="text-white text-sm flex items-center gap-3">
                    <div class="w-1.5 h-1.5 rounded-full bg-indigo-500"></div> {{ r }}
                  </li>
                </ul>

                <h3 class="text-indigo-400 font-black uppercase text-xs tracking-widest mt-8 mb-4">{{ $t('pages.start_project.step2.risks_label') }}</h3>
                <p class="text-white text-sm leading-relaxed">{{ aiResponse.bottlenecks }}</p>
              </div>
            </div>

            <div class="space-y-8">
              <div class="grid md:grid-cols-2 gap-8">
                <div class="space-y-2">
                  <label class="text-[10px] font-black text-gray-500 uppercase tracking-widest">{{ $t('pages.start_project.form.name') }}</label>
                  <input v-model="details.name" required type="text" :placeholder="$t('pages.book_call.form.placeholders.name')" class="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-indigo-500 transition-all duration-300">
                </div>
                <div class="space-y-2">
                  <label class="text-[10px] font-black text-gray-500 uppercase tracking-widest">{{ $t('pages.start_project.form.email') }}</label>
                  <input v-model="details.email" required type="email" :placeholder="$t('pages.book_call.form.placeholders.email')" class="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-indigo-500 transition-all duration-300">
                </div>
              </div>
              <button
                @click="finalSubmit"
                :disabled="isAnalyzing"
                class="w-full py-6 rounded-2xl bg-indigo-50/95 text-space-950 border border-transparent hover:border-indigo-500/50 hover:bg-indigo-950 hover:text-white font-black text-2xl uppercase tracking-widest transition-all duration-500 flex items-center justify-center gap-4 border-none cursor-pointer active:scale-95 outline-none"
              >
                <Loader2 v-if="isAnalyzing" class="animate-spin" />
                <span v-else class="flex items-center gap-3">
                  {{ $t('pages.start_project.step2.button_submit') }} <ChevronRight />
                </span>
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft, Sparkles, Send, CheckCircle, Loader2, ChevronRight } from 'lucide-vue-next'

useHead({
  title: 'Start Project | Filkx Studio',
  meta: [
    { name: 'description', content: 'Detailed project inquiry with AI-powered strategy.' }
  ]
})

const localePath = useLocalePath()

const step = ref(1)
const idea = ref('')
const details = reactive({ name: '', email: '', budget: '10k-50k' })
const isAnalyzing = ref(false)
const aiResponse = ref<any>(null)
const isSubmitted = ref(false)

const handleBrainstorm = async () => {
  if (!idea.value || idea.value.length < 15) return
  isAnalyzing.value = true

  try {
    const { data } = await useFetch('/api/studio/brainstorm', {
      method: 'POST',
      body: { concept: idea.value }
    })

    if (data.value) {
      aiResponse.value = data.value
      step.value = 2
    }
  } catch (e) {
    console.error("AI Analysis failed:", e)
  } finally {
    isAnalyzing.value = false
  }
}

const finalSubmit = async () => {
  isAnalyzing.value = true
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        ...details,
        message: `AI Strategy Insight: ${aiResponse.value?.title}. Original Idea: ${idea.value}`
      }
    })
    isSubmitted.value = true
  } catch (e) {
    console.error("Final submission error:", e)
  } finally {
    isAnalyzing.value = false
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from { opacity: 0; transform: translateX(20px); }
.fade-leave-to { opacity: 0; transform: translateX(-20px); }
</style>
