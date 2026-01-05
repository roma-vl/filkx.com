
// components/Approach.ts
import * as Vue from 'vue';
const { defineComponent, h } = Vue;
import { CheckCircle2 } from 'lucide-vue-next';

export default defineComponent({
  name: 'Approach',
  setup() {
    const steps = [
      { title: 'Discovery', desc: 'Глибокий аналіз бізнес-моделі та архітектурне проектування.', status: '01' },
      { title: 'Sprint Build', desc: 'Адаптивна розробка з регулярними апдейтами та фідбеком.', status: '02' },
      { title: 'Zero Defects', desc: 'Автоматизоване тестування та аудит безпеки кожної ітерації.', status: '03' },
      { title: 'Scale Ready', desc: 'Деплой у хмару та моніторинг стабільності під навантаженням.', status: '04' }
    ];

    return () => h('section', { id: 'approach', class: 'py-48 px-6 bg-white/[0.01]' }, [
      h('div', { class: 'container-wide' }, [
        h('h2', { class: 'text-5xl md:text-6xl font-display font-black text-white text-center mb-32 reveal' }, 'Наша Методологія'),
        
        h('div', { class: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative' }, [
          // Background line
          h('div', { class: 'hidden lg:block absolute top-12 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent z-0' }),
          
          ...steps.map((step, i) => h('div', { class: 'relative z-10 flex flex-col items-center text-center group reveal', style: { transitionDelay: `${i * 150}ms` } }, [
            h('div', { class: 'w-24 h-24 rounded-[32px] glass border border-indigo-500/20 grid place-items-center mb-10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all group-hover:bg-indigo-600/20 group-hover:scale-110 group-hover:border-indigo-500/50' }, [
              h('span', { class: 'text-3xl font-display font-black text-indigo-400' }, step.status)
            ]),
            h('h3', { class: 'text-2xl font-black text-white mb-5' }, step.title),
            h('p', { class: 'text-gray-400 text-lg px-2 leading-relaxed' }, step.desc)
          ]))
        ]),

        h('div', { class: 'mt-40 p-10 md:p-16 glass rounded-[48px] border border-white/5 flex flex-col lg:flex-row items-center gap-10 justify-between shadow-3xl reveal relative overflow-hidden' }, [
          h('div', { class: 'flex flex-col sm:flex-row items-center gap-8 relative z-10' }, [
            h('div', { class: 'w-20 h-20 rounded-3xl bg-green-500/10 grid place-items-center text-green-400 border border-green-500/20 shadow-lg' }, [
              h(CheckCircle2, { size: 40 })
            ]),
            h('div', { class: 'text-center sm:text-left' }, [
              h('h4', { class: 'text-2xl md:text-3xl font-black text-white mb-2' }, 'Гарантія стабільності'),
              h('p', { class: 'text-gray-400 text-lg max-w-xl' }, 'Ми надаємо 6 місяців безкоштовної технічної підтримки для всіх наших проектів.')
            ])
          ]),
          h('a', { 
            href: '#contact', 
            class: 'px-12 py-6 rounded-2xl bg-indigo-50/95 text-space-950 border border-transparent hover:border-indigo-500/50 hover:bg-indigo-950 hover:text-white font-black text-xl uppercase tracking-widest transition-all duration-500 active:scale-95 shadow-xl relative z-10 text-center w-full lg:w-auto outline-none cursor-pointer' 
          }, 'Забронювати дзвінок')
        ])
      ])
    ]);
  }
});
