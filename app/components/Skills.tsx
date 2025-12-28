import { 
  Terminal, 
  Code2, 
  Globe, 
  Database, 
  Layout, 
  Smartphone, 
  GitBranch, 
  Briefcase,
  Languages
} from "lucide-react";

// Vos compétences structurées
const SKILL_CATEGORIES = [
  {
    title: "Langages & Systèmes",
    description: "Fondations solides en programmation et environnements.",
    skills: [
      { name: "Java / C", icon: Code2 },
      { name: "Python", icon: Terminal },
      { name: "UNIX / Windows", icon: Terminal },
      { name: "Flutter / Android", icon: Smartphone },
    ]
  },
  {
    title: "Technologies Web",
    description: "Développement Full Stack moderne et legacy.",
    skills: [
      { name: "PHP / Laravel", icon: Globe },
      { name: "JavaScript / Angular", icon: Code2 },
      { name: "HTML5 / CSS3 / Bootstrap", icon: Layout },
      { name: "Ajax / jQuery", icon: Globe },
    ]
  },
  {
    title: "Données & Conception",
    description: "Modélisation rigoureuse et gestion de données.",
    skills: [
      { name: "MySQL / PostgreSQL / SQL", icon: Database },
      { name: "UML (Modélisation)", icon: GitBranch },
      { name: "MERISE / 2TUP", icon: Layout },
    ]
  },
  {
    title: "Gestion & Outils",
    description: "Méthodologies professionnelles et bureautique.",
    skills: [
      { name: "Méthode Agile", icon: Briefcase },
      { name: "Git / GitHub", icon: GitBranch },
      { name: "Suite Office (Word/Excel)", icon: Layout },
    ]
  },
  {
    title: "Langues",
    description: "Communication professionnelle internationale.",
    skills: [
      { name: "Français (Très Bien)", icon: Languages },
      { name: "Anglais (Bien)", icon: Globe },
      { name: "Malagasy (Natif)", icon: Languages }, // Ajout implicite
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Compétences Techniques</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Une expertise technique polyvalente, allant de la conception système (UML/MERISE) au développement mobile et web.
          </p>
        </div>

        {/* Grille responsive : 1 colonne mobile, 2 tablettes, 3 desktop (pour centrer la dernière ligne) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {SKILL_CATEGORIES.map((category, index) => (
            <div key={index} className="bg-zinc-900/30 border border-white/5 rounded-2xl p-6 hover:bg-zinc-900/50 transition-colors group hover:border-red-500/30">
              <h3 className="text-lg font-bold text-white mb-2 border-l-4 border-red-600 pl-3 group-hover:text-red-500 transition-colors">
                {category.title}
              </h3>
              <p className="text-xs text-gray-500 mb-6 h-8 leading-tight">
                {category.description}
              </p>

              <div className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-3 group/skill">
                    <div className="p-1.5 bg-zinc-800 rounded-md text-gray-400 group-hover/skill:text-red-500 group-hover/skill:bg-black transition-all">
                      <skill.icon size={16} />
                    </div>
                    <span className="text-gray-300 font-medium text-sm group-hover/skill:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
