<template>
  <section id="cases" class="py-24 lg:py-48 px-6">
    <div class="container-wide">
      <div class="text-center mb-14 lg:mb-20 reveal">
        <h2 class="text-4xl md:text-6xl font-display font-black text-white">{{ $t('cases.title') }}</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        <div v-for="(c, i) in items" :key="c.title" class="glass rounded-[32px] p-8 border border-white/5 hover:border-indigo-500/40 transition-all reveal" :style="{ transitionDelay: `${i * 100}ms` }">
          <div class="mb-4">
            <span class="inline-block text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400 bg-indigo-600/10 border border-indigo-500/20 rounded-full px-4 py-1">{{ c.tag }}</span>
          </div>
          <h3 class="text-2xl font-black text-white mb-3">{{ c.title }}</h3>
          <p class="text-gray-400 leading-relaxed">{{ c.desc }}</p>
        </div>
      </div>

      <div class="text-center mt-14">
        <NuxtLink :to="localePath('/book-a-call')" class="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-indigo-50/95 text-space-950 border border-transparent hover:border-indigo-500/50 hover:bg-indigo-950 hover:text-white font-black text-[12px] uppercase tracking-widest transition-all duration-500 active:scale-95 outline-none cursor-pointer">
          {{ $t('cases.cta') }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm } = useI18n()
const localePath = useLocalePath()

const items = computed(() => tm('cases.items') as Array<{ tag: string; title: string; desc: string }>)
</script>
