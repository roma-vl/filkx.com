<template>
  <Transition name="fade">
    <div v-if="loading" class="fixed inset-0 z-[1000] flex items-center justify-center bg-space-950">
      <div class="flex flex-col items-center gap-8 translate-y-[-20%] md:translate-y-0">
        <div class="relative w-24 h-24 flex items-center justify-center">
          <!-- Spinning Ring -->
          <div class="absolute inset-0 border-t-2 border-indigo-500 rounded-full animate-spin shadow-[0_0_40px_rgba(79,70,229,0.4)]"></div>
          <!-- logo icons -->
          <div class="z-10 bg-space-950 p-2 rounded-full">
             <IconsLogo :size="40" class="text-indigo-500 animate-pulse" />
          </div>
        </div>
        <div class="flex flex-col items-center">
            <span class="text-indigo-400 font-display font-black text-3xl tracking-tighter uppercase animate-pulse">Filkx</span>
            <div class="h-1 w-12 bg-indigo-500/20 rounded-full mt-2 overflow-hidden">
                <div class="h-full bg-indigo-500 animate-loading-bar"></div>
            </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{
  loading: boolean
}>()
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

@keyframes loading-bar {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.animate-loading-bar {
  animation: loading-bar 1.5s infinite linear;
}
</style>
