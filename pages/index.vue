<template>
  <div>
    <Hero />
    <DashboardShowcase class="my-32" />
    <Services />
    <Approach />
    <TechStack />
    <Contact />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t('seo.index.title'),
  meta: [
    { name: 'description', content: t('seo.index.desc') }
  ]
})
</script>
