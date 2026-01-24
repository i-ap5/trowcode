import aibillo from '@/assets/aibillo.jpg';
import aibillo_mob from '@/assets/aibillo_mob.jpg';
import brofix_img from '@/assets/brofix.jpg';
import brofix_app from '@/assets/brofix_app.jpg';
import letuic_app from '@/assets/letuic_app.jpg';
import livingspace from '@/assets/livingspace.jpg';
import malabarlands from '@/assets/malabarlands.jpg';
import molodost from '@/assets/molodost.jpg';
import novatek from '@/assets/novatek.jpg';
import relish from '@/assets/relish.jpg';
import spiceroute from '@/assets/spiceroute.jpg';
import status67 from '@/assets/status67.jpg';

export type ProjectCategory = 'Web & E-Commerce' | 'Mobile App' | 'Custom Software';

export interface Project {
    id: string;
    title: string;
    category: ProjectCategory;
    shortDesc: string;
    fullDesc: string;
    link?: string;
    image: string;
    imageFit?: 'cover' | 'contain' | 'scale-down'; // To handle landscape images that break
    techStack?: string[];
    tags?: string[];
    stats?: { label: string; value: string }[];
}

export const projects: Project[] = [
    // --- WEB & E-COMMERCE ---
    {
        id: 'ai-billo',
        title: 'AI Billo',
        category: 'Web & E-Commerce',
        shortDesc: 'Enterprise-grade SaaS for automated invoice processing.',
        fullDesc: `• Processes 10k+ invoices monthly with AI-powered OCR.
• Secure multi-tenant architecture with role-based dashboards.
• Real-time ledger syncing and automated bank reconciliation.
• Seamless integration with Razorpay and Stripe gateways.`,
        link: 'https://www.aibillo.com/',
        image: aibillo,
        tags: ['Vue.js', 'Laravel', 'AWS', 'OCR'],
        stats: [{ label: 'Performance', value: 'High' }]
    },
    {
        id: 'molodost-dubai',
        title: 'Molodost Dubai',
        category: 'Web & E-Commerce',
        shortDesc: 'Luxury digital branding for Dubai exclusive market.',
        fullDesc: `• Immersive parallax scrolling with GSAP animations.
• Multilingual support (English/Arabic) with automated RTL logic.
• Sub-2s mobile load times via aggressive image optimization.
• Next.js SSR for instant first paints and SEO dominance.`,
        link: 'https://molodostdubai.com/',
        image: molodost,
        tags: ['Next.js', 'GSAP', 'Sanity'],
    },
    {
        id: 'status67',
        title: 'Status67',
        category: 'Web & E-Commerce',
        shortDesc: 'Minimalist B2B consulting site focused on lead generation.',
        fullDesc: `• Narrative-driven hero sections for instant credibility.
• Embedded Calendly widgets with pre-populated user data.
• Static site generation for ultra-fast load times.
• Rich schema markup for high organic search rankings.`,
        link: 'https://status67.com/',
        image: status67,
        tags: ['Gatsby', 'Contentful', 'SEO'],
    },
    {
        id: 'malabar-lands',
        title: 'Malabar Lands',
        category: 'Web & E-Commerce',
        shortDesc: 'Advanced real estate platform with 360° virtual tours.',
        fullDesc: `• Dynamic property search with sub-second filtering.
• High-resolution 360-degree virtual tours for villas.
• Lead-routing CRM integration for specialized agents.
• Google Maps API for contextual neighborhood insights.`,
        link: 'https://malabarlands.com/',
        image: malabarlands,
        tags: ['Nuxt.js', 'Strapi', 'Maps'],
    },
    {
        id: 'jersey-station',
        title: 'Jersey Station',
        category: 'Web & E-Commerce',
        shortDesc: 'Interactive custom sports merchandise e-commerce.',
        fullDesc: `• Interactive product customizer using HTML5 canvas.
• Inventory synchronization across multiple warehouses.
• Abandoned cart recovery with custom design restoration.
• High-traffic handling during peak seasonal sales.`,
        link: 'https://www.jerseystation.in/',
        image: 'https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?q=80&w=2874&auto=format&fit=crop',
        tags: ['Shopify', 'Canvas', 'Node.js'],
    },
    {
        id: 'letuic',
        title: 'LETUIC',
        category: 'Web & E-Commerce',
        shortDesc: 'Forward-thinking business platform with PWA capabilities.',
        fullDesc: `• Progressive Web App with full offline functionality.
• Modular architecture for plug-and-play business modules.
• High-security API gateways for mobile synchronization.
• Built with React and Express.js for maximum agility.`,
        link: 'https://letuic.com/',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026',
        tags: ['React', 'PWA', 'Express'],
    },
    {
        id: 'novatek',
        title: 'Novatek Solutions',
        category: 'Web & E-Commerce',
        shortDesc: 'Technical services leadership and case study platform.',
        fullDesc: `• Engaging case study carousels revealing ROI narratives.
• Video testimonial sliders for enhanced social proof.
• Thought leadership blog with automated SEO strategies.
• Smooth GSAP micro-interactions for premium feel.`,
        link: 'https://www.novateksolutions.in/',
        image: novatek,
        tags: ['Next.js', 'SEO', 'GSAP'],
    },
    {
        id: 'brofix',
        title: 'Brofix',
        category: 'Web & E-Commerce',
        shortDesc: 'Service marketplace with real-time geolocation matching.',
        fullDesc: `• Instant provider surface matching via geolocation.
• Comprehensive provider dashboards for gig management.
• Real-time updates via WebSockets for job status.
• Built on performant MERN stack for high concurrency.`,
        link: 'https://brofix.in/',
        image: brofix_img,
        imageFit: 'contain', // Zoom out effect for landscape image
        tags: ['MERN', 'Socket.io', 'Maps'],
    },
    {
        id: 'signature-ls',
        title: 'Signature by LS',
        category: 'Web & E-Commerce',
        shortDesc: 'Luxury interiors with AR preview technology.',
        fullDesc: `• Three.js powered AR preview for furniture placement.
    • Personalized recommendation algorithms for decor.
    • High-conversion checkout with financing integrations.
    • Immersive desktop and mobile shopping experience.`,
        link: 'https://livingspaceinteriors.in/',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000',
        tags: ['Three.js', 'AR', 'Luxury'],
    },
    {
        id: 'relish-herbals',
        title: 'Relish Herbals',
        category: 'Web & E-Commerce',
        shortDesc: 'Wellness e-commerce with subscription builders.',
        fullDesc: `• Guided health-goal quizzes with product matching.
• Flexible subscription model with recurring auto-ship.
• Benefit-driven storytelling through macro photography.
• Integrated customer loyalty and rewards program.`,
        link: 'https://relishherbals.com/',
        image: relish,
        tags: ['E-comm', 'Wellness', 'Subs'],
    },
    {
        id: 'spice-route',
        title: 'SpiceRoute Exports',
        category: 'Web & E-Commerce',
        shortDesc: 'B2B spice trading with dynamic compliance tools.',
        fullDesc: `• Dynamic bulk order calculators for global weights.
• Automated export documentation generator for customs.
• Multi-currency pricing engine based on buyer location.
• Real-time logistics middleware for freight quotes.`,
        link: 'https://spicerouteexports.com/',
        image: spiceroute,
        tags: ['Django', 'Postgres', 'B2B'],
    },

    // --- MOBILE APPLICATIONS ---
    {
        id: 'ai-billo-app',
        title: 'AI Billo App',
        category: 'Mobile App',
        shortDesc: 'On-the-go invoicing with OCR and offline syncing.',
        fullDesc: `• Instant receipt-to-invoice OCR technology.
• Bidirectional Firestore syncing with local SQLite backup.
• Biometric security for financial data protection.
• Native performance on both Android and iOS.`,
        image: aibillo_mob,
        tags: ['React Native', 'OCR', 'Firebase'],
    },
    {
        id: 'brofix-app',
        title: 'Brofix App',
        category: 'Mobile App',
        shortDesc: 'Service connection app with live GPS tracking.',
        fullDesc: `• Real-time provider tracking with ETA adjustments.
• In-app diagnostics via encrypted video chat.
• One-tap booking flow for verified local experts.
• Integrated split-second payouts for service providers.`,
        image: brofix_app,
        tags: ['Flutter', 'Twilio', 'Stripe'],
    },
    {
        id: 'letuic-app',
        title: 'LETUIC App',
        category: 'Mobile App',
        shortDesc: 'Business platform expansion with NFC payments.',
        fullDesc: `• Digital wallet supporting UPI and card micropayments.
• NFC tap-to-pay functionality for physical stores.
• Performance-tuned UI for mid-range device longevity.
• AR business card scanning for networking.`,
        image: letuic_app,
        tags: ['Fintech', 'NFC', 'High-Perf'],
    },
    {
        id: 'farmfresh-kerala',
        title: 'FarmFresh Kerala',
        category: 'Mobile App',
        shortDesc: 'Direct farmer-to-consumer produce marketplace.',
        fullDesc: `• Freshness-sorted crop listings inspired by local geography.
• Precise delivery tracking with map-based route plotting.
• Machine learning yield predictions for bulk seasonality.
• Scalable backend supporting 10k+ pilot users.`,
        image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=2040',
        tags: ['Flutter', 'Firebase', 'ML'],
    },
    {
        id: 'wellnesstrack-pro',
        title: 'WellnessTrack Pro',
        category: 'Mobile App',
        shortDesc: 'Holistic wellness sync for wearable devices.',
        fullDesc: `• Scan-to-schedule remedy trackers with reminders.
• HealthKit & Wear OS integration for vital biometric sync.
• End-to-end encrypted progress charts and forums.
• Seamless bridge to Relish Herbals inventory.`,
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070',
        tags: ['HealthKit', 'Wearable', 'Encrypted'],
    },

    // --- CUSTOM SOFTWARE SOLUTIONS ---
    {
        id: 'koduvali-erp',
        title: 'Koduvali Furniture ERP',
        category: 'Custom Software',
        shortDesc: 'Woodworking manufacturing and inventory ERP.',
        fullDesc: `• Dynamic BOM explosion as design parameters change.
• Inventory forecasting based on seasonal demand signals.
• Visual artisan assignment boards for workshop efficiency.
• 60% reduction in stockouts through just-in-time logic.`,
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070',
        tags: ['ERP', 'Mfg', 'Forecasting'],
    },
    {
        id: 'livingspace-platform',
        title: 'Living Space Interiors',
        category: 'Custom Software',
        shortDesc: 'Interior design project coordination ecosystem.',
        fullDesc: `• Interactive Gantt charts with automatic dependency sync.
• Vendor portals for swatch and 3D render approvals.
• Photo-verified progressive invoicing milestones.
• Client-facing progress timelapses and staging previews.`,
        image: livingspace,
        tags: ['PM Tool', 'Gantt', 'Glow Design'],
    },
    {
        id: 'erp-suite',
        title: 'ERP Suite',
        category: 'Custom Software',
        shortDesc: 'Operational nervous system for manufacturers.',
        fullDesc: `• Sales pipeline forecasting using history-trained ML.
• RFID-linked multi-warehouse inventory traceability.
• Automated GST-compliant accounting and reconciliations.
• Processing 1M+ SKUs daily with horizontal cloud clusters.`,
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026',
        tags: ['Enterprise', 'ML', 'Scalable'],
    },

    {
        id: 'crm-elite',
        title: 'CRM Elite',
        category: 'Custom Software',
        shortDesc: 'Behavior-driven lead scoring and revenue engine.',
        fullDesc: `• Probability-weighted visual sales pipeline stages.
• Behavioral scoring based on engagement signals.
• WhatsApp Business API integration for rep outreach.
• AI-suggested "next-best actions" for sales teams.`,
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070',
        tags: ['CRM', 'AI', 'WhatsApp'],
    },
    {
        id: 'payroll-master',
        title: 'PayrollMaster',
        category: 'Custom Software',
        shortDesc: 'Biometric HR and statutory compliance engine.',
        fullDesc: `• Facial recognition attendance through mobile cameras.
• Automated deductions for PF, ESI, and localized taxes.
• Secure encrypted PDF payslip generation and mailing.
• Statutory report formatting for EPFO portals.`,
        image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2026',
        tags: ['HR Tech', 'Biometric', 'Tax'],
    },
    {
        id: 'task-flow',
        title: 'TaskFlow',
        category: 'Custom Software',
        shortDesc: 'Kanban-to-Gantt team velocity accelerator.',
        fullDesc: `• Fluid Kanban boards with critical path timeline views.
• NLP parsers for effort estimation and priority sorting.
• Integrated billable hour tracking and client logging.
• Capacity planners forecasting workload overloads.`,
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070',
        tags: ['PM', 'NLP', 'Kanban'],
    },
    {
        id: 'hospital-sync',
        title: 'HospitalSync',
        category: 'Custom Software',
        shortDesc: 'Clinic ecosystem with digital EMR and Telehealth.',
        fullDesc: `• Patient self-scheduling with WhatsApp confirmations.
• FHIR-compliant EMR searchable by ICD codes.
• Built-in WebRTC rooms for encrypted video consultations.
• OMR-scanning via mobile for instant database entry.`,
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2074',
        tags: ['Health', 'WebRTC', 'EMR'],
    },
    {
        id: 'retail-pulse',
        title: 'RetailPulse',
        category: 'Custom Software',
        shortDesc: 'POS and footfall analytics for storefront empires.',
        fullDesc: `• High-volume POS handling 1000+ hourly transactions.
• Footfall heatmaps aggregated from CCTV integrations.
• Loyalty engines with personalized dynamic point accrual.
• Automated replenishment for seasonal demand spikes.`,
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070',
        tags: ['Retail', 'IoT', 'Analytics'],
    },
    {
        id: 'edu-track',
        title: 'EduTrack',
        category: 'Custom Software',
        shortDesc: 'Unified school ecosystem for grading and admin.',
        fullDesc: `• Real-time grade and attendance tracking portals.
• Integrated fee gateways with auto-debit functionality.
• Conflict-resolving timetable generators for schools.
• OMR-sheet scanning for instant automated grading.`,
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1932',
        tags: ['EduTech', 'Admin', 'OMR'],
    },
    {
        id: 'hospitality-hub',
        title: 'HospitalityHub',
        category: 'Custom Software',
        shortDesc: 'Hotel operations and keyed-revenue manager.',
        fullDesc: `• Facial recognition for keyless room entries.
• Housekeeping schedulers based on real-time checkouts.
• Dynamic pricing engines based on occupancy forecasts.
• Integrated P&L dashboards for multi-channel revenue.`,
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070',
        tags: ['Hotel', 'Revenue', 'Keyless'],
    },
    {
        id: 'logistics-pro',
        title: 'LogisticsPro',
        category: 'Custom Software',
        shortDesc: 'Supply chain optimizer with voice-guided picking.',
        fullDesc: `• Voice-guided warehouse picking on rugged tablets.
• Fleet telematics streaming GPS and fuel-burn data.
• Route optimization using genetic algorithms.
• Automated customs documentation for B2B exporters.`,
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070',
        tags: ['Logistics', 'Fleet', 'GPS'],
    },
    {
        id: 'mfg-mrp',
        title: 'ManufacturingMRP',
        category: 'Custom Software',
        shortDesc: 'Production line sequencer and QC tracker.',
        fullDesc: `• BOM explosions visualizing complex assemblies.
• Capacity planners for cross-shift machine leveling.
• Quality Control apps with batch-tagged defect photos.
• End-to-end traceability for sensitive manufacturing.`,
        image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2070',
        tags: ['MRP', 'Mfg', 'QC'],
    },
    {
        id: 'hr-360',
        title: 'HR360',
        category: 'Custom Software',
        shortDesc: 'Full talent lifecycle and performance platform.',
        fullDesc: `• Applicant tracking with resume-to-role matching.
• Onboarding portals with buddy assignment logic.
• 360-degree feedback aggregators and metrics.
• Flight-risk identification using engagement sentiment.`,
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070',
        tags: ['HR', 'Assess', 'Talent'],
    },
    {
        id: 'field-service-genius',
        title: 'FieldServiceGenius',
        category: 'Custom Software',
        shortDesc: 'AR-guided repair and dispatch management.',
        fullDesc: `• Augmented Reality overlays for remote expert help.
• NFC-verified parts inventory checkout on-site.
• GPS-verified timesheets and customer signatures.
• Instant field invoicing upon job completion.`,
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070',
        tags: ['Service', 'AR', 'Dispatch'],
    },
    {
        id: 'inventory-iq',
        title: 'InventoryIQ',
        category: 'Custom Software',
        shortDesc: 'RFID-enabled stock intelligence system.',
        fullDesc: `• Perpetual inventory counting via gateway RFID portals.
• ABC analysis categorizing items for optimized capital.
• Vendor-managed replenishment with direct portal access.
• Expiry trackers for pharmaceuticals and perishables.`,
        image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070',
        tags: ['RFID', 'Stock', 'Retail'],
    },
    {
        id: 'subscription-flow',
        title: 'SubscriptionFlow',
        category: 'Custom Software',
        shortDesc: 'Recurring revenue and churn prediction manager.',
        fullDesc: `• Usage-drop analysis for proactive churn prevention.
• Automated dunning sequences via SMS/WhatsApp escalations.
• Cohort analysis visualizing LTV vs Acquisition cost.
• Metered billing for high-volume API call usage.`,
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070',
        tags: ['SaaS', 'Billing', 'Churn'],
    },
    {
        id: 'compliance-guard',
        title: 'ComplianceGuard',
        category: 'Custom Software',
        shortDesc: 'Regulatory adherence and audit automation.',
        fullDesc: `• Checklist populating from real-time transaction logs.
• Vendor ESG scoring and risk registers.
• Automated RBI/SEBI submission formatting.
• Secure anonymized whistleblower portal integration.`,
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070',
        tags: ['GovTech', 'Audit', 'Risk'],
    },
    {
        id: 'analytics-forge',
        title: 'AnalyticsForge',
        category: 'Custom Software',
        shortDesc: 'Custom BI layers atop complex data lakes.',
        fullDesc: `• No-code dashboard builders for executive KPIs.
• Real-time anomaly detectors alerting on sales dips.
• Predictive models forecasting market shifts.
• High-fidelity heatmaps visualizing geo-data.`,
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070',
        tags: ['BI', 'Data', 'Visuals'],
    }
];
