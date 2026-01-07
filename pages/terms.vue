<template>
  <div class="pt-24 md:pt-32 pb-24 md:pb-40 px-6">
    <div class="container-wide max-w-4xl mx-auto">
      <NuxtLink
        :to="localePath('/')"
        class="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 md:mb-12 font-bold group w-fit"
      >
        <ArrowLeft :size="20" class="group-hover:-translate-x-1 transition-transform" />
        {{ $t('common.back') }}
      </NuxtLink>

      <div class="glass p-8 md:p-20 rounded-[32px] md:rounded-[48px] border border-white/5 reveal">
        <div class="flex items-center gap-4 md:gap-6 mb-8 md:mb-12">
          <FileText :size="48" class="text-indigo-500" />
          <h1 class="text-3xl md:text-6xl font-display font-black text-white">{{ $t('pages.terms.title') }}</h1>
        </div>

        <div class="space-y-8 md:space-y-12">
          <div v-for="s in sections" :key="s.title">
            <h2 class="text-xl md:text-2xl font-black text-indigo-400 mb-3 md:mb-4">{{ s.title }}</h2>
            <p class="text-gray-400 text-base md:text-lg leading-relaxed">{{ s.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft, FileText } from 'lucide-vue-next'
const localePath = useLocalePath()

useHead({
  title: 'Terms of Service | Filkx Studio',
  meta: [
    { name: 'description', content: 'Our terms and conditions of service.' }
  ]
})

const { t } = useI18n()

const sections = computed(() => [
  { title: t('pages.terms.sections.acceptance.title'), text: t('pages.terms.sections.acceptance.text') },
  { title: t('pages.terms.sections.services.title'), text: t('pages.terms.sections.services.text') },
  { title: t('pages.terms.sections.ip.title'), text: t('pages.terms.sections.ip.text') },
  { title: t('pages.terms.sections.liability.title'), text: t('pages.terms.sections.liability.text') }
])
</script>
