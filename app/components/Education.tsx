import { GraduationCap, Calendar } from "lucide-react";
import { DATA } from "../data";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-black relative">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Parcours Académique</h2>
          <p className="text-gray-400">
            Une formation universitaire rigoureuse axée sur l'ingénierie logicielle.
          </p>
        </div>

        <div className="space-y-12 relative">
          {/* Ligne verticale */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-800 transform -translate-x-1/2"></div>

          {DATA.education.map((edu, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Point central */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-black transform -translate-x-1/2 mt-1.5 z-10 shadow-[0_0_15px_rgba(220,38,38,0.5)]"></div>

              {/* Contenu */}
              <div className="ml-16 md:ml-0 md:w-1/2 group">
                <div className={`bg-zinc-900/40 p-6 rounded-2xl border border-white/5 hover:border-red-500/30 transition-all ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  
                  <div className={`flex items-center gap-2 text-red-500 mb-2 text-sm font-mono ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                    <Calendar size={14} />
                    <span>{edu.year}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
                    {edu.degree}
                  </h3>
                  
                  <div className={`flex items-center gap-2 text-gray-400 mb-4 text-sm ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                    <GraduationCap size={16} />
                    <span>{edu.school}</span>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>

              {/* Espace vide pour l'autre côté */}
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
