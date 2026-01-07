<template>
  <div class="reveal">
    <div class="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div>
        <h1 class="text-4xl font-display font-black text-white mb-2">{{ $t('admin.submissions.title') }}</h1>
        <p class="text-gray-500 font-medium tracking-wide uppercase text-[10px]">{{ $t('admin.submissions.subtitle') }}</p>
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
            {{ $t(`admin.submissions.filters.${f.id.toLowerCase()}`) }}
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
            {{ t.id === 'ALL' ? $t('admin.submissions.filters.all_types') : $t(`admin.submissions.filters.${t.id.toLowerCase()}`) }}
          </button>
        </div>
      </div>

      <div class="text-[10px] font-black text-gray-500 uppercase tracking-widest">
        {{ $t('admin.submissions.total_found') }}: {{ totalFiltered }}
      </div>
    </div>

    <div class="grid gap-6">
      <div v-if="pending" class="flex justify-center py-20">
        <Loader2 class="text-indigo-500 animate-spin" :size="48" />
      </div>

      <div v-else class="space-y-6">
        <TransitionGroup name="list">
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
                <!-- Avatar -->
                <div class="w-16 h-16 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 uppercase font-black text-2xl shrink-0">
                  {{ sub.name?.charAt(0) }}
                </div>

                <div class="min-w-0 flex-1">
                  <!-- Header: Name + Badges -->
                  <div class="flex flex-wrap items-center gap-4 mb-2">
                    <h3 class="text-xl font-black text-white group-hover/card:text-indigo-400 transition-colors truncate">{{ sub.name }}</h3>

                    <span
                      class="px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-widest border"
                      :class="sub.type === 'BOOKING' ? 'bg-violet-500/10 border-violet-500/30 text-violet-400' : 'bg-blue-500/10 border-blue-500/30 text-blue-400'"
                    >
                      {{ $t(`admin.submissions.filters.${sub.type.toLowerCase()}`) }}
                    </span>

                    <span
                      class="px-2 py-0.5 rounded-md text-[8px] font-black uppercase tracking-widest border"
                      :class="getStatusBadgeClass(sub.status)"
                    >
                      {{ $t(`admin.submissions.status.${sub.status.toLowerCase()}`) }}
                    </span>
                  </div>

                  <!-- Contact Details -->
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
                      <span>{{ $t('admin.submissions.fields.preferred_time') }}: {{ sub.preferredTime }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Actions Column -->
              <div class="flex flex-col sm:flex-row items-stretch lg:items-center gap-3">
                <!-- Status Dropdown -->
                <div class="relative group/dropdown">
                  <div class="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-gray-400 text-[10px] font-black uppercase tracking-widest cursor-pointer hover:bg-white/10 hover:text-white transition-all">
                    <span>{{ $t('admin.submissions.status.change') }}</span>
                    <ChevronDown :size="14" />
                  </div>

                  <!-- Dropdown Menu -->
                  <div class="absolute right-0 top-full mt-2 w-48 bg-[#0f111a] border border-white/10 rounded-xl shadow-xl overflow-hidden z-20 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all transform translate-y-2 group-hover/dropdown:translate-y-0">
                    <button
                      v-for="(label, key) in availableStatuses"
                      :key="key"
                      @click="updateStatus(sub.id, key)"
                      class="w-full text-left px-4 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-colors flex items-center gap-2"
                      :class="sub.status === key ? 'text-indigo-400 bg-indigo-500/10' : 'text-gray-400'"
                    >
                      <div class="w-1.5 h-1.5 rounded-full" :class="getStatusColor(key).replace('opacity-50', 'bg-opacity-100')"></div>
                      {{ $t(`admin.submissions.status.${key.toLowerCase()}`) }}
                    </button>
                  </div>
                </div>

                <!-- Delete Action -->
                <button
                  @click="handleDelete(sub.id)"
                  class="flex-1 lg:flex-none w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-red-500/10 text-gray-600 hover:text-red-400 border border-white/5 outline-none cursor-pointer group/trash transition-all"
                  title="Move to trash"
                >
                  <Trash2 :size="16" class="group-hover/trash:scale-110 transition-transform" />
                </button>

                <!-- Date -->
                <div class="text-[9px] font-black text-gray-600 uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/5 text-center min-w-[70px]">
                  {{ formatDate(sub.createdAt) }}
                </div>
              </div>
            </div>

            <!-- Message Block -->
            <div class="p-8 rounded-3xl bg-white/[0.02] border border-white/5 relative group/msg">
              <div class="absolute -top-3 left-6 px-3 py-1 bg-indigo-600 text-white text-[8px] font-black uppercase tracking-widest rounded-full opacity-0 group-hover/msg:opacity-100 transition-opacity">{{ $t('admin.submissions.fields.message') }}</div>
              <p class="text-gray-400 leading-relaxed whitespace-pre-wrap">{{ sub.message }}</p>
            </div>
          </div>
        </TransitionGroup>

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
            {{ $t('admin.submissions.pagination.page') }} {{ currentPage }} {{ $t('admin.submissions.pagination.of') }} {{ totalPages }}
          </div>
          <button
            @click="currentPage++"
            :disabled="currentPage === totalPages"
            class="w-12 h-12 rounded-2xl glass border border-white/5 flex items-center justify-center text-white disabled:opacity-20 transition-all hover:bg-white/5 cursor-pointer outline-none"
          >
            <ChevronRight :size="20" />
          </button>
        </div>

        <!-- Empty State -->
        <div v-if="!totalFiltered" class="text-center py-40 glass rounded-[48px] border border-white/5">
          <Inbox :size="64" class="text-gray-800 mx-auto mb-6" />
          <p class="text-gray-500 font-bold uppercase tracking-[0.2em] text-xs">{{ $t('admin.submissions.empty') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Loader2, Inbox, Mail, Phone, Clock, Trash2, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-vue-next'
import { useReveal } from '~/composables/useReveal'

definePageMeta({
  middleware: 'admin',
  layout: 'admin'
})

// Data & State
const { data: submissions, pending, refresh } = useFetch<any[]>('/api/admin/submissions')
const { refreshReveal } = useReveal()

const activeStatus = ref('ALL')
const activeType = ref('ALL')
const currentPage = ref(1)
const perPage = 5

// Filters Config
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

const statusLabels: Record<string, string> = {
  NEW: 'Нова',
  PROCESSING: 'В роботі',
  DONE: 'Завершена',
  ARCHIVED: 'Архів',
  DELETED: 'Видалено'
}

// Dropdown Options
const availableStatuses = {
  NEW: 'Нова',
  PROCESSING: 'В роботі',
  DONE: 'Завершена',
  ARCHIVED: 'Архів'
}

// === COMPUTED ===

const filteredList = computed(() => {
  if (!submissions.value) return []
  let list = submissions.value.filter(s => s.status !== 'DELETED')

  // OPTIMISTIC UI: We allow items to stay in the list for a "grace period" or implement logic
  // where we simply filter based on current `status` field. Since we update `status` reactively,
  // items might disappear if they no longer match the filter.
  // To solve "disappearing", users usually want to see it change state.
  // Vue TransitionGroup handles the animation out.

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

// === ACTIONS ===

const updateStatus = async (id: number, newStatus: string) => {
  if (!submissions.value) return

  // 1. Find Item
  const item = submissions.value.find(s => s.id === id)
  if (!item) return

  // 2. Snapshot old state for rollback
  const oldStatus = item.status
  if (oldStatus === newStatus) return

  // 3. Optimistic Update (Immediate Feedback)
  item.status = newStatus

  // 4. API Call in Background
  try {
    await $fetch(`/api/admin/submissions/${id}`, {
      method: 'PATCH',
      body: { status: newStatus }
    })
    // Success: Do nothing, UI is already correct.
  } catch (e: any) {
    // Failure: Revert UI change
    item.status = oldStatus
    console.error("Status update failed:", e)
    alert(useNuxtApp().$i18n.t('admin.submissions.actions.delete_error') + ': ' + (e.data?.statusMessage || e.message))
  }
}

const handleDelete = async (id: number) => {
  if (!confirm(useNuxtApp().$i18n.t('admin.submissions.actions.delete_confirm'))) return
  await updateStatus(id, 'DELETED')
}

// === UTILS ===

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString('uk-UA', {
    day: 'numeric',
    month: 'short'
  })
}

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

// === LIFECYCLE ===

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
  title: `${useNuxtApp().$i18n.t('admin.submissions.title')} | Filkx Admin`
})
</script>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}
</style>
