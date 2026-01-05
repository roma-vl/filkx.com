
// components/ServicesDetail.ts
import * as Vue from 'vue';
const { defineComponent, h } = Vue;
import { ArrowLeft, Database, Layout, Layers, Server, Zap, Terminal, CheckCircle2 } from 'lucide-vue-next';

export default defineComponent({
  name: 'ServicesDetail',
  emits: ['back'],
  setup(_, { emit }) {
    const fullServices = [
      { 
        title: 'Backend Engineering', 
        icon: Database, 
        color: 'text-indigo-400',
        details: 'Ми будуємо фундаменти на базі PHP 8.3+, використовуючи Laravel або Symfony для створення стабільних, типізованих та тестованих систем.',
        stack: ['Laravel / Symfony', 'PHP 8.3', 'PostgreSQL', 'Redis', 'Nginx'],
        features: ['Stateless API architecture', 'Redis-based background jobs', 'Event-driven business logic', 'Complex database optimization']
      },
      { 
        title: 'Frontend & UI Logic', 
        icon: Layout, 
        color: 'text-violet-400',
        details: 'Розробляємо Single Page Applications (SPA) з чітким розділенням фронтенд-домену та API, забезпечуючи миттєву взаємодію користувача з даними.',
        stack: ['Vue 3 (Composition API)', 'TypeScript', 'Pinia State Mgmt', 'Vite', 'WebSockets'],
        features: ['API-driven dynamic UI', 'Optimized client-side performance', 'Modular component architecture', 'Real-time data synchronization']
      },
      { 
        title: 'Infrastructure & Scale', 
        icon: Server, 
        color: 'text-emerald-400',
        details: 'Наші системи розгортаються в ізольованих Docker-середовищах, готових до горизонтального масштабування та автоматизованого моніторингу.',
        stack: ['Docker / Compose', 'Kubernetes', 'CI/CD Pipelines', 'AWS / GCP', 'Elasticsearch'],
        features: ['Zero-downtime deployment', 'Infrastructure as Code (IaC)', 'Horizontal auto-scaling', 'Health check monitoring systems']
      }
    ];

    return () => h('div', { class: 'pt-32 pb-40 px-6 animate-fade-in-up' }, [
      h('div', { class: 'container-wide' }, [
        h('button', { 
          onClick: () => emit('back'),
          class: 'flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 bg-transparent border-none cursor-pointer outline-none font-bold' 
        }, [
          h(ArrowLeft, { size: 20 }), 'Повернутись'
        ]),

        h('div', { class: 'mb-24 reveal' }, [
          h('h1', { class: 'text-5xl md:text-8xl font-display font-black text-white mb-8 tracking-tighter' }, [
            'System-First', h('span', { class: 'block text-indigo-500' }, 'Engineering')
          ]),
          h('p', { class: 'text-gray-400 text-xl md:text-2xl max-w-4xl leading-relaxed' }, 
            'Ми створюємо програмне забезпечення як актив. Наш підхід базується на принципах Clean Architecture та SOLID, що гарантує життєздатність продукту в довгостроковій перспективі.'
          )
        ]),

        h('div', { class: 'space-y-12' }, 
          fullServices.map((s, i) => h('div', { 
            class: 'glass p-8 md:p-16 rounded-[48px] border border-white/5 reveal relative overflow-hidden group' 
          }, [
            h('div', { class: 'grid lg:grid-cols-2 gap-16 items-start relative z-10' }, [
              h('div', [
                h('div', { class: 'mb-10 p-6 bg-white/[0.03] w-fit rounded-3xl border border-white/5' }, [
                  h(s.icon, { size: 48, class: s.color })
                ]),
                h('h2', { class: 'text-4xl font-black text-white mb-6' }, s.title),
                h('p', { class: 'text-gray-400 text-xl leading-relaxed mb-10' }, s.details),
                
                h('div', { class: 'space-y-4' }, 
                  s.features.map(f => h('div', { class: 'flex items-center gap-4 text-white font-medium' }, [
                    h(CheckCircle2, { size: 20, class: 'text-green-400' }), f
                  ]))
                )
              ]),
              h('div', { class: 'p-8 md:p-12 bg-white/[0.02] rounded-[32px] border border-white/5' }, [
                h('h3', { class: 'text-indigo-400 font-black uppercase text-[10px] tracking-[0.3em] mb-8' }, 'Technology Ecosystem'),
                h('div', { class: 'grid grid-cols-2 gap-4' }, 
                  s.stack.map(tech => h('div', { class: 'px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-white font-bold text-center text-sm' }, tech))
                )
              ])
            ]),
            h('div', { class: 'absolute -right-20 -bottom-20 w-80 h-80 bg-indigo-600/5 rounded-full blur-[120px] group-hover:bg-indigo-600/10 transition-all' })
          ]))
        )
      ])
    ]);
  }
});
