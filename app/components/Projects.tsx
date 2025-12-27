import { DATA } from "../data"; // Notez l'import relatif simple

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-white border-l-4 border-red-600 pl-4">
          Projets Réalisés
        </h2>
        
        <div className="grid grid-cols-1 gap-10">
          {DATA.projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative border border-white/10 rounded-2xl p-8 bg-zinc-900/50 hover:bg-zinc-900 transition-all hover:border-red-500/50 shadow-lg"
            >
              <div className="flex flex-col md:flex-row gap-8">
                
                {/* Colonne Texte */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-red-500/10 rounded-lg text-red-500">
                      <project.icon size={24} />
                    </div>
                    <span className="text-xs font-semibold text-red-400 uppercase tracking-wider border border-red-500/20 px-2 py-1 rounded-full">
                      {project.status}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-mono mb-4">{project.tagline}</p>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-6 bg-black p-4 rounded-xl border border-white/5">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Fonctionnalités Techniques :</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feat, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-black text-gray-300 text-xs font-medium rounded-md border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Colonne Visuelle */}
                <div className="w-full md:w-1/3 bg-black rounded-xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center h-64 md:h-auto text-center p-6 group-hover:border-red-500/20 transition">
                   <p className="text-gray-600 text-sm mb-2 font-medium">Aperçu indisponible</p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
