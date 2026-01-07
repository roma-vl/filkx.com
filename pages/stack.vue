<template>
  <div class="pt-32 pb-40 px-6">
    <div class="container-wide">
      <NuxtLink
        :to="localePath('/')"
        class="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 font-bold group w-fit"
      >
        <ArrowLeft :size="20" class="group-hover:-translate-x-1 transition-transform" />
        {{ $t('common.back') }}
      </NuxtLink>

      <div class="mb-32 reveal">
        <h1 class="text-6xl md:text-9xl font-display font-black text-white mb-8 tracking-tighter">{{ $t('pages.stack.title') }}</h1>
        <p class="text-gray-400 text-xl md:text-3xl max-w-4xl leading-relaxed">
          {{ $t('pages.stack.subtitle') }}
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-10">
        <div v-for="p in pillars" :key="p.title" class="glass p-12 rounded-[40px] border border-white/5 reveal hover:border-indigo-500/30 transition-all">
          <component :is="p.icon" :size="40" class="text-indigo-400 mb-8" />
          <h2 class="text-2xl font-black text-white mb-6">{{ p.title }}</h2>
          <p class="text-gray-400 leading-relaxed text-lg">{{ p.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft, Code2, Zap, Cpu } from 'lucide-vue-next'

useHead({
  title: 'Tech Stack | Filkx Studio',
  meta: [
    { name: 'description', content: 'Our production-grade technology stack.' }
  ]
})

const { t } = useI18n()
const localePath = useLocalePath()

const pillars = computed(() => [
  {
    title: t('pages.stack.pillars.backend.title'),
    icon: Code2,
    text: t('pages.stack.pillars.backend.text')
  },
  {
    title: t('pages.stack.pillars.frontend.title'),
    icon: Zap,
    text: t('pages.stack.pillars.frontend.text')
  },
  {
    title: t('pages.stack.pillars.infra.title'),
    icon: Cpu,
    text: t('pages.stack.pillars.infra.text')
  }
])
</script>
