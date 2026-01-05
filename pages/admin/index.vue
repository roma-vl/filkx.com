<template>
  <div class="pt-32 pb-40 px-6">
    <div class="container-wide">
      <div class="flex items-center justify-between mb-16 reveal">
        <div>
          <h1 class="text-4xl md:text-6xl font-display font-black text-white mb-4">Admin Dashboard</h1>
          <p class="text-gray-400 text-lg">Contact Submissions Management</p>
        </div>
        <div class="flex items-center gap-4 px-6 py-3 rounded-2xl glass border border-indigo-500/20">
          <div class="w-3 h-3 rounded-full bg-indigo-500 animate-pulse"></div>
          <span class="text-xs font-black text-indigo-400 uppercase tracking-widest">{{ submissions?.length || 0 }} Submissions</span>
        </div>
      </div>

      <div class="grid gap-6">
        <div v-if="pending" class="flex justify-center py-20">
          <Loader2 class="text-indigo-500 animate-spin" :size="48" />
        </div>
        
        <template v-else>
          <div
            v-for="sub in submissions"
            :key="sub.id"
            class="glass p-8 rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-all group"
          >
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
              <div class="flex items-center gap-6">
                <div class="w-16 h-16 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 uppercase font-black text-2xl">
                  {{ sub.name.charAt(0) }}
                </div>
                <div>
                  <h3 class="text-xl font-black text-white group-hover:text-indigo-400 transition-colors">{{ sub.name }}</h3>
                  <p class="text-gray-500 font-medium">{{ sub.email }}</p>
                </div>
              </div>
              <div class="text-[10px] font-black text-gray-600 uppercase tracking-widest">
                {{ new Date(sub.created_at).toLocaleString('uk-UA') }}
              </div>
            </div>
            
            <div class="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <p class="text-gray-400 leading-relaxed">{{ sub.message }}</p>
            </div>
          </div>
          
          <div v-if="!submissions?.length" class="text-center py-40 glass rounded-[48px] border border-white/5">
            <p class="text-gray-500 font-bold uppercase tracking-[0.2em]">No submissions yet</p>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next'

const { data: submissions, pending } = useFetch('/api/admin/submissions')

useHead({
  title: 'Admin | Filkx Studio'
})
</script>
