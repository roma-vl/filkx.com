
// components/Hero.ts
import * as Vue from 'vue';
const { defineComponent, h } = Vue;
import { Rocket, Shield, Globe, ArrowRight, Code, Zap, Cpu, Terminal, Layers, Box, Database, Lock, Share2 } from 'lucide-vue-next';

export default defineComponent({
  name: 'Hero',
  props: ['onNavigate'],
  setup(props) {
    const badges = [
      { label: 'High Throughput', icon: Rocket, color: 'text-indigo-400' },
      { label: 'Stateless Security', icon: Shield, color: 'text-violet-400' },
      { label: 'Cloud Native', icon: Globe, color: 'text-blue-400' }
    ];

    const floatingCards = [
      { label: 'Laravel / Symfony', icon: Code, top: '-10%', right: '15%', delay: '0s' },
      { label: 'Vue 3 SPA', icon: Cpu, bottom: '5%', right: '-8%', delay: '2s' },
      { label: 'REST / GraphQL', icon: Zap, top: '35%', right: '-15%', delay: '4s' },
      { label: 'Docker / Nginx', icon: Share2, top: '10%', left: '-5%', delay: '1.5s', color: 'text-violet-400' },
      { label: 'Redis Queues', icon: Layers, bottom: '25%', left: '-12%', delay: '3.5s', color: 'text-blue-400' },
      { label: 'Event Driven', icon: Box, bottom: '-8%', left: '10%', delay: '5s', color: 'text-emerald-400' },
      { label: 'OAuth2 / JWT', icon: Lock, top: '60%', left: '-18%', delay: '2.5s', color: 'text-amber-400' },
      { label: 'PostgreSQL', icon: Database, top: '-5%', left: '20%', delay: '6s', color: 'text-rose-400' },
    ];

    return () => h('section', { class: 'relative pt-40 lg:pt-56 pb-40 lg:pb-64 px-6 overflow-hidden bg-grid' }, [
      h('div', { class: 'absolute top-0 left-0 w-full h-full pointer-events-none' }, [
        h('div', { class: 'absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse-slow' }),
        h('div', { class: 'absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px]' }),
      ]),

      h('div', { class: 'container-wide relative z-10' }, [
        h('div', { class: 'grid lg:grid-cols-2 gap-20 items-center' }, [
          h('div', { class: 'text-left max-w-3xl' }, [
            h('div', { class: 'inline-flex items-center gap-3 px-6 py-2.5 rounded-full glass border border-indigo-500/30 text-indigo-300 text-[11px] font-black uppercase tracking-[0.2em] mb-12 reveal' }, [
              h('span', { class: 'flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse' }),
              'Architecting Scalable SaaS Ecosystems'
            ]),
            h('h1', { class: 'text-5xl md:text-7xl xl:text-8xl font-display font-black tracking-tighter leading-[1.05] mb-12 reveal' }, [
              h('span', { class: 'block text-white' }, 'Проектуємо'),
              h('span', { class: 'block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-500 glow-text pb-4' }, 'Складні Системи')
            ]),
            h('p', { class: 'text-lg md:text-xl text-gray-400 mb-16 leading-relaxed font-medium reveal', style: 'transition-delay: 0.1s' }, 
              'Спеціалізована студія розробки високонавантажених веб-застосунків та SaaS платформ. Ми створюємо API-first архітектури, готові до масштабування з першого дня.'
            ),
            h('div', { class: 'flex flex-col sm:flex-row items-center gap-6 mb-24 reveal', style: 'transition-delay: 0.2s' }, [
              h('button', {
                onClick: () => props.onNavigate('start-project'),
                class: 'w-full sm:w-auto px-12 py-6 rounded-2xl bg-indigo-50/95 text-space-950 border border-transparent hover:border-indigo-500/50 hover:bg-indigo-950 hover:text-white font-black text-[11px] uppercase tracking-widest shadow-[0_20px_60px_rgba(79,70,229,0.1)] transition-all duration-500 hover:-translate-y-2 active:scale-95 flex items-center justify-center gap-3 cursor-pointer outline-none'
              }, [
                'Розпочати проект', h(ArrowRight, { size: 20 })
              ]),
              h('button', {
                onClick: () => props.onNavigate('services'),
                class: 'w-full sm:w-auto px-12 py-6 rounded-2xl border border-white/10 glass text-white font-black text-[11px] uppercase tracking-widest hover:bg-white/10 transition-all duration-500 cursor-pointer active:scale-95 outline-none'
              }, 'Наші послуги')
            ]),
            h('div', { class: 'grid grid-cols-3 gap-8 max-w-xl reveal', style: 'transition-delay: 0.4s' }, 
              badges.map(item => h('div', { class: 'flex flex-col gap-3 group' }, [
                h('div', { class: 'flex items-center gap-3' }, [
                  h(item.icon, { size: 20, class: item.color }),
                  h('span', { class: 'text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]' }, item.label)
                ]),
                h('div', { class: 'h-[1px] w-full bg-white/5 group-hover:bg-indigo-500/30 transition-colors' })
              ]))
            )
          ]),
          h('div', { class: 'relative hidden lg:block reveal' }, [
            h('div', { class: 'relative w-[500px] h-[500px] xl:w-[650px] xl:h-[650px] mx-auto' }, [
              h('div', { class: 'absolute inset-0 rounded-full border border-indigo-500/10 animate-spin-slow' }),
              h('div', { class: 'absolute inset-16 rounded-full border border-violet-500/10 animate-spin-reverse', style: { animationDuration: '25s' } }),
              h('div', { class: 'absolute inset-0 m-auto w-80 h-80 bg-indigo-600/20 rounded-full blur-[100px] animate-pulse' }),
              ...floatingCards.map(card => h('div', {
                class: 'absolute z-30 flex items-center gap-3 px-6 py-4 rounded-[24px] glass border border-white/10 shadow-2xl animate-float',
                style: { top: card.top, left: card.left, right: card.right, bottom: card.bottom, animationDelay: card.delay }
              }, [
                h(card.icon, { size: 18, class: card.color || 'text-indigo-400' }),
                h('span', { class: 'text-[11px] font-black uppercase tracking-widest text-white/90' }, card.label)
              ])),
              h('div', { class: 'absolute inset-0 m-auto w-48 h-64 xl:w-56 xl:h-72 flex items-center justify-center' }, [
                ...Array.from({length: 3}).map((_, i) => h('div', {
                  class: 'absolute w-full h-full rounded-[32px] glass border border-white/20 shadow-2xl transition-transform duration-700 animate-float',
                  style: { 
                    transform: `translate(${i * 15}px, ${i * -15}px) skewX(-10deg)`,
                    opacity: 0.3 + (i * 0.2),
                    zIndex: 10 - i,
                    animationDelay: `${i * 0.3}s`,
                    background: i === 2 ? 'linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(139,92,246,0.1) 100%)' : ''
                  }
                }, [
                  i === 2 ? h('div', { class: 'w-full h-full p-6 flex flex-col justify-between' }, [
                    h('div', { class: 'flex items-center gap-2' }, [h(Terminal, { size: 16, class: 'text-indigo-400' }), h('div', { class: 'h-1.5 w-12 bg-white/20 rounded-full' })]),
                    h('div', { class: 'space-y-3' }, [h('div', { class: 'h-1 w-full bg-white/10 rounded-full' }), h('div', { class: 'h-1 w-2/3 bg-white/10 rounded-full' })]),
                    h('div', { class: 'flex justify-end' }, [h(Code, { size: 24, class: 'text-violet-400/50' })])
                  ]) : null
                ])),
                h('div', { class: 'absolute z-20 w-16 h-16 bg-indigo-500 rounded-full blur-xl animate-pulse opacity-60' }),
              ])
            ])
          ])
        ])
      ])
    ]);
  }
});
