
import * as Vue from 'vue';
const { defineComponent, h } = Vue;
import { ArrowLeft, Shield } from 'lucide-vue-next';

export default defineComponent({
  name: 'PrivacyPolicy',
  emits: ['back'],
  setup(_, { emit }) {
    const sections = [
      { title: 'Збір даних', text: 'Ми збираємо лише ту інформацію, яка необхідна для надання високоякісних послуг з розробки: контактні дані та технічні вимоги проекту.' },
      { title: 'Використання', text: 'Ваші дані використовуються виключно для комунікації та підготовки технічних пропозицій. Ми ніколи не передаємо дані третім особам.' },
      { title: 'Безпека', text: 'Усі дані зберігаються в зашифрованому вигляді на захищених хмарних серверах з обмеженим доступом персоналу.' },
      { title: 'Ваші права', text: 'Ви маєте право в будь-який момент вимагати видалення вашої особистої інформації з нашої бази даних.' }
    ];

    return () => h('div', { class: 'pt-32 pb-40 px-6 animate-fade-in-up' }, [
      h('div', { class: 'container-wide max-w-4xl mx-auto' }, [
        h('button', { 
          onClick: () => emit('back'),
          class: 'flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 bg-transparent border-none cursor-pointer outline-none font-bold' 
        }, [
          h(ArrowLeft, { size: 20 }), 'Назад'
        ]),

        h('div', { class: 'glass p-12 md:p-20 rounded-[48px] border border-white/5 reveal' }, [
          h('div', { class: 'flex items-center gap-6 mb-12' }, [
            h(Shield, { size: 48, class: 'text-indigo-500' }),
            h('h1', { class: 'text-4xl md:text-6xl font-display font-black text-white' }, 'Privacy Policy')
          ]),
          
          h('div', { class: 'space-y-12' }, 
            sections.map(s => h('div', [
              h('h2', { class: 'text-2xl font-black text-indigo-400 mb-4' }, s.title),
              h('p', { class: 'text-gray-400 text-lg leading-relaxed' }, s.text)
            ]))
          ),
          
          h('div', { class: 'mt-20 pt-10 border-t border-white/5 text-gray-500 text-sm' }, 
            `Останнє оновлення: ${new Date().toLocaleDateString('uk-UA')}`
          )
        ])
      ])
    ]);
  }
});
