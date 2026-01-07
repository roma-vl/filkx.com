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
          <Shield :size="48" class="text-indigo-500" />
          <h1 class="text-3xl md:text-6xl font-display font-black text-white">{{ $t('pages.privacy.title') }}</h1>
        </div>

        <div class="space-y-8 md:space-y-12">
          <div v-for="s in sections" :key="s.title">
            <h2 class="text-xl md:text-2xl font-black text-indigo-400 mb-3 md:mb-4">{{ s.title }}</h2>
            <p class="text-gray-400 text-base md:text-lg leading-relaxed">{{ s.text }}</p>
          </div>
        </div>

        <div class="mt-12 md:mt-20 pt-8 md:pt-10 border-t border-white/5 text-gray-500 text-xs md:text-sm">
          {{ $t('common.last_updated') }}: {{ new Date().toLocaleDateString('uk-UA') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft, Shield } from 'lucide-vue-next'
const localePath = useLocalePath()

useHead({
  title: 'Privacy Policy | Filkx Studio',
  meta: [
    { name: 'description', content: 'How we handle your data and privacy.' }
  ]
})

const { t } = useI18n()

const sections = computed(() => [
  { title: t('pages.privacy.sections.data.title'), text: t('pages.privacy.sections.data.text') },
  { title: t('pages.privacy.sections.usage.title'), text: t('pages.privacy.sections.usage.text') },
  { title: t('pages.privacy.sections.security.title'), text: t('pages.privacy.sections.security.text') },
  { title: t('pages.privacy.sections.rights.title'), text: t('pages.privacy.sections.rights.text') }
])
</script>
