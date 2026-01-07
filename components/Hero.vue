<template>
  <section class="relative pt-40 lg:pt-56 pb-40 lg:pb-64 px-6 overflow-hidden bg-grid">
    <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div class="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div class="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px]"></div>
    </div>

    <div class="container-wide relative z-10">
      <div class="grid lg:grid-cols-2 gap-20 items-center">
        <div class="text-left max-w-3xl">
          <div class="inline-flex items-center gap-3 px-6 py-2.5 rounded-full glass border border-indigo-500/30 text-indigo-300 text-[11px] font-black uppercase tracking-[0.2em] mb-12 reveal">
            <span class="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
            {{ $t('hero.badge') }}
          </div>
          <h1 class="text-5xl md:text-7xl xl:text-8xl font-display font-black tracking-tighter leading-[1.05] mb-12 reveal">
            <span class="block text-white">{{ $t('hero.title_prefix') }}</span>
            <span class="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-500 glow-text pb-4">{{ $t('hero.title_suffix') }}</span>
          </h1>
          <p class="text-lg md:text-xl text-gray-400 mb-16 leading-relaxed font-medium reveal" style="transition-delay: 0.1s">
            {{ $t('hero.description') }}
          </p>
          <div class="flex flex-col sm:flex-row items-center gap-6 mb-24 reveal" style="transition-delay: 0.2s">
            <NuxtLink
              :to="localePath('/book-a-call')"
              class="w-full sm:w-auto px-12 py-6 rounded-2xl bg-indigo-50/95 text-space-950 border border-transparent hover:border-indigo-500/50 hover:bg-indigo-950 hover:text-white font-black text-[11px] uppercase tracking-widest shadow-[0_20px_60px_rgba(79,70,229,0.1)] transition-all duration-500 hover:-translate-y-2 active:scale-95 flex items-center justify-center gap-3 cursor-pointer outline-none"
            >
              {{ $t('hero.cta_start') }}
              <ArrowRight :size="20" />
            </NuxtLink>
            <NuxtLink
              :to="localePath('/services')"
              class="w-full sm:w-auto px-12 py-6 rounded-2xl border border-white/10 glass text-white font-black text-[11px] uppercase tracking-widest hover:bg-white/10 transition-all duration-500 cursor-pointer active:scale-95 outline-none text-center"
            >
              {{ $t('hero.cta_services') }}
            </NuxtLink>
          </div>
          <div class="grid grid-cols-3 gap-8 max-w-xl reveal" style="transition-delay: 0.4s">
            <div v-for="item in badges" :key="item.label" class="flex flex-col gap-3 group">
              <div class="flex items-center gap-3">
                <component :is="item.icon" :size="20" :class="item.color" />
                <span class="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">{{ item.label }}</span>
              </div>
              <div class="h-[1px] w-full bg-white/5 group-hover:bg-indigo-500/30 transition-colors"></div>
            </div>
          </div>
        </div>

        <!-- Visual Side -->
        <div class="relative hidden lg:block reveal">
          <div class="relative w-[500px] h-[500px] xl:w-[650px] xl:h-[650px] mx-auto">
            <div class="absolute inset-0 rounded-full border border-indigo-500/10 animate-spin-slow"></div>
            <div class="absolute inset-16 rounded-full border border-violet-500/10 animate-spin-reverse" style="animation-duration: 25s"></div>
            <div class="absolute inset-0 m-auto w-80 h-80 bg-indigo-600/20 rounded-full blur-[100px] animate-pulse"></div>

            <div
              v-for="card in floatingCards"
              :key="card.label"
              class="absolute z-30 flex items-center gap-3 px-6 py-4 rounded-[24px] glass border border-white/10 shadow-2xl animate-float"
              :style="{ top: card.top, left: card.left, right: card.right, bottom: card.bottom, animationDelay: card.delay }"
            >
              <component :is="card.icon" :size="18" :class="card.color || 'text-indigo-400'" />
              <span class="text-[11px] font-black uppercase tracking-widest text-white/90">{{ card.label }}</span>
            </div>

            <!-- Central Stack -->
            <div class="absolute inset-0 m-auto w-48 h-64 xl:w-56 xl:h-72 flex items-center justify-center">
              <div
                v-for="i in 3"
                :key="i"
                class="absolute w-full h-full rounded-[32px] glass border border-white/20 shadow-2xl transition-transform duration-700 animate-float"
                :style="{
                  transform: `translate(${(i-1) * 15}px, ${(i-1) * -15}px) skewX(-10deg)`,
                  opacity: 0.3 + ((i-1) * 0.2),
                  zIndex: 10 - i,
                  animationDelay: `${(i-1) * 0.3}s`,
                  background: i === 3 ? 'linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(139,92,246,0.1) 100%)' : ''
                }"
              >
                <div v-if="i === 3" class="w-full h-full p-6 flex flex-col justify-between">
                  <div class="flex items-center gap-2">
                    <Terminal :size="16" class="text-indigo-400" />
                    <div class="h-1.5 w-12 bg-white/20 rounded-full"></div>
                  </div>
                  <div class="space-y-3">
                    <div class="h-1 w-full bg-white/10 rounded-full"></div>
                    <div class="h-1 w-2/3 bg-white/10 rounded-full"></div>
                  </div>
                  <div class="flex justify-end">
                    <Code :size="24" class="text-violet-400/50" />
                  </div>
                </div>
              </div>
              <div class="absolute z-20 w-16 h-16 bg-indigo-500 rounded-full blur-xl animate-pulse opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  Rocket, Shield, Globe, ArrowRight, Code, Zap, Cpu,
  Terminal, Layers, Box, Database, Lock, Share2
} from 'lucide-vue-next'

const { t } = useI18n()
const localePath = useLocalePath()

// Use computed to make badges reactive to language change
const badges = computed(() => [
  { label: t('hero.badges.throughput'), icon: Rocket, color: 'text-indigo-400' },
  { label: t('hero.badges.security'), icon: Shield, color: 'text-violet-400' },
  { label: t('hero.badges.cloud'), icon: Globe, color: 'text-blue-400' }
])

const floatingCards = computed(() => [
  { label: t('hero.cards.laravel'), icon: Code, top: '0%', right: '15%', delay: '0s' },
  { label: t('hero.cards.vue'), icon: Cpu, bottom: '5%', right: '-8%', delay: '2s' },
  { label: t('hero.cards.rest'), icon: Zap, top: '35%', right: '-15%', delay: '4s' },
  { label: t('hero.cards.docker'), icon: Share2, top: '10%', left: '-5%', delay: '1.5s', color: 'text-violet-400' },
  { label: t('hero.cards.redis'), icon: Layers, bottom: '20%', left: '-12%', delay: '3.5s', color: 'text-blue-400' },
  { label: t('hero.cards.event'), icon: Box, bottom: '-8%', left: '10%', delay: '5s', color: 'text-emerald-400' },
  { label: t('hero.cards.oauth'), icon: Lock, top: '60%', left: '-18%', delay: '2.5s', color: 'text-amber-400' },
  { label: t('hero.cards.postgres'), icon: Database, top: '-5%', left: '20%', delay: '6s', color: 'text-rose-400' },
])
</script>
