<template>
  <div>
    <Hero />
    <Services />
    <DashboardShowcase class="my-32" />
    <Why />
    <Approach />
    <Cases />
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
