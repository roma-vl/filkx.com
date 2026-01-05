<template>
  <div class="container-wide reveal">
    <div class="glass rounded-[48px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)] relative">
      <!-- Browser Chrome -->
      <div class="bg-white/[0.04] border-b border-white/10 px-6 md:px-10 py-5 md:py-7 flex items-center justify-between">
        <div class="flex items-center gap-4">
          <div class="flex gap-2">
            <div class="w-3 h-3 rounded-full bg-red-500/40"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500/40"></div>
            <div class="w-3 h-3 rounded-full bg-green-500/40"></div>
          </div>
          <div class="ml-4 md:ml-8 px-4 md:px-6 py-2 rounded-full bg-space-950/80 border border-white/5 text-[10px] md:text-xs text-indigo-400 font-mono tracking-wider">
            case-study.filkx.studio/live-platform
          </div>
        </div>
        <div class="hidden sm:flex items-center gap-4">
          <div class="px-4 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-widest">Featured Project</div>
          <div class="w-8 h-2 rounded-full bg-white/5"></div>
        </div>
      </div>

      <!-- Content -->
      <div class="p-8 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
        <!-- Project Details -->
        <div class="lg:col-span-4 space-y-10">
          <div>
            <h4 class="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-4">Product Spotlight</h4>
            <h3 class="text-4xl md:text-5xl font-display font-black text-white mb-6">Live Studio</h3>
            <p class="text-gray-400 text-lg leading-relaxed">
              Власна real-time платформа, побудована командою Filkx. Демонстрація нашої експертизи в обробці потокових даних та високонавантажених API.
            </p>
          </div>
          
          <div class="space-y-6">
            <div v-for="item in features" :key="item.label" class="flex items-start gap-5 p-6 rounded-3xl bg-white/[0.03] border border-white/5">
              <component :is="item.icon" class="text-indigo-400 shrink-0" :size="24" />
              <div>
                <p class="text-white font-black text-sm">{{ item.label }}</p>
                <p class="text-gray-500 text-xs">{{ item.desc }}</p>
              </div>
            </div>
          </div>

          <a
            href="https://live.filkx.com"
            target="_blank"
            class="flex items-center justify-center gap-3 w-full py-6 rounded-2xl bg-indigo-50/95 text-space-950 border border-transparent hover:border-indigo-500/50 hover:bg-indigo-950 hover:text-white font-black uppercase tracking-widest transition-all duration-500 shadow-xl"
          >
            Дослідити продукт
            <ExternalLink :size="18" />
          </a>
        </div>

        <!-- Visualization -->
        <div class="lg:col-span-8 p-8 md:p-12 rounded-[40px] bg-white/[0.02] border border-white/5 relative group overflow-hidden">
          <div class="flex items-center justify-between mb-12">
            <div class="flex items-center gap-3">
              <Monitor :size="20" class="text-indigo-500" />
              <span class="text-xs font-black text-white uppercase tracking-widest">Real-time Analytics Engine</span>
            </div>
            <div class="flex gap-2">
              <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span class="text-[10px] font-black text-green-500 uppercase">Operational</span>
            </div>
          </div>
          
          <!-- Abstract Bar Chart representation -->
          <div class="h-64 md:h-[400px] w-full relative flex items-end gap-1.5 md:gap-3">
            <div
              v-for="(hVal, i) in bars"
              :key="i"
              class="flex-1 bg-gradient-to-t from-indigo-500/0 via-indigo-500/20 to-indigo-400/40 rounded-t-xl transition-all duration-1000"
              :style="{ height: `${hVal}%` }"
            ></div>
          </div>

          <!-- Grid decoration -->
          <div class="absolute inset-0 p-12 pointer-events-none">
            <div v-for="i in 10" :key="i" class="w-full h-[1px] bg-white/[0.03] my-8"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ExternalLink, Layers, Monitor, Activity } from 'lucide-vue-next'

const bars = ref(Array.from({length: 40}, () => 20 + Math.random() * 60))

const features = [
  { icon: Activity, label: 'Latent-free streaming', desc: 'Менше 100мс затримки' },
  { icon: Layers, label: 'Microservice Mesh', desc: 'Повністю Dockerized' }
]

onMounted(() => {
  const interval = setInterval(() => {
    bars.value = bars.value.map(v => Math.max(10, Math.min(100, v + (Math.random() - 0.5) * 15)))
  }, 1500)
  onUnmounted(() => clearInterval(interval))
})
</script>
