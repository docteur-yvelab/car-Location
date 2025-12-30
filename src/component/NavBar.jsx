import React from 'react'

const NavBar = () => {
    return (
        <nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 p-5 flex justify-between items-center px-10">
            <div className="text-2xl font-black tracking-tighter text-blue-600">DRIVE.</div>
            <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
                <a href="#" className="hover:text-blue-600 transition">Catalogue</a>
                <a href="#" className="hover:text-blue-600 transition">Comment ça marche</a>
                <a href="#" className="hover:text-blue-600 transition">Aide</a>
            </div>
            <button className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition">
                Connexion
            </button>
        </nav>
    )
}

export default NavBar