

// import { useState, useEffect } from 'react';

// import NavBar from './component/NavBar';
// import Footer from './component/Footer';
// import CarCard from './component/CarCard';
// import BookingModal from './component/BookingModal';
// import SkeletonCard from './component/Skeleton'; // Importation du Skeleton
// import { supabase } from './supabaseClient';

// // --- COMPOSANTS INTERNES ---
// const ServicesSection = () => {
//   const services = [
//     { title: "Location Courte Durée", desc: "Idéal pour vos weekends ou rendez-vous d'affaires.", icon: "🚗" },
//     { title: "Luxe & Prestige", desc: "Des véhicules d'exception pour vos mariages et événements.", icon: "✨" },
//     { title: "Assistance 24h/7j", desc: "Une équipe réactive pour vous dépanner à tout moment.", icon: "🛠️" },
//     { title: "Livraison Rapide", desc: "Nous livrons votre véhicule à l'aéroport ou à domicile.", icon: "📍" }
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-16 animate-fadeIn">
//       <h2 className="text-4xl font-black text-gray-900 mb-4">Nos <span className="text-blue-600">Services.</span></h2>
//       <p className="text-gray-500 mb-12 text-lg">Une expérience de location pensée pour votre confort.</p>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {services.map((s, i) => (
//           <div key={i} className="group bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
//             <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
//             <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
//             <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const ContactSection = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-6 py-16 animate-fadeIn">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//         <div>
//           <h2 className="text-4xl font-black text-gray-900 mb-6">Parlons de votre <span className="text-blue-600">Projet.</span></h2>
//           <p className="text-gray-500 mb-10 leading-relaxed text-lg">Besoin d'un devis spécifique ou d'une info ? Notre équipe vous répond rapidement.</p>
//           <div className="space-y-6">
//              <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">@</div>
//                 <div><p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Email</p><p className="font-bold text-gray-900 text-lg">contact@stive-rental.com</p></div>
//              </div>
//              <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">W</div>
//                 <div><p className="text-xs text-gray-400 font-bold uppercase tracking-widest">WhatsApp</p><p className="font-bold text-gray-900 text-lg">+237 694 63 73 42</p></div>
//              </div>
//           </div>
//         </div>
//         <form className="bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 space-y-4 border border-gray-50">
//           <input type="text" placeholder="Nom complet" className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
//           <input type="email" placeholder="Email" className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
//           <textarea placeholder="Comment pouvons-nous vous aider ?" rows="4" className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"></textarea>
//           <button type="button" className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all active:scale-95">Envoyer le message</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// // --- MAIN APP ---
// function App() {
//   const [cars, setCars] = useState([]); 
//   const [selectedCar, setSelectedCar] = useState(null);
//   const [filter, setFilter] = useState('Tous');
//   const [loading, setLoading] = useState(true);
//   const [activePage, setActivePage] = useState('Catalogue');

//   useEffect(() => {
//     fetchCars();
//   }, []);

//   async function fetchCars() {
//     try {
//       setLoading(true);
//       const { data, error } = await supabase.from('cars').select('*');
//       if (error) throw error;
//       setCars(data || []);
//     } catch (e) {
//       console.error(e);
//     } finally {
//       // Simulation d'un petit délai pour voir le Skeleton (optionnel)
//       setTimeout(() => setLoading(false), 800);
//     }
//   }

//   const filteredCars = filter === 'Tous' ? cars : cars.filter(c => c.type === filter);

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col overflow-x-hidden">
//       <NavBar setActivePage={setActivePage} activePage={activePage} />

//       <main className="flex-grow w-full">
//         {activePage === 'Catalogue' && (
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 animate-fadeIn">
//             <div className="mb-12">
//               <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight">
//                 Louez votre <span className="text-blue-600 italic">liberté.</span>
//               </h1>
//               <p className="text-gray-500 mt-4 text-lg font-medium">Découvrez notre collection de véhicules premium.</p>
//             </div>

//             {/* Barre de Filtres */}
//             <div className="flex gap-3 mb-12 overflow-x-auto pb-4 no-scrollbar">
//               {['Tous', 'Sport', 'Luxe', 'Électrique'].map(cat => (
//                 <button
//                   key={cat}
//                   onClick={() => setFilter(cat)}
//                   className={`px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-300 whitespace-nowrap ${
//                     filter === cat 
//                     ? 'bg-blue-600 text-white shadow-xl shadow-blue-200 scale-105' 
//                     : 'bg-white text-gray-400 border border-gray-100 hover:text-blue-600 hover:border-blue-200'
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               ))}
//             </div>

//             {/* Grille de contenu : Skeleton ou CarCards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {loading ? (
//                 // Affiche 6 squelettes pendant le chargement
//                 [...Array(6)].map((_, i) => <SkeletonCard key={i} />)
//               ) : (
//                 filteredCars.map(car => (
//                   <CarCard key={car.id} car={car} onReserve={() => setSelectedCar(car)} />
//                 ))
//               )}
//             </div>

//             {/* Message si aucun véhicule trouvé */}
//             {!loading && filteredCars.length === 0 && (
//               <div className="text-center py-20 text-gray-400 font-medium">
//                 Aucun véhicule disponible dans cette catégorie.
//               </div>
//             )}
//           </div>
//         )}

//         {activePage === 'Services' && <ServicesSection />}
//         {activePage === 'Contact' && <ContactSection />}
//       </main>

//       <Footer />

//       {selectedCar && (
//         <BookingModal car={selectedCar} onClose={() => setSelectedCar(null)} />
//       )}
//     </div>
//   );
// }

// export default App;


import { useState, useEffect } from 'react';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import CarCard from './component/CarCard';
import BookingModal from './component/BookingModal';
import SkeletonCard from './component/Skeleton';
import ContactSection from './component/ContactSection';
import ServicesSection from './component/ServicesSection';
import { supabase } from './supabaseClient';

function App() {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [filter, setFilter] = useState('Tous');
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState('Catalogue');

  // Fetch des données au montage
  useEffect(() => {
    fetchCars();
  }, []);

  async function fetchCars() {
    try {
      setLoading(true);
      const { data, error } = await supabase.from('cars').select('*');
      if (error) throw error;
      setCars(data || []);
    } catch (e) {
      console.error("Erreur Supabase:", e);
    } finally {
      // Petit délai pour savourer l'animation Skeleton
      setTimeout(() => setLoading(false), 600);
    }
  }

  const filteredCars = filter === 'Tous' ? cars : cars.filter(c => c.type === filter);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col overflow-x-hidden">
      <NavBar setActivePage={setActivePage} activePage={activePage} />

      <main className="flex-grow w-full">
        {/* SECTION CATALOGUE */}
        {activePage === 'Catalogue' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 animate-fadeIn">
            <div className="mb-12">
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight">
                Louez votre <span className="text-blue-600 italic">liberté.</span>
              </h1>
              <p className="text-gray-500 mt-4 text-lg font-medium">Découvrez notre collection de véhicules premium.</p>
            </div>

            {/* Filtres */}
            <div className="flex gap-3 mb-12 overflow-x-auto pb-4 no-scrollbar">
              {['Tous', 'Sport', 'Luxe', 'Électrique'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-300 whitespace-nowrap ${
                    filter === cat 
                    ? 'bg-blue-600 text-white shadow-xl shadow-blue-200 scale-105' 
                    : 'bg-white text-gray-400 border border-gray-100 hover:text-blue-600 hover:border-blue-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grille de Véhicules ou Skeletons */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {loading ? (
                [...Array(6)].map((_, i) => <SkeletonCard key={i} />)
              ) : (
                filteredCars.map(car => (
                  <CarCard key={car.id} car={car} onReserve={() => setSelectedCar(car)} />
                ))
              )}
            </div>
            
            {!loading && filteredCars.length === 0 && (
              <p className="text-center py-20 text-gray-400">Aucun véhicule disponible dans cette catégorie.</p>
            )}
          </div>
        )}

        {/* AUTRES SECTIONS */}
        {activePage === 'Services' && <ServicesSection />}
        {activePage === 'Contact' && <ContactSection />}
      </main>

      <Footer />

      {/* Réservation avec EmailJS */}
      {selectedCar && (
        <BookingModal car={selectedCar} onClose={() => setSelectedCar(null)} />
      )}
    </div>
  );
}

export default App;