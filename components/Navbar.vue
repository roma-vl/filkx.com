<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-[60] transition-all duration-500',
      isScrolled || isMobileMenuOpen || !isHome
        ? 'py-4 bg-space-950/90 backdrop-blur-xl border-b border-white/[0.05] shadow-2xl'
        : 'py-10 bg-transparent'
    ]"
  >
    <div class="container-wide flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="flex items-center gap-4 group cursor-pointer border-none bg-transparent outline-none p-0"
        @click="isMobileMenuOpen = false"
      >
        <div class="w-11 h-11 rounded-2xl bg-indigo-600 grid place-items-center text-white shadow-[0_0_20px_rgba(79,70,229,0.4)] group-hover:scale-110 transition-transform">
          <IconsLogo :size="24" />
        </div>
        <span class="text-2xl font-display font-black tracking-tight text-white">Filkx</span>
      </NuxtLink>

      <!-- Desktop Links -->
      <div class="hidden md:flex items-center gap-10">
        <NuxtLink
          v-for="link in links"
          :key="link.path"
          :to="localePath(link.path)"
          class="text-[10px] font-black uppercase tracking-[0.2em] transition-colors relative group py-2"
          :class="route.path === localePath(link.path) ? 'text-indigo-400' : 'text-gray-400 hover:text-white'"
        >
          {{ link.name }}
          <span
            class="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-indigo-500 rounded-full transition-all"
            :class="route.path === localePath(link.path) ? 'w-full' : 'w-0 group-hover:w-full'"
          ></span>
        </NuxtLink>

        <!-- External Product Link -->
        <div class="h-6 w-[1px] bg-white/10 mx-2"></div>
        <a
          :href="useRuntimeConfig().public.appUrl"
          target="_blank"
          class="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-indigo-400 transition-colors group"
        >
          <span class="relative flex h-1.5 w-1.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
          </span>
          {{ $t('nav.live_studio') }}
          <ExternalLink :size="10" class="opacity-40 group-hover:opacity-100 transition-opacity" />
        </a>

        <!-- Language Switcher -->
        <div class="flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
           <NuxtLink 
             v-for="locale in availableLocales" 
             :key="locale.code"
             :to="switchLocalePath(locale.code)"
             class="hover:text-white transition-colors cursor-pointer"
           >
              {{ locale.code }}
           </NuxtLink>
        </div>

        <NuxtLink
          :to="localePath('/book-a-call')"
          class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-indigo-500/20 active:scale-95 no-underline"
        >
          {{ $t('nav.lets_talk') }}
        </NuxtLink>
      </div>

      <!-- Mobile Toggle -->
      <button
        class="md:hidden text-white p-2 bg-transparent border-none outline-none cursor-pointer"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <component :is="isMobileMenuOpen ? X : Menu" :size="32" />
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition name="fade">
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden fixed inset-0 top-[88px] h-[calc(100vh-88px)] bg-space-950/98 backdrop-blur-2xl z-50 p-10 flex flex-col items-center justify-center gap-12"
      >
        <NuxtLink
          v-for="link in links"
          :key="link.path"
          :to="localePath(link.path)"
          class="text-4xl font-display font-black text-white"
          @click="isMobileMenuOpen = false"
        >
          {{ link.name }}
        </NuxtLink>
         <!-- Mobile Language Switcher -->
        <div class="flex gap-8 text-2xl font-black uppercase tracking-widest text-gray-400">
             <NuxtLink 
               v-for="l in locales" 
               :key="l.code"
               :to="switchLocalePath(l.code)"
               :class="locale === l.code ? 'text-indigo-400' : 'hover:text-white'"
               @click="isMobileMenuOpen = false"
             >
                {{ l.name }}
             </NuxtLink>
        </div>

        <a
          href="https://live.filkx.com"
          target="_blank"
          class="text-3xl font-display font-black text-indigo-400 flex items-center gap-4"
        >
          {{ $t('nav.live_studio') }}
          <ExternalLink :size="24" />
        </a>
        <NuxtLink
          :to="localePath('/book-a-call')"
          class="w-full py-6 rounded-3xl bg-indigo-50 text-space-950 font-black text-2xl shadow-2xl active:scale-95 text-center"
          @click="isMobileMenuOpen = false"
        >
          {{ $t('nav.contact') }}
        </NuxtLink>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import { Menu, X, ArrowRight, ExternalLink, Globe } from 'lucide-vue-next'

const { t, locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()

const route = useRoute()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const isHome = computed(() => route.path === localePath('/'))

const availableLocales = computed(() => {
  return (locales.value as any[]).filter(i => i.code !== locale.value)
})

const handleScroll = () => {
  if (process.client) {
    isScrolled.value = window.scrollY > 10
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('scroll', handleScroll)
  }
})

const links = computed(() => [
  { name: t('nav.services'), path: '/services' },
  { name: t('nav.approach'), path: '/approach' },
  { name: t('nav.stack'), path: '/stack' },
])
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
