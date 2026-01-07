export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en: {
            "welcome": "Welcome to Filkx",
            "nav": {
                "services": "Services",
                "approach": "Approach",
                "stack": "Stack",
                "live_studio": "Live Studio",
                "lets_talk": "Let's Talk",
                "contact": "Contact Us"
            },
            "hero": {
                "badge": "Architecting Scalable SaaS Ecosystems",
                "title_prefix": "Engineering",
                "title_suffix": "Complex Systems",
                "description": "A specialized software engineering studio for high-load web applications and SaaS platforms. We build API-first architectures ready to scale from day one.",
                "cta_start": "Start Project",
                "cta_services": "Our Services",
                "cards": {
                    "laravel": "Laravel / Symfony",
                    "vue": "Vue 3 SPA",
                    "rest": "REST / GraphQL",
                    "docker": "Docker / Nginx",
                    "redis": "Redis Queues",
                    "event": "Event Driven",
                    "oauth": "OAuth2 / JWT",
                    "postgres": "PostgreSQL"
                },
                "badges": {
                    "throughput": "High Throughput",
                    "security": "Stateless Security",
                    "cloud": "Cloud Native"
                }
            }
        },
        uk: {
            "welcome": "Ласкаво просимо до Filkx",
            "nav": {
                "services": "Послуги",
                "approach": "Методологія",
                "stack": "Стек",
                "live_studio": "Live Studio",
                "lets_talk": "Обговорити",
                "contact": "Зв'язатися"
            },
            "hero": {
                "badge": "Архітектура Масштабованих SaaS Екосистем",
                "title_prefix": "Проектуємо",
                "title_suffix": "Складні Системи",
                "description": "Спеціалізована студія розробки високонавантажених веб-застосунків та SaaS платформ. Ми створюємо API-first архітектури, готові до масштабування з першого дня.",
                "cta_start": "Розпочати проект",
                "cta_services": "Наші послуги",
                "cards": {
                    "laravel": "Laravel / Symfony",
                    "vue": "Vue 3 SPA",
                    "rest": "REST / GraphQL",
                    "docker": "Docker / Nginx",
                    "redis": "Redis Queues",
                    "event": "Event Driven",
                    "oauth": "OAuth2 / JWT",
                    "postgres": "PostgreSQL"
                },
                "badges": {
                    "throughput": "Високе Навантаження",
                    "security": "Stateless Безпека",
                    "cloud": "Cloud Native"
                }
            }
        }
    }
}))
