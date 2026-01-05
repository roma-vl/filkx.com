
// components/Navbar.ts
import * as Vue from 'vue';
const { defineComponent, h, ref, onMounted, onUnmounted } = Vue;
import { Menu, X, ArrowRight, ExternalLink } from 'lucide-vue-next';

const LogoIcon = (props: { size?: number, class?: string }) => h('svg', {
  viewBox: '0 0 24 24',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  class: props.class,
  style: { width: `${props.size || 24}px`, height: `${props.size || 24}px` }
}, [
  h('path', { d: 'M4 4H20V7H7V10H18V13H7V20H4V4Z', fill: 'currentColor' }),
  h('path', { d: 'M14 16H20V19H14V16Z', fill: 'currentColor', opacity: '0.5' })
]);

export default defineComponent({
  name: 'Navbar',
  props: ['currentView'],
  emits: ['navigate'],
  setup(props, { emit }) {
    const isScrolled = ref(false);
    const isMobileMenuOpen = ref(false);

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 10;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    });
    onUnmounted(() => window.removeEventListener('scroll', handleScroll));

    const links = [
      { name: 'Послуги', view: 'services' },
      { name: 'Методологія', view: 'approach' },
      { name: 'Стек', view: 'stack' },
    ];

    const handleNav = (view: string) => {
      emit('navigate', view);
      isMobileMenuOpen.value = false;
    };

    return () => h('nav', {
      class: [
        'fixed top-0 left-0 right-0 z-[60] transition-all duration-500',
        isScrolled.value || isMobileMenuOpen.value || props.currentView !== 'home'
          ? 'py-4 bg-space-950/90 backdrop-blur-xl border-b border-white/[0.05] shadow-2xl'
          : 'py-10 bg-transparent'
      ]
    }, [
      h('div', { class: 'container-wide flex items-center justify-between' }, [
        // Logo
        h('button', {
          onClick: () => handleNav('home'),
          class: 'flex items-center gap-4 group cursor-pointer border-none bg-transparent outline-none p-0'
        }, [
          h('div', { class: 'w-11 h-11 rounded-2xl bg-indigo-600 grid place-items-center text-white shadow-[0_0_20px_rgba(79,70,229,0.4)] group-hover:scale-110 transition-transform' }, [
            h(LogoIcon, { size: 24 })
          ]),
          h('span', { class: 'text-2xl font-display font-black tracking-tight text-white' }, 'Filkx')
        ]),

        // Desktop Links
        h('div', { class: 'hidden md:flex items-center gap-10' }, [
          ...links.map(link => h('button', {
            onClick: () => handleNav(link.view),
            class: [
              'text-[10px] font-black uppercase tracking-[0.2em] transition-colors relative group py-2 bg-transparent border-none cursor-pointer outline-none',
              props.currentView === link.view ? 'text-indigo-400' : 'text-gray-400 hover:text-white'
            ]
          }, [
            link.name,
            h('span', {
              class: [
                'absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-indigo-500 rounded-full transition-all',
                props.currentView === link.view ? 'w-full' : 'w-0 group-hover:w-full'
              ]
            })
          ])),

          // External Product Link - Subtle ecosystem hint
          h('div', { class: 'h-6 w-[1px] bg-white/10 mx-2' }),
          h('a', {
            href: 'https://live.filkx.com',
            target: '_blank',
            class: 'flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-indigo-400 transition-colors group'
          }, [
            h('span', { class: 'relative flex h-1.5 w-1.5' }, [
              h('span', { class: 'animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75' }),
              h('span', { class: 'relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500' }),
            ]),
            'Live Studio',
            h(ExternalLink, { size: 10, class: 'opacity-40 group-hover:opacity-100 transition-opacity' })
          ]),

          h('button', {
            onClick: () => { handleNav('home'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); },
            class: 'flex items-center gap-3 px-8 py-4 rounded-2xl bg-indigo-50/95 text-space-950 border border-transparent hover:border-indigo-500/50 hover:bg-indigo-950 hover:text-white font-black transition-all duration-500 text-[10px] uppercase tracking-widest shadow-xl shadow-indigo-500/5 active:scale-95 cursor-pointer outline-none'
          }, [
            'Let\'s Talk',
            h(ArrowRight, { size: 16 })
          ])
        ]),

        // Mobile Toggle
        h('button', {
          class: 'md:hidden text-white p-2 bg-transparent border-none outline-none cursor-pointer',
          onClick: () => isMobileMenuOpen.value = !isMobileMenuOpen.value
        }, [
          isMobileMenuOpen.value ? h(X, { size: 32 }) : h(Menu, { size: 32 })
        ])
      ]),

      // Mobile Menu Overlay
      isMobileMenuOpen.value ? h('div', {
        class: 'md:hidden fixed inset-0 top-[88px] h-[calc(100vh-88px)] bg-space-950/98 backdrop-blur-2xl z-50 p-10 flex flex-col items-center justify-center gap-12 animate-fade-in'
      }, [
        ...links.map(link => h('button', {
          onClick: () => handleNav(link.view),
          class: 'text-4xl font-display font-black text-white bg-transparent border-none outline-none cursor-pointer'
        }, link.name)),
        h('a', {
          href: 'https://live.filkx.com',
          target: '_blank',
          class: 'text-3xl font-display font-black text-indigo-400 flex items-center gap-4'
        }, ['Live Studio', h(ExternalLink, { size: 24 })]),
        h('button', {
          onClick: () => { handleNav('home'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); },
          class: 'w-full py-6 rounded-3xl bg-indigo-50 text-space-950 font-black text-2xl shadow-2xl active:scale-95 outline-none border-none'
        }, 'Contact Us')
      ]) : null
    ]);
  }
});
