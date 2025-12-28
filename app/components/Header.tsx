import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-xl font-bold text-white tracking-tighter">
          DEV<span className="text-red-600">.M2</span>
        </div>
        
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <Link href="#" className="hover:text-white hover:underline decoration-red-600 underline-offset-4 transition-all">
            À propos
          </Link>
          
          <Link href="#education" className="hover:text-white hover:underline decoration-red-600 underline-offset-4 transition-all">
            Formation
          </Link>
          
          <Link href="#skills" className="hover:text-white hover:underline decoration-red-600 underline-offset-4 transition-all">
            Compétences
          </Link>

          <Link href="#projects" className="hover:text-white hover:underline decoration-red-600 underline-offset-4 transition-all">
            Projets
          </Link>
        </nav>
        
        <Link 
          href="#contact"
          className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-full transition font-bold shadow-lg shadow-red-900/20"
        >
          Me Contacter
        </Link>
      </div>
    </header>
  );
}
