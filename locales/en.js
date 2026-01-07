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
    },
    "approach": {
        "title": "Our Approach",
        "guarantee_title": "Stability Guarantee",
        "guarantee_desc": "We provide 6 months of free technical support for all our projects.",
        "book_call": "Book a Call",
        "steps": {
            "discovery": {
                "title": "Discovery",
                "desc": "Deep business model analysis and architectural planning."
            },
            "sprint": {
                "title": "Sprint Build",
                "desc": "Adaptive development with regular updates and feedback loops."
            },
            "zero_defects": {
                "title": "Zero Defects",
                "desc": "Automated testing and security audits for every iteration."
            },
            "scale_ready": {
                "title": "Scale Ready",
                "desc": "Cloud deployment and load stability monitoring."
            }
        }
    },
    "dashboard": {
        "spotlight": "Product Spotlight",
        "title": "Live Studio",
        "description": "Proprietary real-time platform built by the Filkx team. Demonstrating our expertise in stream processing and high-load APIs.",
        "explore": "Explore Product",
        "features": {
            "stream": {
                "label": "Latent-free streaming",
                "desc": "Less than 100ms latency"
            },
            "mesh": {
                "label": "Microservice Mesh",
                "desc": "Fully Dockerized"
            }
        }
    },
    "stack": {
        "badge": "Production Stack",
        "title": "Technology for Enterprise Solutions.",
        "description": "We don’t experiment on client projects. Our stack consists of proven tools that ensure rapid development without compromising quality or performance.",
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
        "title": "Our Competencies",
        "description": "We specialize in building complex web systems where architectural reliability and data processing speed are the number one priority.",
        "items": {
            "saas": {
                "title": "SaaS Architecture",
                "desc": "Design and development of multi-tenant platforms with isolated data and flexible subscription management."
            },
            "api": {
                "title": "API-First Engineering",
                "desc": "Creation of stateless backends on Laravel/Symfony with full OAuth2, JWT support, and detailed documentation."
            },
            "frontend": {
                "title": "Modern Frontends",
                "desc": "High-performance Vue 3 SPAs integrated with APIs via reactive stores and real-time connections."
            },
            "realtime": {
                "title": "Real-time Systems",
                "desc": "Real-time event processing via WebSockets and Redis, built on Node.js or Go for critical loads."
            },
            "devops": {
                "title": "Infrastructure & DevOps",
                "desc": "Docker containerization, Kubernetes orchestration, and CI/CD pipelines for Blue/Green deployment."
            },
            "backend": {
                "title": "High-Load Backend",
                "desc": "Optimization of complex business processes using queues (Redis/RabbitMQ) and background processing in PHP 8.3/Go."
            }
        }
    },
    "footer": {
        "studio_desc": "Elite software engineering studio. We build tools that we use ourselves.",
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
            "title": "AI Architect",
            "desc": "Share your idea, and our AI will instantly generate a technical roadmap for your future product.",
            "placeholder": "Example: Marketplace for AI models...",
            "button_analyze": "Designing...",
            "button_generate": "Generate Strategy",
            "stack_label": "Tech Stack",
            "strategy_label": "Scaling Strategy"
        },
        "form_column": {
            "success_title": "Received",
            "success_desc": "Our architect will contact you within one business day for a deep-dive interview.",
            "retry": "Send Again",
            "title": "Start Cooperation",
            "labels": {
                "name": "Your Name",
                "email": "Email",
                "project": "About Project"
            },
            "placeholders": {
                "name": "Elon Musk",
                "email": "elon{'@'}x.com",
                "project": "Describe your business goals..."
            },
            "submit": "Send Request",
            "disclaimer": "100% Confidentiality. NDA on request."
        }
    }
}
