/**
 * French translations — source of truth.
 *
 * The English file (`en.ts`) is typed against this file's shape
 * (`Translations`), so any key added/removed here must also be
 * updated in `en.ts` or TypeScript will fail to compile.
 *
 * Content here reflects the current EMIES SARLU website copy.
 * The client may provide refreshed French copy later — since every
 * string lives in this single object, updating the site text is a
 * matter of editing the values below, not touching any component.
 */
const fr = {
  nav: {
    home: 'Accueil',
    about: 'À propos',
    services: 'Services',
    expertise: 'Expertise',
    environment: 'Environnement',
    contact: 'Contact',
    getInTouch: 'Nous contacter',
  },

  hero: {
    title: 'Excellence Maritime, Portée Mondiale',
    description:
      "Des décennies d'expertise en services maritimes, maintenance industrielle et protection de l'environnement. EMIES SARLU propose des solutions complètes pour les ports, navires et installations industrielles à travers le monde.",
    primaryCTA: 'Découvrir nos services',
    secondaryCTA: 'En savoir plus',
    scrollHint: 'Faites défiler pour explorer',
  },

  about: {
    heading: 'À propos d\u2019EMIES SARLU',
    paragraph1:
      "EZZOUINI MARITIME, INDUSTRIAL & ENVIRONMENTAL SERVICES (EMIES SARLU) est un fournisseur de premier plan de solutions maritimes, industrielles et environnementales, opérant au Gabon et à l'international.",
    paragraph2:
      "Fondée sur des principes d'excellence technique, de fiabilité opérationnelle et de responsabilité environnementale, EMIES SARLU s'est imposée comme un partenaire de confiance pour les ports, compagnies maritimes, exploitants industriels et installations portuaires en quête de services experts d'inspection, de maintenance, de conformité et de réponse environnementale.",
    missionTitle: 'Notre Mission',
    missionText:
      "Fournir des services d'inspection maritime, de maintenance industrielle et de réponse environnementale de classe mondiale, qui améliorent l'efficacité opérationnelle, garantissent la conformité réglementaire et promeuvent des pratiques maritimes durables dans tous les secteurs que nous servons.",
    visionTitle: 'Notre Vision',
    visionText:
      "Être le partenaire privilégié pour les opérations maritimes et l'excellence industrielle, reconnu pour son expertise technique, sa fiabilité en matière de conformité et son engagement envers la protection de l'environnement, au Gabon comme à l'international.",
    cta: 'Nous contacter',
  },

  services: {
    heading: 'Nos Services',
    description:
      "EMIES SARLU propose des solutions maritimes, industrielles et environnementales complètes pour les ports, navires et installations industrielles au Gabon et à l'international. Chaque service reflète notre engagement envers l'excellence technique et la conformité réglementaire.",
    items: [
      {
        title: 'Services Maritimes & Portuaires',
        description:
          "Accompagnement complet des opérations maritimes et portuaires. Gestion de navires, exploitation des installations portuaires et conformité maritime internationale.",
      },
      {
        title: 'Inspection Technique & Expertise Maritime',
        description:
          "Expertise en inspection maritime et audit de navires. Conformité aux sociétés de classification, certifications de sécurité et vérification des normes internationales.",
      },
      {
        title: 'Maintenance & Réparation Industrielle',
        description:
          "Maintenance mécanique, électromécanique et hydraulique. Services de réparation spécialisés pour équipements industriels et marins avec intervention rapide.",
      },
      {
        title: 'Services Navires & Équipements',
        description:
          "Maintenance complète et suivi technique des navires, barges, ferries et moteurs marins. Exploitation des installations portuaires et diagnostic d'équipements.",
      },
      {
        title: 'Protection de l\u2019Environnement',
        description:
          "Prévention et contrôle de la pollution marine. Gestion des déchets industriels, surveillance environnementale et conseil en exploitation durable.",
      },
      {
        title: 'Formation Professionnelle',
        description:
          "Programmes de formation maritime et professionnelle. Développement du personnel qualifié en opérations maritimes, conformité sécurité et secteurs industriels.",
      },
    ],
    extra: [
      {
        title: 'Fourniture de Pièces & Équipements',
        description:
          "Pièces détachées et équipements industriels, marins et de sécurité de haute qualité, issus de fabricants reconnus. Conformité totale aux normes maritimes internationales et livraison rapide pour assurer la continuité opérationnelle.",
      },
      {
        title: 'Conseil Maritime & Supervision',
        description:
          "Conseil maritime expert, assistance technique et supervision de chantier naval. Nous optimisons les opérations, garantissons la conformité réglementaire et assurons la réussite des projets grâce à une expertise technique et un suivi opérationnel sur site.",
      },
    ],
    viewAllCTA: 'Voir tous nos services',
  },

  expertise: {
    heading: 'Notre Expertise',
    description:
      "Des décennies d'expérience opérationnelle dans les secteurs maritime et industriel. EMIES SARLU déploie une expertise spécialisée en inspection, conformité, maintenance et réponse environnementale.",
    capabilities: [
      {
        category: 'Opérations Maritimes',
        items: [
          'Gestion et exploitation de navires',
          'Gestion et optimisation des installations portuaires',
          'Coordination logistique maritime',
          'Conformité et réglementation maritime internationale',
        ],
      },
      {
        category: 'Services Techniques',
        items: [
          'Maintenance et réparation de moteurs marins',
          'Diagnostic et entretien des systèmes hydrauliques',
          'Installations et modernisations électromécaniques',
          'Diagnostic et dépannage d\u2019équipements',
        ],
      },
      {
        category: 'Inspection & Conformité',
        items: [
          'Expertise maritime et inspection de navires',
          'Vérification de conformité aux sociétés de classification',
          'Certifications et audits de sécurité',
          'Documentation de conformité réglementaire',
        ],
      },
      {
        category: 'Services Environnementaux',
        items: [
          'Prévention et réponse à la pollution marine',
          'Systèmes de gestion des déchets industriels',
          'Surveillance et reporting environnemental',
          'Conseil en exploitation durable',
        ],
      },
    ],
    whyChoose: 'Pourquoi Choisir EMIES SARLU',
    stats: [
      {
        value: '20+',
        label: "Années d'Expérience",
        description:
          "Un track record opérationnel éprouvé dans les services maritimes et industriels, au Gabon et sur les marchés internationaux.",
      },
      {
        value: '500+',
        label: 'Projets Réalisés',
        description:
          "Solutions d'inspection, de maintenance et de conformité livrées avec succès pour des ports, navires et installations industrielles.",
      },
      {
        value: '100%',
        label: 'Conformité Réglementaire',
        description:
          "Respect total des normes maritimes internationales et des réglementations environnementales sur chaque projet.",
      },
    ],
  },

  environment: {
    heading: 'Engagement Environnemental',
    description:
      "EMIES SARLU intègre la protection de l'environnement dans chaque opération maritime et industrielle. Nous maintenons une tolérance zéro envers la pollution et sommes à la pointe des standards de conservation marine.",
    initiatives: [
      {
        title: 'Exploitation Durable',
        description:
          "Pratiques écoresponsables intégrées à toutes les opérations maritimes et industrielles pour minimiser l'impact environnemental et promouvoir la durabilité.",
      },
      {
        title: 'Protection Marine',
        description:
          "Systèmes avancés de prévention et de contrôle de la pollution marine. Protocoles d'intervention rapide pour protéger les écosystèmes océaniques et la vie marine.",
      },
      {
        title: 'Technologies Propres',
        description:
          "Technologies modernes et propres pour les processus industriels et les opérations des navires. Investissement continu dans l'innovation environnementale.",
      },
      {
        title: 'Efficacité Énergétique',
        description:
          "Solutions écoénergétiques dans tous nos domaines de service. Réduction de l'empreinte carbone et optimisation des coûts opérationnels.",
      },
    ],
    stats: [
      {
        value: '100%',
        label: 'Conformité Réglementaire',
        description:
          "Toutes les opérations respectent les réglementations maritimes et environnementales internationales. Aucune violation enregistrée.",
      },
      {
        value: '24/7',
        label: 'Surveillance Environnementale',
        description:
          "Systèmes de surveillance continue et protocoles d'intervention rapide pour les incidents environnementaux et marins.",
      },
      {
        value: 'Zéro',
        label: 'Tolérance pour la Pollution',
        description:
          "Protocoles de prévention stricts et systèmes de réponse immédiate pour prévenir la pollution marine et les dommages environnementaux.",
      },
    ],
  },

  contact: {
    heading: 'Contactez-nous',
    description:
      "Prêt à collaborer avec EMIES SARLU ? Contactez-nous dès aujourd'hui pour discuter de vos besoins en services maritimes, industriels ou environnementaux. Nous répondons rapidement à toutes les demandes.",
    info: [
      { title: 'Localisation', details: ['Gabon', 'Opérations Internationales'] },
      { title: 'Intervention d\u2019Urgence', details: ['Disponible 24h/24 pour les urgences'] },
      { title: 'Email', details: ['info@emies-sarlu.com'] },
      { title: 'Disponibilité', details: ['Assistance en continu'] },
    ],
    formHeading: 'Envoyez-nous un message',
    fields: {
      fullName: 'Nom complet',
      fullNamePlaceholder: 'Votre nom',
      email: 'Adresse email',
      emailPlaceholder: 'votre@email.com',
      company: 'Entreprise',
      companyPlaceholder: 'Votre entreprise',
      service: 'Service souhaité',
      selectService: 'Sélectionnez un service...',
      message: 'Message',
      messagePlaceholder: 'Parlez-nous de vos besoins...',
      submit: 'Envoyer le message',
    },
    serviceOptions: [
      'Services Maritimes & Portuaires',
      'Inspection Technique & Expertise Maritime',
      'Maintenance & Réparation Industrielle',
      'Services Navires & Équipements',
      'Protection de l\u2019Environnement',
      'Formation Professionnelle',
      'Fourniture de Pièces & Équipements',
      'Conseil Maritime & Supervision',
    ],
  },

  footer: {
    tagline: 'Maritime & Industriel',
    description:
      "Fournisseur de premier plan de services maritimes, industriels et environnementaux au Gabon et à l'international.",
    servicesHeading: 'Services',
    serviceLinks: [
      'Services Maritimes',
      'Inspection Technique',
      'Maintenance Industrielle',
      'Protection de l\u2019Environnement',
    ],
    companyHeading: 'Entreprise',
    companyLinks: ['À propos', 'Notre Expertise', 'Contact'],
    contactHeading: 'Contact',
    location: 'Gabon et opérations internationales',
    emergency: 'Disponible 24h/24 et 7j/7',
    copyright: 'Tous droits réservés.',
    privacy: 'Politique de confidentialité',
    terms: "Conditions d'utilisation",
    compliance: 'Conformité',
  },

  home: {
    aboutPreview: {
      heading: 'Qui sommes-nous',
      text:
        "EMIES SARLU est un fournisseur de solutions maritimes, industrielles et environnementales opérant au Gabon et à l'international, reconnu pour son excellence technique et sa fiabilité opérationnelle.",
      cta: 'Découvrir notre entreprise',
    },
    servicesPreview: {
      heading: 'Nos Services',
      subtitle:
        "Un aperçu de nos solutions maritimes, industrielles et environnementales.",
      cta: 'Voir tous nos services',
    },
    expertisePreview: {
      heading: 'Notre Expertise',
      text:
        "Des décennies d'expérience opérationnelle et une expertise spécialisée en inspection, conformité, maintenance et réponse environnementale.",
      cta: 'Explorer notre expertise',
    },
    environmentPreview: {
      heading: 'Engagement Environnemental',
      text:
        "La protection de l'environnement est intégrée à chacune de nos opérations, avec une tolérance zéro envers la pollution.",
      cta: 'Notre démarche environnementale',
    },
    finalCta: {
      heading: 'Prêt à travailler avec nous ?',
      text:
        "Contactez notre équipe dès aujourd'hui pour discuter de vos besoins en services maritimes, industriels ou environnementaux.",
      cta: 'Nous contacter',
    },
  },

  notFound: {
    title: '404',
    subtitle: 'Page introuvable',
    description:
      "Désolé, la page que vous recherchez n'existe pas.\nElle a peut-être été déplacée ou supprimée.",
    goHome: "Retour à l'accueil",
  },
};

export type Translations = typeof fr;
export default fr;
