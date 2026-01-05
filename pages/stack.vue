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

      <div class="mb-32 reveal">
        <h1 class="text-6xl md:text-9xl font-display font-black text-white mb-8 tracking-tighter">Systems Core</h1>
        <p class="text-gray-400 text-xl md:text-3xl max-w-4xl leading-relaxed">
          Ми обираємо технології, що мають потужну екосистему та гарантують стабільність на роки.
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

const pillars = [
  { 
    title: 'Stateless Backends', 
    icon: Code2, 
    text: 'Ми будуємо сервери на PHP 8.3/Go, які не зберігають стан сесії, що дозволяє миттєво масштабувати кількість вузлів при зростанні навантаження.' 
  },
  { 
    title: 'API-Driven UI', 
    icon: Zap, 
    text: 'Фронтенд на Vue 3 працює як незалежний клієнт. Це забезпечує чисте розділення обов’язків та можливість легкого переходу на мобільні додатки в майбутньому.' 
  },
  { 
    title: 'Infrastructure as Code', 
    icon: Cpu, 
    text: 'Конфігурація серверів, баз даних та мереж зберігається у вигляді коду (Docker/Terraform). Це гарантує ідентичність середовищ розробки та продакшну.' 
  }
]
</script>
