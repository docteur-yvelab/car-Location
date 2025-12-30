export default function Footer() {
    const socialLinks = {
        whatsapp: "https://wa.me/237694637342?text=Bonjour%20Stive%2C%20je%20souhaiterais%20obtenir%20des%20informations%20concernant%20la%20location%20d%27un%20v%C3%A9hicule.",
        // whatsapp: "https://wa.me/237694637342",
        github: "https://github.com/docteur-yvelab",
        linkedin: "https://www.linkedin.com/in/stive-thiakou-803577384",
        facebook: "https://www.facebook.com/stive.thiakou.2025",
        phone: "tel:+237694637342"
    };

    return (
        <footer className=" bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                
                {/* Brand Section */}
                <div>
                    <h3 className="text-2xl font-black mb-4 tracking-tighter">
                    CAR<span className="text-blue-500">RENTAL</span>
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                    L'excellence à portée de main. Des véhicules sélectionnés pour votre confort et votre sécurité. 
                    Engineering de précision par STIVE.
                    </p>
                </div>

                {/* Contact Direct */}
                <div>
                    <h4 className="font-bold mb-6">Contact direct</h4>
                    <div className="space-y-4 text-sm text-gray-400 font-medium">
                    <a href={socialLinks.phone} className="flex items-center gap-3 hover:text-white transition group">
                        <span className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500 font-bold group-hover:bg-blue-500 group-hover:text-white transition-all">☏</span>
                        +237 694 63 73 42
                    </a>
                    <a href={socialLinks.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition group">
                        <span className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center text-green-500 font-bold group-hover:bg-green-500 group-hover:text-white transition-all">W</span>
                        WhatsApp Direct
                    </a>
                    </div>
                </div>

                {/* Réseaux Sociaux Professionnels */}
                <div className="lg:col-span-2">
                    <h4 className="font-bold mb-6">Suivez-nous</h4>
                    <div className="flex flex-wrap gap-4">
                    
                    {/* LinkedIn - Bleu Officiel */}
                    <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" 
                        className="w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:bg-[#0077b5] hover:text-white hover:-translate-y-1.5 transition-all duration-300 shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </a>

                    {/* GitHub - Blanc/Noir */}
                    <a href={socialLinks.github} target="_blank" rel="noreferrer" 
                        className="w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:-translate-y-1.5 transition-all duration-300 shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    </a>

                    {/* Facebook - Bleu Facebook */}
                    <a href={socialLinks.facebook} target="_blank" rel="noreferrer" 
                        className="w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:bg-[#1877F2] hover:text-white hover:-translate-y-1.5 transition-all duration-300 shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>

                    </div>
                </div>
                </div>

                {/* Copyright Section */}
                <div className="pt-8 border-t border-gray-800 text-center">
                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-[0.2em]">
                    &copy; 2025 Designed & Built with ❤️ by <span className="text-blue-500">STIVE</span>
                </p>
                </div>
            </div>
        </footer>
    );
}