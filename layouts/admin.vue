<template>
  <div class="min-h-screen bg-space-950 flex font-sans selection:bg-indigo-500/30">
    <!-- Sidebar -->
    <aside class="w-80 border-r border-white/5 bg-space-950/50 backdrop-blur-3xl flex flex-col fixed h-screen z-50">
      <div class="p-8">
        <NuxtLink to="/" class="group flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-indigo-600 grid place-items-center text-white shadow-[0_0_20px_rgba(79,70,229,0.3)] group-hover:scale-105 transition-transform">
            <IconsLogo :size="24" />
          </div>
          <span class="font-display font-black text-xl text-white tracking-tight">{{ $t('admin.menu.administrator') }}</span>
        </NuxtLink>
      </div>

      <nav class="flex-grow px-4 space-y-2 mt-4">
        <NuxtLink
          v-for="item in menuItems"
          :key="item.path"
          :to="localePath(item.path)"
          class="flex items-center gap-4 px-6 py-4 rounded-2xl transition-all group relative"
          :class="[
            $route.path === localePath(item.path)
              ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20'
              : 'text-gray-500 hover:text-white hover:bg-white/5 border border-transparent'
          ]"
        >
          <component :is="item.icon" :size="20" :class="{ 'text-indigo-400': $route.path === localePath(item.path) }" />
          <span class="font-bold text-sm tracking-wide uppercase">{{ $t(`admin.menu.${item.key}`) }}</span>

          <!-- Active Indicator -->
          <div v-if="$route.path === localePath(item.path)" class="absolute right-6 w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
        </NuxtLink>
      </nav>

      <div class="p-4 mt-auto">
        <div class="glass p-6 rounded-3xl border border-white/5 mb-4">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-full bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-xs font-black uppercase">
              {{ user?.email?.charAt(0) }}
            </div>
            <div class="overflow-hidden">
              <p class="text-white text-xs font-black truncate">{{ user?.email }}</p>
              <p class="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{{ $t('admin.menu.administrator') }}</p>
            </div>
          </div>
          <button
            @click="logout"
            class="w-full py-3 rounded-xl bg-white/5 hover:bg-red-500/10 hover:text-red-400 text-gray-400 font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 border border-white/5 outline-none cursor-pointer"
          >
            <LogOut :size="14" />
            {{ $t('admin.menu.logout') }}
          </button>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-grow ml-80 min-h-screen relative">
      <div class="p-12">
        <slot />
      </div>

      <!-- Background Decor -->
      <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div class="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px]"></div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import {
  LayoutDashboard,
  Inbox,
  Users,
  Settings,
  LogOut,
  Sparkles
} from 'lucide-vue-next'
import { useAuth } from '~/composables/useAuth'
import { useReveal } from '~/composables/useReveal'

const { user, logout, fetchUser } = useAuth()
const { refreshReveal } = useReveal()
const localePath = useLocalePath()

// Primary call for SSR/Initialization
fetchUser()

onMounted(() => {
  refreshReveal()
})

const menuItems = [
  { key: 'dashboard', name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
  { key: 'submissions', name: 'Submissions', path: '/admin/submissions', icon: Inbox },
  { key: 'users', name: 'Users', path: '/admin/users', icon: Users },
  { key: 'ai_config', name: 'AI Config', path: '/admin/ai', icon: Sparkles },
  { key: 'settings', name: 'Settings', path: '/admin/settings', icon: Settings }
]
</script>
