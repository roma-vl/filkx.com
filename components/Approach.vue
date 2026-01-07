<template>
  <section id="approach" class="py-48 px-6 bg-white/[0.01]">
    <div class="container-wide">
      <h2 class="text-5xl md:text-6xl font-display font-black text-white text-center mb-32 reveal">{{ $t('approach.title') }}</h2>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
        <!-- Background line -->
        <div class="hidden lg:block absolute top-12 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent z-0"></div>
        
        <div
          v-for="(step, i) in steps"
          :key="step.status"
          class="relative z-10 flex flex-col items-center text-center group reveal"
          :style="{ transitionDelay: `${i * 150}ms` }"
        >
          <div class="w-24 h-24 rounded-[32px] glass border border-indigo-500/20 grid place-items-center mb-10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all group-hover:bg-indigo-600/20 group-hover:scale-110 group-hover:border-indigo-500/50">
            <span class="text-3xl font-display font-black text-indigo-400">{{ step.status }}</span>
          </div>
          <h3 class="text-2xl font-black text-white mb-5">{{ step.title }}</h3>
          <p class="text-gray-400 text-lg px-2 leading-relaxed">{{ step.desc }}</p>
        </div>
      </div>

      <div class="mt-40 p-10 md:p-16 glass rounded-[48px] border border-white/5 flex flex-col lg:flex-row items-center gap-10 justify-between shadow-3xl reveal relative overflow-hidden">
        <div class="flex flex-col sm:flex-row items-center gap-8 relative z-10">
          <div class="w-20 h-20 rounded-3xl bg-green-500/10 grid place-items-center text-green-400 border border-green-500/20 shadow-lg">
            <CheckCircle2 :size="40" />
          </div>
          <div class="text-center sm:text-left">
            <h4 class="text-2xl md:text-3xl font-black text-white mb-2">{{ $t('approach.guarantee_title') }}</h4>
            <p class="text-gray-400 text-lg max-w-xl">{{ $t('approach.guarantee_desc') }}</p>
          </div>
        </div>
        <NuxtLink
          to="/book-a-call"
          class="px-12 py-6 rounded-2xl bg-indigo-50/95 text-space-950 border border-transparent hover:border-indigo-500/50 hover:bg-indigo-950 hover:text-white font-black text-xl uppercase tracking-widest transition-all duration-500 active:scale-95 shadow-xl relative z-10 text-center w-full lg:w-auto outline-none cursor-pointer"
        >
          {{ $t('approach.book_call') }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CheckCircle2 } from 'lucide-vue-next'

const { t } = useI18n()

const steps = computed(() => [
  { title: t('approach.steps.discovery.title'), desc: t('approach.steps.discovery.desc'), status: '01' },
  { title: t('approach.steps.sprint.title'), desc: t('approach.steps.sprint.desc'), status: '02' },
  { title: t('approach.steps.zero_defects.title'), desc: t('approach.steps.zero_defects.desc'), status: '03' },
  { title: t('approach.steps.scale_ready.title'), desc: t('approach.steps.scale_ready.desc'), status: '04' }
])
</script>
