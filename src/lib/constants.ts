
import {
  Layers,
  Cloud,
  ShoppingCart,
  BrainCircuit,
  ShieldCheck,
  Palette,
  LifeBuoy,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  type LucideIcon,
  Briefcase,
  HardDrive,
  Globe,
  LayoutGrid,
  PenTool,
  Lock,
  Cog,
  Server,
  Smartphone,
  Tablet,
  AppWindow,
  ShoppingBag,
  Wrench,
  Users,
  TestTube2,
  Rocket,
  Database,
  Code,
  Lightbulb,
  Zap,
  Eye,
  MessageSquare,
  FileText,
  Star,
  Award,
  Activity,
  GitBranch,
  GanttChart,
  Cpu,
  Check,
  CheckCircle,
  Settings,
  DollarSign,
  Package,
  Scaling,
  RefreshCw,
  Search,
  Wallet,
  BadgePercent,
  Bot,
  PictureInPicture,
  BookUser,
  Shield,
  Network,
  Laptop,
  FolderLock,
  CloudCog,
  Brain,
  SearchCheck,
  Video,
  BarChart,
  Handshake,
  FastForward,
  Target,
  Bug,
  FilePenLine,
  Clock,
  BookCopy,
  Printer,
  Scan,
  Cctv,
  Fingerprint,
  User,
  Building,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';

import {
  PythonIcon,
  JavaIcon,
  PHPIcon,
  HTMLIcon,
  CSSIcon,
  JSIcon,
  ReactIcon,
  NodeIcon,
  LaravelIcon,
  MongoDBIcon,
  MySQLIcon,
  ShopifyIcon,
  WordpressIcon,
  AWSIcon,
  FlutterIcon,
  SwiftIcon,
  KotlinIcon,
  FirebaseIcon,
  Key,
  DockerIcon,
  KubernetesIcon,
  TerraformIcon,
  JenkinsIcon,
  AnsibleIcon,
  AzureIcon,
  GoogleCloudIcon
} from '@/components/tech-icons';


export const NAV_LINKS = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Insights', href: '/insights' },
  { name: 'Careers', href: '/careers' },
];

export const FOOTER_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Our Work', href: '/portfolio' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms & Conditions', href: '/terms-of-service' },
];

export const FOOTER_SERVICES = [
  { title: 'Custom Software Development', href: '/services/custom-software-development' },
  { title: 'Web & Mobile App Development', href: '/services/mobile-app-development' },
  { title: 'Digital Transformation', href: '/services/it-consulting' },
  { title: 'Cloud Solutions', href: '/services/cloud-management' },
  { title: 'AI & Cybersecurity', href: '/services/generative-ai' },
];


export const CONTACT_INFO = [
    { label: 'Address', value: 'Olive Wood Villa, G1/0049, Golf City, Lucknow, Muzaffar Nagar Ghusval, Uttar Pradesh 226002', icon: MapPin },
    { label: 'Phone', value: '+91 9532341000', icon: Phone },
    { label: 'Email', value: 'info@itlcindia.com', icon: Mail },
    { label: 'Hours', value: 'Mon–Sat: 10 AM – 7 PM', icon: Clock },
];


export const SERVICES_MEGA_MENU = [
  {
    title: 'Custom Software Development',
    description: 'Tailored web & mobile apps for your business workflow.',
    href: '/services/custom-software-development',
    icon: Layers,
  },
  {
    title: 'Cloud Services',
    description: 'Secure, scalable cloud solutions for optimized operations.',
    href: '/services/cloud-management',
    icon: Cloud,
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Shopify and custom platforms for seamless online sales.',
    href: '/services/e-commerce-solutions',
    icon: ShoppingCart,
  },
  {
    title: 'Generative AI',
    description: 'AI solutions for automation, analytics, and smart decision-making.',
    href: '/services/generative-ai',
    icon: BrainCircuit,
  },
  {
    title: 'Cyber Security',
    description: 'Threat detection, VAPT audits, encryption & risk management.',
    href: '/services/cyber-security',
    icon: ShieldCheck,
  },
  {
    title: 'Design & Marketing',
    description: 'UI/UX, branding, and digital campaigns for growth.',
    href: '/services/design-marketing',
    icon: Palette,
  },
  {
    title: 'Support & Maintenance',
    description: 'QA, updates, and proactive system support.',
    href: '/services/support-maintenance',
    icon: LifeBuoy,
  },
  {
    title: 'IT Consulting',
    description: 'Strategic IT advice to align technology with your business goals.',
    href: '/services/it-consulting',
    icon: Briefcase,
  },
  {
    title: 'Hardware Services AMC',
    description: 'Reliable hardware maintenance and support contracts.',
    href: '/services/hardware-amc',
    icon: HardDrive,
  },
];


export const SERVICES_MENU = [
  {
    title: 'Custom Software Development',
    items: [
      { name: 'Custom Digital Solutions', href: '/services/custom-software-development' },
      { name: 'Web Development', href: '/services/web-development' },
      { name: 'Mobile App Development', href: '/services/mobile-app-development' },
      { name: 'MVP Development', href: '/services/mvp-development' },
    ],
  },
  {
    title: 'Cloud Services',
    items: [
      { name: 'Cloud Management', href: '/services/cloud-management' },
      { name: 'AWS Solutions', href: '/services/aws-solutions' },
    ],
  },
  {
    title: 'Design and Marketing',
    items: [
      { name: 'UI/UX & Branding', href: '/services/design-marketing' },
    ],
  },
  {
    title: 'Cyber Security',
    items: [
      { name: 'Cyber Security Solutions', href: '/services/cyber-security' },
    ],
  },
  {
    title: 'E-commerce Solutions',
    items: [
      { name: 'E-Commerce Solutions', href: '/services/e-commerce-solutions' },
    ],
  },
  {
    title: 'Maintenance & Consulting',
    items: [
      { name: 'Support & Maintenance', href: '/services/support-maintenance' },
      { name: 'IT Consulting', href: '/services/it-consulting' },
      { name: 'Hardware Services AMC', href: '/services/hardware-amc' },
      { name: 'Quality Assurance(QA)', href: '/services' },
      { name: 'Project Management', href: '/services' },
    ],
  },
  {
    title: 'AI/ML and Workflow Automations',
    items: [
      { name: 'Generative AI Development', href: '/services/generative-ai' },
    ],
  },
];

export const SERVICE_ICONS: Record<string, LucideIcon> = {
  CustomSoftwareDevelopment: Layers,
  CloudServices: Cloud,
  ECommerceSolutions: ShoppingCart,
  GenerativeAI: BrainCircuit,
  CyberSecurity: ShieldCheck,
  DesignMarketing: Palette,
  SupportMaintenance: LifeBuoy,
  ITConsulting: Briefcase,
  HardwareServices: HardDrive,
};

export const SERVICES = [
  {
    iconName: 'CustomSoftwareDevelopment',
    title: 'Custom Software Development',
    description: 'Tailored web & mobile apps for your business workflow.',
    subTitle: 'Web Development | Mobile App Development | MVP Development',
    fullDescription: 'We deliver fully customized software solutions tailored to your business needs. Our expert team ensures scalable architecture, smooth performance, and ongoing support for optimal efficiency and reduced downtime.',
    benefits: ['Reduced downtime', 'Scalable architecture', 'Full support'],
    imageId: 'service-software'
  },
  {
    iconName: 'CloudServices',
    title: 'Cloud Services',
    description: 'Secure, scalable cloud solutions for optimized operations.',
    subTitle: 'Cloud Management | AWS Solutions',
    fullDescription: 'We provide secure, scalable, and cost-efficient cloud solutions. Optimize operations, enhance collaboration, and accelerate growth with managed cloud services tailored for your business.',
    benefits: ['Secure', 'Cost-efficient', 'Scalable'],
    imageId: 'service-cloud'
  },
  {
    iconName: 'ECommerceSolutions',
    title: 'E-Commerce Solutions',
    description: 'Shopify and custom platforms for seamless online sales.',
    subTitle: 'Shopify Expert Solutions | Custom E-commerce Solutions',
    fullDescription: 'We design and develop Shopify and custom e-commerce platforms. Smooth performance, great user experience, and optimized sales processes ensure your online business thrives.',
    benefits: ['Smooth UX', 'SEO-friendly', 'Automated inventory'],
    imageId: 'service-ecommerce'
  },
  {
    iconName: 'GenerativeAI',
    title: 'Generative AI',
    description: 'AI solutions for automation, analytics, and smart decision-making.',
    subTitle: 'n8n Workflow Automation | Generative AI Development | Data Engineering',
    fullDescription: 'Harness the power of AI to automate workflows, make data-driven decisions, and increase efficiency. Our AI/ML solutions help your business stay ahead of the competition.',
    benefits: ['Smart decision-making', 'Increased efficiency', 'Research-backed insights'],
    imageId: 'service-ai'
  },
  {
    iconName: 'CyberSecurity',
    title: 'Cyber Security',
    description: 'Threat detection, VAPT audits, encryption & risk management.',
    subTitle: 'VAPT Auditing & Closure | Data Encryption',
    fullDescription: 'Protect your business with advanced cybersecurity solutions. From threat detection and risk management to VAPT audits and encryption, we keep your systems secure and monitored.',
    benefits: ['Proactive threat detection', 'Continuous monitoring', 'Secure frameworks'],
    imageId: 'service-security'
  },
  {
    iconName: 'DesignMarketing',
    title: 'Design & Marketing',
    description: 'UI/UX, branding, and digital campaigns for growth.',
    subTitle: 'UI/UX Design | Branding | Digital Marketing',
    fullDescription: 'Elevate your brand with creative visuals and strategic marketing campaigns. Our design and marketing services ensure a strong digital presence, higher engagement, and business growth.',
    benefits: ['Engaging visuals', 'Measurable growth', 'Strong brand identity'],
    imageId: 'service-design'
  },
  {
    iconName: 'SupportMaintenance',
    title: 'Support & Maintenance',
    description: 'QA, updates, and proactive system support.',
    subTitle: 'Quality Assurance (QA) | Project Management',
    fullDescription: 'Reliable support and maintenance to keep your software running smoothly. Regular QA, updates, and expert project management ensure optimal performance.',
    benefits: ['Smooth operations', 'Proactive support', 'Expert guidance'],
    imageId: 'service-support'
  },
  {
    iconName: 'ITConsulting',
    title: 'IT Consulting',
    description: 'Strategic IT advice to align technology with your business goals.',
    subTitle: 'Strategy | Architecture | Implementation',
    fullDescription: 'Our IT consulting services provide strategic guidance to help you make informed technology decisions, optimize your IT infrastructure, and align your technology strategy with your business objectives for sustainable growth.',
    benefits: ['Strategic guidance', 'Cost optimization', 'Improved ROI'],
    imageId: 'service-consulting'
  },
  {
    iconName: 'HardwareServices',
    title: 'Hardware Services AMC',
    description: 'Reliable hardware maintenance and support contracts.',
    subTitle: 'Annual Maintenance | On-site Support | Repairs',
    fullDescription: 'We offer comprehensive Annual Maintenance Contracts (AMC) for your IT hardware. Ensure your systems are running smoothly with our proactive maintenance, on-site support, and timely repair services.',
    benefits: ['Minimized downtime', 'Extended hardware life', 'Priority support'],
    imageId: 'service-hardware'
  },
];
export type Service = (typeof SERVICES)[0];

export const OUR_WORK_PROJECTS = [
     {
       title: 'Doctor Appointment Booking System',
       description: 'A web-based platform that allows patients to book appointments with doctors online.Users can browse doctors by specialty, check available time slots, and schedule, cancel, or reschedule appointments easily.',
       services: ['Web Applaction', 'Mobile App'],
       imageId: 'work-ada',
     },
     {
        title: 'Dynamic Website',
        description: 'A fully responsive and interactive dynamic website built with modern web technologies, featuring real-time content updates, animations, and an intuitive user experience tailored for businesses and startups.',
        services: ['Web Development', 'Dynamic UI/UX'],
       imageId: 'work-food-app',
     },
     {
       title: 'Coffee Shop App',
       description: 'A stylish coffee shop ordering and loyalty app that lets customers browse the menu, customize their drinks, place online orders, and earn rewards — enhancing both in-store and takeaway experiences.',
       services: ['Mobile App', 'E-Commerce', 'Cafe Tech'],
       imageId: 'work-yalla',
     },
];

export const CLIENTS = [
   { name: 'ADA Chikankari', logo: '/clint/1.jpg' },
   { name: 'ROZANA', logo: '/clint/2.jpg' },
   { name: 'YALLA DRIVE', logo: '/clint/3.jpg' },
   { name: 'Khadi India', logo: '/clint/4.jpg' },
   { name: 'Mergify.co', logo: '/clint/5.jpg' },
   { name: 'YODH', logo: '/clint/6.jpg' },
];


export const TESTIMONIALS = [
  {
    quote: "They delivered exactly what we imagined. Faster delivery, excellent communication.",
    name: 'John Doe',
    title: 'CEO, TechCorp',
    image: 'https://picsum.photos/seed/101/100/100',
    imageId: 'testimonial-1',
  },
  {
    quote: "The custom software they developed for us is robust, scalable, and perfectly tailored to our needs. A truly professional and innovative team.",
    name: 'Jane Smith',
    title: 'COO, Innovate Inc.',
    image: 'https://picsum.photos/seed/102/100/100',
    imageId: 'testimonial-2',
  },
  {
    quote: "Their cybersecurity expertise is second to none. We feel much more secure knowing our systems are protected by ITLC.",
    name: 'Samuel Green',
    title: 'CTO, SecureSys',
    image: 'https://picsum.photos/seed/103/100/100',
    imageId: 'testimonial-3',
  },
];

export const PORTFOLIO_PROJECTS = [
    {
        name: 'Web Developer Portfolio',
        description: 'A creative web developer portfolio with a clean desk, ambient lighting, and glowing UI mockups on a laptop screen.',
        categories: ['Web', 'Design', 'Portfolio'],
        image: 'https://picsum.photos/seed/web-portfolio/600/400',
        imageHint: 'developer portfolio',
    },
    {
        name: 'HealthTech UI/UX Overhaul',
        description: 'Complete redesign of a health-tech platform, focusing on user-centric design to improve patient engagement.',
        categories: ['UI/UX', 'HealthTech', 'Design'],
        image: 'https://picsum.photos/seed/portfolio-health/600/400',
        imageHint: 'healthcare app',
    },
    {
        name: 'Logistics Management Platform',
        description: 'A custom platform for a logistics company to manage fleet, track shipments, and optimize routes in real-time.',
        categories: ['Logistics', 'Web App', 'B2B'],
        image: 'https://picsum.photos/seed/portfolio-logistics/600/400',
        imageHint: 'logistics dashboard'
    },
    {
        name: 'Real Estate Marketplace',
        description: 'A feature-rich marketplace for buying, selling, and renting properties with virtual tours and mortgage calculators.',
        categories: ['Real Estate', 'Marketplace', 'Web App'],
        image: 'https://picsum.photos/seed/portfolio-realestate/600/400',
        imageHint: 'real estate'
    },
    {
        name: 'E-Learning Platform',
        description: 'An interactive e-learning platform with video courses, quizzes, and certifications for a global education provider.',
        categories: ['EdTech', 'SaaS', 'Web App'],
        image: 'https://picsum.photos/seed/portfolio-elearning/600/400',
        imageHint: 'e-learning platform'
    },
    {
        name: 'Travel & Booking App',
        description: 'A mobile app for booking flights, hotels, and tours, with personalized recommendations and itinerary management.',
        categories: ['Travel', 'Mobile App', 'B2C'],
        image: 'https://picsum.photos/seed/portfolio-travel/600/400',
        imageHint: 'travel app'
    },
    {
        name: 'Social Networking App',
        description: 'A niche social network for artists to showcase their work, connect with peers, and find opportunities.',
        categories: ['Social', 'Mobile App', 'Community'],
        image: 'https://picsum.photos/seed/portfolio-social/600/400',
        imageHint: 'social network'
    },
    {
        name: 'Restaurant POS System',
        description: 'A modern Point of Sale (POS) system for restaurants with table management, order processing, and inventory control.',
        categories: ['Retail', 'POS', 'SaaS'],
        image: 'https://picsum.photos/seed/portfolio-pos/600/400',
        imageHint: 'restaurant POS'
    },
    {
        name: 'Fitness & Workout Tracker',
        description: 'A mobile app that provides personalized workout plans, tracks progress, and connects users with personal trainers.',
        categories: ['Fitness', 'Mobile App', 'Health'],
        image: 'https://picsum.photos/seed/portfolio-fitness/600/400',
        imageHint: 'fitness app'
    },
    {
        name: 'Event Management Platform',
        description: 'A comprehensive platform for organizing, promoting, and selling tickets for virtual and in-person events.',
        categories: ['Events', 'Web App', 'SaaS'],
        image: 'https://picsum.photos/seed/portfolio-events/600/400',
        imageHint: 'event management'
    },
    {
        name: 'Fintech Mobile Wallet',
        description: 'A secure mobile wallet for peer-to-peer payments, bill payments, and managing digital assets.',
        categories: ['Fintech', 'Mobile App', 'Security'],
        image: 'https://picsum.photos/seed/portfolio-wallet/600/400',
        imageHint: 'mobile wallet'
    },
    {
        name: 'IoT Smart Home Controller',
        description: 'An app to control and monitor smart home devices, including lighting, security, and climate control.',
        categories: ['IoT', 'Mobile App', 'Smart Home'],
        image: 'https://picsum.photos/seed/portfolio-iot/600/400',
        imageHint: 'smart home'
    },
    {
        name: 'Customer Support Chatbot',
        description: 'An AI-powered chatbot integrated into a client\'s website to provide 24/7 customer support and automate query resolution.',
        categories: ['AI', 'Chatbot', 'Customer Service'],
        image: 'https://picsum.photos/seed/portfolio-chatbot/600/400',
        imageHint: 'AI chatbot'
    },
    {
        name: 'Fashion E-commerce Store',
        description: 'A visually stunning e-commerce store for a high-end fashion brand, built on Shopify with custom theme development.',
        categories: ['E-commerce', 'Fashion', 'Shopify'],
        image: 'https://picsum.photos/seed/portfolio-fashion/600/400',
        imageHint: 'fashion store'
    }
];

export const CAREERS = [
  {
    title: 'React/Next.js Developer',
    description: 'We are looking for a skilled React/Next.js developer to build high-performance, scalable web applications.'
  },
  {
    title: 'UI/UX Designer',
    description: 'Join our creative team to design intuitive and visually stunning user interfaces for our innovative products.'
  },
  {
    title: 'Cloud Engineer',
    description: 'We need an experienced Cloud Engineer to manage and optimize our clients\' cloud infrastructure on AWS, Azure, and GCP.'
  },
  {
    title: 'Digital Marketing Executive',
    description: 'Drive our growth by creating and executing effective digital marketing campaigns across various channels.'
  }
];

export const SOCIAL_LINKS: { name: string; icon: LucideIcon; href: string }[] = [
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/itlcindia/' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/itlcindia/?viewAsMember=true' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/itlc_india/' },
];

export const INSIGHTS_ARTICLES = [
  {
    title: 'The Future of Business: How AI is Driving Corporate Innovation in 2025',
    category: 'Artificial Intelligence',
    excerpt: 'Explore how Generative AI is transforming brand strategies, enabling smarter customer engagement and data-driven growth.',
    imageId: 'insight-ai',
    href: '#',
    author: 'Pankaj Yadav',
    date: 'Oct 28, 2024',
    readTime: '7 min read',
  },
  {
    title: 'Cloud Cost Management: A CTO’s Guide to Optimizing Your AWS Bill',
    category: 'Cloud Solutions',
    excerpt: 'A deep dive into strategies and tools for effective cloud cost management, helping you reduce expenses without sacrificing performance.',
    imageId: 'insight-erp',
    href: '#',
    author: 'Jane Doe',
    date: 'Oct 25, 2024',
    readTime: '5 min read',
  },
  {
    title: 'Top 5 Cybersecurity Threats for SMBs and How to Prevent Them',
    category: 'Cybersecurity',
    excerpt: 'Learn about the most common cyber threats facing small and medium-sized businesses and the steps you can take to protect your assets.',
    imageId: 'insight-crm',
    href: '#',
    author: 'John Smith',
    date: 'Oct 22, 2024',
    readTime: '6 min read',
  },
];

export const FEATURED_ARTICLES = [
  {
    title: 'How Cloud Modernization Powers Business Growth',
    badge: 'Editor\'s Pick',
    excerpt: 'Discover the strategic advantages of migrating to the cloud and how it can transform your business operations, scalability, and bottom line.',
    imageId: 'service-cloud',
    href: '#',
    author: 'Pankaj Yadav',
    date: 'Oct 29, 2024',
    readTime: '8 min read',
  },
  {
    title: 'Web Design Trends That Convert Visitors into Customers',
    badge: 'New',
    excerpt: 'Stay ahead of the curve with the latest web design trends that not only look good but are proven to increase user engagement and conversion rates.',
    imageId: 'design-website',
    href: '#',
    author: 'Jane Doe',
    date: 'Oct 27, 2024',
    readTime: '6 min read',
  },
  {
    title: 'AI Tools Every Business Should Adopt in 2025',
    badge: 'Popular',
    excerpt: 'A curated list of game-changing AI tools that can automate tasks, provide deep insights, and give your business a competitive edge.',
    imageId: 'service-ai',
    href: '#',
    author: 'John Smith',
    date: 'Oct 26, 2024',
    readTime: '5 min read',
  },
]

export const INSIGHTS_CATEGORIES = [
  'Web Development', 'Mobile App', 'Cloud & DevOps', 'Cyber Security', 'AI & Digital Transformation', 'Business Growth', 'UI/UX & Branding'
];

export const INSIGHTS_TAGS = [
  'Web Dev', 'E-Commerce', 'DevOps', 'ERP', 'Branding', 'Security', 'Trends', 'Case Studies', 'AI', 'SaaS', 'Mobile'
];


export const INDUSTRIES = [
    {
        title: 'E-Governance',
        description: 'Streamlined e-governance solutions for efficient citizen services and internal workflows.',
        imageId: 'industry-egov',
    },
    {
        title: 'E-Commerce Solutions',
        description: 'Robust e-commerce platforms tailored for scalability, seamless UX, and optimized sales performance.',
        imageId: 'industry-ecomm',
    },
    {
        title: 'Health & Medical Software Solutions',
        description: 'Smart health IT solutions, patient management systems, and telemedicine platforms for modern healthcare providers.',
        imageId: 'industry-health',
    },
    {
        title: 'SaaS-Based Solutions',
        description: 'Cloud-hosted SaaS solutions enabling efficiency, automation, and scalability for businesses of all sizes.',
        imageId: 'industry-saas',
    },
    {
        title: 'Agriculture IT Solutions',
        description: 'Digital platforms for modern agriculture management, crop monitoring, and supply chain optimization.',
        imageId: 'industry-agri',
    },
    {
        title: 'Logistics IT Solutions',
        description: 'Smart logistics platforms to manage supply chains efficiently, track shipments, and optimize delivery routes.',
        imageId: 'industry-logistics',
    },
    {
        title: 'Travel IT Solutions',
        description: 'IT solutions for travel operators to manage bookings, payments, and customer engagement seamlessly.',
        imageId: 'industry-travel',
    },
    {
        title: 'Manufacturing IT Solutions',
        description: 'Smart IT platforms for production planning, equipment monitoring, and workflow optimization.',
        imageId: 'industry-mfg',
    },
];

export const WEB_DEV_SERVICES = [
  {
    title: 'Custom Website Development',
    description: 'Engage customers with a professional, fast, and secure business website.',
    icon: Globe,
  },
  {
    title: 'E-commerce Store Development',
    description: 'Boost sales with a high-conversion, feature-rich online store.',
    icon: ShoppingCart,
  },
  {
    title: 'Web App Development',
    description: 'Solve unique business challenges with powerful, tailor-made web apps.',
    icon: Layers,
  },
  {
    title: 'CMS & Admin Panel',
    description: 'Easily manage content with custom CMS and admin panel solutions.',
    icon: LayoutGrid,
  },
  {
    title: 'UI/UX Design',
    description: 'Captivate users with intuitive, beautiful, and engaging interfaces.',
    icon: PenTool,
  },
  {
    title: 'API Integration & Automation',
    description: 'Streamline your workflows by integrating third-party services and APIs.',
    icon: Cog,
  },
];

export const WHY_CHOOSE_US = [
  'Fast loading, SEO-friendly websites',
  '100% mobile responsive design',
  'Secure backend with advanced technologies',
  'Custom solutions for every business need',
  'Dedicated project support & maintenance',
];

export const DEV_PROCESS = [
  { title: 'Requirement & Analysis' },
  { title: 'UI/UX Designing' },
  { title: 'Development & QA' },
  { title: 'Deployment & Support' },
];

export const MOBILE_DEV_SERVICES = [
  { title: 'Android App Development', description: 'Native Android apps for superior performance.', icon: Smartphone },
  { title: 'iOS App Development', description: 'Elegant and high-performing native iOS apps.', icon: Smartphone },
  { title: 'Hybrid App Development', description: 'Cross-platform apps with Flutter & React Native.', icon: AppWindow },
  { title: 'SaaS & Product Apps', description: 'Scalable SaaS products and applications.', icon: Cloud },
  { title: 'E-commerce & Marketplace Apps', description: 'Feature-rich apps for online retail.', icon: ShoppingBag },
  { title: 'On-Demand Service Apps', description: 'Apps for booking and service delivery.', icon: Wrench },
  { title: 'Enterprise Mobility Solutions', description: 'Secure and efficient apps for your workforce.', icon: Users },
  { title: 'App Maintenance & Support', description: 'Ongoing support to keep your app running smoothly.', icon: LifeBuoy },
];

export const MOBILE_WHY_CHOOSE_US = [
  'Pixel-perfect UI & Smooth UX',
  'Affordable with transparent pricing',
  'API integrations & third-party services',
  'Scalable cloud-based architecture',
  'End-to-end development + full support',
  'Dedicated team for each project',
];

export const MOBILE_DEV_PROCESS = [
    { title: 'Discovery & Consultation', description: 'Understanding your vision and defining the project scope.', icon: Lightbulb },
    { title: 'UI/UX Design', description: 'Creating intuitive and visually stunning app interfaces.', icon: Palette },
    { title: 'Development', description: 'Building the app with clean code and robust architecture.', icon: Code },
    { title: 'Integrations', description: 'Connecting your app with necessary APIs and third-party services.', icon: GitBranch },
    { title: 'Testing & QA', description: 'Ensuring the app is bug-free and performs flawlessly.', icon: TestTube2 },
    { title: 'Launch & Scaling Support', description: 'Deploying the app to stores and providing ongoing support.', icon: Rocket },
];

export const MOBILE_PORTFOLIO = [
    { title: 'Grocery Delivery App', result: '+40% conversion boost', imageHint: 'grocery app' },
    { title: 'Telemedicine App', result: '10k+ active users', imageHint: 'doctor video' },
    { title: 'E-learning Platform', result: '99% uptime', imageHint: 'online course' },
];

export const CLOUD_SERVICES_OFFERED = [
  { title: 'Cloud Migration', description: 'Migrate from on-premise to cloud with zero downtime.', icon: Layers, imageId: 'service-cloud' },
  { title: 'Cloud Security & Compliance', description: 'Security that protects your future.', icon: ShieldCheck, imageId: 'service-security' },
  { title: 'Cloud Managed Services', description: 'We manage. You grow.', icon: Cog, imageId: 'service-support' },
  { title: 'DevOps & Automation', description: 'Faster time to market.', icon: GitBranch, imageId: 'service-ai' },
  { title: 'Cloud Consulting', description: 'Architect right. Scale right.', icon: BrainCircuit, imageId: 'service-consulting' },
];

export const CLOUD_WHY_CHOOSE_US: { title: string; icon: LucideIcon; }[] = [
    { title: 'Certified Cloud Team', icon: Award },
    { title: '99.9% Uptime Guarantee', icon: Star },
    { title: 'Transparent Pricing', icon: DollarSign },
    { title: '24×7 Support', icon: LifeBuoy },
    { title: 'Enterprise Grade Security', icon: ShieldCheck },
];

export const CLOUD_APPROACH = [
  { title: 'Discovery & Assessment', icon: Eye },
  { title: 'Cloud Architecture Design', icon: GitBranch },
  { title: 'Migration & Deployment', icon: Cpu },
  { title: 'Monitoring & Optimization', icon: GanttChart },
  { title: 'Security & Governance', icon: ShieldCheck },
];

export const CLOUD_CASE_STUDIES = [
    { title: 'E-commerce Cloud Shift', result: '48% faster performance', cost: '32% reduced cost', imageHint: 'shopping cart' },
    { title: 'FinTech Startup', result: 'Achieved banking-grade security', cost: '', imageHint: 'secure transaction' },
    { title: 'SaaS Platform', result: 'Improved performance by 3x', cost: '50% lower infra cost', imageHint: 'dashboard' },
];

export const CLOUD_TECH_EXPERTISE = [
  { name: 'AWS', icon: AWSIcon },
  { name: 'Azure', icon: AzureIcon },
  { name: 'Google Cloud', icon: GoogleCloudIcon },
  { name: 'Docker', icon: DockerIcon },
  { name: 'Kubernetes', icon: KubernetesIcon },
  { name: 'Terraform', icon: TerraformIcon },
  { name: 'Jenkins', icon: JenkinsIcon },
  { name: 'Ansible', icon: AnsibleIcon },
  { name: 'Firewalls', icon: ShieldCheck },
  { name: 'DigitalOcean', icon: Cloud },
];

export const AWS_SERVICES_OFFERED = [
  { title: 'Cloud Migration', description: 'Smooth transition with zero risk & full compliance.', icon: Layers },
  { title: 'Architecture & Deployment', description: 'Secure, scalable & fully automated infra.', icon: GitBranch },
  { title: 'DevOps Automation', description: 'Faster releases using CI/CD pipelines.', icon: Rocket },
  { title: 'Managed AWS Support', description: '24/7 monitoring with proactive issue resolution.', icon: LifeBuoy },
  { title: 'Cost Optimization', description: 'Reduce spend up to 40% using smart analytics.', icon: GanttChart },
  { title: 'Backup & Disaster Recovery', description: 'Data safety with rapid failover.', icon: Server },
  { title: 'Serverless App Development', description: 'Build faster with lower operational cost.', icon: Cpu },
  { title: 'Security & Compliance', description: 'IAM, WAF, GuardDuty, Encryption — full protection.', icon: ShieldCheck },
];

export const AWS_WHY_CHOOSE_US = [
  'AWS Certified Cloud Experts',
  'Reduce Cloud Bills + Improve Performance',
  'Bullet-proof Security',
  'SLA-Backed Performance',
  'Dedicated Support Engineers',
  'We scale your infra as business grows',
];

export const AWS_APPROACH = [
  { title: 'Readiness Audit', icon: Eye },
  { title: 'Solution Architecture', icon: GitBranch },
  { title: 'Infrastructure Setup', icon: Server },
  { title: 'Monitoring & Automation', icon: Activity },
  { title: 'Cost & Security Optimization', icon: ShieldCheck },
];

export const AWS_CASE_STUDIES = [
    { title: 'E-commerce company', result: 'Saved 52% hosting cost', imageHint: 'shopping cart' },
    { title: 'EdTech scaled', result: '1k → 1M users in 6 months', imageHint: 'user growth' },
    { title: 'Fintech App', result: 'Achieved banking-grade security', imageHint: 'secure transaction' },
];

export const AWS_TECH_EXPERTISE = [
  { name: 'EC2', icon: Server },
  { name: 'S3', icon: Package },
  { name: 'Lambda', icon: Cpu },
  { name: 'ECS', icon: DockerIcon },
  { name: 'CloudFront', icon: Globe },
  { name: 'RDS', icon: Database },
  { name: 'DynamoDB', icon: Database },
  { name: 'API Gateway', icon: GitBranch },
  { name: 'EKS', icon: KubernetesIcon },
  { name: 'Load Balancer', icon: Activity },
  { name: 'VPC', icon: Cloud },
  { name: 'Route53', icon: Globe },
  { name: 'IAM', icon: Key },
  { name: 'CloudWatch', icon: Eye },
  { name: 'GuardDuty', icon: ShieldCheck },
];
    
export const ECOMMERCE_WHY_US = [
    { title: 'Modern UI for high conversions', icon: Palette },
    { title: 'Secure & seamless payments', icon: Lock },
    { title: 'Mobile-first experiences', icon: Smartphone },
    { title: 'Scalable to 1M+ products', icon: Scaling },
    { title: 'Multi-warehouse & delivery support', icon: Package },
];

export const ECOMMERCE_SOLUTIONS: ({ title: string; icon: LucideIcon; points: string[]; imageId?: string; })[] = [
    { 
        title: 'Custom E-Commerce Development', 
        icon: Code,
        points: ['Product variants', 'Discount engine', 'Role-based admin', 'Advanced search'],
        imageId: 'service-ecommerce'
    },
    { 
        title: 'Shopify Store Solutions', 
        icon: ShopifyIcon,
        points: ['Custom theme development', 'App integrations', 'Sales & growth marketing setup'],
        imageId: 'industry-ecomm'
    },
    { 
        title: 'WooCommerce Store Solutions', 
        icon: WordpressIcon,
        points: ['WordPress CMS + Store', 'Quick deployment', 'SEO-friendly architecture'],
        imageId: 'work-ada'
    },
    { 
        title: 'B2B & Marketplace Platforms', 
        icon: Users,
        points: ['Multi-vendor system', 'Vendor wallet & commission', 'Subscription and bulk pricing'],
        imageId: 'industry-saas'
    },
    { 
        title: 'E-Commerce App Development', 
        icon: Smartphone,
        points: ['Android + iOS apps', 'Real-time sync with store', 'Push notifications & order tracking'],
        imageId: 'work-yalla'
    },
];

export const ECOMMERCE_PERFORMANCE_SECURITY = [
    { title: 'SSL Encryption', icon: Lock },
    { title: 'Secure Checkout', icon: ShieldCheck },
    { title: 'Inventory Sync', icon: RefreshCw },
    { title: 'Fraud Protection', icon: Eye },
    { title: 'Automated Backups', icon: HardDrive },
];

export const ECOMMERCE_INTEGRATIONS = {
    Payments: ['Razorpay', 'Paytm', 'Stripe'],
    Logistics: ['Delhivery', 'Shiprocket', 'DTDC'],
    Marketing: ['Meta Pixel', 'Google Ads'],
};

export const ECOMMERCE_GROWTH_ADDONS = [
    { title: 'SEO & CRO Optimization', icon: Search },
    { title: 'Email Automation', icon: MessageSquare },
    { title: 'Social Commerce Integration', icon: ShoppingBag },
    { title: 'Review & Loyalty Programs', icon: Star },
];

export const ECOMMERCE_BUILD_PROCESS = [
  { title: 'Discovery & Strategy', icon: Lightbulb },
  { title: 'UX Design & Branding', icon: Palette },
  { title: 'Development', icon: Code },
  { title: 'Payment & Shipping Setup', icon: Wallet },
  { title: 'Quality Testing', icon: TestTube2 },
  { title: 'Go-Live & Support', icon: Rocket },
];

export const ECOMMERCE_PRICING_MODELS = [
    { title: 'Starter Store', description: 'Quick launch for small businesses.', price: '₹XX,XXX' },
    { title: 'Growth Store', description: 'Premium design + automation.', price: '₹XX,XXX' },
    { title: 'Custom Enterprise Store', description: 'Full personalization and advanced features.', price: 'Get A Quote' },
];

export const CUSTOM_SOFTWARE_CORE_SERVICES = [
  {
    title: "Web Development",
    description: "Secure, lightning-fast, SEO-optimized websites that convert customers.",
    tech: "React, Node.js, Laravel, WordPress",
    href: "/services/web-development",
    icon: Globe
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform apps for Android & iOS with stunning UI & smooth performance.",
    tech: "Flutter, React Native, Java, Kotlin",
    href: "/services/mobile-app-development",
    icon: Smartphone
  },
  {
    title: "MVP Development",
    description: "Launch fast. Test smart. Fail less. We build Minimum Viable Products in weeks, not months.",
    tech: "Ideal for Startups, Founders, Product Innovation Teams",
    href: "/services/mvp-development",
    icon: Rocket
  }
];

export const CUSTOM_SOFTWARE_WHY_US = [
    { title: "Your Product, Your Rules", description: "Full control over features & branding.", icon: BrainCircuit },
    { title: "Scalable Technology", description: "Built for future growth and adaptability.", icon: Scaling },
    { title: "Unified Solution", description: "One solution for all your unique business needs.", icon: Package },
    { title: "Full Ownership", description: "You own the IP and the final product.", icon: Briefcase },
];

export const CUSTOM_SOFTWARE_PROCESS = [
    { title: "Discovery", description: "We dive deep into your business goals and project requirements." },
    { title: "Design", description: "We create UI/UX wireframes and visual designs for approval." },
    { title: "Development", description: "Our team builds your product with clean, efficient code." },
    { title: "Launch", description: "We deploy the solution and ensure a smooth go-live." },
    { title: "Support & Scale", description: "We provide ongoing support and help you scale." },
];

export const CUSTOM_SOFTWARE_PRICING = [
    { title: "Fixed Cost Projects", description: "Ideal for projects with a clear scope and defined deliverables." },
    { title: "Dedicated Developer", description: "Monthly engagement for ongoing needs and flexible development." },
    { title: "Startup MVP Packages", description: "Affordable, focused packages to get your idea to market fast." },
]

export const GEN_AI_WHAT_WE_BUILD = [
  { title: "AI Chat & Support Automation", description: "Custom trained AI Assistants, omni-channel customer experience, and 24x7 support with reduced cost.", icon: Bot },
  { title: "Content Generation Engines", description: "Marketing + Product descriptions, multi-lingual copy, and AI brand tone consistency.", icon: FileText },
  { title: "Computer Vision & Image Generation", description: "Logo + product visuals, smart recognition & tagging, and AI-based editing/filters.", icon: PictureInPicture },
  { title: "AI Recommendation Systems", description: "Personalized product suggestions, boost conversion + engagement, and data-driven customer insights.", icon: BookUser },
  { title: "Business Intelligence With AI", description: "Real-time analytics, forecasting & automation, and AI-based decision models.", icon: BrainCircuit },
  { title: "API Integration & Custom AI Apps", description: "AI + CRM, Billing, HRMS, ERP, workflow automation, and secure + scalable cloud setup.", icon: Code },
];

export const GEN_AI_TECH_STACK = [
  { name: 'TensorFlow', icon: Code },
  { name: 'PyTorch', icon: Code },
  { name: 'OpenAI', icon: BrainCircuit },
  { name: 'Google Vertex', icon: GoogleCloudIcon },
  { name: 'Azure AI', icon: AzureIcon },
  { name: 'Python', icon: PythonIcon },
  { name: 'NLP', icon: MessageSquare },
  { name: 'OCR', icon: Eye },
];

export const GEN_AI_SECURITY = [
  'Data privacy',
  'Encrypted infrastructure',
  'Role-based access & monitoring',
  'Model optimization without data leakage',
];

export const GEN_AI_WHY_US = [
  'Fully custom-built models',
  'Zero-dependency structure',
  'Transparent pricing',
  'Dedicated AI team',
  'Rapid prototype to scale',
];

export const GEN_AI_WORKFLOW = [
  { title: 'Data Discovery', icon: Database },
  { title: 'AI Strategy & Blueprint', icon: GanttChart },
  { title: 'Prototype / MVP', icon: Rocket },
  { title: 'Development + Integration', icon: Code },
  { title: 'Optimization & Scaling', icon: Scaling },
  { title: 'Continuous Monitoring', icon: Activity },
];

export const GEN_AI_PRICING = [
    { title: 'Starter AI Automation', description: 'For small-scale automation needs.', price: '₹XX,XXX' },
    { title: 'Custom AI Product', description: 'End-to-end development of AI products.', price: 'Quote Based' },
    { title: 'MVP Rapid Build', description: 'Budget-friendly AI MVP development.', price: 'Budget Friendly' },
];

export const CYBER_SECURITY_SERVICES: ({ title: string; description: string; icon: LucideIcon; points: string[]; imageId: string; })[] = [
  { title: 'Threat Detection & Response', description: 'Instant action against emerging risks.', icon: Shield, points: ['24×7 monitoring', 'Zero-day attack prevention', 'SOC services'], imageId: 'security-threat' },
  { title: 'Network Security', description: 'Connection-level protection for all devices.', icon: Network, points: ['Firewall & VPN setup', 'DDoS protection', 'Vulnerability monitoring'], imageId: 'security-network' },
  { title: 'Endpoint Protection', description: 'Every device gets enterprise-grade security.', icon: Laptop, points: ['Anti-malware & ransomware defense', 'Device encryption', 'Secure access control'], imageId: 'security-endpoint' },
  { title: 'Data Security & Compliance', description: 'Stay compliant. Stay protected.', icon: FolderLock, points: ['Data encryption', 'Backup & recovery', 'GDPR, ISO, PCI-DSS support'], imageId: 'security-data' },
  { title: 'Cloud Security', description: 'Strong identity control with zero-trust model.', icon: CloudCog, points: ['AWS, Azure, GCP security setup', 'IAM policies', 'Monitoring & cost governance'], imageId: 'security-cloud' },
  { title: 'Cyber Awareness Training', description: 'Human-error risk reduction.', icon: Brain, points: ['Phishing simulations', 'Employee cybersecurity education'], imageId: 'security-training' },
];

export const CYBER_SECURITY_TECH_STACK = [
    { name: 'SIEM', icon: SearchCheck },
    { name: 'SOC', icon: Shield },
    { name: 'SSL', icon: Lock },
    { name: 'IDS/IPS', icon: Network },
    { name: 'IAM', icon: Key },
    { name: 'XDR', icon: Zap },
    { name: 'Zero-Trust', icon: ShieldCheck },
    { name: 'OSINT', icon: Search },
];

export const CYBER_SECURITY_WHY_US = [
    'Certified security experts',
    'Continuous monitoring',
    'Fast threat response time',
    'Fully managed solutions',
    'Clear reporting & transparency'
];

export const CYBER_SECURITY_PROCESS = [
  { title: 'Security Audit', icon: SearchCheck },
  { title: 'Threat Intelligence', icon: BrainCircuit },
  { title: 'Fortification', icon: Shield },
  { title: 'Monitoring', icon: Eye },
  { title: 'Optimization', icon: Cog },
];

export const DESIGN_MARKETING_SERVICES: ({ title: string; icon: LucideIcon; goal: string; points: string[]; imageId: string; })[] = [
  { title: 'Branding & Creative Identity', icon: PenTool, goal: 'Make your brand instantly recognizable', points: ['Brand name + storytelling', 'Logo & visual identity system', 'Color + typography system', 'Brand guidelines kit'], imageId: 'design-branding' },
  { title: 'UI/UX Design for Web & App', icon: Smartphone, goal: 'Intuitive experiences that convert', points: ['Human-centered interaction design', 'Wireframes to high-fidelity prototypes', 'Mobile-first responsive approach', 'Accessibility & user flow optimization'], imageId: 'design-uiux' },
  { title: 'Website Design & Redesign', icon: Globe, goal: 'Your website becomes your top salesperson', points: ['Conversion-focused modern layouts', 'SEO-ready architecture', 'High-speed performance', 'WordPress, Webflow & Custom Builds'], imageId: 'design-website' },
  { title: 'Digital Marketing & Growth', icon: BarChart, goal: 'Consistent reach + measurable revenue', points: ['Social Media Marketing', 'SEO + Content Marketing', 'PPC + Google Ads + Social Ads', 'Reputation management'], imageId: 'design-marketing' },
  { title: 'Creative Content Production', icon: Video, goal: 'Create content that users love to share', points: ['Product and corporate videos', 'Photo shoots', 'Motion graphics & animation', 'Social media content kits'], imageId: 'design-content' },
  { title: 'Marketing Automation & Analytics', icon: Bot, goal: 'Decisions backed by real data', points: ['CRM + email workflows', 'Performance dashboards', 'Growth experimentation', 'ROI-focused campaign management'], imageId: 'design-automation' },
];

export const DESIGN_MARKETING_WHY_US: { title: string; icon: LucideIcon; }[] = [
  { title: 'Strategy + Creativity combined', icon: BrainCircuit },
  { title: 'Transparent collaboration', icon: Handshake },
  { title: 'Dedicated design & marketing squad', icon: Users },
  { title: 'Fast delivery with quality', icon: FastForward },
  { title: 'Powerful results, long-term growth', icon: Target }
];

export const SUPPORT_WHY_US = [
    { title: 'Proactive monitoring', icon: Eye },
    { title: 'Fast issue resolution', icon: Zap },
    { title: 'Regular updates', icon: RefreshCw },
    { title: 'Performance optimization', icon: Rocket },
    { title: 'Flexible support plans', icon: Scaling },
];

export const SUPPORT_WHAT_WE_SUPPORT = [
    { title: 'Websites (WordPress, Custom, CMS)', icon: Globe },
    { title: 'Mobile Apps (iOS, Android, Hybrid)', icon: Smartphone },
    { title: 'Web Applications & SaaS Platforms', icon: AppWindow },
    { title: 'Cloud Infrastructure & Hosting', icon: Cloud },
    { title: 'E-commerce Stores', icon: ShoppingCart },
    { title: 'APIs & Integrations', icon: GitBranch },
];

export const SUPPORT_MAINTENANCE_OFFERINGS = [
    { 
        title: 'Technical Maintenance', 
        icon: Bug,
        points: ['Bug fixing', 'Server support & uptime monitoring', 'Code optimization', 'Integration updates'] 
    },
    { 
        title: 'Content & Design Support', 
        icon: FilePenLine,
        points: ['Banner & UI updates', 'New page additions', 'Product uploads & digital marketing integration'] 
    },
    { 
        title: 'Security & Backup',
        icon: Shield,
        points: ['Firewalls & malware protection', 'Real-time security monitoring', 'Automated daily/weekly backups', 'SSL monitoring & renewal'] 
    },
    { 
        title: 'Performance Optimization', 
        icon: BarChart,
        points: ['Speed enhancement', 'Database optimization', 'Load testing'] 
    },
    { 
        title: '24/7 Emergency Support', 
        icon: Clock,
        points: ['Critical issue handling anytime', 'Disaster recovery assistance'] 
    },
];

export const SUPPORT_TECH_STACK = [
    { name: 'AWS', icon: AWSIcon },
    { name: 'Azure', icon: AzureIcon },
    { name: 'Google Cloud', icon: GoogleCloudIcon },
    { name: 'WordPress', icon: WordpressIcon },
    { name: 'Shopify', icon: ShopifyIcon },
    { name: 'React', icon: ReactIcon },
    { name: 'Node.js', icon: NodeIcon },
    { name: 'PHP', icon: PHPIcon },
    { name: 'MySQL', icon: MySQLIcon },
    { name: 'Firebase', icon: FirebaseIcon },
    { name: 'GitHub', icon: GitBranch },
    { name: 'Docker', icon: DockerIcon },
];

export const SUPPORT_CASE_STUDIES = [
    { value: '80%', label: 'Downtime Reduction' },
    { value: '1.8s', label: 'Improved Load Speed' },
    { value: '100+', label: 'Websites Secured' },
];

export const SUPPORT_FAQ = [
    { question: 'Do you support websites made by other agencies?', answer: 'Yes, we take over third-party projects smoothly after a thorough technical audit.' },
    { question: 'Do you provide 24/7 monitoring?', answer: 'Yes, 24/7 monitoring is a key part of our premium support plans to ensure your systems are always online.' },
    { question: 'Can I scale support as my business grows?', answer: 'Absolutely. Our support plans are designed to be flexible and can be scaled up or down to match your business needs.' },
];


export const IT_CONSULTING_SERVICES: { title: string; description: string; icon: LucideIcon; imageId: string; }[] = [
  { title: 'Digital Strategy Consulting', description: 'Migrate to smarter operations and improve efficiency through expert tech roadmaps.', icon: BookCopy, imageId: 'consulting-strategy' },
  { title: 'Software and Application Consulting', description: 'Build, scale, or modernize systems with the right tech stack.', icon: Layers, imageId: 'consulting-software' },
  { title: 'Cloud Consulting', description: 'Cloud adoption, migration, cost optimization, DevOps setup, and security.', icon: CloudCog, imageId: 'consulting-cloud' },
  { title: 'Cybersecurity Advisory', description: 'Risk assessment, compliance, and data protection planning.', icon: ShieldCheck, imageId: 'consulting-security' },
  { title: 'IT Infrastructure Consulting', description: 'Network design, modernization, and automation for peak performance.', icon: Server, imageId: 'consulting-infra' },
  { title: 'Data & AI Consulting', description: 'Turn data into decisions using modern analytics and AI solutions.', icon: BrainCircuit, imageId: 'consulting-ai' },
];

export const IT_CONSULTING_WHY_US = [
  'Experienced consultants with multi-industry expertise',
  'Technology recommendations tailored to your business goals',
  'Faster digital transformation with minimal disruption',
  'Proven methodologies + future-ready solutions',
  'Transparent communication & measurable outcomes',
];

export const IT_CONSULTING_APPROACH = [
  { title: 'Discover & Audit', description: 'We understand challenges and existing infrastructure.' },
  { title: 'Strategic Roadmap', description: 'Blueprint with budget, timeline, and KPIs to track success.' },
  { title: 'Implementation Assistance', description: 'Align teams, vendors, and tech investments for smooth execution.' },
  { title: 'Monitoring & Optimization', description: 'Continuous improvement to maximize ROI.' },
];

export const IT_CONSULTING_CASE_STUDIES = [
    { value: '30%', label: 'IT costs cut through cloud modernization' },
    { value: '99.99%', label: 'System uptime for enterprise client' },
    { value: '25%', label: 'Revenue increase with AI-driven decisions' },
];

export const IT_CONSULTING_FAQ = [
    { question: 'Can you work with existing systems?', answer: 'Yes, we specialize in modernization without disruption.' },
    { question: 'Do you provide long-term consulting support?', answer: 'Absolutely, from strategy to continuous optimization.' },
    { question: 'Do you help with compliance?', answer: 'Yes, including GDPR, ISO, HIPAA etc.' },
];


export const HARDWARE_SERVICES: { title: string; icon: LucideIcon }[] = [
    { title: 'Computer & Laptop Maintenance', icon: Laptop },
    { title: 'Servers Installation & Upgrades', icon: Server },
    { title: 'Network Devices (Routers, Switches) Setup', icon: Network },
    { title: 'Printer & Scanner Support', icon: Printer },
    { title: 'CCTV & Biometric Device Support', icon: Cctv },
    { title: 'Hardware Troubleshooting & Repairs', icon: Wrench },
    { title: 'IT Asset Installation & Configuration', icon: Cog },
    { title: 'Spare Parts Replacement & Warranty Handling', icon: Package },
];

export const AMC_PLANS = [
    { title: 'Comprehensive AMC (Parts + Service)' },
    { title: 'Non-Comprehensive AMC (Service Only)' },
    { title: 'Customized AMC for Business Needs' },
    { title: 'Preventive Maintenance + Breakdown Support' },
];

export const AMC_WHY_US: { title: string; icon: LucideIcon }[] = [
    { title: 'Fast Onsite & Remote Support', icon: Zap },
    { title: 'Proactive Monitoring & Preventive Checkups', icon: Eye },
    { title: 'Single Point of Contact for All IT Issues', icon: User },
    { title: 'Quick Response Time & Dedicated Engineers', icon: Clock },
    { title: 'Reduced IT Downtime & Repair Costs', icon: DollarSign },
];

export const SUPPORT_PROCESS: { title: string; icon: LucideIcon }[] = [
    { title: 'Hardware Audit & Inventory Check', icon: Search },
    { title: 'Preventive Maintenance Scheduling', icon: GanttChart },
    { title: 'Onsite Service & Troubleshooting', icon: Wrench },
    { title: 'Replacement, Repair & Reporting', icon: FilePenLine },
    { title: 'Performance Monitoring & Review', icon: Activity },
];

export const AMC_FAQ = [
    { question: 'Is AMC available for small businesses?', answer: 'Yes, we support all business sizes.' },
    { question: 'Do you include spares in AMC?', answer: 'Yes, in our Comprehensive AMC plan, spare parts are included. For other plans, they are billed separately.' },
    { question: 'Do you provide emergency support?', answer: 'Yes, we have a dedicated helpline available 24/7 for emergency support requests.' },
];

export const MVP_FEATURES = [
  { title: "Core Feature Development", icon: Code },
  { title: "UI/UX Design", icon: Palette },
  { title: "Database Setup", icon: Database },
  { title: "User Authentication", icon: Users },
  { title: "Testing & QA", icon: TestTube2 },
  { title: "Deployment", icon: Rocket },
];

export const MVP_BENEFITS = [
    { title: 'Faster Time to Market', description: 'Launch in weeks.', icon: Zap },
    { title: 'User Feedback', description: 'Gather insights early.', icon: MessageSquare },
    { title: 'Reduced Risk', description: 'Validate before investing.', icon: ShieldCheck },
    { title: 'Cost-Effective', description: 'Focus on core features.', icon: DollarSign },
];

export const MVP_PROCESS = [
  { title: 'Idea & Strategy', icon: Lightbulb, description: "Define goals" },
  { title: 'Design & Prototype', icon: Palette, description: "Visualize the product" },
  { title: 'Develop Core Features', icon: Code, description: "Build the MVP" },
  { title: 'Launch & Learn', icon: Rocket, description: "Get user feedback" },
];

export const MVP_ASSURANCE = [
  "NDA for Idea Protection",
  "Full IP & Code Ownership",
  "Secure Cloud Deployment",
  "Flexible Pricing Models",
  "Dedicated Project Manager",
  "Post-Launch Support",
];

export const CORE_VALUES: {
  icon: LucideIcon;
  title: string;
  description: string;
  imageId?: string;
}[] = [
    {
      icon: BrainCircuit,
      title: 'Innovation',
      description: 'We believe in constantly evolving and adopting the latest technologies to stay ahead of the curve.',
      imageId: 'core-value-innovation',
    },
    {
      icon: Zap,
      title: 'Streamlined Workflow',
      description: "Effortlessly Collaborate Across Teams and Projects with ITLC's Seamless and Intuitive Collaboration Tools.",
      imageId: 'core-value-workflow',
    },
    {
      icon: ShieldCheck,
      title: 'Robust Data Security',
      description: 'Protect Your Sensitive Information with Cutting-Edge Encryption and Security Measures solutions.',
      imageId: 'core-value-security',
    },
    {
      icon: Star,
      title: 'Strive for Excellence',
      description: "We are committed to pushing the boundaries of what's possible and delivering exceptional quality.",
      imageId: 'core-value-excellence',
    },
];

export const TIMELINE = [
    { year: 2015, value: '3000+', description: 'Satisfied Global Clients' },
    { year: 2020, value: '78%', description: 'Finishing Success Projects' },
    { year: 2023, value: '5000+', description: 'Download Total Range' },
    { year: 2025, value: '1000K+', description: 'Sales Generated Successfully' },
];

export const CREDENTIALS = [
    { title: 'An ISO 9001:2015 Certified Company', icon: Award },
    { title: 'Member of UP Cooperative Sugar Factories', icon: Building },
    { title: 'Member of UPCCTNS', icon: ShieldCheck },
    { title: 'Member of UPPCL - Electricity Board', icon: Zap },
    { title: 'Member of MPIGRS', icon: BookCopy },
    { title: 'Member of Industrial Training Institute (ITI)', icon: Briefcase },
];

export const PARTNERS = [
  { name: 'Partner One', logo: 'https://placehold.co/140x70/f0f0f0/333333?text=Partner+1' },
  { name: 'Partner Two', logo: 'https://placehold.co/140x70/f0f0f0/333333?text=Partner+2' },
  { name: 'Partner Three', logo: 'https://placehold.co/140x70/f0f0f0/333333?text=Partner+3' },
  { name: 'Partner Four', logo: 'https://placehold.co/140x70/f0f0f0/333333?text=Partner+4' },
  { name: 'Partner Five', logo: 'https://placehold.co/140x70/f0f0f0/333333?text=Partner+5' },
  { name: 'Partner Six', logo: 'https://placehold.co/140x70/f0f0f0/333333?text=Partner+6' },
];
    

    









    

    