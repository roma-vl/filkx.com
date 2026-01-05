<template>
  <section id="services" class="py-48 px-6">
    <div class="container-wide">
      <div class="text-center mb-32 reveal">
        <h2 class="text-5xl md:text-6xl font-display font-black text-white mb-8">Наші Компетенції</h2>
        <p class="text-gray-400 max-w-3xl mx-auto text-xl leading-relaxed">
          Ми спеціалізуємося на побудові складних веб-систем, де надійність архітектури та швидкість обробки даних є пріоритетом номер один.
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
          <p class="text-gray-400 text-lg leading-relaxed">{{ s.desc }}</p>
          <div class="absolute -right-16 -bottom-16 w-48 h-48 bg-indigo-600/5 rounded-full blur-[80px] group-hover:bg-indigo-600/15 transition-all"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Database, Layout, Layers, Terminal, Server, Zap } from 'lucide-vue-next'

const services = [
  { 
    title: 'SaaS Architecture', 
    desc: 'Проектування та розробка багатокористувацьких платформ з ізольованими даними та гнучким керуванням підписками.', 
    icon: Database, 
    color: 'text-indigo-400' 
  },
  { 
    title: 'API-First Engineering', 
    desc: 'Створення stateless бекендів на Laravel/Symfony з повною підтримкою OAuth2, JWT та детальною документацією.', 
    icon: Layers, 
    color: 'text-violet-400' 
  },
  { 
    title: 'Modern Frontends', 
    desc: 'Високопродуктивні SPA на Vue 3, інтегровані з API через реактивні сховища та real-time з’єднання.', 
    icon: Layout, 
    color: 'text-blue-400' 
  },
  { 
    title: 'Real-time Systems', 
    desc: 'Обробка подій у реальному часі через WebSockets та Redis, побудована на Node.js або Go для критичних навантажень.', 
    icon: Zap, 
    color: 'text-amber-400' 
  },
  { 
    title: 'Infrastructure & DevOps', 
    desc: 'Контейнеризація Docker, оркестрація Kubernetes та налаштування CI/CD пайплайнів для Blue/Green деплою.', 
    icon: Terminal, 
    color: 'text-emerald-400' 
  },
  { 
    title: 'High-Load Backend', 
    desc: 'Оптимізація складних бізнес-процесів через черги (Redis/RabbitMQ) та фонову обробку в PHP 8.3/Go.', 
    icon: Server, 
    color: 'text-rose-400' 
  }
]
</script>
