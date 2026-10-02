import heroSystemImg from '../assets/images/hero_primesol_system_1790934908384.jpg';
import saasPreviewImg from '../assets/images/project_preview_saas_1790934928453.jpg';
import mobilePreviewImg from '../assets/images/project_preview_mobile_1790934952240.jpg';
import studioOfficeImg from '../assets/images/primesol_office_studio_1790934967064.jpg';

export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  description: string;
  deliverables: string[];
  techStack: string[];
}

export interface ServiceCategory {
  id: string;
  name: string;
  tagline: string;
  services: ServiceItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  categories: string[];
  description: string;
  type: string;
  technologies: string[];
  featured?: boolean;
  image?: string;
  metricsLabel?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
  specialties: string[];
  linkedInUrl: string;
}

export interface TestimonialItem {
  author: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const HERO_ASSETS = {
  heroSystem: heroSystemImg,
  saasPreview: saasPreviewImg,
  mobilePreview: mobilePreviewImg,
  studioOffice: studioOfficeImg,
};

export const STATISTICS = [
  { value: "25+", label: "Projects Delivered", detail: "Across web, mobile, and enterprise automation" },
  { value: "10+", label: "Happy Clients", detail: "Global partnerships with lasting relationships" },
  { value: "AI-First", label: "Solutions", detail: "Practical intelligence built directly into workflows" },
  { value: "Global", label: "Client Experience", detail: "North America, Europe, Asia, and the Middle East" },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "ai-automation",
    name: "AI & Automation",
    tagline: "Autonomous intelligent agents and workflow automation that eliminate operational drag.",
    services: [
      {
        id: "ai-automation",
        name: "AI Automation",
        category: "AI & Automation",
        description: "Automate repetitive operational tasks, business document pipelines, and human handoffs with reliable background workflows.",
        deliverables: ["Workflow orchestration", "Document parsing & extraction", "Automated CRM synching", "Data pipeline automation"],
        techStack: ["Python", "FastAPI", "OpenAI / Claude API", "LangChain", "Celery", "PostgreSQL"],
      },
      {
        id: "ai-agent-development",
        name: "AI Agent Development",
        category: "AI & Automation",
        description: "Domain-specific autonomous agents capable of multi-step task execution, tool usage, retrieval-augmented queries, and decision making.",
        deliverables: ["Custom tool-calling agents", "RAG vector retrieval", "Multi-modal reasoning bots", "Self-correcting data validation"],
        techStack: ["Gemini 1.5/2.0", "Python", "LlamaIndex", "ChromaDB / Pinecone", "FastAPI"],
      },
      {
        id: "crm-development",
        name: "CRM Development",
        category: "AI & Automation",
        description: "Bespoke Customer Relationship Management systems built around your specific sales cycles, pipeline velocity, and lead intelligence.",
        deliverables: ["Custom pipeline view", "Automated lead triage", "Activity timeline & tracking", "Two-way email sync"],
        techStack: ["Next.js", "React", "Node.js", "PostgreSQL", "Tailwind CSS", "Redis"],
      },
      {
        id: "hrm-development",
        name: "HRM Development",
        category: "AI & Automation",
        description: "Tailored human resource management platforms for automated onboarding, time tracking, leave approvals, and employee performance.",
        deliverables: ["Employee directory & hierarchy", "Leave & PTO management", "Document compliance vault", "Role-based permission gating"],
        techStack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "AWS S3"],
      },
    ],
  },
  {
    id: "software-development",
    name: "Software Development",
    tagline: "High-performance full-stack web and mobile engineering designed to scale effortlessly.",
    services: [
      {
        id: "custom-website-development",
        name: "Custom Website Development",
        category: "Software Development",
        description: "Bespoke, high-converting digital storefronts and marketing flagships engineered for unmatched speed, elegance, and SEO performance.",
        deliverables: ["Responsive architectural layouts", "Core Web Vitals optimization", "Interactive design systems", "Headless CMS integration"],
        techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel"],
      },
      {
        id: "custom-web-app-development",
        name: "Custom Web App Development",
        category: "Software Development",
        description: "Complex interactive web applications with real-time state, fluid micro-interactions, and resilient client-server synchronization.",
        deliverables: ["Single-page enterprise web apps", "Interactive data canvases", "Role-based authentication", "Modular component architectures"],
        techStack: ["React", "TypeScript", "Zustand", "Node.js", "PostgreSQL", "Tailwind CSS"],
      },
      {
        id: "mobile-app-development",
        name: "Mobile App Development",
        category: "Software Development",
        description: "Native-grade iOS and Android applications with intuitive gesture-driven interfaces, offline-first storage, and instant push notifications.",
        deliverables: ["Cross-platform iOS & Android apps", "Offline data synchronization", "Push notifications & deep linking", "Biometric authentication"],
        techStack: ["React Native", "Flutter", "TypeScript", "Firebase / Supabase", "REST & GraphQL"],
      },
      {
        id: "saas-app-development",
        name: "SaaS App Development",
        category: "Software Development",
        description: "Turnkey multi-tenant SaaS products with recurring billing, organization workspaces, self-serve onboarding, and granular access control.",
        deliverables: ["Multi-tenant architecture", "Stripe billing & subscriptions", "Seat & quota management", "Audit logging & compliance"],
        techStack: ["Next.js", "Node.js", "Stripe API", "PostgreSQL", "Prisma / Drizzle", "Docker"],
      },
    ],
  },
  {
    id: "business-systems",
    name: "Business Systems",
    tagline: "Custom admin command centers and high-volume e-commerce storefronts tailored to operations.",
    services: [
      {
        id: "admin-dashboards",
        name: "Admin Dashboards",
        category: "Business Systems",
        description: "Clean, distraction-free internal control panels that give operational leaders real-time visibility and command over their entire organization.",
        deliverables: ["Real-time data visualization", "Bulk record actions & filters", "Exportable audit logs", "Fine-grained permission matrices"],
        techStack: ["React", "Tailwind CSS", "TypeScript", "PostgreSQL", "Tremor / Chart.js"],
      },
      {
        id: "ecommerce-development",
        name: "E-commerce Development",
        category: "Business Systems",
        description: "High-volume custom shopping experiences with streamlined checkouts, inventory synchronizers, and conversion-optimized funnels.",
        deliverables: ["Custom cart & checkout flows", "Inventory management sync", "Payment gateway integration", "Personalized recommendations"],
        techStack: ["Next.js", "Shopify Storefront API", "Stripe", "Node.js", "PostgreSQL"],
      },
      {
        id: "wordpress-development",
        name: "WordPress Development",
        category: "Business Systems",
        description: "Custom enterprise WordPress implementations with tailored Gutenberg blocks, custom post types, and blazing caching layers.",
        deliverables: ["Custom headless or monolithic themes", "Gutenberg block development", "Database query optimization", "Automated backup pipelines"],
        techStack: ["PHP", "WordPress REST API", "Roots / Sage", "MySQL", "WP Engine"],
      },
      {
        id: "shopify-development",
        name: "Shopify Development",
        category: "Business Systems",
        description: "Custom Shopify Liquid themes and headless Hydrogen storefronts tailored to deliver unmatched merchant conversion rates.",
        deliverables: ["Liquid custom theme engineering", "Custom private Shopify apps", "Shopify Flow automations", "Checkout extensibility"],
        techStack: ["Liquid", "Shopify API", "Remix / Hydrogen", "JavaScript", "GraphQL"],
      },
      {
        id: "wix-website-development",
        name: "Wix Website Development",
        category: "Business Systems",
        description: "Advanced Wix Studio and Velo-driven web implementations for organizations wanting full control with custom code extensibility.",
        deliverables: ["Wix Studio responsive layouts", "Velo backend code hooks", "Custom CMS databases", "Client handoff training"],
        techStack: ["Wix Studio", "Velo by Wix", "JavaScript", "REST APIs"],
      },
    ],
  },
  {
    id: "design-growth",
    name: "Design & Growth",
    tagline: "Product design that turns complex technical capability into instinctive, conversion-focused user experiences.",
    services: [
      {
        id: "ui-ux-design",
        name: "UI/UX Design",
        category: "Design & Growth",
        description: "Human-centered digital product design with rigorous UX wireframing, high-fidelity prototypes, and comprehensive design systems.",
        deliverables: ["Interactive Figma prototypes", "Design tokens & component library", "User journey mapping", "Usability testing audits"],
        techStack: ["Figma", "Design Tokens", "Wireframing", "Micro-interactions", "Design Systems"],
      },
      {
        id: "seo-optimization",
        name: "SEO Optimization",
        category: "Design & Growth",
        description: "Technical search engine optimization, semantic structured schemas, page-speed acceleration, and organic search visibility architectures.",
        deliverables: ["JSON-LD Schema implementation", "Core Web Vitals remediation", "Semantic HTML re-architecture", "Robots & Sitemap indexation"],
        techStack: ["Google Search Console", "Lighthouse", "Schema.org", "Next.js Metadata", "Screaming Frog"],
      },
    ],
  },
  {
    id: "infrastructure-support",
    name: "Infrastructure & Support",
    tagline: "Robust backend foundations, battle-tested databases, and ongoing continuous maintenance.",
    services: [
      {
        id: "database-design",
        name: "Database Design",
        category: "Infrastructure & Support",
        description: "Normalized relational schemas and scalable NoSQL data models architected for zero-data-loss, rapid queries, and vertical scale.",
        deliverables: ["Entity-relationship diagrams", "Index & query optimization", "Migration strategies", "Automated point-in-time snapshots"],
        techStack: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Prisma"],
      },
      {
        id: "backend-api-development",
        name: "Backend API Development",
        category: "Infrastructure & Support",
        description: "Fast, resilient, and well-documented REST and GraphQL APIs structured to power multi-client platforms under high concurrency.",
        deliverables: ["OpenAPI / Swagger specs", "Rate limiting & caching layers", "Asynchronous job queues", "Webhook event infrastructure"],
        techStack: ["Node.js", "Python", "FastAPI", "Express", "TypeScript", "Redis"],
      },
      {
        id: "cloud-deployment",
        name: "Cloud Deployment",
        category: "Infrastructure & Support",
        description: "Automated CI/CD pipelines, containerized microservices, and serverless architectures on AWS, GCP, and modern edge platforms.",
        deliverables: ["Docker containerization", "GitHub Actions CI/CD", "Edge serverless routing", "SSL & DNS infrastructure"],
        techStack: ["AWS", "Google Cloud", "Vercel", "Docker", "GitHub Actions", "Cloudflare"],
      },
      {
        id: "security-authentication",
        name: "Security & Authentication",
        category: "Infrastructure & Support",
        description: "Enterprise-grade user identity systems with multi-factor authentication, OAuth 2.0, session protection, and OWASP hardening.",
        deliverables: ["OAuth 2.0 & Social logins", "MFA / 2FA integration", "JWT & HTTP-only cookie sessions", "Vulnerability remediation"],
        techStack: ["Auth0", "Firebase Auth", "NextAuth / Clerk", "Bcrypt", "CORS & CSP Hardening"],
      },
      {
        id: "maintenance-support",
        name: "Maintenance & Support",
        category: "Infrastructure & Support",
        description: "Dedicated long-term engineering partnership with proactive monitoring, dependency patching, uptime guarantees, and on-demand iterations.",
        deliverables: ["24/7 uptime health checks", "Security patch rollouts", "Performance benchmarking", "Priority feature development sprint access"],
        techStack: ["Sentry", "BetterUptime", "GitHub", "Automated Test Suites", "Live SLA Monitoring"],
      },
    ],
  },
];

export const WHY_PRIMESOL = [
  {
    step: "01",
    title: "Clean interfaces that work on every screen",
    subtitle: "Precision Responsive UI/UX",
    description: "We design and build interfaces that respect human focus. Every screen, from ultra-wide enterprise monitors to compact mobile viewports, receives the exact same standard of typographic clarity, intentional contrast, and fluid responsiveness.",
  },
  {
    step: "02",
    title: "Architecture that can grow without becoming messy",
    subtitle: "Modular Scalable Foundations",
    description: "Quick hacks lead to technical paralysis. PrimeSol architects clean, modular codebases using modern TypeScript, decoupled APIs, and clear data boundaries so your team can add features in month 18 as effortlessly as week 1.",
  },
  {
    step: "03",
    title: "AI automation that removes repetitive admin work",
    subtitle: "Practical Applied Intelligence",
    description: "We don't build gimmick chatbots; we deploy targeted AI agents, automated document extractors, and predictive pipeline tools that save dozens of manual administrative hours every single week.",
  },
  {
    step: "04",
    title: "Clear delivery, support, and honest communication",
    subtitle: "Transparent Partnership",
    description: "No technical jargon hiding missed deadlines. You receive direct access to leads, transparent development stages, clear weekly milestones, and comprehensive post-launch warranty support.",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "fairagora-asia",
    title: "Fairagora Asia",
    categories: ["SaaS", "AI & Blockchain", "Websites"],
    type: "Enterprise Agritech & Supply Chain Platform",
    description: "Supply chain compliance and ESG traceability platform connecting agricultural producers across Southeast Asia with international standards.",
    technologies: ["React", "Node.js", "PostgreSQL", "Cloud Architecture"],
    featured: true,
    image: saasPreviewImg,
    metricsLabel: "Regional Scale",
  },
  {
    id: "callidus-ai",
    title: "Callidus AI",
    categories: ["AI & Blockchain", "SaaS"],
    type: "Legaltech AI Contract Assistant",
    description: "Specialized generative AI platform built to analyze commercial contracts, extract liabilities, and recommend redlines for legal counsels.",
    technologies: ["FastAPI", "Python", "React", "Vector Embeddings", "LLM Pipelines"],
    featured: true,
    image: heroSystemImg,
    metricsLabel: "Automated Workflows",
  },
  {
    id: "cashii-wallet",
    title: "Cashii Wallet",
    categories: ["Mobile Apps", "UI/UX"],
    type: "Fintech Mobile Application",
    description: "Next-generation digital mobile wallet with instant peer-to-peer transfers, biometric authorization, and multi-currency budgeting.",
    technologies: ["React Native", "TypeScript", "Node.js", "Secure Enclave"],
    featured: true,
    image: mobilePreviewImg,
    metricsLabel: "Mobile Experience",
  },
  {
    id: "alexander-kraft",
    title: "Alexander Kraft",
    categories: ["E-Commerce", "Websites"],
    type: "Luxury Menswear E-commerce",
    description: "High-end bespoke digital flagship for an international luxury tailoring house, featuring curated lookbooks and global checkout.",
    technologies: ["Custom Shopify", "Liquid", "JavaScript", "Stripe"],
  },
  {
    id: "asset-planet",
    title: "Asset Planet",
    categories: ["SaaS", "UI/UX"],
    type: "Wealth & Portfolio Management SaaS",
    description: "Financial planning and multi-asset wealth tracker with aggregate net-worth visualization and estate scenario modeling.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Financial APIs"],
  },
  {
    id: "midwest-land-group",
    title: "Midwest Land Group",
    categories: ["Websites", "UI/UX"],
    type: "Real Estate Brokerage Platform",
    description: "Mapping-heavy land brokerage portal with custom GIS boundary overlays, agent directory, and high-resolution parcel tours.",
    technologies: ["Next.js", "Mapbox GL", "PostgreSQL", "Cloudflare"],
  },
  {
    id: "useparallel",
    title: "UseParallel",
    categories: ["AI & Blockchain", "SaaS"],
    type: "AI Collaborative Workspace",
    description: "AI-assisted knowledge workspace that transforms unstructured customer meeting notes into structured product requirements.",
    technologies: ["Next.js", "FastAPI", "OpenAI API", "Tailwind CSS"],
  },
  {
    id: "dubai-mall-app",
    title: "Dubai Mall App",
    categories: ["Mobile Apps", "UI/UX"],
    type: "Retail Navigation Mobile Experience",
    description: "Interactive indoor mapping and retail discovery application with wayfinding, store promotions, and event schedules.",
    technologies: ["React Native", "Indoor Geofencing", "REST APIs"],
  },
  {
    id: "data-rovers",
    title: "Data Rovers",
    categories: ["AI & Blockchain", "SaaS"],
    type: "Autonomous Data Intelligence Agent",
    description: "Automated web data ingestion and market intelligence engine that turns raw competitor moves into executive summaries.",
    technologies: ["Python", "FastAPI", "Docker", "PostgreSQL"],
  },
  {
    id: "positive-prime",
    title: "Positive Prime",
    categories: ["SaaS", "EdTech"],
    type: "Cognitive Wellness & Learning SaaS",
    description: "Personalized habit formation and neuro-wellness session player delivering guided video micro-sessions.",
    technologies: ["React", "Node.js", "AWS CloudFront", "Stripe"],
  },
  {
    id: "goaudits",
    title: "GoAudits",
    categories: ["SaaS", "Mobile Apps"],
    type: "Field Inspection & Auditing Software",
    description: "Mobile inspection toolkit enabling health, safety, and operational audits with instant PDF compliance report generation.",
    technologies: ["React Native", "Node.js", "Express", "PostgreSQL"],
  },
  {
    id: "alter-learning",
    title: "Alter Learning",
    categories: ["EdTech", "Websites"],
    type: "Adaptive Educational Portal",
    description: "Immersive digital learning portal built for student engagement with interactive curriculum modules and tutor workspaces.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
  },
  {
    id: "alef-education",
    title: "Alef Education",
    categories: ["EdTech", "UI/UX"],
    type: "K-12 Digital Learning Framework",
    description: "Interactive student dashboard and classroom learning interface designed to keep young learners focused and motivated.",
    technologies: ["React", "Interactive Canvas", "Figma Design System"],
  },
  {
    id: "taxif",
    title: "Taxif",
    categories: ["Mobile Apps", "SaaS"],
    type: "On-Demand Ride & Fleet Dispatch",
    description: "Real-time dispatch system connecting fleet drivers with corporate clients, complete with live GPS telemetry and automated billing.",
    technologies: ["Flutter", "Node.js", "WebSockets", "Google Maps SDK"],
  },
  {
    id: "airport-pilot-shop",
    title: "Airport Pilot Shop",
    categories: ["E-Commerce", "Websites"],
    type: "Aviation Equipment Storefront",
    description: "Specialized e-commerce storefront for pilots and flight schools with technical spec matrices and bulk part procurement.",
    technologies: ["Shopify Plus", "Liquid", "Search API"],
  },
  {
    id: "farm-to-people",
    title: "Farm to People",
    categories: ["E-Commerce", "Mobile Apps"],
    type: "Direct-to-Consumer Food Delivery",
    description: "Farm-fresh subscription delivery platform with customizable weekly farm boxes and delivery route optimization.",
    technologies: ["React", "Shopify API", "Stripe", "PostgreSQL"],
  },
  {
    id: "ai-dashboard-concept",
    title: "AI Dashboard Concept",
    categories: ["UI/UX", "SaaS"],
    type: "Executive Intelligence Dashboard",
    description: "Futuristic executive control room aggregating operational metrics, automated forecasts, and anomaly detection feeds.",
    technologies: ["Figma", "Tailwind CSS", "React", "D3.js"],
  },
  {
    id: "chatbot-saas-prototype",
    title: "Chatbot SaaS Prototype",
    categories: ["AI & Blockchain", "SaaS"],
    type: "Multi-Channel Customer Service Agent",
    description: "Embeddable customer assistance widget with human fallback escalation, knowledge base synchronization, and sentiment alerts.",
    technologies: ["Next.js", "FastAPI", "WebSockets", "OpenAI"],
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    name: "Discovery & Planning",
    duration: "Week 1",
    focus: "Strategic Scoping & Architecture",
    description: "We audit your existing systems, map key business workflows, identify automation opportunities, and define the optimal technical stack before writing a single line of code.",
    deliverables: ["Product Scope Document", "System Architecture Blueprint", "Technical Feasibility Matrix", "Milestone Roadmap"],
  },
  {
    number: "02",
    name: "UI/UX Design",
    duration: "Weeks 2 – 3",
    focus: "Interactive Prototyping & Visual Systems",
    description: "We build intuitive wireframes, component design tokens, and clickable high-fidelity prototypes that give your team complete clarity on the end-user experience.",
    deliverables: ["Figma Component Library", "Clickable Responsive Prototype", "Interaction Design Specs", "User Flow Diagrams"],
  },
  {
    number: "03",
    name: "Development",
    duration: "Weeks 4 – 8+",
    focus: "Sprint-Based Engineering & CI/CD",
    description: "Our core engineering team implements the frontend, backend APIs, database models, and AI pipelines in disciplined 2-week sprints with staging environment demos.",
    deliverables: ["Production-Ready Codebase", "Decoupled Backend APIs", "Automated Test Suite", "Private Staging Deployment"],
  },
  {
    number: "04",
    name: "Launch & Support",
    duration: "Post-Launch",
    focus: "Zero-Downtime Release & Active Maintenance",
    description: "We handle the production rollout, domain security, DNS routing, and analytics setup, followed by proactive 30-day warranty support and ongoing SLA maintenance.",
    deliverables: ["Production Cloud Deployment", "DNS & SSL Configuration", "30-Day Launch Warranty", "Ongoing SLA Support Option"],
  },
];

export const COMPANY_STORY = [
  {
    period: "Origin",
    title: "University Hostel Room",
    description: "PrimeSol began in a university hostel room where founders Usman and Basit spent late nights writing code, testing software concepts, and dreaming of building a world-class technology company.",
  },
  {
    period: "Inception",
    title: "First Fiverr Account",
    description: "Starting on Fiverr with zero reviews, the team tackled challenging freelance software problems, delivering clean code and solving technical headaches that other developers had given up on.",
  },
  {
    period: "Traction",
    title: "First International Client",
    description: "Winning that pivotal first foreign client changed everything. Relentless communication, delivery speed, and genuine engineering craftsmanship led to five-star ratings and recurring contracts.",
  },
  {
    period: "Expansion",
    title: "Growing Team of Engineers",
    description: "As referral work surged, Co-Founder Ehtisham Yousaf and Business Developer Arslan Ashraf joined to build a cohesive full-stack team specializing in complex web apps and databases.",
  },
  {
    period: "Foundation",
    title: "Establishment of PrimeSol",
    description: "The venture evolved into PrimeSol—a formal engineering agency dedicated to helping growing businesses digitize their operations with modern, maintainable technology.",
  },
  {
    period: "Today",
    title: "AI-First Software Company",
    description: "Today, PrimeSol is an AI-first software development and automation partner, building production-grade web apps, mobile solutions, and practical AI agents for businesses globally.",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Usman Ali Ashraf",
    role: "Founder & Product Lead",
    bio: "Guiding PrimeSol's product direction, AI solution strategy, and overall engineering vision. Focused on turning complex business workflows into scalable software architectures.",
    initials: "UA",
    specialties: ["Product Strategy", "AI Solution Architecture", "Full-Stack Systems"],
    linkedInUrl: "https://www.linkedin.com/company/primesol-co",
  },
  {
    name: "Basit Mehmood",
    role: "Co-Founder & Operations Lead",
    bio: "Managing project delivery, client collaboration, and organizational execution. Ensures every sprint is shipped on schedule with exceptional quality control and communication.",
    initials: "BM",
    specialties: ["Operations Management", "Sprint Delivery", "Client Success"],
    linkedInUrl: "https://www.linkedin.com/company/primesol-co",
  },
  {
    name: "Ehtisham Yousaf",
    role: "Co-Founder & Web Developer",
    bio: "Architecting high-performance web applications, responsive frontend layouts, and reliable backend services with a strict standard for clean, maintainable code.",
    initials: "EY",
    specialties: ["Web Engineering", "Frontend Architecture", "API Integration"],
    linkedInUrl: "https://www.linkedin.com/company/primesol-co",
  },
  {
    name: "Arslan Ashraf",
    role: "Business Developer",
    bio: "Driving international partnerships, business development, and client onboarding. Connecting ambitious founders with PrimeSol's engineering and AI automation capabilities.",
    initials: "AA",
    specialties: ["Partnerships", "Technical Scoping", "Client Relations"],
    linkedInUrl: "https://www.linkedin.com/company/primesol-co",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    author: "Junko Bodie",
    role: "Founder",
    company: "Junko Bodie Roulette",
    quote: "PrimeSol delivered an exceptional experience from concept to launch. Their attention to interface details and speed of implementation allowed us to bring our custom gaming platform to life without the typical agency delays.",
    rating: 5,
  },
  {
    author: "Marissa Song",
    role: "Founder",
    company: "Grow Learning",
    quote: "Working with Usman and the PrimeSol team felt like having an in-house engineering squad. They understood our educational workflow immediately and built a platform that our students and instructors adore using daily.",
    rating: 5,
  },
  {
    author: "Salaam",
    role: "Founder",
    company: "TotalGuard",
    quote: "The automated dashboard and customer portal that PrimeSol engineered completely replaced our chaotic spreadsheet process. The return on investment was immediate, saving our ops team over 15 hours each week.",
    rating: 5,
  },
  {
    author: "David Reeves",
    role: "Founder",
    company: "ShipTrack",
    quote: "PrimeSol's technical discipline is rare. They don't just write code; they think about architecture, security, and how the database will handle scale. I recommend them to any founder building a serious application.",
    rating: 5,
  },
  {
    author: "Priya Anand",
    role: "Head of Product",
    company: "Clarifio",
    quote: "Their team integrated practical AI workflows directly into our core product. Our users now get automated document summaries and insights in seconds. PrimeSol is truly an AI-first development team.",
    rating: 5,
  },
];

export const TECHNOLOGIES = [
  { name: "Next.js", category: "Frontend Framework", role: "High-performance SSR, edge rendering, and SEO architecture" },
  { name: "React", category: "UI Architecture", role: "Component-driven, reactive user interfaces and web applications" },
  { name: "Node.js", category: "Backend Runtime", role: "Scalable asynchronous event-driven backend services" },
  { name: "Python", category: "AI & Backend", role: "Machine learning workflows, data pipelines, and automation scripts" },
  { name: "FastAPI", category: "API Framework", role: "High-throughput asynchronous Python microservices and endpoints" },
  { name: "PostgreSQL", category: "Relational Database", role: "ACID-compliant relational storage with strong schema integrity" },
  { name: "MongoDB", category: "Document Database", role: "Flexible JSON-native storage for rapid schema evolution" },
  { name: "AI APIs", category: "Intelligence Layer", role: "Gemini, OpenAI, Claude, and local embeddings integration" },
  { name: "Cloud Platforms", category: "Cloud & DevOps", role: "Docker, AWS, GCP, Vercel, and Cloudflare enterprise hosting" },
];

export const FAQS: FAQItem[] = [
  {
    question: "What services does PrimeSol offer?",
    answer: "PrimeSol specializes in AI-first software development and digital transformation. Our core offerings encompass Custom Website & Web App Development, Mobile App Engineering (iOS & Android), SaaS Product Development, AI Automation & Agent Development, CRM/HRM Portals, Admin Dashboards, E-commerce, UI/UX Design, and ongoing Cloud Infrastructure & Support.",
  },
  {
    question: "Do you build custom software?",
    answer: "Yes, 100%. We believe off-the-shelf software often forces businesses into rigid constraints. We design and build bespoke software from the ground up, tailored exactly to your specific operational workflows, team roles, and growth trajectory.",
  },
  {
    question: "Can PrimeSol automate my business processes?",
    answer: "Absolutely. We audit your existing day-to-day operations—such as lead qualification, invoice processing, cross-system data synchronization, and customer inquiries—and deploy custom AI agents and automated background workflows that eliminate repetitive manual labor.",
  },
  {
    question: "How long does a project usually take?",
    answer: "Timelines depend on project complexity. A focused custom marketing website or MVP dashboard typically takes 2 to 4 weeks. Full-scale SaaS platforms, comprehensive mobile apps, or enterprise AI automation systems generally range between 6 to 12 weeks, deployed incrementally through agile two-week sprints.",
  },
  {
    question: "Do you provide support after project completion?",
    answer: "Yes. Every PrimeSol build includes a complimentary post-launch warranty period to ensure everything operates flawlessly under real-world usage. Afterwards, we offer flexible ongoing maintenance and SLA support plans covering continuous monitoring, security updates, server management, and iterative feature development.",
  },
  {
    question: "Which technologies does PrimeSol use?",
    answer: "We select modern, battle-tested technologies based on each project's requirements. Our core stack includes Next.js, React, TypeScript, Node.js, Python, FastAPI, PostgreSQL, MongoDB, Docker, and enterprise AI APIs (such as Google Gemini, Anthropic Claude, and OpenAI).",
  },
];

export const CONTACT_INFO = {
  email: "hello@primesol.co",
  phone: "+923198622852",
  phoneDisplay: "+92 319 8622852",
  location: "Lahore, Pakistan",
  hours: "Mon - Sat, 9:00 AM - 6:00 PM (PKT)",
  website: "primesol.co",
};
