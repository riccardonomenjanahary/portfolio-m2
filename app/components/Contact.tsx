import { Mail, MapPin, Phone, Send } from "lucide-react";
import { DATA } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black border-t border-white/10 relative overflow-hidden">
      
      {/* Effet de fond subtil */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Contactez-Moi</h2>
          <p className="text-gray-400">Prêt à discuter de votre prochain projet d'architecture web.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          
          {/* COLONNE GAUCHE : Formulaire */}
          <div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Nom Complet</label>
                <input 
                  type="text" 
                  className="w-full bg-zinc-800/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors placeholder-gray-600"
                  placeholder="Votre nom"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email Professionnel</label>
                <input 
                  type="email" 
                  className="w-full bg-zinc-800/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors placeholder-gray-600"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-zinc-800/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors placeholder-gray-600 resize-none"
                  placeholder="Décrivez votre projet..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-red-900/20 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Envoyer le Message
              </button>
            </form>
          </div>

          {/* COLONNE DROITE : Infos & Carte */}
          <div className="flex flex-col justify-between space-y-8">
            
            {/* Infos Contact */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-6">Mes Coordonnées</h3>
              
              <div className="flex items-start gap-4 text-gray-300 group">
                <div className="p-3 bg-zinc-900 rounded-lg text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <a href={`mailto:${DATA.profile.email}`} className="font-medium hover:text-red-400 transition-colors">
                    {DATA.profile.email}
                  </a>
                </div>
              </div>

              {/* Si DATA.profile.phone existe dans data.ts, sinon mettre en dur */}
              <div className="flex items-start gap-4 text-gray-300 group">
                <div className="p-3 bg-zinc-900 rounded-lg text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Téléphone</p>
                  <p className="font-medium">+261 38 13 033 65 / +261 37 69 981 26</p>
                </div>
              </div>

              <div className="flex items-start gap-4 text-gray-300 group">
                <div className="p-3 bg-zinc-900 rounded-lg text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Localisation</p>
                  <p className="font-medium">Antarandolo, Fianarantsoa, Madagascar</p>
                </div>
              </div>
            </div>

            {/* Carte Google Maps (Embed) */}
            <div className="bg-zinc-800 rounded-2xl overflow-hidden border border-white/10 h-64 relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30235.66696773822!2d49.383333!3d-18.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f5010901511259%3A0x6280456108151325!2sToamasina!5e0!3m2!1sfr!2smg!4v1700000000000!5m2!1sfr!2smg" 
                className="w-full h-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                loading="lazy"
              ></iframe>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/20 pointer-events-none rounded-2xl transition-colors"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
