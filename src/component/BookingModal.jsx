    import { useEffect, useState } from 'react';
    import emailjs from '@emailjs/browser';

    export default function BookingModal({ car, onClose }) {
    const [status, setStatus] = useState('idle');

    useEffect(() => {
        emailjs.init("yItHRiAj14jEuiduQ");
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        
        const SERVICE_ID = "service_h3jrf3n";
        const TEMPLATE_ID = "template_10q08e2";
        const PUBLIC_KEY = "yItHRiAj14jEuiduQ";

        const templateParams = {
        customerName: e.target.fullName.value,
        customerEmail: e.target.email.value,
        carName: car.name,
        date: e.target.date.value,
        name: e.target.fullName.value, 
        email: e.target.email.value,
        to_name: "Ton Prénom", 
        };

        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
            setStatus('success');
        } catch (error) {
            console.error("Erreur d'envoi:", error);
            alert("Une erreur est survenue, veuillez réessayer.");
            setStatus('idle');
        }
    };

    if (status === 'success') {
        return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-in fade-in">
            <div className="bg-white rounded-3xl p-8 text-center max-w-sm shadow-2xl">
            <div className="text-5xl mb-4">✉️</div>
            <h2 className="text-2xl font-bold text-gray-900">Demande Reçue !</h2>
            <p className="text-gray-500 mt-2">Nous avons bien Reçue votre demande. Vous recevrez une confirmation sous peu.</p>
            <button onClick={onClose} className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition">Fermer</button>
            </div>
        </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-[2.5rem] w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in duration-300">
            <div className="p-10">
            <div className="flex justify-between items-start mb-8">
                <div>
                <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">Réservation immédiate</span>
                <h2 className="text-3xl font-black text-gray-900 mt-1">{car.name}</h2>
                </div>
                <button onClick={onClose} className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="group">
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1">Vos informations</label>
                <input type="text" name="fullName" placeholder="Nom complet" required className="w-full p-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-blue-500 focus:bg-white outline-none transition-all font-medium" />
                </div>
                <input type="email" name="email" placeholder="Adresse email" required className="w-full p-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-blue-500 focus:bg-white outline-none transition-all font-medium" />
                
                <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2 ml-1">Date de prise en charge</label>
                <input type="date" name="date" min={new Date().toISOString().split("T")[0]} required className="w-full p-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-blue-500 focus:bg-white outline-none transition-all font-medium" />
                </div>
                
                <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full bg-gray-900 hover:bg-black text-white py-5 rounded-2xl font-bold text-lg transition-all shadow-xl disabled:opacity-50 flex justify-center items-center gap-2"
                >
                {status === 'loading' ? (
                    <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Envoi en cours...
                    </>
                ) : "Confirmer la réservation"}
                </button>
            </form>
            </div>
        </div>
        </div>
    );
    }