<script setup lang="ts">
import { ref, onMounted, h } from 'vue'
import Navbar from '@/components/studio/Navbar'
import Hero from '@/components/studio/Hero'
import DashboardShowcase from '@/components/studio/DashboardShowcase'
import Services from '@/components/studio/Services'
import Approach from '@/components/studio/Approach'
import TechStack from '@/components/studio/TechStack'
import Contact from '@/components/studio/Contact'
import Footer from '@/components/studio/Footer'

import ServicesDetail from '@/components/studio/ServicesDetail'
import ApproachDetail from '@/components/studio/ApproachDetail'
import StackDetail from '@/components/studio/StackDetail'
import PrivacyPolicy from '@/components/studio/PrivacyPolicy'
import TermsOfService from '@/components/studio/TermsOfService'
import StartProjectDetail from '@/components/studio/StartProjectDetail'

const isLoading = ref(true)
const currentView = ref('home')

const navigateTo = (view: string) => {
  currentView.value = view
  window.scrollTo({ top: 0, behavior: 'smooth' })
  setTimeout(initReveal, 100)
}

const initReveal = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
      }
    })
  }, { threshold: 0.1 })
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
}

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
    setTimeout(initReveal, 100)
  }, 1200)
})

const LogoIcon = (props: { size?: number, class?: string }) => h('svg', {
  viewBox: '0 0 24 24',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  class: props.class,
  style: { width: `${props.size || 24}px`, height: `${props.size || 24}px` }
}, [
  h('path', { d: 'M4 4H20V7H7V10H18V13H7V20H4V4Z', fill: 'currentColor' }),
  h('path', { d: 'M14 16H20V19H14V16Z', fill: 'currentColor', opacity: '0.5' })
])
</script>

<template>
  <div class="relative min-h-screen selection:bg-indigo-500/30 overflow-x-hidden bg-space-950 text-white">
    <!-- Premium Loader -->
    <Transition name="fade">
      <div v-if="isLoading" class="fixed inset-0 z-[100] flex items-center justify-center bg-space-950">
        <div class="relative flex flex-col items-center gap-8">
          <div class="relative w-24 h-24 flex items-center justify-center">
            <div class="absolute inset-0 border-t-2 border-indigo-500 rounded-full animate-spin shadow-[0_0_40px_rgba(79,70,229,0.4)]"></div>
            <LogoIcon :size="40" class="text-indigo-500 animate-pulse" />
          </div>
          <span class="text-indigo-400 font-display font-black text-3xl tracking-tighter animate-pulse uppercase">Filkx</span>
        </div>
      </div>
    </Transition>

    <!-- App Structure -->
    <div v-if="!isLoading" class="relative z-10">
      <Navbar @navigate="navigateTo" :current-view="currentView" />

      <main class="animate-fade-in">
        <template v-if="currentView === 'home'">
          <Hero @navigate="navigateTo" />
          <section class="relative z-20 px-4 -mt-32 pb-20">
            <DashboardShowcase />
          </section>
          <Services />
          <Approach />
          <TechStack />
          <Contact />
        </template>

        <ServicesDetail v-else-if="currentView === 'services'" @back="navigateTo('home')" />
        <ApproachDetail v-else-if="currentView === 'approach'" @back="navigateTo('home')" />
        <StackDetail v-else-if="currentView === 'stack'" @back="navigateTo('home')" />
        <PrivacyPolicy v-else-if="currentView === 'privacy'" @back="navigateTo('home')" />
        <TermsOfService v-else-if="currentView === 'terms'" @back="navigateTo('home')" />
        <StartProjectDetail v-else-if="currentView === 'start-project'" @back="navigateTo('home')" />
      </main>

      <Footer @navigate="navigateTo" />
    </div>

    <!-- Global Mesh Decor -->
    <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div class="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div class="absolute bottom-1/4 -right-20 w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-[150px] animate-pulse-slow" style="animation-delay: 2s"></div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

:root {
  --font-sans: 'Inter', sans-serif;
}

body {
  font-family: var(--font-sans);
  background-color: #030712; /* space-950 */
}

.bg-space-950 { background-color: #030712; }

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.7s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s cubic-bezier(0.22, 1, 0.36, 1);
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

/* Custom animations helper */
@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.1); }
}
.animate-pulse-slow {
  animation: pulse-slow 8s infinite ease-in-out;
}

.container-wide {
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
}

.glass {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
</style>
