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
const { t, tm, rt } = useI18n()
const route = useRoute()
const localePath = useLocalePath()

const structuredData = computed(() => {
  const baseUrl = 'https://filkx.com'
  const currentPath = route.path
  const servicesBlocks = tm('services.blocks') as any[] || []

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Filkx Studio",
      "url": "https://filkx.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://filkx.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Filkx Studio",
      "url": "https://filkx.com",
      "logo": "https://filkx.com/logo.png",
      "sameAs": [
        "https://twitter.com/FilkxStudio"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "hello@filkx.com",
        "contactType": "customer service"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": t('nav.home'), "item": baseUrl + localePath('/') },
        { "@type": "ListItem", "position": 2, "name": t('nav.services'), "item": baseUrl + localePath('/services') },
        { "@type": "ListItem", "position": 3, "name": t('nav.approach'), "item": baseUrl + localePath('/approach') },
        { "@type": "ListItem", "position": 4, "name": t('nav.stack'), "item": baseUrl + localePath('/stack') },
        { "@type": "ListItem", "position": 5, "name": t('nav.live_studio'), "item": baseUrl + localePath('/live-studio') }
      ]
    },
    ...servicesBlocks.map((b, i) => ({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": rt(b.title),
      "description": rt(b.text),
      "provider": {
        "@type": "Organization",
        "name": "Filkx Studio"
      }
    }))
  ]
})

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
    { name: 'twitter:site', content: t('seo.index.twitter_site', { handle: '@FilkxStudio' }) },
    { name: 'twitter:creator', content: t('seo.index.twitter_creator', { handle: '@FilkxStudio' }) }
  ],
  link: [
    { rel: 'canonical', href: 'https://filkx.com' + route.path },
    { rel: 'alternate', hreflang: 'uk', href: 'https://filkx.com/uk' + route.path.replace(/^\/(uk|en)/, '') },
    { rel: 'alternate', hreflang: 'en', href: 'https://filkx.com/en' + route.path.replace(/^\/(uk|en)/, '') },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://filkx.com/uk' + route.path.replace(/^\/(uk|en)/, '') }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: computed(() => JSON.stringify(structuredData.value))
    }
  ]
})
</script>
