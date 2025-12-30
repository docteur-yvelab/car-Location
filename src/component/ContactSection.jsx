import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {

    const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {

      await emailjs.sendForm(
        'service_qmhx83q', 
        'template_zxa4mx7', 
        e.target, 
        'yItHRiAj14jEuiduQ'
      );
      alert("Message envoyé avec succès ! Stive vous répondra bientôt.");
      e.target.reset();
    } catch (error) {
      console.error("Erreur:", error);
      alert("Une erreur est survenue.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 animate-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-black text-gray-900 mb-6">Parlons de votre <span className="text-blue-600">Projet.</span></h2>
          <p className="text-gray-500 mb-10 leading-relaxed text-lg">
            Besoin d'un devis spécifique ou d'une location longue durée ? Notre équipe vous répond en moins de 2h.
          </p>
          
          <div className="space-y-6">
              <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">@</div>
                  <div><p className="text-xs text-gray-400 font-bold uppercase">Email</p><p className="font-bold text-gray-900 text-lg">docteuryve9@gmail.com</p></div>
              </div>
              <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">W</div>
                  <div><p className="text-xs text-gray-400 font-bold uppercase">WhatsApp</p><p className="font-bold text-gray-900 text-lg">+237 694 63 73 42</p></div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl space-y-6">
          <input type="text" name="from_name" placeholder="Nom complet" required className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
          <input type="email" name="reply_to" placeholder="Email" required className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all" />
          <textarea name="message" placeholder="Votre message" rows="4" required className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"></textarea>
          
          <button 
            disabled={isSending}
            className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-blue-700 shadow-xl transition-all active:scale-95 disabled:opacity-50"
          >
            {isSending ? "Envoi en cours..." : "Envoyer le message"}
          </button>
        </form>

      </div>
    </section>
  );
}
