import type { Translations } from './fr';

/**
 * English translations. Typed as `Translations` (the shape of `fr.ts`)
 * so a missing or renamed key fails the TypeScript build instead of
 * silently falling back to nothing at runtime.
 */
const en: Translations = {
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    expertise: 'Expertise',
    environment: 'Environment',
    contact: 'Contact',
    getInTouch: 'Get in Touch',
  },

  hero: {
    title: 'Maritime Excellence, Global Reach',
    description:
      'Decades of expertise in maritime services, industrial maintenance, and environmental protection. EMIES SARLU delivers comprehensive solutions for ports, vessels, and industrial facilities worldwide.',
    primaryCTA: 'Explore Services',
    secondaryCTA: 'Learn More',
    scrollHint: 'Scroll to explore',
  },

  about: {
    heading: 'About EMIES SARLU',
    paragraph1:
      'EZZOUINI MARITIME, INDUSTRIAL & ENVIRONMENTAL SERVICES (EMIES SARLU) is a leading provider of specialized maritime, industrial, and environmental solutions operating in Gabon and internationally.',
    paragraph2:
      'Founded on principles of technical excellence, operational reliability, and environmental stewardship, EMIES SARLU has established itself as a trusted partner for ports, shipping companies, industrial operators, and maritime facilities seeking expert inspection, maintenance, compliance, and environmental response services.',
    missionTitle: 'Our Mission',
    missionText:
      'Deliver world-class maritime inspection, industrial maintenance, and environmental response services that enhance operational efficiency, ensure regulatory compliance, and promote sustainable maritime practices across all sectors we serve.',
    visionTitle: 'Our Vision',
    visionText:
      'Be the preferred partner for maritime operations and industrial excellence, recognized for technical expertise, compliance reliability, and commitment to environmental protection in Gabon and internationally.',
    cta: 'Get in Touch',
  },

  services: {
    heading: 'Our Services',
    description:
      'EMIES SARLU delivers comprehensive maritime, industrial, and environmental solutions for ports, vessels, and industrial facilities across Gabon and internationally. Every service reflects our commitment to technical excellence and regulatory compliance.',
    items: [
      {
        title: 'Maritime & Port Services',
        description:
          'Comprehensive maritime and port operations support. Vessel management, port facility operations, and international maritime compliance.',
      },
      {
        title: 'Technical Inspection & Surveying',
        description:
          'Expert maritime surveying and vessel auditing. Classification society compliance, safety certifications, and international standards verification.',
      },
      {
        title: 'Industrial Maintenance & Repair',
        description:
          'Mechanical, electromechanical, and hydraulic maintenance. Specialized repair services for industrial and marine equipment with rapid response.',
      },
      {
        title: 'Vessel & Equipment Services',
        description:
          'Complete maintenance and technical monitoring of vessels, barges, ferries, and marine engines. Port facility operations and equipment diagnostics.',
      },
      {
        title: 'Environmental Protection',
        description:
          'Marine pollution prevention and control. Industrial waste management, environmental monitoring, and sustainable operations consulting.',
      },
      {
        title: 'Professional Training',
        description:
          'Maritime and professional training programs. Skilled personnel development in maritime operations, safety compliance, and industrial sectors.',
      },
    ],
    extra: [
      {
        title: 'Spare Parts & Equipment Supply',
        description:
          'High-quality spare parts and industrial, marine, and safety equipment from trusted manufacturers. Full compliance with international maritime standards and rapid delivery capabilities for operational continuity.',
      },
      {
        title: 'Maritime Consulting & Supervision',
        description:
          'Expert maritime consulting, technical assistance, and shipyard supervision. We optimize operations, ensure regulatory compliance, and deliver project success through on-site technical expertise and operational oversight.',
      },
    ],
    viewAllCTA: 'View All Services',
  },

  expertise: {
    heading: 'Our Expertise',
    description:
      'Decades of operational experience in maritime and industrial sectors. EMIES SARLU delivers specialized expertise across inspection, compliance, maintenance, and environmental response.',
    capabilities: [
      {
        category: 'Maritime Operations',
        items: [
          'Vessel management and operations',
          'Port facility management and optimization',
          'Marine logistics coordination',
          'International maritime compliance and regulations',
        ],
      },
      {
        category: 'Technical Services',
        items: [
          'Marine engine maintenance and repair',
          'Hydraulic systems diagnostics and service',
          'Electromechanical installations and upgrades',
          'Equipment diagnostics and troubleshooting',
        ],
      },
      {
        category: 'Inspection & Compliance',
        items: [
          'Maritime surveying and vessel inspection',
          'Classification society compliance verification',
          'Safety certifications and audits',
          'Regulatory compliance documentation',
        ],
      },
      {
        category: 'Environmental Services',
        items: [
          'Marine pollution prevention and response',
          'Industrial waste management systems',
          'Environmental monitoring and reporting',
          'Sustainable operations consulting',
        ],
      },
    ],
    whyChoose: 'Why Choose EMIES SARLU',
    stats: [
      {
        value: '20+',
        label: 'Years of Experience',
        description:
          'Proven operational track record in maritime and industrial services across Gabon and international markets.',
      },
      {
        value: '500+',
        label: 'Projects Completed',
        description:
          'Successfully delivered inspection, maintenance, and compliance solutions for ports, vessels, and industrial facilities.',
      },
      {
        value: '100%',
        label: 'Regulatory Compliance',
        description:
          'Full adherence to international maritime standards and environmental regulations in every project.',
      },
    ],
  },

  environment: {
    heading: 'Environmental Commitment',
    description:
      'EMIES SARLU integrates environmental protection into every maritime and industrial operation. We maintain zero tolerance for pollution and lead industry standards in marine conservation.',
    initiatives: [
      {
        title: 'Sustainable Operations',
        description:
          'Eco-friendly practices integrated into all maritime and industrial operations to minimize environmental impact and promote sustainability.',
      },
      {
        title: 'Marine Protection',
        description:
          'Advanced marine pollution prevention and control systems. Rapid response protocols to protect ocean ecosystems and marine life.',
      },
      {
        title: 'Clean Technology',
        description:
          'Modern, clean technologies for industrial processes and vessel operations. Continuous investment in environmental innovation.',
      },
      {
        title: 'Energy Efficiency',
        description:
          'Energy-efficient solutions across all service areas. Reduced carbon footprint and operational cost optimization.',
      },
    ],
    stats: [
      {
        value: '100%',
        label: 'Regulatory Compliance',
        description:
          'All operations meet international environmental and maritime regulations. Zero violations on record.',
      },
      {
        value: '24/7',
        label: 'Environmental Monitoring',
        description:
          'Continuous monitoring systems and rapid response protocols for environmental concerns and marine incidents.',
      },
      {
        value: 'Zero',
        label: 'Tolerance for Pollution',
        description:
          'Strict prevention protocols and immediate response systems to prevent marine pollution and environmental damage.',
      },
    ],
  },

  contact: {
    heading: 'Get in Touch',
    description:
      'Ready to partner with EMIES SARLU? Contact us today to discuss your maritime, industrial, or environmental service needs. We respond rapidly to all inquiries.',
    info: [
      { title: 'Location', details: ['Gabon', 'International Operations'] },
      { title: 'Emergency Response', details: ['24/7 Available for Urgent Matters'] },
      { title: 'Email', details: ['info@emies-sarlu.com'] },
      { title: 'Availability', details: ['Round-the-Clock Support'] },
    ],
    formHeading: 'Send us a Message',
    fields: {
      fullName: 'Full Name',
      fullNamePlaceholder: 'Your name',
      email: 'Email Address',
      emailPlaceholder: 'your@email.com',
      company: 'Company',
      companyPlaceholder: 'Your company',
      service: 'Service of Interest',
      selectService: 'Select a service...',
      message: 'Message',
      messagePlaceholder: 'Tell us about your service needs...',
      submit: 'Send Message',
    },
    serviceOptions: [
      'Maritime & Port Services',
      'Technical Inspection & Surveying',
      'Industrial Maintenance & Repair',
      'Vessel & Equipment Services',
      'Environmental Protection',
      'Professional Training',
      'Spare Parts & Equipment Supply',
      'Maritime Consulting & Supervision',
    ],
  },

  footer: {
    tagline: 'Maritime & Industrial',
    description:
      'Leading provider of maritime, industrial, and environmental services in Gabon and internationally.',
    servicesHeading: 'Services',
    serviceLinks: [
      'Maritime Services',
      'Technical Inspection',
      'Industrial Maintenance',
      'Environmental Protection',
    ],
    companyHeading: 'Company',
    companyLinks: ['About Us', 'Our Expertise', 'Contact'],
    contactHeading: 'Contact',
    location: 'Gabon & International Operations',
    emergency: '24/7 Available',
    copyright: 'All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    compliance: 'Compliance',
  },

  home: {
    aboutPreview: {
      heading: 'Who We Are',
      text:
        'EMIES SARLU is a provider of maritime, industrial, and environmental solutions operating in Gabon and internationally, recognized for technical excellence and operational reliability.',
      cta: 'Discover Our Company',
    },
    servicesPreview: {
      heading: 'Our Services',
      subtitle: 'A look at our maritime, industrial, and environmental solutions.',
      cta: 'View All Services',
    },
    expertisePreview: {
      heading: 'Our Expertise',
      text:
        'Decades of operational experience and specialized expertise across inspection, compliance, maintenance, and environmental response.',
      cta: 'Explore Our Expertise',
    },
    environmentPreview: {
      heading: 'Environmental Commitment',
      text:
        'Environmental protection is built into every operation we run, with zero tolerance for pollution.',
      cta: 'Our Environmental Approach',
    },
    finalCta: {
      heading: 'Ready to Work With Us?',
      text:
        'Contact our team today to discuss your maritime, industrial, or environmental service needs.',
      cta: 'Contact Us',
    },
  },

  notFound: {
    title: '404',
    subtitle: 'Page Not Found',
    description:
      "Sorry, the page you are looking for doesn't exist.\nIt may have been moved or deleted.",
    goHome: 'Go Home',
  },
};

export default en;
