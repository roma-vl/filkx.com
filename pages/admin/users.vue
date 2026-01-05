<template>
  <div class="reveal">
    <div class="mb-12">
      <h1 class="text-4xl font-display font-black text-white mb-2">Users Management</h1>
      <p class="text-gray-500 font-medium tracking-wide uppercase text-[10px]">Access Control & Admins</p>
    </div>
    
    <div class="grid gap-6">
      <div v-if="pending" class="flex justify-center py-20">
        <Loader2 class="text-indigo-500 animate-spin" :size="48" />
      </div>

      <template v-else>
        <div v-for="admin in users" :key="admin.email" class="glass p-6 rounded-2xl border border-white/5 flex items-center justify-between group reveal">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-black">
              {{ admin.email?.charAt(0).toUpperCase() }}
            </div>
            <div>
              <p class="text-white font-black">{{ admin.email }}</p>
              <div class="flex items-center gap-2 mt-1">
                <span class="px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-400 text-[8px] font-black uppercase tracking-widest">{{ admin.role }}</span>
                <span class="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Active</span>
              </div>
            </div>
          </div>
          <button class="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer border border-white/5 outline-none">
            Edit
          </button>
        </div>
      </template>
    </div>

    <div class="mt-12 p-12 rounded-[40px] bg-indigo-600/5 border border-indigo-500/10 text-center">
      <Users :size="48" class="text-indigo-500/30 mx-auto mb-6" />
      <p class="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Invite System coming soon</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Users, Loader2 } from 'lucide-vue-next'
import { useReveal } from '~/composables/useReveal'

definePageMeta({ middleware: 'admin', layout: 'admin' })

const { data: users, pending } = useFetch<any[]>('/api/admin/users')
const { refreshReveal } = useReveal()

watch(pending, (isPending) => {
  if (!isPending) {
    nextTick(() => refreshReveal())
  }
})

onMounted(() => {
  refreshReveal()
})
</script>
