<template>
  <section id="services" class="py-48 px-6">
    <div class="container-wide">
      <div class="text-center mb-32 reveal">
        <h2 class="text-5xl md:text-6xl font-display font-black text-white mb-8">{{ $t('services.title') }}</h2>
        <p class="text-gray-400 max-w-3xl mx-auto text-xl leading-relaxed">
          {{ $t('services.description') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
        <div
          v-for="(s, i) in services"
          :key="s.title"
          class="glass p-12 rounded-[40px] border border-white/5 hover:border-indigo-500/30 transition-all group hover:-translate-y-3 duration-500 reveal relative overflow-hidden shadow-2xl"
          :style="{ transitionDelay: `${i * 100}ms` }"
        >
          <div class="mb-10 p-5 bg-white/[0.03] w-fit rounded-3xl group-hover:scale-110 transition-transform duration-500 border border-white/5 group-hover:bg-indigo-600/10 shadow-lg">
            <component :is="s.icon" class="text-indigo-400" :size="40" :class="s.color" />
          </div>
          <h3 class="text-2xl font-black text-white mb-5 group-hover:text-indigo-300 transition-colors">{{ s.title }}</h3>
          <p class="text-gray-400 text-lg leading-relaxed mb-6">{{ s.desc }}</p>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-400 font-mono">
             <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
             {{ s.tech }}
          </div>
          <div class="absolute -right-16 -bottom-16 w-48 h-48 bg-indigo-600/5 rounded-full blur-[80px] group-hover:bg-indigo-600/15 transition-all"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Database, Layout, Layers, Terminal, Server, Zap } from 'lucide-vue-next'

const { t } = useI18n()

const services = computed(() => [
  { 
    title: t('services.items.saas.title'), 
    desc: t('services.items.saas.desc'),
    tech: t('services.items.saas.tech'),
    icon: Database, 
    color: 'text-indigo-400' 
  },
  { 
    title: t('services.items.frontend.title'), 
    desc: t('services.items.frontend.desc'),
    tech: t('services.items.frontend.tech'),
    icon: Layout, 
    color: 'text-blue-400' 
  },
  { 
    title: t('services.items.api.title'), 
    desc: t('services.items.api.desc'),
    tech: t('services.items.api.tech'),
    icon: Layers, 
    color: 'text-violet-400' 
  },
  { 
    title: t('services.items.realtime.title'), 
    desc: t('services.items.realtime.desc'),
    tech: t('services.items.realtime.tech'),
    icon: Zap, 
    color: 'text-amber-400' 
  },
  { 
    title: t('services.items.devops.title'), 
    desc: t('services.items.devops.desc'),
    tech: t('services.items.devops.tech'),
    icon: Terminal, 
    color: 'text-emerald-400' 
  },
  { 
    title: t('services.items.backend.title'), 
    desc: t('services.items.backend.desc'),
    tech: t('services.items.backend.tech'),
    icon: Server, 
    color: 'text-rose-400' 
  }
])
</script>
