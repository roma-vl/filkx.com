<template>
  <div class="pt-32 pb-40 px-6">
    <div class="container-wide">
      <NuxtLink
        to="/"
        class="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 font-bold group w-fit"
      >
        <ArrowLeft :size="20" class="group-hover:-translate-x-1 transition-transform" />
        Повернутись
      </NuxtLink>

      <div class="mb-24 reveal">
        <h1 class="text-5xl md:text-8xl font-display font-black text-white mb-8 tracking-tighter">
          System-First<span class="block text-indigo-500">Engineering</span>
        </h1>
        <p class="text-gray-400 text-xl md:text-2xl max-w-4xl leading-relaxed">
          Ми створюємо програмне забезпечення як актив. Наш підхід базується на принципах Clean Architecture та SOLID, що гарантує життєздатність продукту в довгостроковій перспективі.
        </p>
      </div>

      <div class="space-y-12">
        <div 
          v-for="(s, i) in fullServices" 
          :key="s.title"
          class="glass p-8 md:p-16 rounded-[48px] border border-white/5 reveal relative overflow-hidden group"
        >
          <div class="grid lg:grid-cols-2 gap-16 items-start relative z-10">
            <div>
              <div class="mb-10 p-6 bg-white/[0.03] w-fit rounded-3xl border border-white/5">
                <component :is="s.icon" :size="48" :class="s.color" />
              </div>
              <h2 class="text-4xl font-black text-white mb-6">{{ s.title }}</h2>
              <p class="text-gray-400 text-xl leading-relaxed mb-10">{{ s.details }}</p>
              
              <div class="space-y-4">
                <div v-for="f in s.features" :key="f" class="flex items-center gap-4 text-white font-medium">
                  <CheckCircle2 :size="20" class="text-green-400" />
                  {{ f }}
                </div>
              </div>
            </div>
            <div class="p-8 md:p-12 bg-white/[0.02] rounded-[32px] border border-white/5">
              <h3 class="text-indigo-400 font-black uppercase text-[10px] tracking-[0.3em] mb-8">Technology Ecosystem</h3>
              <div class="grid grid-cols-2 gap-4">
                <div v-for="tech in s.stack" :key="tech" class="px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-white font-bold text-center text-sm">
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

const fullServices = [
  { 
    title: 'Backend Engineering', 
    icon: Database, 
    color: 'text-indigo-400',
    details: 'Ми будуємо фундаменти на базі PHP 8.3+, використовуючи Laravel або Symfony для створення стабільних, типізованих та тестованих систем.',
    stack: ['Laravel / Symfony', 'PHP 8.3', 'PostgreSQL', 'Redis', 'Nginx'],
    features: ['Stateless API architecture', 'Redis-based background jobs', 'Event-driven business logic', 'Complex database optimization']
  },
  { 
    title: 'Frontend & UI Logic', 
    icon: Layout, 
    color: 'text-violet-400',
    details: 'Розробляємо Single Page Applications (SPA) з чітким розділенням фронтенд-домену та API, забезпечуючи миттєву взаємодію користувача з даними.',
    stack: ['Vue 3 (Composition API)', 'TypeScript', 'Pinia State Mgmt', 'Vite', 'WebSockets'],
    features: ['API-driven dynamic UI', 'Optimized client-side performance', 'Modular component architecture', 'Real-time data synchronization']
  },
  { 
    title: 'Infrastructure & Scale', 
    icon: Server, 
    color: 'text-emerald-400',
    details: 'Наші системи розгортаються в ізольованих Docker-середовищах, готових до горизонтального масштабування та автоматизованого моніторингу.',
    stack: ['Docker / Compose', 'Kubernetes', 'CI/CD Pipelines', 'AWS / GCP', 'Elasticsearch'],
    features: ['Zero-downtime deployment', 'Infrastructure as Code (IaC)', 'Horizontal auto-scaling', 'Health check monitoring systems']
  }
]
</script>
