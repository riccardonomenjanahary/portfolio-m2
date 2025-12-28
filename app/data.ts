import { 
  Code, 
  Database, 
  Layout, 
  Server, 
  Terminal, 
  Truck, 
  Smartphone,
  CreditCard,
  Car,
  Building,
  Landmark
} from "lucide-react";

export const DATA = {
  profile: {
    name: "RAKOTONDRAVELO Riana Riccardo Nomenjanahary",
    role: "Développeur web et mobile Full Stack",
    bio: "Actuellement en 5ème année de Master Professionnel à l'ENI, spécialisé en Génie Logiciel et Base de Données. Je combine une rigueur académique solide avec une expertise pratique sur l'écosystème Laravel/Next.js.",
    location: "Fianarantsoa, Madagascar",
    email: "rianarak08@gmail.com",
    phone: "+261 38 13 033 65/+261 37 69 981 26",
  },
  
  skills: [ /* Cette section est gérée par Skills.tsx maintenant */ ],

  education: [
    {
      degree: "5ème année - Master Professionnel",
      school: "École Nationale d'Informatique (ENI), Université de Fianarantsoa", 
      year: "2024 - 2025",
      description: "Parcours : Génie Logiciel et Base de Données. Finalisation du mémoire de fin d'études.",
    },
    {
      degree: "4ème année - Master Professionnel",
      school: "École Nationale d'Informatique (ENI), Université de Fianarantsoa",
      year: "2023 - 2024",
      description: "Parcours : Génie Logiciel et Base de Données. Approfondissement en architecture logicielle.",
    },
    {
      degree: "Licence Professionnelle en Informatique",
      school: "École Nationale d'Informatique (ENI), Université de Fianarantsoa",
      year: "2019 - 2020",
      description: "Obtention du Diplôme. Parcours : Génie Logiciel et Base de Données.",
    },
    {
      degree: "Baccalauréat Série D avec mention:assez bien",
      school: "Collège Saint Joseph Ambozontany Fianarantsoa",
      year: "2015 - 2016",
      description: "Obtention du diplôme de fin d'études secondaires.",
    },
  ],

  projects: [
    {
      title: "UN-IT Mobility",
      tagline: "Système de Gestion de Transport & Réservation",
      description:
        "Plateforme complète de réservation de transport. Architecture découplée avec API Laravel robuste et frontend Next.js. Gestion complexe des rôles (Admin, Chauffeur, Client) et des itinéraires.",
      tags: ["Laravel 12", "Next.js 16", "Docker", "MySQL", "Stripe"],
      features: [
        "Sélection de sièges dynamique (Layout Sprinter 22 places)",
        "Génération de billets PDF automatisée",
        "Dashboard Admin statistique temps réel",
        "Paiement sécurisé Stripe intégré"
      ],
      link: "#", 
      status: "Projet de Thèse (Master 2)",
      icon: Truck,
    },
    {
      title: "Suivi des Ventes et des Clients - Lazany Betsileo",
      tagline: "Application Web de Gestion Commerciale",
      description:
        "Conception et réalisation d'une application pour le suivi des ventes et la gestion client. Stage de 3ème année (Licence).",
      tags: ["JSP", "Java EE", "Visual Studio Code", "SQL"],
      features: [
        "Gestion des clients et des commandes",
        "Suivi des ventes journalières",
        "Rapports d'activité"
      ],
      link: "#", 
      status: "Stage Licence (2019-2020)",
      icon: Building,
    },
    {
      title: "Location de Voiture",
      tagline: "Application Web Java",
      description:
        "Système de gestion de location de véhicules développé en Java avec l'IDE Netbeans.",
      tags: ["Java", "Netbeans", "MySQL"],
      features: [
        "Gestion du parc automobile",
        "Réservation de véhicules",
        "Facturation"
      ],
      link: "#", 
      status: "Projet de réalisation en 3ème Année (Juin 2019)",
      icon: Car,
    },
    {
      title: "Gestion d'Approvisionnement",
      tagline: "Application Node.js",
      description:
        "Outil de gestion des stocks et approvisionnements de matériels.",
      tags: ["Node.js", "VS Code", "JavaScript"],
      features: [
        "Suivi des entrées de stock",
        "Alertes de seuil bas",
      ],
      link: "#", 
      status: "Projet de réalisation 3ème Année (Avril 2019)",
      icon: Database,
    },
    {
      title: "Gestion Entrées-Sorties - Paositra Malagasy",
      tagline: "Informatisation des Opérations",
      description:
        "Stage de 2ème année effectué à la Paositra Malagasy Mahajanga. Informatisation des flux d'entrées et sorties.",
      tags: ["PHP", "MySQL", "WAMP"],
      features: [
        "Gestion des flux postaux",
        "Base de données relationnelle MySQL",
        "Interface web PHP native"
      ],
      link: "#", 
      status: "Stage 2ème Année (2018-2019)",
      icon: Landmark,
    },
    {
      title: "Gestion Bancaire - BFV",
      tagline: "Application Desktop C++",
      description:
        "Premier projet d'envergure en 1ère année. Simulation de gestion bancaire.",
      tags: ["C++", "Qt Creator", "Algorithmique"],
      features: [
        "Gestion des comptes clients",
        "Opérations de débit/crédit",
      ],
      link: "#", 
      status: "Projet de réalisation 1ère Année (2016-2017)",
      icon: CreditCard,
    },
  ],
};
