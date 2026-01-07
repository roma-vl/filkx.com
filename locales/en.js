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
            "title": "Filkx Studio – Web Platforms and SaaS for Business",
            "desc": "Filkx Studio creates web platforms and SaaS: fast launch, predictable scope, post-release support. Order site or platform development for your business.",
            "h1": "Building Web Platforms and SaaS for Your Business",
            "og_title": "Filkx Studio – Web Platforms and SaaS for Business",
            "og_desc": "Filkx Studio creates web platforms and SaaS: fast launch, predictable scope, post-release support. Order site or platform development for your business.",
            "og_image": "https://filkx.com/og-image.png",
            "og_type": "website",
            "og_site_name": "Filkx Studio",
            "twitter_card": "summary_large_image",
            "twitter_title": "Filkx Studio – Web Platforms and SaaS for Business",
            "twitter_desc": "Filkx Studio creates web platforms and SaaS: fast launch, predictable scope, post-release support. Order site or platform development for your business.",
            "twitter_image": "https://filkx.com/og-image.png",
            "twitter_site": "{handle}",
            "twitter_creator": "{handle}"
        },
        "approach": { "title": "Methodology | Filkx Studio" },
        "services": { "title": "Services | Filkx Studio" },
        "stack": { "title": "Stack | Filkx Studio" },
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
                    "email": "{email}",
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
            },
            "summary": [
                "We only collect what is necessary for the platform to work.",
                "Your data is protected and processed according to modern standards.",
                "NDA available upon request.",
                "The platform does not sell your data to third parties."
            ]
        },
        "terms": {
            "title": "Terms of Service",
            "sections": {
                "acceptance": { "title": "Acceptance of Terms", "text": "By using our services, you agree to these terms and our privacy policy." },
                "services": { "title": "Services", "text": "Filkx Studio provides professional software development services based on individual contracts (NDA/MSA)." },
                "ip": { "title": "Intellectual Property", "text": "After full payment for services, all property rights to the developed code transfer to the customer." },
                "liability": { "title": "Limitation of Liability", "text": "We guarantee technical stability of developed systems according to SLA, but do not bear responsibility for the customer's business results." }
            },
            "summary": [
                "NDA available upon request.",
                "Code rights transfer to the client after payment.",
                "Stability support according to SLA.",
                "We guarantee technical quality, business results are yours."
            ]
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
        "title_prefix": "Building",
        "title_suffix": "Web Platforms and SaaS for Business",
        "description": "Filkx Studio creates web platforms and SaaS: fast launch, predictable scope, post-release support. Order site or platform development for your business.",
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
    },
    "approach": {
        "title": "Methodology",
        "guarantee_title": "6 Months Support",
        "guarantee_desc": "After launch, we help the team and monitor system stability.",
        "book_call": "Discuss Task",
        "blocks": [
            { "title": "Scope & Priorities", "desc": "We fix goals, users, constraints, budget, and success criteria." },
            { "title": "Design & Development", "desc": "UX flows, architecture, incremental releases every 1–2 weeks, transparent demos." },
            { "title": "Quality Control", "desc": "Automated tests, code reviews, and basic security practices on every release." },
            { "title": "Launch & Support", "desc": "Cloud, CI/CD, monitoring, and post-release improvements. 6 months of stability support." }
        ]
    },
    "dashboard": {
        "spotlight": "Own Product",
        "title": "Live Studio",
        "description": "Our own product live.filkx.com demonstrates stability and controlled cost of real-time functions.",
        "explore": "Open live.filkx.com",
        "features": {
            "stream": {
                "label": "Sub-second Streaming",
                "desc": "<100 ms end-to-end latency, billing, analytics."
            },
            "mesh": {
                "label": "Operations Ready",
                "desc": "Billing, analytics, roles."
            }
        }
    },
    "stack": {
        "badge": "Production Stack",
        "title": "Stack",
        "description": "Technologies we use.",
        "blocks": [
            { "title": "Backend", "text": "PHP 8.3, Laravel / Symfony, reliable business logic processing and API-first." },
            { "title": "Frontend", "text": "Vue 3 SPA, TypeScript, fast UX, SEO-ready if needed." },
            { "title": "Real-time / Workers", "text": "Go / Node.js, Redis Queues, Event Driven." },
            { "title": "Databases & Infrastructure", "text": "PostgreSQL, Docker / K8s, CI/CD, monitoring, cost control." }
        ]
    },
    "services": {
        "title": "Services",
        "subtitle": "We deliver comprehensive solutions.",
        "blocks": [
            { "title": "High Load & Security", "text": "We deliver websites and SaaS with thoughtful architecture for high load and security." },
            { "title": "API-first & Production Ready", "text": "Reliable APIs, documentation, versioning, scalability, and post-release support." },
            { "title": "Real-time & Interactivity", "text": "Chats, dashboards, streaming, and other live features with controlled costs." }
        ]
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
            "title": "Solution Sketch",
            "desc": "Provide your name, email, and project to get a solution sketch and possible stack. 100% confidentiality, NDA on request.",
            "placeholder": "Example: B2B portal for partner management...",
            "button_analyze": "Designing...",
            "button_generate": "Get Sketch",
            "stack_label": "Tech Stack",
            "strategy_label": "Approach"
        },
        "form_column": {
            "success_title": "Request Received",
            "success_desc": "We will reply within one business day.",
            "retry": "Send Again",
            "title": "Request Demo / Discuss",
            "labels": {
                "name": "Your Name",
                "email": "Email",
                "project": "About Project"
            },
            "placeholders": {
                "name": "Your Name",
                "email": "{email}",
                "project": "Task description..."
            },
            "submit": "Send Request",
            "disclaimer": "100% confidentiality. NDA on request."
        }
    },
    "why": {
        "title": "Why Filkx",
        "points": [
            { "title": "Ownership of results", "desc": "A ready product, documentation, and access." },
            { "title": "Predictable process", "desc": "Scope, timelines, and budget are always transparent." },
            { "title": "Production experience", "desc": "We run our own and client projects." },
            { "title": "Support included", "desc": "6 months after launch." }
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
