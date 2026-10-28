// Featured projects (large cards) and other projects (smaller cards).
// Only facts from the CV are used. Add a link only when a real one exists.
// status: 'completed' or 'in-progress' (controls the badge)

export const featuredProjects = [
  {
    id: 'smart-trolley-nexus',
    title: 'SmartTrolleyNexus',
    category: 'Computer Vision · Edge AI',
    period: '2024 – 2025',
    status: 'completed',
    context: 'Final Year Project, Mohammad Ali Jinnah University',
    summary:
      'An AI-based smart trolley that recognizes products with dual-camera computer vision on a Raspberry Pi and automates billing.',
    highlights: [
      'Led a 4-member team to design and build the system.',
      'Implemented real-time product detection with approximately 92% detection accuracy, integrated with an automated billing system.',
      'Integrated hardware sensors with the software pipeline using Raspberry Pi, OpenCV, and TensorFlow Lite.',
      'Optimized the edge-AI pipeline to achieve under 2-second detection latency.',
    ],
    metrics: [
      { value: '~92%', label: 'detection accuracy' },
      { value: '< 2 s', label: 'detection latency' },
    ],
    tech: ['Python', 'TensorFlow Lite', 'OpenCV', 'Raspberry Pi'],
    links: {
      repo: 'https://github.com/smziyanhussain/Smart-Trolley-Nexus',
    },
  },
  {
    id: 'whatsapp-order-agent',
    title: 'AI-Powered WhatsApp Order Management Agent',
    category: 'Agentic AI · Automation',
    period: '2026',
    status: 'completed',
    context: 'Agentic AI project for a fashion store',
    summary:
      'A WhatsApp chatbot for a fashion store that uses an n8n workflow and a Groq LLM agent to handle customer conversations and manage orders end to end.',
    highlights: [
      'Built an agentic workflow that understands customer messages, collects order details, and stores orders in Google Sheets.',
      'Integrated Twilio for WhatsApp messaging and Gmail for automated order confirmation emails.',
      'Implemented conversation memory to keep context across messages and answer order-status questions.',
    ],
    metrics: [],
    tech: ['n8n', 'Groq LLM', 'Twilio', 'Google Sheets', 'Gmail'],
    links: {
      repo: 'https://github.com/smziyanhussain/fashion-store-whatsapp-bot',
    },
  },
  {
    id: 'studysaathi-ai',
    title: 'StudySaathi AI',
    category: 'AI · Education',
    period: '',
    status: 'in-progress',
    context: '',
    summary: 'An AI learning assistant for students.',
    highlights: [],
    metrics: [],
    tech: [],
    links: {},
  },
]

export const otherProjects = [
  {
    id: 'coffee-shop-app',
    title: 'Coffee Shop Application',
    period: '2026',
    summary:
      'Android app with a categorized coffee menu, item details and pricing, a cart with order customization, and an order confirmation flow.',
    tech: ['Java', 'XML', 'Android Studio'],
  },
  {
    id: 'salah-companion',
    title: 'Salah Companion App',
    period: '2026',
    summary:
      'Android utility with configurable prayer reminders, a prayer-time silent mode based on user-entered schedules, and an Islamic Hijri calendar.',
    tech: ['Java', 'XML', 'Android Studio'],
  },
  {
    id: 'smart-bell-system',
    title: 'Smart Automatic Bell System',
    period: '2025',
    summary:
      'University bell management system connecting an Android admin dashboard to Arduino hardware, with bell schedules stored in MongoDB.',
    tech: ['Java', 'XML', 'MongoDB', 'Arduino'],
  },
  {
    id: 'securepass',
    title: 'SecurePass – OTP Verification App',
    period: '2024',
    summary:
      'Android app with OTP-based user verification using Firebase Authentication, plus registration, verification, and home screens with error handling.',
    tech: ['Java', 'XML', 'Android Studio', 'Firebase'],
  },
]