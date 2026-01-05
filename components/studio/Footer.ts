
// components/Footer.ts
import * as Vue from 'vue';
const { defineComponent, h } = Vue;
import { ExternalLink } from 'lucide-vue-next';

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
  name: 'Footer',
  emits: ['navigate'],
  setup(_, { emit }) {
    return () => h('footer', { class: 'py-20 border-t border-white/5 relative z-10' }, [
      h('div', { class: 'container-wide mx-auto' }, [
        h('div', { class: 'grid grid-cols-1 md:grid-cols-4 gap-12 mb-16' }, [
          // Logo & About
          h('div', { class: 'md:col-span-1' }, [
            h('button', {
              onClick: () => emit('navigate', 'home'),
              class: 'flex items-center gap-4 group bg-transparent border-none outline-none cursor-pointer p-0 mb-6'
            }, [
              h('div', { class: 'w-11 h-11 rounded-2xl bg-indigo-600 grid place-items-center text-white shadow-lg' }, [
                h(LogoIcon, { size: 24 })
              ]),
              h('span', { class: 'text-2xl font-display font-black text-white' }, 'Filkx')
            ]),
            h('p', { class: 'text-sm text-gray-500 leading-relaxed max-w-xs' }, 'Студія елітної розробки програмного забезпечення. Ми створюємо інструменти, якими користуємось самі.')
          ]),

          // Studio Links
          h('div', [
            h('h4', { class: 'text-[10px] font-black uppercase tracking-[0.3em] text-white mb-6' }, 'Студія'),
            h('nav', { class: 'flex flex-col gap-4 text-xs font-bold text-gray-500 uppercase tracking-widest' },
              ['Послуги', 'Методологія', 'Стек'].map(link => h('button', {
                onClick: () => emit('navigate', link.toLowerCase()),
                class: 'text-left hover:text-indigo-400 transition-colors bg-transparent border-none outline-none cursor-pointer'
              }, link))
            )
          ]),

          // Ecosystem / Products
          h('div', [
            h('h4', { class: 'text-[10px] font-black uppercase tracking-[0.3em] text-white mb-6' }, 'Екосистема'),
            h('nav', { class: 'flex flex-col gap-4 text-xs font-bold text-gray-500 uppercase tracking-widest' }, [
              h('a', {
                href: 'https://live.filkx.com',
                target: '_blank',
                class: 'flex items-center gap-2 hover:text-white transition-colors group'
              }, [
                'Live Studio',
                h(ExternalLink, { size: 12, class: 'opacity-40 group-hover:opacity-100' })
              ])
            ])
          ]),

          // Legal
          h('div', [
            h('h4', { class: 'text-[10px] font-black uppercase tracking-[0.3em] text-white mb-6' }, 'Конфіденційність'),
            h('nav', { class: 'flex flex-col gap-4 text-xs font-bold text-gray-500 uppercase tracking-widest' }, [
              h('button', { onClick: () => emit('navigate', 'privacy'), class: 'text-left hover:text-white transition-colors bg-transparent border-none cursor-pointer' }, 'Privacy Policy'),
              h('button', { onClick: () => emit('navigate', 'terms'), class: 'text-left hover:text-white transition-colors bg-transparent border-none cursor-pointer' }, 'Terms of Service')
            ])
          ])
        ]),

        h('div', { class: 'flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-white/5' }, [
          h('p', { class: 'text-[10px] text-gray-600 font-black uppercase tracking-widest' }, `© ${new Date().getFullYear()} Filkx Studio. All rights reserved.`),
          h('div', { class: 'flex gap-8' }, [
            h('div', { class: 'w-1.5 h-1.5 rounded-full bg-green-500/40 animate-pulse' }),
            h('span', { class: 'text-[10px] font-black text-gray-500 uppercase tracking-widest' }, 'Systems Stable')
          ])
        ])
      ])
    ]);
  }
});
