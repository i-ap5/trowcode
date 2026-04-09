import aibillo from '@/assets/aibillo.jpg';
import aibillo_mob from '@/assets/aibillo_app.webp';
import brofix_img from '@/assets/brofix.jpg';
import brofix_app from '@/assets/brofix_app.jpg';
import letuic_app from '@/assets/letuic_app.jpg';
// import livingspace from '@/assets/livingspace.jpg';
import malabarlands from '@/assets/malabarlands.jpg';
import molodost from '@/assets/molodost.jpg';
import novatek from '@/assets/novatek.jpg';
import relish from '@/assets/relish.jpg';
import spiceroute from '@/assets/spiceroute.jpg';
import status67 from '@/assets/status67.jpg';
import jersey_station from '@/assets/jerseystation.png';


export type ProjectCategory = 'Website' | 'Mobile App' | 'Custom Software';

export interface Project {
    id: string;
    title: string;
    categories: ProjectCategory[];
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
    // --- TOP SELECTED PROJECTS (ORDERED BY USER REQUEST) ---
    {
        id: 'living-space',
        title: 'Living Space Interiors',
        categories: ['Website'],
        shortDesc: 'Premium architectural and interior masterpieces for luxury homes and leading commercial spaces.',
        fullDesc: `• Discover India's finest architectural and interior masterpieces.
• Specializing in premium designs for luxury homes and commercial spaces.
• Interactive project coordination tools for clients and designers.
• High-fidelity visual gallery with sub-second lazy loading.`,
        link: 'https://livingspaceinteriors.in/',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000',
        tags: ['Interior Design', 'Portfolio', 'Management'],
    },
    {
        id: 'letuic',
        title: 'Letuic',
        categories: ['Website'],
        shortDesc: 'Modern EdTech hub empowering students and educators with advanced digital tools.',
        fullDesc: `• Advanced digital learning tools for students and educators.
• Interactive learning management system with real-time feedback.
• Scalable EdTech infrastructure supporting thousands of learners.
• Empowering the next generation with future-ready education technology.`,
        link: 'https://letuic.com/',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026',
        tags: ['React', 'PWA', 'Express'],
    },
    {
        id: 'nexhibit',
        title: 'Nexhibit Arabia',
        categories: ['Website'],
        shortDesc: 'Expert engineering group specializing in immersive exhibition experiences and brand environments.',
        fullDesc: `• Transforming empty spaces into award-winning brand environments.
• Expert engineering for immersive exhibition and event experiences.
• Custom stall fabrication and immersive booth design.
• Strategic brand experience execution to boost engagement.`,
        link: 'https://nexhibit.vercel.app/',
        image: 'https://images.unsplash.com/photo-1711390811443-ae5a33144f7d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=2000',
        tags: ['Exhibition', 'Event Design', 'Brand Experience'],
    },
    {
        id: 'molodost-dubai',
        title: 'Molodost Dubai',
        categories: ['Website'],
        shortDesc: 'Premium restaurant and karaoke club experience in Dubai for vibrant nightlife.',
        fullDesc: `• Immersive night-life experience in Dubai's premium karaoke club.
• Restaurant & Karaoke destination where the night never ends.
• Immersive parallax scrolling with GSAP animations.
• Next.js SSR for instant first paints and SEO dominance.`,
        link: 'https://molodostdubai.com/',
        image: molodost,
        tags: ['Next.js', 'GSAP', 'Sanity'],
    },
    {
        id: 'status67',
        title: 'Status67',
        categories: ['Website'],
        shortDesc: 'Quality auto repair and maintenance services in Dubai, specializing in boutique car detailing.',
        fullDesc: `• Comprehensive auto repair and preventive maintenance services.
• High-end car detailing and aesthetic restoration.
• Specialized mechanical work for luxury and performance vehicles.
• Dubai's premier boutique destination for automotive excellence.`,
        link: 'https://status67.com/',
        image: status67,
        tags: ['Gatsby', 'Contentful', 'SEO'],
    },
    {
        id: 'jersey-station',
        title: 'Jersey Station',
        categories: ['Website'],
        shortDesc: 'Premier destination for premium football, basketball, and F1 jerseys, with retro collections.',
        fullDesc: `• Premier destination for football, basketball, and F1 jerseys.
• Featuring exclusive retro collections and latest season releases.
• Interactive product customizer using HTML5 canvas.
• Inventory synchronization across multiple warehouses.`,
        // link: 'https://www.jerseystation.in/',
        image: jersey_station,
        tags: ['Shopify', 'Canvas', 'Node.js'],
    },
    {
        id: 'ai-billo',
        title: 'AI Billo',
        categories: ['Website'],
        shortDesc: 'AI-powered cloud-based billing and ERP platform for real-time visibility and control.',
        fullDesc: `• AI-powered cloud platform for real-time visibility and control.
• Processes 10k+ invoices monthly with AI-powered OCR.
• Secure multi-tenant architecture with role-based dashboards.
• Seamless integration with Razorpay and Stripe gateways.`,
        link: 'https://www.aibillo.com/',
        image: 'https://play-lh.googleusercontent.com/QcasIb2CWs-ZN44x6y3EvWz0Bpv6-GAOv4U8UV4mFIMvfk-JKJd-KaSgtNvSPwjBbzo=w5120-h2880-rw',
        tags: ['Vue.js', 'Laravel', 'AWS', 'OCR'],
    },
    {
        id: 'brofix',
        title: 'Brofix',
        categories: ['Website'],
        shortDesc: 'Specialist mobile device repair center committed to expert maintenance and device restoration.',
        fullDesc: `• Expert repair services for smartphones and mobile devices.
• High-quality parts and certified technician support.
• Committed to bringing modern technology back to life.
• Quick turnaround times for essential device maintenance.`,
        link: 'https://brofix.in/',
        image: 'https://play-lh.googleusercontent.com/mjBZWwDf-AwB70lfM-DAM2qTnFb_Dwx-4wPt6mjks1jrGrpnEDV7TLwiM6Dw=w5120-h2880-rw',
        imageFit: 'contain',
        tags: ['MERN', 'Socket.io', 'Maps'],
    },
    {
        id: 'malabar-lands',
        title: 'Malabar Lands',
        categories: ['Website'],
        shortDesc: 'Curated real estate brokers for exclusive properties where architecture meets nature.',
        fullDesc: `• Curated brokers of exceptional and exclusive real estate.
• Where high-end architecture meets nature in perfect harmony.
• Dynamic property search with sub-second filtering.
• Google Maps API for contextual neighborhood insights.`,
        link: 'https://malabarlands.com/',
        image: malabarlands,
        tags: ['Nuxt.js', 'Strapi', 'Maps'],
    },
    {
        id: 'novatek',
        title: 'Novatek Solutions',
        categories: ['Website'],
        shortDesc: 'Future-ready digital foundations through software development, cloud solutions, and consulting.',
        fullDesc: `• Future-ready digital foundations through software development.
• Expert cloud solutions and strategic technical consulting.
• Engaging case study carousels revealing ROI narratives.
• Smooth GSAP micro-interactions for premium feel.`,
        link: 'https://www.novateksolutions.in/',
        image: novatek,
        tags: ['Next.js', 'SEO', 'GSAP'],
    },
    {
        id: 'relish-herbals',
        title: 'Relish Herbals',
        categories: ['Website'],
        shortDesc: 'Premium health and wellness platform dedicated to authentic herbal products and holistic living.',
        fullDesc: `• Dedicated to authentic herbal products and holistic living.
• Guided health-goal quizzes with product matching.
• Benefit-driven storytelling through macro photography.
• Integrated customer loyalty and rewards program.`,
        link: 'https://relishherbals.com/',
        image: relish,
        tags: ['E-comm', 'Wellness', 'Subs'],
    },
    {
        id: 'spice-route',
        title: 'SpiceRoute Exports',
        categories: ['Website'],
        shortDesc: 'Premier exporter of high-quality spices and agricultural products for global markets.',
        fullDesc: `• High-quality spice exporter bringing global flavors to market.
• Automated export documentation generator for customs.
• Dynamic bulk order calculators for global weights.
• Multi-currency pricing engine based on buyer location.`,
        link: 'https://spicerouteexports.com/',
        image: spiceroute,
        tags: ['Django', 'Postgres', 'B2B'],
    },

    // --- OTHER PROJECTS ---
    {
        id: 'ai-billo-app',
        title: 'AI Billo App',
        categories: ['Mobile App'],
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
        categories: ['Mobile App'],
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
        categories: ['Mobile App'],
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
        categories: ['Mobile App'],
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
        categories: ['Mobile App'],
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
        categories: ['Custom Software'],
        shortDesc: 'Woodworking manufacturing and inventory ERP.',
        fullDesc: `• Dynamic BOM explosion as design parameters change.
• Inventory forecasting based on seasonal demand signals.
• Visual artisan assignment boards for workshop efficiency.
• 60% reduction in stockouts through just-in-time logic.`,
        image: 'https://plus.unsplash.com/premium_photo-1682147364229-f5faa0fd9bd7?q=80&w=1740&auto=format',
        tags: ['ERP', 'Mfg', 'Forecasting'],
    },
    {
        id: 'erp-suite',
        title: 'ERP Suite',
        categories: ['Custom Software'],
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
        categories: ['Custom Software'],
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
        categories: ['Custom Software'],
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
        categories: ['Custom Software'],
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
        categories: ['Custom Software'],
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
        categories: ['Custom Software'],
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
        categories: ['Custom Software'],
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
        categories: ['Custom Software'],
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
        categories: ['Custom Software'],
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
        categories: ['Custom Software'],
        shortDesc: 'Production line sequencer and QC tracker.',
        fullDesc: `• BOM explosions visualizing complex assemblies.
• Capacity planners for cross-shift machine leveling.
• Quality Control apps with batch-tagged defect photos.
• End-to-end traceability for sensitive manufacturing.`,
        image: 'https://plus.unsplash.com/premium_photo-1664298450627-0073be5650cc?q=80&w=2940&auto=format',
        tags: ['MRP', 'Mfg', 'QC'],
    },
    {
        id: 'hr-360',
        title: 'HR360',
        categories: ['Custom Software'],
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
        categories: ['Custom Software'],
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
        categories: ['Custom Software'],
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
        categories: ['Custom Software'],
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
        categories: ['Custom Software'],
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
        categories: ['Custom Software'],
        shortDesc: 'Custom BI layers atop complex data lakes.',
        fullDesc: `• No-code dashboard builders for executive KPIs.
• Real-time anomaly detectors alerting on sales dips.
• Predictive models forecasting market shifts.
• High-fidelity heatmaps visualizing geo-data.`,
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070',
        tags: ['BI', 'Data', 'Visuals'],
    }
];
