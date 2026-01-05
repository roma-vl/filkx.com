
import * as Vue from 'vue';
const { defineComponent, h } = Vue;
import { ArrowLeft, FileText } from 'lucide-vue-next';

export default defineComponent({
  name: 'TermsOfService',
  emits: ['back'],
  setup(_, { emit }) {
    const sections = [
      { title: 'Прийняття умов', text: 'Користуючись нашими послугами, ви погоджуєтесь з цими умовами та нашою політикою конфіденційності.' },
      { title: 'Послуги', text: 'Filkx Studio надає професійні послуги з розробки програмного забезпечення на основі індивідуальних договорів (NDA/MSA).' },
      { title: 'Інтелектуальна власність', text: 'Після повної оплати послуг усі майнові права на розроблений код переходять до замовника.' },
      { title: 'Обмеження відповідальності', text: 'Ми гарантуємо технічну стабільність розроблених систем згідно з SLA, але не несемо відповідальності за бізнес-результати замовника.' }
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
            h(FileText, { size: 48, class: 'text-indigo-500' }),
            h('h1', { class: 'text-4xl md:text-6xl font-display font-black text-white' }, 'Terms of Service')
          ]),
          
          h('div', { class: 'space-y-12' }, 
            sections.map(s => h('div', [
              h('h2', { class: 'text-2xl font-black text-indigo-400 mb-4' }, s.title),
              h('p', { class: 'text-gray-400 text-lg leading-relaxed' }, s.text)
            ]))
          )
        ])
      ])
    ]);
  }
});
