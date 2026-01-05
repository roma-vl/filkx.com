
// components/ApproachDetail.ts
import * as Vue from 'vue';
const { defineComponent, h } = Vue;
import { ArrowLeft, Target, Cpu, ShieldCheck, Rocket } from 'lucide-vue-next';

export default defineComponent({
  name: 'ApproachDetail',
  emits: ['back'],
  setup(_, { emit }) {
    const roadmap = [
      { 
        title: 'Technical Discovery', 
        desc: 'Проводимо глибокий аудит вимог, визначаємо потенційні вузькі місця архітектури та обираємо оптимальний стек для масштабування.', 
        icon: Target 
      },
      { 
        title: 'Systems Design', 
        desc: 'Проектуємо схему бази даних, API-контракти та інфраструктурну карту. Готуємо Blueprint системи перед написанням коду.', 
        icon: Cpu 
      },
      { 
        title: 'Architecture-Driven Build', 
        desc: 'Розробка ведеться короткими спринтами з фокусом на Clean Code та покриттям критичних модулів тестами.', 
        icon: Rocket 
      },
      { 
        title: 'Continuous Deployment', 
        desc: 'Автоматизований деплой у хмарні середовища з моніторингом показників здоров’я системи та безпеки даних.', 
        icon: ShieldCheck 
      },
    ];

    return () => h('div', { class: 'pt-32 pb-40 px-6 animate-fade-in-up' }, [
      h('div', { class: 'container-wide' }, [
        h('button', { 
          onClick: () => emit('back'),
          class: 'flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 bg-transparent border-none cursor-pointer outline-none font-bold' 
        }, [
          h(ArrowLeft, { size: 20 }), 'Назад'
        ]),

        h('div', { class: 'text-center mb-32 reveal' }, [
          h('h1', { class: 'text-5xl md:text-8xl font-display font-black text-white mb-8 tracking-tighter' }, 'Наш Інженерний Процес'),
          h('p', { class: 'text-gray-400 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed' }, 
            'Ми мінімізуємо технічний борг через суворе дотримання архітектурних стандартів на кожному етапі життєвого циклу розробки.'
          )
        ]),

        h('div', { class: 'grid md:grid-cols-2 gap-10' }, 
          roadmap.map((item, i) => h('div', { class: 'glass p-12 rounded-[40px] border border-white/5 reveal group relative' }, [
            h('div', { class: 'flex flex-col gap-8 relative z-10' }, [
              h('div', { class: 'w-20 h-20 rounded-3xl bg-indigo-600/10 border border-indigo-500/20 grid place-items-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-lg' }, [
                h(item.icon, { size: 32 })
              ]),
              h('div', [
                h('span', { class: 'text-indigo-400 font-black text-[10px] tracking-widest uppercase mb-2 block' }, `Stage 0${i+1}`),
                h('h2', { class: 'text-3xl font-black text-white mb-4' }, item.title),
                h('p', { class: 'text-gray-400 text-lg leading-relaxed' }, item.desc)
              ])
            ])
          ]))
        )
      ])
    ]);
  }
});
