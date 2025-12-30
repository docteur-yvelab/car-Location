import { useState, useEffect } from 'react';

export default function NavBar({ setActivePage, activePage }) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Bloque le défilement de TOUTE la page quand le menu est ouvert
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.height = '100vh';
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.height = 'auto';
        }
    }, [isOpen]);

    // Fonction pour gérer le changement de page et fermer le menu mobile
    const handleNavigation = (pageName) => {
        setActivePage(pageName);
        setIsOpen(false);
    };

    return (
        <nav className="bg-white sticky top-0 z-[100] border-b border-gray-100 w-full">
            <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center relative z-[220]">
                
                {/* Logo */}
                <div 
                    className="flex items-center gap-2 cursor-pointer" 
                    onClick={() => handleNavigation('Catalogue')}
                >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-white text-blue-600 rotate-12' : 'bg-blue-600 text-white shadow-lg'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
                    </div>
                    <span className={`text-xl font-black tracking-tighter italic transition-colors duration-500 ${isOpen ? 'text-white' : 'text-gray-900'}`}>
                        CAR<span className={isOpen ? 'text-blue-300' : 'text-blue-600'}>RENTAL</span>
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 font-bold text-sm">
                    {['Catalogue', 'Services', 'Contact'].map((item) => (
                        <button
                            key={item}
                            onClick={() => handleNavigation(item)}
                            className={`transition-colors duration-300 ${
                                activePage === item ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                            }`}
                        >
                            {item}
                        </button>
                    ))}
                    
                    <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all active:scale-95">
                        Réserver maintenant
                    </button>
                </div>

                {/* Burger Button */}
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className={`md:hidden relative z-[230] p-3 rounded-xl transition-all duration-300 ${isOpen ? 'bg-white/20 text-white ring-2 ring-white/50' : 'bg-gray-100 text-gray-900'}`}
                >
                    <div className="w-6 h-5 flex flex-col justify-between items-end">
                        <span className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
                        <span className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-4'}`}></span>
                        <span className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`}></span>
                    </div>
                </button>
            </div>

            {/* MENU MOBILE */}
            <div className={`fixed inset-0 z-[210] md:hidden transition-all duration-500 ease-in-out ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'}`}>
                
                {/* Arrière-plan Opaque */}
                <div className="absolute inset-0 bg-slate-950"></div>
                
                <div className="relative flex flex-col items-center justify-center h-full gap-12 p-8">
                    <nav className="flex flex-col items-center gap-8">
                        {['Catalogue', 'Services', 'Contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => handleNavigation(item)}
                                className={`text-4xl font-black transition-all active:scale-95 ${
                                    activePage === item ? 'text-blue-500 scale-110' : 'text-white hover:text-blue-400'
                                }`}
                            >
                                {item}
                            </button>
                        ))}
                    </nav>
                    
                    <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
                    
                    <button 
                        onClick={() => handleNavigation('Catalogue')}
                        className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all active:scale-95"
                    >
                        Réserver maintenant
                    </button>
                </div>
            </div>
        </nav>
    );
}