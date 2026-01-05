
import * as Vue from 'vue';
const { defineComponent, h, ref } = Vue;
import { ArrowLeft, Sparkles, Send, CheckCircle, Loader2, ChevronRight } from 'lucide-vue-next';
import { GoogleGenAI, Type } from "@google/genai";

export default defineComponent({
  name: 'StartProjectDetail',
  emits: ['back'],
  setup(_, { emit }) {
    const step = ref(1);
    const idea = ref('');
    const details = ref({ name: '', email: '', budget: '10k-50k' });
    const isAnalyzing = ref(false);
    const aiResponse = ref<any>(null);
    const isSubmitted = ref(false);

    const handleBrainstorm = async () => {
      if (!idea.value || idea.value.length < 15) return;
      isAnalyzing.value = true;
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-3-pro-preview',
          contents: `Analyze this SaaS concept: "${idea.value}". Provide a professional architectural overview including suggested stack, data flow, and potential bottlenecks.`,
          config: {
            responseMimeType: "application/json",
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                stack: { type: Type.STRING },
                bottlenecks: { type: Type.STRING },
                roadmap: { type: Type.ARRAY, items: { type: Type.STRING } }
              },
              required: ["stack", "bottlenecks", "roadmap"]
            }
          }
        });
        const text = response.text || "{}";
        aiResponse.value = JSON.parse(text);
        step.value = 2;
      } catch (e) {
        console.error("AI Analysis failed:", e);
        step.value = 2;
      } finally {
        isAnalyzing.value = false;
      }
    };

    const finalSubmit = () => {
      isAnalyzing.value = true;
      setTimeout(() => {
        isAnalyzing.value = false;
        isSubmitted.value = true;
      }, 2000);
    };

    return () => h('div', { class: 'pt-32 pb-40 px-6 animate-fade-in-up' }, [
      h('div', { class: 'container-wide max-w-5xl mx-auto' }, [
        h('button', { 
          onClick: () => emit('back'),
          class: 'flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 bg-transparent border-none cursor-pointer outline-none font-bold' 
        }, [
          h(ArrowLeft, { size: 20 }), 'Повернутись до головної'
        ]),

        isSubmitted.value ? h('div', { class: 'glass p-20 rounded-[48px] border border-white/5 text-center' }, [
          h(CheckCircle, { size: 100, class: 'text-green-400 mx-auto mb-10' }),
          h('h1', { class: 'text-5xl font-black text-white mb-6' }, 'Брифінг завершено'),
          h('p', { class: 'text-gray-400 text-2xl' }, 'Наш технічний директор перегляне вашу ідею та підготує персональну пропозицію протягом 24 годин.')
        ]) : h('div', { class: 'glass p-8 md:p-20 rounded-[48px] border border-white/5 reveal overflow-hidden relative' }, [
          
          // Progress Bar
          h('div', { class: 'absolute top-0 left-0 h-1.5 bg-indigo-600 transition-all duration-700', style: { width: `${(step.value / 3) * 100}%` } }),

          // Step 1: AI Architect Input
          step.value === 1 ? h('div', { class: 'animate-fade-in' }, [
            h('div', { class: 'flex items-center gap-4 mb-10' }, [
              h(Sparkles, { size: 40, class: 'text-indigo-500' }),
              h('h1', { class: 'text-4xl md:text-5xl font-display font-black text-white' }, 'Проектування ідеї')
            ]),
            h('p', { class: 'text-gray-400 text-xl mb-12 leading-relaxed' }, 'Наш ШІ допоможе вам сформулювати технічні вимоги. Просто опишіть вашу бізнес-ідею своїми словами.'),
            h('textarea', {
              value: idea.value,
              onInput: (e: any) => idea.value = e.target.value,
              placeholder: 'Наприклад: Стрімінгова платформа для геймерів з інтегрованими NFT-нагородами...',
              class: 'w-full bg-white/5 border border-white/10 rounded-3xl p-8 text-xl text-white focus:outline-none focus:border-indigo-500 h-64 transition-all mb-10'
            }),
            h('button', {
              onClick: handleBrainstorm,
              disabled: isAnalyzing.value || idea.value.length < 15,
              class: 'w-full py-6 rounded-2xl bg-indigo-600 text-white font-black text-2xl hover:bg-indigo-500 transition-all duration-500 flex items-center justify-center gap-4 disabled:opacity-50 border-none cursor-pointer outline-none'
            }, [
              isAnalyzing.value ? h(Loader2, { class: 'animate-spin' }) : h(Sparkles),
              isAnalyzing.value ? 'Проводимо аналіз...' : 'Проаналізувати концепт'
            ])
          ]) : null,

          // Step 2: Review & Contact
          step.value === 2 ? h('div', { class: 'animate-fade-in' }, [
            h('div', { class: 'flex items-center gap-4 mb-12' }, [
              h(CheckCircle, { size: 40, class: 'text-green-500' }),
              h('h1', { class: 'text-4xl font-display font-black text-white' }, 'Технічна стратегія готова')
            ]),

            aiResponse.value ? h('div', { class: 'grid md:grid-cols-2 gap-10 mb-16' }, [
              h('div', { class: 'p-8 rounded-3xl bg-white/5 border border-white/5' }, [
                h('h3', { class: 'text-indigo-400 font-black uppercase text-xs tracking-widest mb-4' }, 'Рекомендований стек'),
                h('p', { class: 'text-white text-lg leading-relaxed' }, aiResponse.value.stack)
              ]),
              h('div', { class: 'p-8 rounded-3xl bg-white/5 border border-white/5' }, [
                h('h3', { class: 'text-indigo-400 font-black uppercase text-xs tracking-widest mb-4' }, 'План розробки'),
                h('ul', { class: 'space-y-3' }, 
                  aiResponse.value.roadmap.map((r: string) => h('li', { class: 'text-white text-sm flex items-center gap-3' }, [
                    h('div', { class: 'w-1.5 h-1.5 rounded-full bg-indigo-500' }), r
                  ]))
                )
              ])
            ]) : null,

            h('div', { class: 'space-y-8' }, [
              h('div', { class: 'grid md:grid-cols-2 gap-8' }, [
                h('div', { class: 'space-y-2' }, [
                  h('label', { class: 'text-[10px] font-black text-gray-500 uppercase tracking-widest' }, "Ваше ім'я"),
                  h('input', { 
                    value: details.value.name,
                    onInput: (e: any) => details.value.name = e.target.value,
                    class: 'w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-indigo-500 transition-all duration-300' 
                  })
                ]),
                h('div', { class: 'space-y-2' }, [
                  h('label', { class: 'text-[10px] font-black text-gray-500 uppercase tracking-widest' }, "Email"),
                  h('input', { 
                    value: details.value.email,
                    onInput: (e: any) => details.value.email = e.target.value,
                    class: 'w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-indigo-500 transition-all duration-300' 
                  })
                ])
              ]),
              h('button', {
                onClick: finalSubmit,
                class: 'w-full py-6 rounded-2xl bg-indigo-50/95 text-space-950 border border-transparent hover:border-indigo-500/50 hover:bg-indigo-950 hover:text-white font-black text-2xl uppercase tracking-widest transition-all duration-500 flex items-center justify-center gap-4 border-none cursor-pointer active:scale-95 outline-none'
              }, [
                'Отримати пропозицію', h(ChevronRight)
              ])
            ])
          ]) : null

        ])
      ])
    ]);
  }
});
