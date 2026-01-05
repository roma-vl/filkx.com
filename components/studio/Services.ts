
// components/Services.ts
import * as Vue from 'vue';
const { defineComponent, h } = Vue;
import { Database, Layout, Layers, Terminal, Server, Zap } from 'lucide-vue-next';

export default defineComponent({
  name: 'Services',
  setup() {
    const services = [
      { 
        title: 'SaaS Architecture', 
        desc: 'Проектування та розробка багатокористувацьких платформ з ізольованими даними та гнучким керуванням підписками.', 
        icon: Database, 
        color: 'text-indigo-400' 
      },
      { 
        title: 'API-First Engineering', 
        desc: 'Створення stateless бекендів на Laravel/Symfony з повною підтримкою OAuth2, JWT та детальною документацією.', 
        icon: Layers, 
        color: 'text-violet-400' 
      },
      { 
        title: 'Modern Frontends', 
        desc: 'Високопродуктивні SPA на Vue 3, інтегровані з API через реактивні сховища та real-time з’єднання.', 
        icon: Layout, 
        color: 'text-blue-400' 
      },
      { 
        title: 'Real-time Systems', 
        desc: 'Обробка подій у реальному часі через WebSockets та Redis, побудована на Node.js або Go для критичних навантажень.', 
        icon: Zap, 
        color: 'text-amber-400' 
      },
      { 
        title: 'Infrastructure & DevOps', 
        desc: 'Контейнеризація Docker, оркестрація Kubernetes та налаштування CI/CD пайплайнів для Blue/Green деплою.', 
        icon: Terminal, 
        color: 'text-emerald-400' 
      },
      { 
        title: 'High-Load Backend', 
        desc: 'Оптимізація складних бізнес-процесів через черги (Redis/RabbitMQ) та фонову обробку в PHP 8.3/Go.', 
        icon: Server, 
        color: 'text-rose-400' 
      }
    ];

    return () => h('section', { id: 'services', class: 'py-48 px-6' }, [
      h('div', { class: 'container-wide' }, [
        h('div', { class: 'text-center mb-32 reveal' }, [
          h('h2', { class: 'text-5xl md:text-6xl font-display font-black text-white mb-8' }, 'Наші Компетенції'),
          h('p', { class: 'text-gray-400 max-w-3xl mx-auto text-xl leading-relaxed' }, 
            'Ми спеціалізуємося на побудові складних веб-систем, де надійність архітектури та швидкість обробки даних є пріоритетом номер один.'
          )
        ]),

        h('div', { class: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12' }, 
          services.map((s, i) => h('div', {
            class: 'glass p-12 rounded-[40px] border border-white/5 hover:border-indigo-500/30 transition-all group hover:-translate-y-3 duration-500 reveal relative overflow-hidden shadow-2xl',
            style: { transitionDelay: `${i * 100}ms` }
          }, [
            h('div', { class: 'mb-10 p-5 bg-white/[0.03] w-fit rounded-3xl group-hover:scale-110 transition-transform duration-500 border border-white/5 group-hover:bg-indigo-600/10 shadow-lg' }, [
              h(s.icon, { class: s.color, size: 40 })
            ]),
            h('h3', { class: 'text-2xl font-black text-white mb-5 group-hover:text-indigo-300 transition-colors' }, s.title),
            h('p', { class: 'text-gray-400 text-lg leading-relaxed' }, s.desc),
            h('div', { class: 'absolute -right-16 -bottom-16 w-48 h-48 bg-indigo-600/5 rounded-full blur-[80px] group-hover:bg-indigo-600/15 transition-all' })
          ]))
        )
      ])
    ]);
  }
});
