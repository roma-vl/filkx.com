
// components/TechStack.ts
import * as Vue from 'vue';
const { defineComponent, h } = Vue;

export default defineComponent({
  name: 'TechStack',
  setup() {
    const tech = [
      { name: 'PHP 8.3', cat: 'Backend Core' },
      { name: 'Laravel / Symfony', cat: 'Frameworks' },
      { name: 'Vue 3 SPA', cat: 'Frontend' },
      { name: 'TypeScript', cat: 'Type Safety' },
      { name: 'Go / Node.js', cat: 'Real-time / Workers' },
      { name: 'PostgreSQL', cat: 'Databases' },
      { name: 'Redis', cat: 'Caching / Queues' },
      { name: 'Docker / K8s', cat: 'Infrastructure' }
    ];

    return () => h('section', { id: 'stack', class: 'py-48 px-6' }, [
      h('div', { class: 'container-wide' }, [
        h('div', { class: 'grid lg:grid-cols-12 gap-24 items-center' }, [
          h('div', { class: 'lg:col-span-5 reveal' }, [
            h('div', { class: 'inline-block px-5 py-2 rounded-xl bg-indigo-600/10 text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-indigo-500/20' }, 'Production Stack'),
            h('h2', { class: 'text-5xl md:text-6xl font-display font-black text-white mb-10 leading-tight' }, 'Технології для Enterprise рішень.'),
            h('p', { class: 'text-gray-400 text-xl mb-12 leading-relaxed' }, 'Ми не експериментуємо на проектах клієнтів. Наш стек — це перевірені інструменти, які забезпечують швидку розробку без втрати якості та продуктивності.'),
            h('div', { class: 'flex gap-5' }, [
              h('div', { class: 'h-1.5 w-24 bg-indigo-600 rounded-full' }),
              h('div', { class: 'h-1.5 w-12 bg-indigo-600/20 rounded-full' })
            ])
          ]),
          h('div', { class: 'lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8' }, 
            tech.map((t, i) => h('div', {
              class: 'glass p-10 rounded-[32px] border border-white/5 flex flex-col items-center justify-center group hover:border-indigo-500/50 transition-all duration-300 reveal shadow-xl',
              style: { transitionDelay: `${i * 50}ms` }
            }, [
              h('span', { class: 'text-white font-black mb-2 group-hover:text-indigo-400 transition-colors text-lg text-center' }, t.name),
              h('span', { class: 'text-[9px] text-gray-500 uppercase font-black tracking-widest' }, t.cat)
            ]))
          )
        ])
      ])
    ]);
  }
});
