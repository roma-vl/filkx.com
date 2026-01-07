<template>
  <section id="why" class="py-24 lg:py-48 px-6 bg-white/[0.01]">
    <div class="container-wide">
      <h2 class="text-4xl md:text-6xl font-display font-black text-white text-center mb-16 lg:mb-24 reveal">{{ $t('why.title') }}</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        <div v-for="(p, i) in points" :key="p.title" class="glass rounded-[32px] p-8 border border-white/5 hover:border-indigo-500/40 transition-all reveal" :style="{ transitionDelay: `${i * 100}ms` }">
          <h3 class="text-xl font-black text-white mb-3">{{ p.title }}</h3>
          <p class="text-gray-400 leading-relaxed">{{ p.desc }}</p>
        </div>
      </div>

      <div class="text-center mt-14">
        <NuxtLink :to="localePath('/book-a-call')" class="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-indigo-50/95 text-space-950 border border-transparent hover:border-indigo-500/50 hover:bg-indigo-950 hover:text-white font-black text-[12px] uppercase tracking-widest transition-all duration-500 active:scale-95 outline-none cursor-pointer">
          {{ $t('why.cta') }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, tm } = useI18n()
const localePath = useLocalePath()

const points = computed(() => tm('why.points') as Array<{ title: string; desc: string }>)
</script>
