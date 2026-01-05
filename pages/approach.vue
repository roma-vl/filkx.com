<template>
  <div class="pt-32 pb-40 px-6">
    <div class="container-wide">
      <NuxtLink
        to="/"
        class="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 font-bold group w-fit"
      >
        <ArrowLeft :size="20" class="group-hover:-translate-x-1 transition-transform" />
        Назад
      </NuxtLink>

      <div class="text-center mb-32 reveal">
        <h1 class="text-5xl md:text-8xl font-display font-black text-white mb-8 tracking-tighter">Наш Інженерний Процес</h1>
        <p class="text-gray-400 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
          Ми мінімізуємо технічний борг через суворе дотримання архітектурних стандартів на кожному етапі життєвого циклу розробки.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-10">
        <div v-for="(item, i) in roadmap" :key="item.title" class="glass p-12 rounded-[40px] border border-white/5 reveal group relative">
          <div class="flex flex-col gap-8 relative z-10">
            <div class="w-20 h-20 rounded-3xl bg-indigo-600/10 border border-indigo-500/20 grid place-items-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-lg">
              <component :is="item.icon" :size="32" />
            </div>
            <div>
              <span class="text-indigo-400 font-black text-[10px] tracking-widest uppercase mb-2 block">Stage 0{{ Number(i) + 1 }}</span>
              <h2 class="text-3xl font-black text-white mb-4">{{ item.title }}</h2>
              <p class="text-gray-400 text-lg leading-relaxed">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft, Target, Cpu, ShieldCheck, Rocket } from 'lucide-vue-next'

useHead({
  title: 'Approach | Filkx Studio',
  meta: [
    { name: 'description', content: 'Our engineering process and methodology.' }
  ]
})

const roadmap = [
  { 
    title: 'Technical Discovery', 
    desc: 'Проводимо глибокий аудит вимог, визначаємо потенційні вузькі місця архітектури та обираємо оптимальний стек для масштабування.', 
    icon: Target 
  },
  { 
    title: 'Systems Design', 
    desc: 'Проектуємо схему бази даних, API-контракти та інфраструктурну карту. Готуємо Blueprint системи перед написанням коду.', 
    icon: Cpu 
  },
  { 
    title: 'Architecture-Driven Build', 
    desc: 'Розробка ведеться короткими спринтами з фокусом на Clean Code та покриттям критичних модулів тестами.', 
    icon: Rocket 
  },
  { 
    title: 'Continuous Deployment', 
    desc: 'Автоматизований деплой у хмарні середовища з моніторингом показників здоров’я системи та безпеки даних.', 
    icon: ShieldCheck 
  }
]
</script>
