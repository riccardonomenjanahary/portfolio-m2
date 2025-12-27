import Header from "./components/Header";
import Projects from "./components/Projects";
import Approach from "./components/Approach";
import Contact from "./components/Contact";
import { DATA } from "./data";
import { Download, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-red-500/30">
      <Header />
      
      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
            
            {/* Colonne Texte */}
            <div className="flex-1 text-center md:text-left z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-red-500/30 rounded-full bg-red-500/10 text-red-400 text-sm font-medium animate-fade-in">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                Disponible pour opportunités
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                Ingénierie Web <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-yellow-500">
                  Full Stack & Robuste
                </span>
              </h1>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
                {DATA.profile.bio}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href="#projects"
                  className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-900/20"
                >
                  Voir mes travaux
                  <ArrowRight size={18} />
                </a>
                <a 
                  href="#" 
                  className="px-8 py-3 bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl font-medium transition flex items-center justify-center gap-2 border border-white/10 hover:border-white/20"
                >
                  <Download size={18} />
                  Télécharger CV
                </a>
              </div>
            </div>

            {/* Colonne Photo avec Nom */}
            <div className="flex flex-col items-center gap-6 relative z-10">
              <div className="relative w-48 h-48 md:w-80 md:h-80 shrink-0 group">
                {/* Cercle décoratif en arrière plan (Halo) */}
                <div className="absolute inset-0 bg-gradient-to-tr from-red-600 to-orange-500 rounded-full blur-[40px] opacity-40 group-hover:opacity-60 transition-opacity duration-700 animate-pulse"></div>
                
                {/* Conteneur Image */}
                <div className="relative w-full h-full rounded-full p-1.5 bg-gradient-to-tr from-red-500 via-orange-500 to-transparent">
                   <div className="w-full h-full rounded-full overflow-hidden border-4 border-black bg-zinc-800 shadow-2xl">
                      <img 
                        src="/profile.jpg" 
                        alt="Photo de profil" 
                        className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                      />
                   </div>
                </div>
              </div>

              {/* Badge Nom sous la photo */}
              <div className="bg-zinc-900/80 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full shadow-xl transform translate-y-0 md:-translate-y-4 hover:border-red-500/50 transition-colors cursor-default">
                 <p className="text-white font-bold tracking-widest text-sm uppercase">
                   {DATA.profile.name || "VOTRE NOM"}
                 </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* APPROACH SECTION */}
      <Approach />

      {/* SKILLS SCROLL */}
      <section id="skills" className="py-12 border-y border-white/10 bg-black">
        <div className="container mx-auto px-6">
           <p className="text-center text-gray-500 text-sm font-semibold uppercase tracking-widest mb-8">
             Technologies Maîtrisées
           </p>
           <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-90">
              {DATA.skills.map((skill, i) => (
                <div key={i} className="flex flex-col items-center gap-3 group">
                  <div className="p-4 bg-zinc-900 rounded-xl border border-white/10 group-hover:border-red-500/50 group-hover:bg-zinc-800 transition-all">
                    <skill.icon size={28} className="text-gray-300 group-hover:text-red-400 transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* PROJETS */}
      <Projects />

      {/* CONTACT (Remplace l'ancien footer) */}
      <Contact />

      {/* Copyright discret */}
      <div className="py-6 bg-black border-t border-white/5 text-center text-zinc-600 text-sm">
         © {new Date().getFullYear()} {DATA.profile.name}. Tous droits réservés.
      </div>

    </main>
  );
}
