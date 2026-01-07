export default {
    "welcome": "Welcome to Filkx",
    "common": {
        "back": "Back",
        "back_home": "Back to Home",
        "back_main": "Back to Main",
        "last_updated": "Last updated"
    },
    "admin": {
        "dashboard": {
            "title": "Dashboard Overview",
            "welcome": "Welcome back",
            "subtitle": "Here's what's happening.",
            "stats": {
                "submissions": "Total Submissions",
                "live": "Live Tracking",
                "users": "Active Users",
                "ai": "AI Tasks",
                "planned": "Planned Feature"
            },
            "recent": "Recent Submissions",
            "view_all": "View All",
            "no_pending": "No pending requests"
        },
        "submissions": {
            "title": "Submissions & Bookings",
            "subtitle": "Manage all customer inquiries",
            "total_found": "Total found",
            "filters": {
                "all": "All",
                "new": "New",
                "processing": "Processing",
                "done": "Done",
                "archived": "Archive",
                "all_types": "All Types",
                "contact": "Contact",
                "booking": "Booking"
            },
            "status": {
                "new": "New",
                "processing": "Processing",
                "done": "Done",
                "archived": "Archived",
                "deleted": "Deleted",
                "change": "Change Status"
            },
            "fields": {
                "preferred_time": "Preferred time",
                "message": "Message"
            },
            "actions": {
                "delete_confirm": "Move to trash?",
                "delete_error": "Failed to update status"
            },
            "empty": "Nothing found",
            "pagination": {
                "page": "Page",
                "of": "of"
            }
        },
        "users": {
            "title": "Users Management",
            "subtitle": "Access Control & Admins",
            "status_active": "Active",
            "edit": "Edit",
            "invite_coming_soon": "Invite System coming soon"
        },
        "ai": {
            "title": "AI Strategy Engine",
            "subtitle": "Gemini 1.5 Flash Optimization",
            "main_prompt": "Main Prompt",
            "performance": "Performance",
            "tokens": "Tokens",
            "optimized": "Optimized",
            "avg_response": "Avg Response",
            "success_rate": "Success Rate"
        },
        "menu": {
            "dashboard": "Dashboard",
            "submissions": "Submissions",
            "users": "Users",
            "ai_config": "AI Config",
            "settings": "Settings",
            "logout": "Logout",
            "administrator": "Administrator"
        },
        "settings": {
            "title": "System Settings",
            "subtitle": "Global configurations for the Filkx Studio platform.",
            "registration": {
                "title": "Public Registration",
                "desc": "Control if new users can join the platform.",
                "warning": "When disabled, all registration attempts via /register or the API will be blocked with a 403 Forbidden error."
            },
            "notifications": {
                "title": "Notifications",
                "desc": "Manage alert channels for new submissions.",
                "email": "Email Notifications",
                "email_desc": "Send alerts to Admin Email",
                "telegram": "Telegram Notifications",
                "telegram_desc": "Send alerts to Telegram Bot"
            }
        }
    },
    "auth": {
        "login": {
            "title": "Welcome Back",
            "subtitle": "Admin Access System",
            "email": "Email Address",
            "password": "Password",
            "submit": "Sign In",
            "loading": "Authenticating...",
            "no_account": "Don't have an account?",
            "request_access": "Request Access",
            "error_generic": "Failed to sign in"
        },
        "register": {
            "title": "Create Admin",
            "subtitle": "Secure Registration System",
            "email": "Work Email",
            "password": "Secure Password",
            "submit": "Register",
            "loading": "Creating Account...",
            "has_account": "Already have access?",
            "sign_in": "Sign In",
            "error_generic": "Failed to register"
        }
    },
    "seo": {
        "index": {
            "title": "Filkx Studio | Scaling SaaS Visions",
            "desc": "High-end software engineering studio for scalable SaaS ecosystems."
        },
        "approach": { "title": "Approach | Filkx Studio" },
        "services": { "title": "Services | Filkx Studio" },
        "stack": { "title": "Tech Stack | Filkx Studio" },
        "book_call": { "title": "Book a Call | Filkx Studio" },
        "start_project": { "title": "Start Project | Filkx Studio" },
        "privacy": { "title": "Privacy Policy | Filkx Studio" },
        "terms": { "title": "Terms of Service | Filkx Studio" }
    },
    "pages": {
        "approach": {
            "title": "Our Engineering Process",
            "subtitle": "We minimize technical debt through strict adherence to architectural standards at every stage of the development lifecycle.",
            "roadmap": {
                "discovery": { "title": "Technical Discovery", "desc": "We conduct a deep audit of requirements, identify potential architectural bottlenecks, and select the optimal stack for scalability." },
                "design": { "title": "Systems Design", "desc": "We design the database schema, API contracts, and infrastructure map. Preparing the System Blueprint before writing code." },
                "build": { "title": "Architecture-Driven Build", "desc": "Development is conducted in short sprints with a focus on Clean Code and covering critical modules with tests." },
                "deploy": { "title": "Continuous Deployment", "desc": "Automated deployment to cloud environments with monitoring of system health metrics and data security." }
            }
        },
        "services": {
            "title": "System-First Engineering",
            "subtitle": "We build software as an asset. Our approach is based on Clean Architecture and SOLID principles, ensuring product viability in the long term.",
            "items": {
                "backend": { "title": "Backend Engineering", "details": "We build foundations on PHP 8.3+, using Laravel or Symfony to create stable, typed, and tested systems.", "features": ["Stateless API architecture", "Redis-based background jobs", "Event-driven business logic", "Complex database optimization"] },
                "frontend": { "title": "Frontend & UI Logic", "details": "We develop Single Page Applications (SPA) with clear separation of frontend domain and API, ensuring instant user interaction with data.", "features": ["API-driven dynamic UI", "Optimized client-side performance", "Modular component architecture", "Real-time data synchronization"] },
                "infra": { "title": "Infrastructure & Scale", "details": "Our systems are deployed in isolated Docker environments, ready for horizontal scaling and automated monitoring.", "features": ["Zero-downtime deployment", "Infrastructure as Code (IaC)", "Horizontal auto-scaling", "Health check monitoring systems"] }
            },
            "ecosystem": "Technology Ecosystem"
        },
        "stack": {
            "title": "Systems Core",
            "subtitle": "We choose technologies that have a powerful ecosystem and guarantee stability for years.",
            "pillars": {
                "backend": { "title": "Stateless Backends", "text": "We build servers on PHP 8.3/Go that do not store session state, allowing instant scaling of node count as load increases." },
                "frontend": { "title": "API-Driven UI", "text": "Frontend on Vue 3 works as an independent client. This ensures clean separation of concerns and the ability to easily transition to mobile apps in the future." },
                "infra": { "title": "Infrastructure as Code", "text": "Server, database, and network configuration is stored as code (Docker/Terraform). This guarantees identity between development and production environments." }
            }
        },
        "start_project": {
            "success_title": "Briefing Completed",
            "success_desc": "Our CTO will review your idea and prepare a personal proposal within 24 hours.",
            "step1": {
                "title": "Idea Design",
                "desc": "Our AI will help you formulate technical requirements. Just describe your business idea in your own words.",
                "placeholder": "For example: A streaming platform for gamers with integrated NFT rewards...",
                "button_analyzing": "Analyzing...",
                "button_analyze": "Analyze Concept"
            },
            "step2": {
                "title": "Technical Strategy Ready",
                "stack_label": "Recommended Stack",
                "scale_label": "Scaling",
                "roadmap_label": "Development Compass",
                "risks_label": "Risks",
                "button_submit": "Get Proposal"
            },
            "form": {
                "name": "Your Name",
                "email": "Email"
            }
        },
        "book_call": {
            "title": "Book a Call",
            "desc": "Leave your contacts, and we will discuss your project in detail.",
            "success_title": "Done!",
            "success_desc": "We have received your request and will call you at the specified time.",
            "form": {
                "name": "Your Name",
                "email": "Email",
                "phone": "Phone",
                "time": "Preferred Time",
                "placeholders": {
                    "name": "Elon Musk",
                    "email": "elon{'@'}x.com",
                    "phone": "+1 555...",
                    "time": "Today at 4 PM",
                    "desc": "Briefly about your task..."
                },
                "desc": "Comment / Project Description",
                "submit": "Book Now"
            }
        },
        "privacy": {
            "title": "Privacy Policy",
            "sections": {
                "data": { "title": "Data Collection", "text": "We collect only the information necessary to provide high-quality development services: contact details and project technical requirements." },
                "usage": { "title": "Usage", "text": "Your data is used exclusively for communication and preparation of technical proposals. We never share data with third parties." },
                "security": { "title": "Security", "text": "All data is stored in encrypted form on secure cloud servers with limited personnel access." },
                "rights": { "title": "Your Rights", "text": "You have the right to request the deletion of your personal information from our database at any time." }
            }
        },
        "terms": {
            "title": "Terms of Service",
            "sections": {
                "acceptance": { "title": "Acceptance of Terms", "text": "By using our services, you agree to these terms and our privacy policy." },
                "services": { "title": "Services", "text": "Filkx Studio provides professional software development services based on individual contracts (NDA/MSA)." },
                "ip": { "title": "Intellectual Property", "text": "After full payment for services, all property rights to the developed code transfer to the customer." },
                "liability": { "title": "Limitation of Liability", "text": "We guarantee technical stability of developed systems according to SLA, but do not bear responsibility for the customer's business results." }
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
        "services": "Services",
        "approach": "Approach",
        "stack": "Stack",
        "live_studio": "Live Studio",
        "lets_talk": "Let's Talk",
        "contact": "Contact Us"
    },
    "hero": {
        "badge": "Web platforms and SaaS that support business growth",
        "title_prefix": "We build",
        "title_suffix": "web platforms and SaaS",
        "description": "We design and deliver production‑ready websites and platforms with clear scopes, predictable timelines, and support after launch. API‑first by default, scalable when you need it.",
        "cta_start": "Start a project",
        "cta_services": "What we do",
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
    },
    "approach": {
        "title": "How we work",
        "guarantee_title": "6‑month stability support",
        "guarantee_desc": "After launch we keep your system stable and help your team operate it.",
        "book_call": "Discuss your task",
        "steps": {
            "discovery": {
                "title": "Scope & priorities",
                "desc": "Understand goals, users, constraints. Define scope, budget, and success criteria."
            },
            "sprint": {
                "title": "Design & build",
                "desc": "UX flows, architecture, and incremental delivery every 1–2 weeks."
            },
            "zero_defects": {
                "title": "Quality gate",
                "desc": "Automated checks, reviews, and security basics on each release."
            },
            "scale_ready": {
                "title": "Launch & support",
                "desc": "Cloud deployment, monitoring, and post‑launch improvements."
            }
        }
    },
    "dashboard": {
        "spotlight": "Own product",
        "title": "Live Studio",
        "description": "A live streaming platform by Filkx: sub‑second latency, billing, analytics, and admin tools. Built and operated by us in production.",
        "explore": "Open live.filkx.com",
        "features": {
            "stream": {
                "label": "Sub‑second streaming",
                "desc": "<100 ms end‑to‑end delay"
            },
            "mesh": {
                "label": "Operations ready",
                "desc": "Billing, roles, and analytics"
            }
        }
    },
    "stack": {
        "badge": "Production Stack",
        "title": "Technology we trust in production",
        "description": "We use proven tools only. This keeps delivery predictable without trading off quality or performance.",
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
        "title": "What we do",
        "description": "We deliver websites, SaaS, and internal platforms as complete products: scope, delivery, and support included.",
        "items": {
            "saas": {
                "title": "SaaS platform",
                "desc": "Multi‑tenant accounts, subscriptions, billing, and roles. From MVP to scale."
            },
            "api": {
                "title": "API as a product",
                "desc": "Clean versioned API, auth, docs, and onboarding for your partners or apps."
            },
            "frontend": {
                "title": "Web app / website",
                "desc": "Fast UX, SEO‑ready when needed, clear flows that convert."
            },
            "realtime": {
                "title": "Real‑time features",
                "desc": "Live updates, chats, dashboards, and streaming with predictable costs."
            },
            "devops": {
                "title": "Launch & infrastructure",
                "desc": "Cloud setup, CI/CD, monitoring, and cost control."
            },
            "backend": {
                "title": "Business logic",
                "desc": "Reliable processing of core workflows, reporting, and integrations."
            }
        }
    },
    "footer": {
        "studio_desc": "Web development studio. We build websites and platforms that run in production.",
        "sections": {
            "studio": "Studio",
            "ecosystem": "Ecosystem",
            "legal": "Legal"
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
            "title": "Quick draft with AI",
            "desc": "Describe your idea — get an instant outline of a possible solution and stack.",
            "placeholder": "Example: B2B portal to manage partners and orders...",
            "button_analyze": "Designing...",
            "button_generate": "Generate outline",
            "stack_label": "Tech Stack",
            "strategy_label": "Approach"
        },
        "form_column": {
            "success_title": "Request received",
            "success_desc": "We will get back within one business day to clarify details.",
            "retry": "Send again",
            "title": "Start a project",
            "labels": {
                "name": "Your name",
                "email": "Email",
                "project": "About the project"
            },
            "placeholders": {
                "name": "Elon Musk",
                "email": "elon{'@'}x.com",
                "project": "Business goal, budget range, deadline..."
            },
            "submit": "Send request",
            "disclaimer": "100% confidentiality. NDA on request."
        }
    },
    "why": {
        "title": "Why Filkx",
        "points": [
            { "title": "Clear ownership and delivery", "desc": "You get a working product, documentation, and access — not a pile of code." },
            { "title": "Predictable process", "desc": "Fixed scope per sprint, weekly demos, transparent budget." },
            { "title": "Production mindset", "desc": "We operate our own product (live.filkx.com) and bring this experience to your project." },
            { "title": "Support included", "desc": "Post‑launch stability help for six months." }
        ],
        "cta": "Discuss your task"
    },
    "cases": {
        "title": "Selected experience",
        "items": [
            { "tag": "Streaming", "title": "Live Studio", "desc": "Live streaming platform: sub‑second latency, billing, analytics, and admin tools." },
            { "tag": "B2B", "title": "Partner portals", "desc": "Order flows, roles, and reporting for distributors and resellers." },
            { "tag": "SaaS", "title": "Subscription products", "desc": "Multi‑tenant architecture, payments, trials, and onboarding." }
        ],
        "cta": "Request a demo"
    }
}
