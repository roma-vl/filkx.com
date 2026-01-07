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

const route = useRoute()

useHead({
  title: t('seo.index.title'),
  meta: [
    { name: 'description', content: t('seo.index.desc') },
    { name: 'robots', content: 'index, follow' },
    // Open Graph
    { property: 'og:title', content: t('seo.index.og_title') },
    { property: 'og:description', content: t('seo.index.og_desc') },
    { property: 'og:image', content: t('seo.index.og_image') },
    { property: 'og:url', content: 'https://filkx.com' + route.path },
    { property: 'og:type', content: t('seo.index.og_type') },
    { property: 'og:site_name', content: t('seo.index.og_site_name') },
    // Twitter Card
    { name: 'twitter:card', content: t('seo.index.twitter_card') },
    { name: 'twitter:title', content: t('seo.index.twitter_title') },
    { name: 'twitter:description', content: t('seo.index.twitter_desc') },
    { name: 'twitter:image', content: t('seo.index.twitter_image') },
    { name: 'twitter:site', content: t('seo.index.twitter_site') },
    { name: 'twitter:creator', content: t('seo.index.twitter_creator') }
  ],
  link: [
    { rel: 'canonical', href: 'https://filkx.com' + route.path },
    { rel: 'alternate', hreflang: 'uk', href: 'https://filkx.com/uk' + route.path.replace(/^\/(uk|en)/, '') },
    { rel: 'alternate', hreflang: 'en', href: 'https://filkx.com/en' + route.path.replace(/^\/(uk|en)/, '') },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://filkx.com/uk' + route.path.replace(/^\/(uk|en)/, '') }
  ]
})
</script>
