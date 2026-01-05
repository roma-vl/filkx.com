
import * as Vue from 'vue';
const { defineComponent, h, ref } = Vue;
import { Send, CheckCircle, Sparkles, Loader2 } from 'lucide-vue-next';
import { GoogleGenAI, Type } from "@google/genai";

export default defineComponent({
  name: 'Contact',
  setup() {
    const isSubmitted = ref(false);
    const isLoading = ref(false);
    const isAnalyzing = ref(false);
    const idea = ref('');
    const aiResponse = ref<any>(null);

    const handleBrainstorm = async () => {
      if (!idea.value || idea.value.length < 10) return;
      isAnalyzing.value = true;
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-3-pro-preview',
          contents: `Analyze this SaaS idea: "${idea.value}". Provide a brief tech stack and scalability strategy.`,
          config: {
            responseMimeType: "application/json",
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                stack: { type: Type.STRING },
                strategy: { type: Type.STRING },
                features: { type: Type.ARRAY, items: { type: Type.STRING } }
              },
              required: ["stack", "strategy", "features"]
            }
          }
        });
        const text = response.text || "{}";
        aiResponse.value = JSON.parse(text);
      } catch (e) {
        console.error("Gemini brainstorming error:", e);
      } finally {
        isAnalyzing.value = false;
      }
    };

    const handleSubmit = () => {
      isLoading.value = true;
      setTimeout(() => {
        isLoading.value = false;
        isSubmitted.value = true;
      }, 2000);
    };

    return () => h('section', { id: 'contact', class: 'py-40 px-6' }, [
      h('div', { class: 'container mx-auto max-w-5xl' }, [
        h('div', { class: 'glass rounded-[48px] border border-white/10 overflow-hidden shadow-2xl reveal relative group' }, [
          h('div', { class: 'grid lg:grid-cols-2' }, [
            // AI Brainstorming Column
            h('div', { class: 'p-12 md:p-16 bg-gradient-to-br from-indigo-950/40 to-space-950 lg:border-r border-white/10' }, [
              h('div', { class: 'flex items-center gap-4 mb-8' }, [
                h(Sparkles, { class: 'text-indigo-400', size: 32 }),
                h('h3', { class: 'text-3xl font-display font-black text-white' }, 'AI Architect')
              ]),
              h('p', { class: 'text-gray-400 mb-10 text-base leading-relaxed' }, 'Поділіться вашою ідеєю, і наш ШІ миттєво згенерує технічну дорожню карту вашого майбутнього продукту.'),
              h('textarea', {
                value: idea.value,
                onInput: (e: Event) => idea.value = (e.target as HTMLTextAreaElement).value,
                placeholder: 'Наприклад: Marketplace для AI-моделей...',
                class: 'w-full bg-space-950/50 border border-white/10 rounded-3xl p-6 text-sm text-white focus:outline-none focus:border-indigo-500 h-44 transition-all'
              }),
              h('button', {
                onClick: handleBrainstorm,
                disabled: isAnalyzing.value || !idea.value,
                class: 'mt-6 w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-indigo-600/10 text-indigo-400 font-bold text-[10px] uppercase tracking-widest border border-indigo-500/30 hover:bg-indigo-600/20 transition-all duration-500 disabled:opacity-50 border-none cursor-pointer outline-none'
              }, [
                isAnalyzing.value ? h(Loader2, { class: 'animate-spin', size: 18 }) : h(Sparkles, { size: 18 }),
                isAnalyzing.value ? 'Проектуємо...' : 'Згенерувати стратегію'
              ]),
              
              aiResponse.value ? h('div', { class: 'mt-10 p-8 rounded-3xl bg-white/5 border border-white/5 animate-fade-in' }, [
                h('div', { class: 'space-y-6' }, [
                  h('div', [
                    h('p', { class: 'text-[10px] uppercase font-black text-indigo-400 mb-2 tracking-widest' }, 'Технологічний стек'),
                    h('p', { class: 'text-sm text-white font-medium' }, aiResponse.value.stack)
                  ]),
                  h('div', [
                    h('p', { class: 'text-[10px] uppercase font-black text-indigo-400 mb-2 tracking-widest' }, 'Стратегія масштабування'),
                    h('p', { class: 'text-sm text-white font-medium' }, aiResponse.value.strategy)
                  ])
                ])
              ]) : null
            ]),

            // Traditional Form Column
            h('div', { class: 'p-12 md:p-16' }, [
              isSubmitted.value ? h('div', { class: 'h-full flex flex-col items-center justify-center text-center animate-fade-in' }, [
                h(CheckCircle, { class: 'text-green-400 mb-8', size: 80 }),
                h('h3', { class: 'text-4xl font-display font-black text-white mb-4' }, 'Отримано'),
                h('p', { class: 'text-gray-400 text-lg' }, 'Наш архітектор зв’яжеться з вами протягом робочого дня для глибинного інтерв’ю.')
              ]) : h('form', {
                onSubmit: (e: Event) => { e.preventDefault(); handleSubmit(); },
                class: 'space-y-8'
              }, [
                h('h2', { class: 'text-4xl font-display font-black text-white mb-4' }, "Розпочати співпрацю"),
                h('div', { class: 'space-y-6' }, [
                  h('div', { class: 'space-y-2' }, [
                    h('label', { class: 'text-[10px] font-black text-gray-500 uppercase tracking-widest' }, "Ваше ім'я"),
                    h('input', { required: true, type: 'text', placeholder: "Elon Musk", class: 'w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-indigo-500 transition-all duration-300' })
                  ]),
                  h('div', { class: 'space-y-2' }, [
                    h('label', { class: 'text-[10px] font-black text-gray-500 uppercase tracking-widest' }, "Email"),
                    h('input', { required: true, type: 'email', placeholder: "elon@x.com", class: 'w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-indigo-500 transition-all duration-300' })
                  ]),
                  h('div', { class: 'space-y-2' }, [
                    h('label', { class: 'text-[10px] font-black text-gray-500 uppercase tracking-widest' }, "Про проект"),
                    h('textarea', { required: true, rows: 4, placeholder: "Опишіть ваші бізнес-цілі...", class: 'w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-indigo-500 transition-all duration-300 resize-none' })
                  ])
                ]),
                h('button', {
                  type: 'submit',
                  disabled: isLoading.value,
                  class: 'w-full flex items-center justify-center gap-4 py-6 rounded-2xl bg-indigo-50/95 text-space-950 border border-transparent hover:border-indigo-500/50 hover:bg-indigo-950 hover:text-white font-black text-xl uppercase tracking-widest transition-all duration-500 shadow-xl active:scale-95 border-none cursor-pointer outline-none'
                }, [
                  isLoading.value ? h(Loader2, { class: 'animate-spin' }) : h('span', { class: 'flex items-center gap-3' }, [
                    'Надіслати запит', h(Send, { size: 22 })
                  ])
                ]),
                h('p', { class: 'text-center text-[10px] text-gray-600 font-bold uppercase tracking-widest' }, '100% Конфіденційність. NDA за запитом.')
              ])
            ])
          ])
        ])
      ])
    ]);
  }
});
