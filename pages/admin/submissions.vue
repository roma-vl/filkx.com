<template>
  <div class="reveal">
    <div class="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div>
        <h1 class="text-4xl font-display font-black text-white mb-2">Contact Submissions</h1>
        <p class="text-gray-500 font-medium tracking-wide uppercase text-[10px]">Managing all potential SaaS inquiries</p>
      </div>
      
      <!-- Quick Filters -->
      <div class="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
        <button 
          v-for="f in filters" 
          :key="f.id"
          @click="activeFilter = f.id"
          class="px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap cursor-pointer border outline-none"
          :class="[
            activeFilter === f.id 
              ? 'bg-indigo-600 border-indigo-500 text-white shadow-[0_0_15px_rgba(79,70,229,0.3)]' 
              : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10'
          ]"
        >
          {{ f.name }}
        </button>
      </div>
    </div>

    <div class="grid gap-6">
      <div v-if="pending" class="flex justify-center py-20">
        <Loader2 class="text-indigo-500 animate-spin" :size="48" />
      </div>
      
      <template v-else>
        <div
          v-for="sub in filteredSubmissions"
          :key="sub.id"
          class="glass p-8 rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-all group/card reveal relative overflow-hidden"
          :class="{ 'opacity-50 grayscale-[0.5]': sub.status === 'ARCHIVED' }"
        >
          <!-- Status Strip -->
          <div 
            class="absolute top-0 left-0 w-1.5 h-full opacity-50"
            :class="getStatusColor(sub.status)"
          ></div>

          <div class="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-8">
            <div class="flex items-start gap-6">
              <div class="w-16 h-16 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 uppercase font-black text-2xl shrink-0">
                {{ sub.name?.charAt(0) }}
              </div>
              <div class="min-w-0">
                <div class="flex items-center gap-4 mb-1">
                  <h3 class="text-xl font-black text-white group-hover/card:text-indigo-400 transition-colors truncate">{{ sub.name }}</h3>
                  <span 
                    class="px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-widest border"
                    :class="getStatusBadgeClass(sub.status)"
                  >
                    {{ sub.status }}
                  </span>
                </div>
                <div class="flex items-center gap-2 text-gray-500 font-medium text-sm">
                  <Mail :size="14" />
                  <span class="truncate">{{ sub.email }}</span>
                </div>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row items-stretch lg:items-center gap-3">
              <!-- Actions -->
              <div class="flex items-center gap-2">
                <button 
                  v-if="sub.status === 'NEW'"
                  @click="updateStatus(sub.id, 'PROCESSING')"
                  class="flex-1 lg:flex-none px-4 py-2 rounded-xl bg-indigo-600/10 hover:bg-indigo-600 text-indigo-400 hover:text-white text-[10px] font-black uppercase tracking-widest transition-all border border-indigo-500/20 outline-none cursor-pointer"
                >
                  Process
                </button>
                <button 
                  v-if="sub.status !== 'ARCHIVED'"
                  @click="updateStatus(sub.id, 'ARCHIVED')"
                  class="flex-1 lg:flex-none px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-500 hover:text-white text-[10px] font-black uppercase tracking-widest transition-all border border-white/5 outline-none cursor-pointer"
                >
                  Archive
                </button>
                <button 
                  @click="handleDelete(sub.id)"
                  class="flex-1 lg:flex-none px-4 py-2 rounded-xl bg-white/5 hover:bg-red-500/10 text-gray-600 hover:text-red-400 text-[10px] font-black uppercase tracking-widest transition-all border border-white/5 outline-none cursor-pointer"
                >
                  <Trash2 :size="14" />
                </button>
              </div>
              <div class="text-[9px] font-black text-gray-600 uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/5 text-center">
                {{ new Date(sub.createdAt).toLocaleString('uk-UA') }}
              </div>
            </div>
          </div>
          
          <div class="p-8 rounded-3xl bg-white/[0.02] border border-white/5 relative group/msg">
            <div class="absolute -top-3 left-6 px-3 py-1 bg-indigo-600 text-white text-[8px] font-black uppercase tracking-widest rounded-full opacity-0 group-hover/msg:opacity-100 transition-opacity">Briefing Message</div>
            <p class="text-gray-400 leading-relaxed whitespace-pre-wrap">{{ sub.message }}</p>
          </div>
        </div>
        
        <div v-if="!filteredSubmissions.length" class="text-center py-40 glass rounded-[48px] border border-white/5">
          <Inbox :size="64" class="text-gray-800 mx-auto mb-6" />
          <p class="text-gray-500 font-bold uppercase tracking-[0.2em] text-xs">No {{ activeFilter.toLowerCase() }} results</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Loader2, Inbox, Mail, Trash2, ChevronRight, Archive } from 'lucide-vue-next'
import { useReveal } from '~/composables/useReveal'

definePageMeta({
  middleware: 'admin',
  layout: 'admin'
})

const { data: submissions, pending, refresh } = useFetch<any[]>('/api/admin/submissions')
const { refreshReveal } = useReveal()

const activeFilter = ref('ALL')
const filters = [
  { id: 'ALL', name: 'All' },
  { id: 'NEW', name: 'New' },
  { id: 'PROCESSING', name: 'Processing' },
  { id: 'ARCHIVED', name: 'Archived' }
]

const filteredSubmissions = computed(() => {
  if (!submissions.value) return []
  let list = submissions.value.filter(s => s.status !== 'DELETED')
  if (activeFilter.value === 'ALL') return list
  return list.filter(s => s.status === activeFilter.value)
})

const getStatusColor = (status: string) => {
  switch (status) {
    case 'NEW': return 'bg-indigo-500'
    case 'PROCESSING': return 'bg-amber-500'
    case 'ARCHIVED': return 'bg-gray-700'
    default: return 'bg-gray-500'
  }
}

const getStatusBadgeClass = (status: string) => {
  switch (status) {
    case 'NEW': return 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400'
    case 'PROCESSING': return 'bg-amber-500/10 border-amber-500/30 text-amber-400'
    case 'ARCHIVED': return 'bg-white/5 border-white/10 text-gray-500'
    default: return 'bg-white/5 border-white/10 text-gray-400'
  }
}

const updateStatus = async (id: number, status: string) => {
  try {
    await $fetch(`/api/admin/submissions/${id}`, {
      method: 'PATCH',
      body: { status }
    })
    await refresh()
  } catch (e) {
    console.error("Failed to update status:", e)
  }
}

const handleDelete = async (id: number) => {
  if (!confirm('Move to trash? (Soft delete)')) return
  await updateStatus(id, 'DELETED')
}

watch(pending, (isPending) => {
  if (!isPending) {
    nextTick(() => {
      refreshReveal()
    })
  }
})

onMounted(() => {
  refreshReveal()
})

useHead({
  title: 'Submissions | Admin'
})
</script>
