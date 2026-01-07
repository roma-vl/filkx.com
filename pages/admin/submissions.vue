<template>
  <div class="reveal">
    <div class="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div>
        <h1 class="text-4xl font-display font-black text-white mb-2">Заявки та Бронювання</h1>
        <p class="text-gray-500 font-medium tracking-wide uppercase text-[10px]">Керування всіма зверненнями клієнтів</p>
      </div>
    </div>

    <!-- Controls -->
    <div class="glass p-6 rounded-[32px] border border-white/5 mb-8 flex flex-wrap items-center justify-between gap-6">
      <div class="flex items-center gap-4">
        <!-- Status Filter -->
        <div class="flex items-center gap-1 bg-white/5 p-1 rounded-2xl border border-white/5">
          <button 
            v-for="f in filters" :key="f.id"
            @click="activeStatus = f.id; currentPage = 1"
            class="px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all outline-none cursor-pointer"
            :class="[activeStatus === f.id ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'text-gray-500 hover:text-white']"
          >
            {{ f.name }}
          </button>
        </div>

        <!-- Type Filter -->
        <div class="flex items-center gap-1 bg-white/5 p-1 rounded-2xl border border-white/5">
          <button 
            v-for="t in typeFilters" :key="t.id"
            @click="activeType = t.id; currentPage = 1"
            class="px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all outline-none cursor-pointer"
            :class="[activeType === t.id ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/20' : 'text-gray-500 hover:text-white']"
          >
            {{ t.name }}
          </button>
        </div>
      </div>

      <div class="text-[10px] font-black text-gray-500 uppercase tracking-widest">
        Всього знайдено: {{ totalFiltered }}
      </div>
    </div>

    <div class="grid gap-6">
      <div v-if="pending" class="flex justify-center py-20">
        <Loader2 class="text-indigo-500 animate-spin" :size="48" />
      </div>
      
      <template v-else>
        <div
          v-for="sub in paginatedSubmissions"
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
                <div class="flex items-center gap-4 mb-2">
                  <h3 class="text-xl font-black text-white group-hover/card:text-indigo-400 transition-colors truncate">{{ sub.name }}</h3>
                  <span 
                    class="px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-widest border"
                    :class="sub.type === 'BOOKING' ? 'bg-violet-500/10 border-violet-500/30 text-violet-400' : 'bg-blue-500/10 border-blue-500/30 text-blue-400'"
                  >
                    {{ sub.type }}
                  </span>
                  <span 
                    class="px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-widest border"
                    :class="getStatusBadgeClass(sub.status)"
                  >
                    {{ sub.status }}
                  </span>
                </div>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                  <div class="flex items-center gap-2 text-gray-500 font-medium text-sm">
                    <Mail :size="14" class="text-indigo-500/50" />
                    <span class="truncate">{{ sub.email }}</span>
                  </div>
                  <div v-if="sub.phone" class="flex items-center gap-2 text-gray-500 font-medium text-sm">
                    <Phone :size="14" class="text-indigo-500/50" />
                    <span>{{ sub.phone }}</span>
                  </div>
                  <div v-if="sub.preferredTime" class="flex items-center gap-2 text-indigo-300 font-bold text-sm col-span-full mt-1">
                    <Clock :size="14" />
                    <span>Бажаний час: {{ sub.preferredTime }}</span>
                  </div>
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
                  В роботу
                </button>
                <button 
                  v-if="sub.status === 'PROCESSING'"
                  @click="updateStatus(sub.id, 'DONE')"
                  class="flex-1 lg:flex-none px-4 py-2 rounded-xl bg-green-600/10 hover:bg-green-600 text-green-400 hover:text-white text-[10px] font-black uppercase tracking-widest transition-all border border-green-500/20 outline-none cursor-pointer"
                >
                  Завершити
                </button>
                <button 
                  v-if="sub.status !== 'ARCHIVED'"
                  @click="updateStatus(sub.id, 'ARCHIVED')"
                  class="flex-1 lg:flex-none px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-500 hover:text-white text-[10px] font-black uppercase tracking-widest transition-all border border-white/5 outline-none cursor-pointer"
                >
                  Архів
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
            <div class="absolute -top-3 left-6 px-3 py-1 bg-indigo-600 text-white text-[8px] font-black uppercase tracking-widest rounded-full opacity-0 group-hover/msg:opacity-100 transition-opacity">Повідомлення</div>
            <p class="text-gray-400 leading-relaxed whitespace-pre-wrap">{{ sub.message }}</p>
          </div>
        </div>
        
        <!-- Pagination -->
        <div v-if="totalPages > 1" class="flex justify-center items-center gap-4 mt-12 pb-20">
          <button 
            @click="currentPage--" 
            :disabled="currentPage === 1"
            class="w-12 h-12 rounded-2xl glass border border-white/5 flex items-center justify-center text-white disabled:opacity-20 transition-all hover:bg-white/5 cursor-pointer outline-none"
          >
            <ChevronLeft :size="20" />
          </button>
          <div class="px-6 py-3 rounded-2xl glass border border-white/5 text-[10px] font-black text-white uppercase tracking-widest">
            Сторінка {{ currentPage }} з {{ totalPages }}
          </div>
          <button 
            @click="currentPage++" 
            :disabled="currentPage === totalPages"
            class="w-12 h-12 rounded-2xl glass border border-white/5 flex items-center justify-center text-white disabled:opacity-20 transition-all hover:bg-white/5 cursor-pointer outline-none"
          >
            <ChevronRight :size="20" />
          </button>
        </div>

        <div v-if="!totalFiltered" class="text-center py-40 glass rounded-[48px] border border-white/5">
          <Inbox :size="64" class="text-gray-800 mx-auto mb-6" />
          <p class="text-gray-500 font-bold uppercase tracking-[0.2em] text-xs">Нічого не знайдено</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Loader2, Inbox, Mail, Phone, Clock, Trash2, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { useReveal } from '~/composables/useReveal'

definePageMeta({
  middleware: 'admin',
  layout: 'admin'
})

const { data: submissions, pending, refresh } = useFetch<any[]>('/api/admin/submissions')
const { refreshReveal } = useReveal()

const activeStatus = ref('ALL')
const activeType = ref('ALL')
const currentPage = ref(1)
const perPage = 5

const filters = [
  { id: 'ALL', name: 'Все' },
  { id: 'NEW', name: 'Нові' },
  { id: 'PROCESSING', name: 'В роботі' },
  { id: 'DONE', name: 'Завершені' },
  { id: 'ARCHIVED', name: 'Архів' }
]

const typeFilters = [
  { id: 'ALL', name: 'Всі типи' },
  { id: 'CONTACT', name: 'Контакт' },
  { id: 'BOOKING', name: 'Дзвінок' }
]

const filteredList = computed(() => {
  if (!submissions.value) return []
  let list = submissions.value.filter(s => s.status !== 'DELETED')
  
  if (activeStatus.value !== 'ALL') {
    list = list.filter(s => s.status === activeStatus.value)
  }
  
  if (activeType.value !== 'ALL') {
    list = list.filter(s => s.type === activeType.value)
  }
  
  return list
})

const totalFiltered = computed(() => filteredList.value.length)
const totalPages = computed(() => Math.ceil(totalFiltered.value / perPage))

const paginatedSubmissions = computed(() => {
  const start = (currentPage.value - 1) * perPage
  const end = start + perPage
  return filteredList.value.slice(start, end)
})

const getStatusColor = (status: string) => {
  switch (status) {
    case 'NEW': return 'bg-indigo-500'
    case 'PROCESSING': return 'bg-amber-500'
    case 'DONE': return 'bg-green-500'
    case 'ARCHIVED': return 'bg-gray-700'
    default: return 'bg-gray-500'
  }
}

const getStatusBadgeClass = (status: string) => {
  switch (status) {
    case 'NEW': return 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400'
    case 'PROCESSING': return 'bg-amber-500/10 border-amber-500/30 text-amber-400'
    case 'DONE': return 'bg-green-500/10 border-green-500/30 text-green-400'
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
  } catch (e: any) {
    alert('Помилка оновлення статусу: ' + (e.data?.statusMessage || e.message))
    console.error("Failed to update status:", e)
  }
}

const handleDelete = async (id: number) => {
  if (!confirm('Видалити в кошик?')) return
  await updateStatus(id, 'DELETED')
}

watch([activeStatus, activeType], () => {
  currentPage.value = 1
})

watch(paginatedSubmissions, () => {
  nextTick(() => {
    refreshReveal()
  })
})

onMounted(() => {
  refreshReveal()
})

useHead({
  title: 'Заявки | Filkx Admin'
})
</script>
