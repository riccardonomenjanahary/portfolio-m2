import { Code, Database, Layout, Server, Terminal, Truck, Smartphone } from "lucide-react";

export const DATA = {
  profile: {
    name: "RAKOTONDRAVELO Riana Riccardo Nomenjanahary", // Changez ceci
    role: "Développeur web et mobile Full Stack",
    bio: "Spécialisé dans la conception d'architectures web complexes. Je combine la rigueur académique (Master 2) avec une expertise pratique sur l'écosystème Laravel/Next.js.",
    location: "Fianarantsoa, Madagascar",
    email: "rianarak08@gmail.com", // Changez ceci
  },
  skills: [
    { name: "Next.js 16 / React", icon: Layout },
    { name: "Laravel 12 API", icon: Server },
    { name: "Docker / CI/CD", icon: Terminal },
    { name: "MySQL / Architecture", icon: Database },
    { name: "Stripe Payment", icon: Code },
    { name: "Tailwind CSS", icon: Smartphone },
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
      status: "Projet de Thèse",
      icon: Truck,
    },
  ],
};
