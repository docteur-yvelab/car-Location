import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const handleContact = async (e) => {
        e.preventDefault();
        setLoading(true);

        const SERVICE_ID = "service_qmhx83q";
        const TEMPLATE_ID_CONTACT = "template_6yi7tm5"; // Remplace par ton ID

        const params = {
            from_name: e.target.from_name.value,
            reply_to: e.target.reply_to.value,
            message: e.target.message.value
        };

        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID_CONTACT, params, "yItHRiAj14jEuiduQ");
            setSent(true);
            e.target.reset();
        } catch (err) {
            alert("Erreur d'envoi");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="max-w-7xl mx-auto px-6 py-16 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Infos à gauche */}
                <div>
                    <h2 className="text-4xl font-black text-gray-900 mb-6">
                        Parlons de votre <span className="text-blue-600">Projet.</span>
                    </h2>
                    <p className="text-gray-500 mb-10 text-lg leading-relaxed">
                        Besoin d'un devis spécifique ou d'une info ? Notre équipe vous répond rapidement.
                    </p>
                    
                    {/* Rappel des infos de contact pour rassurer le client */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">@</div>
                            <div>
                                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Email</p>
                                <p className="font-bold text-gray-900 text-lg">stivezidane093@gmail.com.com</p>
                            </div>
                        </div>
                        <a 
                            href="https://wa.me/237694637342?text=Bonjour%20Stive%2C%20je%20souhaiterais%20obtenir%20des%20informations%20concernant%20la%20location%20d%27un%20v%C3%A9hicule." 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex items-center gap-4 group cursor-pointer"
                        >
                            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                                W
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">WhatsApp</p>
                                <p className="font-bold text-gray-900 text-lg group-hover:text-green-600 transition-colors">
                                    +237 694 63 73 42
                                </p>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Bloc Formulaire ou Message de Succès */}
                <div className="relative min-h-[450px]">
                    {sent ? (
                        /* MESSAGE DE SUCCÈS - STYLE RÉSERVATION */
                        <div className="h-full bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-300 border border-gray-50">
                            <div className="text-6xl mb-6 drop-shadow-sm">✨</div>
                            <h2 className="text-3xl font-black text-gray-900 mb-3">Message Reçu !</h2>
                            <p className="text-gray-500 leading-relaxed mb-8 max-w-[300px]">
                                Merci pour votre message. <strong>Stive</strong> vous répondra par e-mail dans les plus brefs délais.
                            </p>
                            <button 
                                onClick={() => setSent(false)}
                                className="w-full max-w-[200px] bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
                            >
                                Nouveau message
                            </button>
                        </div>
                    ) : (
                        /* LE FORMULAIRE */
                        <form onSubmit={handleContact} className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 space-y-6 border border-gray-50">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase ml-1">Nom complet</label>
                                <input name="from_name" type="text" required placeholder="Jean Dupont" className="w-full p-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-blue-500 focus:bg-white outline-none transition-all font-medium text-gray-900" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase ml-1">Contact</label>
                                <input name="reply_to" type="email" required placeholder="votre@email.com" className="w-full p-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-blue-500 focus:bg-white outline-none transition-all font-medium text-gray-900" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase ml-1">Message</label>
                                <textarea name="message" required placeholder="Comment pouvons-nous vous aider ?" rows="4" className="w-full p-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-blue-500 focus:bg-white outline-none transition-all font-medium text-gray-900"></textarea>
                            </div>

                            <button 
                                disabled={loading}
                                className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all active:scale-95 disabled:opacity-50 flex justify-center items-center gap-3"
                            >
                                {loading ? (
                                    <>
                                        <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        Envoi en cours...
                                    </>
                                ) : "Envoyer le message"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}