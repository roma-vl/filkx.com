<template>
  <div class="reveal">
    <div class="mb-12">
      <h1 class="text-4xl font-display font-black text-white mb-2">Dashboard Overview</h1>
      <p class="text-gray-500 font-medium">Welcome back, <span class="text-white">{{ user?.email }}</span>. Here's what's happening.</p>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div class="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
        <div class="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
          <Inbox :size="64" />
        </div>
        <p class="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Total Submissions</p>
        <h2 class="text-5xl font-black text-white">{{ submissions?.length || 0 }}</h2>
        <div class="mt-4 flex items-center gap-2 text-indigo-400 text-xs font-bold">
          <div class="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
          Live Tracking
        </div>
      </div>
      
      <div class="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden group opacity-50">
        <div class="absolute top-0 right-0 p-8 opacity-10">
          <Users :size="64" />
        </div>
        <p class="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Active Users</p>
        <h2 class="text-5xl font-black text-white">1</h2>
        <div class="mt-4 text-gray-500 text-xs font-bold">System Admin</div>
      </div>

      <div class="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden group opacity-50">
        <div class="absolute top-0 right-0 p-8 opacity-10">
          <Sparkles :size="64" />
        </div>
        <p class="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">AI Tasks</p>
        <h2 class="text-5xl font-black text-white">0</h2>
        <div class="mt-4 text-gray-500 text-xs font-bold">Planned Feature</div>
      </div>
    </div>

    <!-- Latest Submissions Preview -->
    <div class="flex items-center justify-between mb-8">
      <h2 class="text-2xl font-black text-white">Recent Submissions</h2>
      <NuxtLink to="/admin/submissions" class="text-indigo-400 hover:text-white text-xs font-black uppercase tracking-widest transition-colors flex items-center gap-2">
        View All <ChevronRight :size="14" />
      </NuxtLink>
    </div>

    <div class="grid gap-4">
      <div v-if="pending" class="flex justify-center py-10">
        <Loader2 class="text-indigo-500 animate-spin" :size="32" />
      </div>
      
      <template v-else>
        <div
          v-for="sub in submissions?.slice(0, 3)"
          :key="sub.id"
          class="glass p-6 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all flex items-center justify-between group"
        >
          <div class="flex items-center gap-6">
            <div class="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 uppercase font-black text-xl">
              {{ sub.name?.charAt(0) }}
            </div>
            <div>
              <h3 class="text-white font-black group-hover:text-indigo-400 transition-colors">{{ sub.name }}</h3>
              <p class="text-gray-500 text-sm font-medium">{{ sub.email }}</p>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <div class="text-[10px] font-black text-gray-600 uppercase tracking-widest md:block hidden">
              {{ new Date(sub.createdAt).toLocaleDateString('uk-UA') }}
            </div>
            <div v-if="sub.status === 'NEW'" class="w-2 h-2 rounded-full bg-indigo-500"></div>
          </div>
        </div>
        
        <div v-if="!submissions?.length" class="text-center py-20 glass rounded-3xl border border-white/5">
          <p class="text-gray-500 font-bold uppercase tracking-[0.2em] text-xs">No pending requests</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Loader2, Inbox, Users, Sparkles, ChevronRight } from 'lucide-vue-next'
import { useAuth } from '~/composables/useAuth'
import { useReveal } from '~/composables/useReveal'

definePageMeta({
  middleware: 'admin',
  layout: 'admin'
})

const { user } = useAuth()
const { refreshReveal } = useReveal()

onMounted(() => {
  refreshReveal()
})

const { data: submissions, pending } = useFetch<any[]>('/api/admin/submissions')

useHead({
  title: 'Admin | Dashboard'
})
</script>
