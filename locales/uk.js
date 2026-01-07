export default {
    "welcome": "Ласкаво просимо до Filkx",
    "common": {
        "back": "Назад",
        "back_home": "Повернутися на головну",
        "back_main": "Повернутись до головної",
        "last_updated": "Останнє оновлення"
    },
    "admin": {
        "dashboard": {
            "title": "Огляд дашборда",
            "welcome": "З поверненням",
            "subtitle": "Ось що відбувається.",
            "stats": {
                "submissions": "Всього заявок",
                "live": "Live відстеження",
                "users": "Активні користувачі",
                "ai": "AI задачі",
                "planned": "Заплановано"
            },
            "recent": "Нові заявки",
            "view_all": "Всі заявки",
            "no_pending": "Немає нових заявок"
        },
        "submissions": {
            "title": "Заявки та Бронювання",
            "subtitle": "Керування всіма зверненнями клієнтів",
            "total_found": "Всього знайдено",
            "filters": {
                "all": "Все",
                "new": "Нові",
                "processing": "В роботі",
                "done": "Завершені",
                "archived": "Архів",
                "all_types": "Всі типи",
                "contact": "Контакт",
                "booking": "Дзвінок"
            },
            "status": {
                "new": "Нова",
                "processing": "В роботі",
                "done": "Завершена",
                "archived": "Архів",
                "deleted": "Видалено",
                "change": "Змінити статус"
            },
            "fields": {
                "preferred_time": "Бажаний час",
                "message": "Повідомлення"
            },
            "actions": {
                "delete_confirm": "Перемістити в кошик?",
                "delete_error": "Не вдалося оновити статус"
            },
            "empty": "Нічого не знайдено",
            "pagination": {
                "page": "Сторінка",
                "of": "з"
            }
        },
        "users": {
            "title": "Керування користувачами",
            "subtitle": "Контроль доступу та адміністратори",
            "status_active": "Активний",
            "edit": "Редагувати",
            "invite_coming_soon": "Система запрошень незабаром"
        },
        "ai": {
            "title": "AI Стратегія",
            "subtitle": "Оптимізація Gemini 1.5 Flash",
            "main_prompt": "Основний промпт",
            "performance": "Продуктивність",
            "tokens": "Токени",
            "optimized": "Оптимізовано",
            "avg_response": "Сер. відповідь",
            "success_rate": "Успішність"
        },
        "menu": {
            "dashboard": "Дашборд",
            "submissions": "Заявки",
            "users": "Користувачі",
            "ai_config": "AI Конфіг",
            "settings": "Налаштування",
            "logout": "Вийти",
            "administrator": "Адміністратор"
        },
        "settings": {
            "title": "Налаштування системи",
            "subtitle": "Глобальні конфігурації платформи.",
            "registration": {
                "title": "Публічна реєстрація",
                "desc": "Контроль реєстрації нових користувачів.",
                "warning": "Коли вимкнено, всі спроби реєстрації через /register або API будуть заблоковані."
            },
            "notifications": {
                "title": "Сповіщення",
                "desc": "Керування каналами сповіщень.",
                "email": "Email сповіщення",
                "email_desc": "Надсилати на Admin Email",
                "telegram": "Telegram сповіщення",
                "telegram_desc": "Надсилати у Telegram Bot"
            }
        }
    },
    "auth": {
        "login": {
            "title": "З поверненням",
            "subtitle": "Система доступу адміністратора",
            "email": "Email адреса",
            "password": "Пароль",
            "submit": "Увійти",
            "loading": "Автентифікація...",
            "no_account": "Немає облікового запису?",
            "request_access": "Запитати доступ",
            "error_generic": "Не вдалося увійти"
        },
        "register": {
            "title": "Створити адміна",
            "subtitle": "Безпечна система реєстрації",
            "email": "Робочий Email",
            "password": "Надійний пароль",
            "submit": "Зареєструватися",
            "loading": "Створення акаунту...",
            "has_account": "Вже маєте доступ?",
            "sign_in": "Увійти",
            "error_generic": "Не вдалося зареєструватися"
        }
    },
    "seo": {
        "index": {
            "title": "Filkx Studio | Scaling SaaS Visions",
            "desc": "Студія розробки високоякісних SaaS екосистем."
        },
        "approach": { "title": "Методологія | Filkx Studio" },
        "services": { "title": "Послуги | Filkx Studio" },
        "stack": { "title": "Технології | Filkx Studio" },
        "book_call": { "title": "Забронювати дзвінок | Filkx Studio" },
        "start_project": { "title": "Розпочати проект | Filkx Studio" },
        "privacy": { "title": "Privacy Policy | Filkx Studio" },
        "terms": { "title": "Terms of Service | Filkx Studio" }
    },
    "pages": {
        "approach": {
            "title": "Наш Інженерний Процес",
            "subtitle": "Ми мінімізуємо технічний борг через суворе дотримання архітектурних стандартів на кожному етапі життєвого циклу розробки.",
            "roadmap": {
                "discovery": { "title": "Technical Discovery", "desc": "Проводимо глибокий аудит вимог, визначаємо потенційні вузькі місця архітектури та обираємо оптимальний стек для масштабування." },
                "design": { "title": "Systems Design", "desc": "Проектуємо схему бази даних, API-контракти та інфраструктурну карту. Готуємо Blueprint системи перед написанням коду." },
                "build": { "title": "Architecture-Driven Build", "desc": "Розробка ведеться короткими спринтами з фокусом на Clean Code та покриттям критичних модулів тестами." },
                "deploy": { "title": "Continuous Deployment", "desc": "Автоматизований деплой у хмарні середовища з моніторингом показників здоров’я системи та безпеки даних." }
            }
        },
        "services": {
            "title": "System-First Engineering",
            "subtitle": "Ми створюємо програмне забезпечення як актив. Наш підхід базується на принципах Clean Architecture та SOLID, що гарантує життєздатність продукту в довгостроковій перспективі.",
            "items": {
                "backend": { "title": "Backend Engineering", "details": "Ми будуємо фундаменти на базі PHP 8.3+, використовуючи Laravel або Symfony для створення стабільних, типізованих та тестованих систем.", "features": ["Stateless API architecture", "Redis-based background jobs", "Event-driven business logic", "Complex database optimization"] },
                "frontend": { "title": "Frontend & UI Logic", "details": "Розробляємо Single Page Applications (SPA) з чітким розділенням фронтенд-домену та API, забезпечуючи миттєву взаємодію користувача з даними.", "features": ["API-driven dynamic UI", "Optimized client-side performance", "Modular component architecture", "Real-time data synchronization"] },
                "infra": { "title": "Infrastructure & Scale", "details": "Наші системи розгортаються в ізольованих Docker-середовищах, готових до горизонтального масштабування та автоматизованого моніторингу.", "features": ["Zero-downtime deployment", "Infrastructure as Code (IaC)", "Horizontal auto-scaling", "Health check monitoring systems"] }
            },
            "ecosystem": "Technology Ecosystem"
        },
        "stack": {
            "title": "Systems Core",
            "subtitle": "Ми обираємо технології, що мають потужну екосистему та гарантують стабільність на роки.",
            "pillars": {
                "backend": { "title": "Stateless Backends", "text": "Ми будуємо сервери на PHP 8.3/Go, які не зберігають стан сесії, що дозволяє миттєво масштабувати кількість вузлів при зростанні навантаження." },
                "frontend": { "title": "API-Driven UI", "text": "Фронтенд на Vue 3 працює як незалежний клієнт. Це забезпечує чисте розділення обов’язків та можливість легкого переходу на мобільні додатки в майбутньому." },
                "infra": { "title": "Infrastructure as Code", "text": "Конфігурація серверів, баз даних та мереж зберігається у вигляді коду (Docker/Terraform). Це гарантує ідентичність середовищ розробки та продакшну." }
            }
        },
        "start_project": {
            "success_title": "Брифінг завершено",
            "success_desc": "Наш технічний директор перегляне вашу ідею та підготує персональну пропозицію протягом 24 годин.",
            "step1": {
                "title": "Проектування ідеї",
                "desc": "Наш ШІ допоможе вам сформулювати технічні вимоги. Просто опишіть вашу бізнес-ідею своїми словами.",
                "placeholder": "Наприклад: Стрімінгова платформа для геймерів з інтегрованими NFT-нагородами...",
                "button_analyzing": "Проводимо аналіз...",
                "button_analyze": "Проаналізувати концепт"
            },
            "step2": {
                "title": "Технічна стратегія готова",
                "stack_label": "Рекомендований стек",
                "scale_label": "Масштабування",
                "roadmap_label": "План розробки",
                "risks_label": "Ризики",
                "button_submit": "Отримати пропозицію"
            },
            "form": {
                "name": "Ваше ім'я",
                "email": "Email"
            }
        },
        "book_call": {
            "title": "Забронювати дзвінок",
            "desc": "Залиште ваші контакти, і ми обговоримо ваш проект детально.",
            "success_title": "Готово!",
            "success_desc": "Ми отримали ваш запит і зателефонуємо вам у вказаний час.",
            "form": {
                "name": "Ваше ім'я",
                "email": "Email",
                "phone": "Телефон",
                "time": "Зручний час для дзвінка",
                "desc": "Коментар / Опис проекту",
                "placeholders": {
                    "name": "Elon Musk",
                    "email": "elon{'@'}x.com",
                    "phone": "+380...",
                    "time": "Сьогодні о 16:00",
                    "desc": "Коротко про вашу задачу..."
                },
                "submit": "Забронювати"
            }
        },
        "privacy": {
            "title": "Privacy Policy",
            "sections": {
                "data": { "title": "Збір даних", "text": "Ми збираємо лише ту інформацію, яка необхідна для надання високоякісних послуг з розробки: контактні дані та технічні вимоги проекту." },
                "usage": { "title": "Використання", "text": "Ваші дані використовуються виключно для комунікації та підготовки технічних пропозицій. Ми ніколи не передаємо дані третім особам." },
                "security": { "title": "Безпека", "text": "Усі дані зберігаються в зашифрованому вигляді на захищених хмарних серверах з обмеженим доступом персоналу." },
                "rights": { "title": "Ваші права", "text": "Ви маєте право в будь-який момент вимагати видалення вашої особистої інформації з нашої бази даних." }
            }
        },
        "terms": {
            "title": "Terms of Service",
            "sections": {
                "acceptance": { "title": "Прийняття умов", "text": "Користуючись нашими послугами, ви погоджуєтесь з цими умовами та нашою політикою конфіденційності." },
                "services": { "title": "Послуги", "text": "Filkx Studio надає професійні послуги з розробки програмного забезпечення на основі індивідуальних договорів (NDA/MSA)." },
                "ip": { "title": "Інтелектуальна власність", "text": "Після повної оплати послуг усі майнові права на розроблений код переходять до замовника." },
                "liability": { "title": "Обмеження відповідальності", "text": "Ми гарантуємо технічну стабільність розроблених систем згідно з SLA, але не несемо відповідальності за бізнес-результати замовника." }
            }
        },
        "health": {
            "title": "Nuxt SSR is working",
            "node": "Node.js version",
            "db": "Database status",
            "checking": "checking..."
        }
    },
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
    },
    "approach": {
        "title": "Наша Методологія",
        "guarantee_title": "Гарантія стабільності",
        "guarantee_desc": "Ми надаємо 6 місяців безкоштовної технічної підтримки для всіх наших проектів.",
        "book_call": "Забронювати дзвінок",
        "steps": {
            "discovery": {
                "title": "Discovery",
                "desc": "Глибокий аналіз бізнес-моделі та архітектурне проектування."
            },
            "sprint": {
                "title": "Sprint Build",
                "desc": "Адаптивна розробка з регулярними апдейтами та фідбеком."
            },
            "zero_defects": {
                "title": "Zero Defects",
                "desc": "Автоматизоване тестування та аудит безпеки кожної ітерації."
            },
            "scale_ready": {
                "title": "Scale Ready",
                "desc": "Деплой у хмару та моніторинг стабільності під навантаженням."
            }
        }
    },
    "dashboard": {
        "spotlight": "Product Spotlight",
        "title": "Live Studio",
        "description": "Власна real-time платформа, побудована командою Filkx. Демонстрація нашої експертизи в обробці потокових даних та високонавантажених API.",
        "explore": "Дослідити продукт",
        "features": {
            "stream": {
                "label": "Latent-free streaming",
                "desc": "Менше 100мс затримки"
            },
            "mesh": {
                "label": "Microservice Mesh",
                "desc": "Повністю Dockerized"
            }
        }
    },
    "stack": {
        "badge": "Production Stack",
        "title": "Технології для Enterprise рішень.",
        "description": "Ми не експериментуємо на проектах клієнтів. Наш стек — це перевірені інструменти, які забезпечують швидку розробку без втрати якості та продуктивності.",
        "cats": {
            "backend": "Backend Core",
            "frameworks": "Frameworks",
            "frontend": "Frontend",
            "types": "Type Safety",
            "realtime": "Real-time / Workers",
            "db": "Databases",
            "cache": "Caching / Queues",
            "infra": "Infrastructure"
        }
    },
    "services": {
        "title": "Наші Компетенції",
        "description": "Ми спеціалізуємося на побудові складних веб-систем, де надійність архітектури та швидкість обробки даних є пріоритетом номер один.",
        "items": {
            "saas": {
                "title": "SaaS Architecture",
                "desc": "Проектування та розробка багатокористувацьких платформ з ізольованими даними та гнучким керуванням підписками."
            },
            "api": {
                "title": "API-First Engineering",
                "desc": "Створення stateless бекендів на Laravel/Symfony з повною підтримкою OAuth2, JWT та детальною документацією."
            },
            "frontend": {
                "title": "Modern Frontends",
                "desc": "Високопродуктивні SPA на Vue 3, інтегровані з API через реактивні сховища та real-time з’єднання."
            },
            "realtime": {
                "title": "Real-time Systems",
                "desc": "Обробка подій у реальному часі через WebSockets та Redis, побудована на Node.js або Go для критичних навантажень."
            },
            "devops": {
                "title": "Infrastructure & DevOps",
                "desc": "Контейнеризація Docker, оркестрація Kubernetes та налаштування CI/CD пайплайнів для Blue/Green деплою."
            },
            "backend": {
                "title": "High-Load Backend",
                "desc": "Оптимізація складних бізнес-процесів через черги (Redis/RabbitMQ) та фонову обробку в PHP 8.3/Go."
            }
        }
    },
    "footer": {
        "studio_desc": "Студія елітної розробки програмного забезпечення. Ми створюємо інструменти, якими користуємось самі.",
        "sections": {
            "studio": "Студія",
            "ecosystem": "Екосистема",
            "legal": "Конфіденційність"
        },
        "links": {
            "privacy": "Privacy Policy",
            "terms": "Terms of Service"
        },
        "rights": "Filkx Studio. All rights reserved.",
        "stable": "Systems Stable"
    },
    "contact": {
        "ai_column": {
            "title": "AI Architect",
            "desc": "Поділіться вашою ідеєю, і наш ШІ миттєво згенерує технічну дорожню карту вашого майбутнього продукту.",
            "placeholder": "Наприклад: Marketplace для AI-моделей...",
            "button_analyze": "Проектуємо...",
            "button_generate": "Згенерувати стратегію",
            "stack_label": "Технологічний стек",
            "strategy_label": "Стратегія масштабування"
        },
        "form_column": {
            "success_title": "Отримано",
            "success_desc": "Наш архітектор зв’яжеться з вами протягом робочого дня для глибинного інтерв’ю.",
            "retry": "Надіслати ще раз",
            "title": "Розпочати співпрацю",
            "labels": {
                "name": "Ваше ім'я",
                "email": "Email",
                "project": "Про проект"
            },
            "placeholders": {
                "name": "Elon Musk",
                "email": "elon{'@'}x.com",
                "project": "Опишіть ваші бізнес-цілі..."
            },
            "submit": "Надіслати запит",
            "disclaimer": "100% Конфіденційність. NDA за запитом."
        }
    }
}
