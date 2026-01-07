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
          <div class="absolute -right-16 -bottom-16 w-48 h-48 bg-indigo-600/5 rounded-full blur-[80px] group-hover:bg-indigo-600/15 transition-all"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ShieldCheck, Layers, Zap } from 'lucide-vue-next'

const { tm, rt } = useI18n()

// Map icons to index
const icons = [ShieldCheck, Layers, Zap]

const services = computed(() => {
  const blocks = tm('services.blocks') as any[]
  if (!blocks) return []
  return blocks.map((b, i) => ({
    title: rt(b.title),
    desc: rt(b.text), // Note: user JSON used 'text', ensure locale keys match
    icon: icons[i] || Zap,
    color: i === 0 ? 'text-indigo-400' : i === 1 ? 'text-violet-400' : 'text-amber-400'
  }))
})
</script>
