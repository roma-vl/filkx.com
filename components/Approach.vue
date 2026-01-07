<template>
  <section id="approach" class="py-24 lg:py-48 px-6 bg-white/[0.01]">
    <div class="container-wide">
      <h2 class="text-4xl md:text-6xl font-display font-black text-white text-center mb-16 lg:mb-32 reveal">{{ $t('approach.title') }}</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
        <!-- Background line -->
        <div class="hidden lg:block absolute top-12 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent z-0"></div>

        <div
          v-for="(step, i) in steps"
          :key="step.status"
          class="relative z-10 flex flex-col items-center text-center group reveal"
          :style="{ transitionDelay: `${i * 150}ms` }"
        >
          <div class="w-24 h-24 rounded-[32px] glass border border-indigo-500/20 grid place-items-center mb-10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all group-hover:bg-indigo-600/20 group-hover:scale-110 group-hover:border-indigo-500/50 relative overflow-hidden">
            <component :is="step.icon" :size="40" class="text-indigo-400 relative z-10" />
            <div class="absolute -bottom-2 -right-2 text-6xl font-black text-white/5 font-display select-none">{{ step.status }}</div>
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
          :to="localePath('/book-a-call')"
          class="px-12 py-6 rounded-2xl bg-indigo-50/95 text-space-950 border border-transparent hover:border-indigo-500/50 hover:bg-indigo-950 hover:text-white font-black text-xl uppercase tracking-widest transition-all duration-500 active:scale-95 shadow-xl relative z-10 text-center w-full lg:w-auto outline-none cursor-pointer"
        >
          {{ $t('approach.book_call') }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CheckCircle2, Compass, PencilRuler, ShieldCheck, Rocket } from 'lucide-vue-next'

const { tm, rt } = useI18n()
const localePath = useLocalePath()

const icons = [Compass, PencilRuler, ShieldCheck, Rocket]

const steps = computed(() => {
  const blocks = tm('approach.blocks') as any[]
  if (!blocks) return []
  return blocks.map((b, i) => ({
    title: rt(b.title),
    desc: rt(b.desc), // In locs I used "desc" key for approach
    status: `0${i + 1}`,
    icon: icons[i] || CheckCircle2
  }))
})
</script>
