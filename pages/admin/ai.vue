<template>
  <div class="reveal">
    <div class="mb-12">
      <h1 class="text-4xl font-display font-black text-white mb-2">{{ $t('admin.ai.title') }}</h1>
      <p class="text-gray-500 font-medium tracking-wide uppercase text-[10px]">{{ $t('admin.ai.subtitle') }}</p>
    </div>

    <div class="grid md:grid-cols-2 gap-8 mb-12">
      <div class="glass p-8 rounded-[32px] border border-indigo-500/20 bg-indigo-500/5">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <Zap :size="20" />
          </div>
          <h3 class="text-xl font-black text-white">{{ $t('admin.ai.main_prompt') }}</h3>
        </div>
        <p class="text-gray-400 text-sm leading-relaxed mb-6 italic">"Act as a CTO and Software Architect. Analyze this SaaS project concept..."</p>
        <div class="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-indigo-400">
          <span>{{ $t('admin.ai.tokens') }}: ~450</span>
          <span class="flex items-center gap-2">
            <div class="w-1.5 h-1.5 rounded-full bg-green-500"></div> {{ $t('admin.ai.optimized') }}
          </span>
        </div>
      </div>

      <div class="glass p-8 rounded-[32px] border border-white/5">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400">
            <BarChart3 :size="20" />
          </div>
          <h3 class="text-xl font-black text-white">{{ $t('admin.ai.performance') }}</h3>
        </div>
        <div class="space-y-4">
          <div class="flex justify-between items-center">
            <span class="text-gray-500 text-xs font-bold uppercase tracking-widest">{{ $t('admin.ai.avg_response') }}</span>
            <span class="text-white font-black">2.4s</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-gray-500 text-xs font-bold uppercase tracking-widest">{{ $t('admin.ai.success_rate') }}</span>
            <span class="text-green-400 font-black">99.2%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Sparkles, Zap, BarChart3 } from 'lucide-vue-next'
definePageMeta({ middleware: 'admin', layout: 'admin' })
</script>
