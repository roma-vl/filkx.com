<template>
  <div class="pt-24 md:pt-32 pb-24 md:pb-40 px-6">
    <div class="container-wide">
      <NuxtLink
        :to="localePath('/')"
        class="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 md:mb-12 font-bold group w-fit"
      >
        <ArrowLeft :size="20" class="group-hover:-translate-x-1 transition-transform" />
        {{ $t('common.back') }}
      </NuxtLink>

      <div class="mb-16 md:mb-24 reveal">
        <h1 class="text-4xl md:text-8xl font-display font-black text-white mb-6 md:mb-8 tracking-tighter">
          {{ $t('pages.services.title') }}
        </h1>
        <p class="text-gray-400 text-lg md:text-2xl max-w-4xl leading-relaxed">
          {{ $t('pages.services.subtitle') }}
        </p>
      </div>

      <div class="space-y-8 md:space-y-12">
        <div
          v-for="(s, i) in fullServices"
          :key="s.title"
          class="glass p-8 md:p-16 rounded-[32px] md:rounded-[48px] border border-white/5 reveal relative overflow-hidden group"
        >
          <div class="grid lg:grid-cols-2 gap-10 md:gap-16 items-start relative z-10">
            <div>
              <div class="mb-8 md:mb-10 p-5 md:p-6 bg-white/[0.03] w-fit rounded-2xl md:rounded-3xl border border-white/5">
                <component :is="s.icon" :size="40" :class="s.color" />
              </div>
              <h2 class="text-2xl md:text-4xl font-black text-white mb-4 md:mb-6">{{ s.title }}</h2>
              <p class="text-gray-400 text-base md:text-xl leading-relaxed mb-8 md:mb-10">{{ s.details }}</p>

              <div class="space-y-3 md:space-y-4">
                <div v-for="f in s.features" :key="f" class="flex items-center gap-4 text-white font-medium text-sm md:text-base">
                  <CheckCircle2 :size="18" class="text-green-400" />
                  {{ f }}
                </div>
              </div>
            </div>
            <div class="p-6 md:p-12 bg-white/[0.02] rounded-3xl md:rounded-[32px] border border-white/5">
              <h3 class="text-indigo-400 font-black uppercase text-[9px] md:text-[10px] tracking-[0.3em] mb-6 md:mb-8">{{ $t('pages.services.ecosystem') }}</h3>
              <div class="grid grid-cols-2 gap-3 md:gap-4">
                <div v-for="tech in s.stack" :key="tech" class="px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/5 text-white font-bold text-center text-xs md:text-sm">
                  {{ tech }}
                </div>
              </div>
            </div>
          </div>
          <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-indigo-600/5 rounded-full blur-[120px] group-hover:bg-indigo-600/10 transition-all"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft, Database, Layout, Server, CheckCircle2 } from 'lucide-vue-next'

useHead({
  title: 'Services | Filkx Studio',
  meta: [
    { name: 'description', content: 'Our specialized engineering services for high-load systems.' }
  ]
})

const { t, tm } = useI18n()
const localePath = useLocalePath()

const fullServices = computed(() => [
  {
    title: t('pages.services.items.backend.title'),
    icon: Database,
    color: 'text-indigo-400',
    details: t('pages.services.items.backend.details'),
    stack: ['Laravel / Symfony', 'PHP 8.3', 'PostgreSQL', 'Redis', 'Nginx'],
    features: tm('pages.services.items.backend.features')
  },
  {
    title: t('pages.services.items.frontend.title'),
    icon: Layout,
    color: 'text-violet-400',
    details: t('pages.services.items.frontend.details'),
    stack: ['Vue 3 (Composition API)', 'TypeScript', 'Pinia State Mgmt', 'Vite', 'WebSockets'],
    features: tm('pages.services.items.frontend.features')
  },
  {
    title: t('pages.services.items.infra.title'),
    icon: Server,
    color: 'text-emerald-400',
    details: t('pages.services.items.infra.details'),
    stack: ['Docker / Compose', 'Kubernetes', 'CI/CD Pipelines', 'AWS / GCP', 'Elasticsearch'],
    features: tm('pages.services.items.infra.features')
  }
])
</script>
