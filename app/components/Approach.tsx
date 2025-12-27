import { BrainCircuit, Code2, Rocket, SearchCheck } from "lucide-react";

const STEPS = [
  {
    title: "Analyse & Architecture",
    description: "Conception UML rigoureuse, choix des patterns (MVC, Repository) et modélisation base de données optimisée.",
    icon: BrainCircuit,
  },
  {
    title: "Développement Robuste",
    description: "Code propre et typé (TypeScript/PHP 8.2), respect des standards PSR/ESLint et tests unitaires.",
    icon: Code2,
  },
  {
    title: "DevOps & Déploiement",
    description: "Conteneurisation Docker, pipelines CI/CD et gestion de la scalabilité sur serveurs Linux.",
    icon: Rocket,
  },
];

export default function Approach() {
  return (
    <section className="py-20 bg-black border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Mon Approche Ingénieur</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Au-delà du code, je m'attache à construire des systèmes maintenables et performants, de la conception au déploiement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step, index) => (
            <div key={index} className="relative group p-8 rounded-2xl bg-zinc-900 border border-white/10 hover:border-red-600/50 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl font-bold text-white select-none">
                {index + 1}
              </div>
              
              <div className="w-14 h-14 bg-red-600/10 rounded-xl flex items-center justify-center text-red-500 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <step.icon size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
