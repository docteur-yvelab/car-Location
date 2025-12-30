export default function ServicesSection() {
  const services = [
    { title: "Location Courte Durée", desc: "Pour vos weekends ou déplacements d'affaires.", icon: "🚗" },
    { title: "Luxe & Prestige", desc: "Des véhicules d'exception pour vos grands événements.", icon: "✨" },
    { title: "Assistance 24/7", desc: "Une équipe dédiée pour vous accompagner partout.", icon: "🛠️" },
    { title: "Livraison à Domicile", desc: "Nous vous livrons le véhicule où vous le souhaitez.", icon: "📍" }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 animate-in">
      <h2 className="text-4xl font-black text-gray-900 mb-4">Nos <span className="text-blue-600">Services.</span></h2>
      <p className="text-gray-500 mb-12">Plus qu'une simple location, une expérience premium.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-4xl mb-6">{s.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}