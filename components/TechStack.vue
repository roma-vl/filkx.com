<template>
  <section id="stack" class="py-48 px-6">
    <div class="container-wide">
      <div class="grid lg:grid-cols-12 gap-24 items-center">
        <div class="lg:col-span-5 reveal">
          <div class="inline-block px-5 py-2 rounded-xl bg-indigo-600/10 text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-indigo-500/20">{{ $t('stack.badge') }}</div>
          <h2 class="text-5xl md:text-6xl font-display font-black text-white mb-10 leading-tight">{{ $t('stack.title') }}</h2>
          <p class="text-gray-400 text-xl mb-12 leading-relaxed">{{ $t('stack.description') }}</p>
          <div class="flex gap-5">
            <div class="h-1.5 w-24 bg-indigo-600 rounded-full"></div>
            <div class="h-1.5 w-12 bg-indigo-600/20 rounded-full"></div>
          </div>
        </div>
        <div class="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8">
          <div
            v-for="(t, i) in tech"
            :key="t.name"
            class="glass p-10 rounded-[32px] border border-white/5 flex flex-col items-center justify-center group hover:border-indigo-500/50 transition-all duration-300 reveal shadow-xl"
            :style="{ transitionDelay: `${i * 50}ms` }"
          >
            <span class="text-white font-black mb-2 group-hover:text-indigo-400 transition-colors text-lg text-center">{{ t.name }}</span>
            <span class="text-[11px] text-gray-500 font-medium text-center leading-snug">{{ t.desc }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm } = useI18n()

type TechItem = { name: string; desc: string }

const tech = computed<TechItem[]>(() => {
  // Preserve logical order
  const items = tm('stack.items') as any
  const order = ['php', 'frameworks', 'frontend', 'typescript', 'realtime', 'db', 'cache', 'infra']
  return order
    .map((k) => items?.[k])
    .filter(Boolean)
})
</script>
