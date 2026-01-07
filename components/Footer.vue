<template>
  <footer class="py-20 border-t border-white/5 relative z-10">
    <div class="container-wide mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <!-- Logo & About -->
        <div class="md:col-span-1">
          <NuxtLink
            :to="localePath('/')"
            class="flex items-center gap-4 group cursor-pointer p-0 mb-6"
          >
            <div class="w-11 h-11 rounded-2xl bg-indigo-600 grid place-items-center text-white shadow-lg">
              <IconsLogo :size="24" />
            </div>
            <span class="text-2xl font-display font-black text-white">Filkx</span>
          </NuxtLink>
          <p class="text-sm text-gray-500 leading-relaxed max-w-xs">
            {{ $t('footer.studio_desc') }}
          </p>
        </div>

        <!-- Studio Links -->
        <div>
          <h4 class="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-6">{{ $t('footer.sections.studio') }}</h4>
          <nav class="flex flex-col gap-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
            <NuxtLink
              v-for="link in mainLinks"
              :key="link.path"
              :to="localePath(link.path)"
              class="text-left hover:text-indigo-400 transition-colors"
            >
              {{ link.name }}
            </NuxtLink>
          </nav>
        </div>

        <!-- Ecosystem / Products -->
        <div>
          <h4 class="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-6">{{ $t('footer.sections.ecosystem') }}</h4>
          <nav class="flex flex-col gap-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
            <a
              :href="useRuntimeConfig().public.appUrl"
              target="_blank"
              class="flex items-center gap-2 hover:text-white transition-colors group"
            >
              {{ $t('nav.live_studio') }}
              <ExternalLink :size="12" class="opacity-40 group-hover:opacity-100" />
            </a>
          </nav>
        </div>

        <!-- Legal -->
        <div>
          <h4 class="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-6">{{ $t('footer.sections.legal') }}</h4>
          <nav class="flex flex-col gap-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
            <NuxtLink :to="localePath('/privacy')" class="text-left hover:text-white transition-colors">{{ $t('footer.links.privacy') }}</NuxtLink>
            <NuxtLink :to="localePath('/terms')" class="text-left hover:text-white transition-colors">{{ $t('footer.links.terms') }}</NuxtLink>
          </nav>
        </div>
      </div>

      <div class="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-white/5">
        <p class="text-[10px] text-gray-600 font-black uppercase tracking-widest">
          © {{ new Date().getFullYear() }} {{ $t('footer.rights') }}
        </p>
        <div class="flex gap-8">
          <div class="w-1.5 h-1.5 rounded-full bg-green-500/40 animate-pulse"></div>
          <span class="text-[10px] font-black text-gray-500 uppercase tracking-widest">{{ $t('footer.stable') }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ExternalLink } from 'lucide-vue-next'

const { t } = useI18n()
const localePath = useLocalePath()

const mainLinks = computed(() => [
  { name: t('nav.services'), path: '/services' },
  { name: t('nav.approach'), path: '/approach' },
  { name: t('nav.stack'), path: '/stack' },
])
</script>
