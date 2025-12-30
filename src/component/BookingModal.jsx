import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function BookingModal({ car, onClose }) {
    const [status, setStatus] = useState('idle');

    useEffect(() => {

        emailjs.init("yItHRiAj14jEuiduQ");
        
        document.body.style.overflow = 'hidden';
        return () => (document.body.style.overflow = 'unset');
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (status === 'loading') return;

        setStatus('loading');
        
        const SERVICE_ID = "service_qmhx83q";
        const TEMPLATE_ID = "template_6yi7tm5";

        const templateParams = {
        customerName: e.target.fullName.value,
        customerEmail: e.target.email.value,
        carName: car.name,
        date: e.target.date.value,
        name: e.target.fullName.value, 
        email: e.target.email.value,
        to_name: "Admin", 
        };

        try {
        
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
        setStatus('success');
        } catch (error) {
        console.error("Erreur d'envoi:", error);
        alert("Une erreur est survenue lors de l'envoi du mail.");
        setStatus('idle');
        }
    };

    return (
        <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={(e) => e.target === e.currentTarget && onClose()}
        role="dialog"
        aria-modal="true"
        >
        <div className="relative w-full max-w-lg bg-white rounded-[2rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[95vh]">
            
            {/* Header - Fixe */}
            <div className="p-6 md:p-8 border-b border-gray-50 flex justify-between items-start">
            <div>
                <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em]">Réservation</span>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mt-1 leading-tight">
                {car.name}
                </h2>
            </div>
            <button 
                onClick={onClose} 
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-gray-500"
                aria-label="Fermer"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
            </div>

            {/* Content - Scrollable pour mobile */}
            <div className="p-6 md:p-8 overflow-y-auto">
            {status === 'success' ? (
                <div className="py-10 text-center animate-in fade-in slide-in-from-bottom-4">
                <div className="text-6xl mb-6">✨</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Demande Reçue !</h2>
                <p className="text-gray-500 leading-relaxed mb-8">
                    Nous avons bien reçu votre demande pour la <strong>{car.name}</strong>. 
                    Une confirmation vous sera envoyée par e-mail sous peu.
                </p>
                <button 
                    onClick={onClose} 
                    className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
                >
                    Fermer la fenêtre
                </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase ml-1">Identité</label>
                    <input 
                    type="text" 
                    name="fullName" 
                    placeholder="Ex: Jean Dupont" 
                    required 
                    className="w-full p-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-blue-500 focus:bg-white outline-none transition-all font-medium text-gray-900" 
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase ml-1">Contact</label>
                    <input 
                    type="email" 
                    name="email" 
                    placeholder="votre@email.com" 
                    required 
                    className="w-full p-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-blue-500 focus:bg-white outline-none transition-all font-medium text-gray-900" 
                    />
                </div>
                
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase ml-1">Date souhaitée</label>
                    <input 
                    type="date" 
                    name="date" 
                    min={new Date().toISOString().split("T")[0]} 
                    required 
                    className="w-full p-4 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-blue-500 focus:bg-white outline-none transition-all font-medium text-gray-900" 
                    />
                </div>
                
                <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="w-full mt-4 bg-gray-900 hover:bg-black text-white py-5 rounded-2xl font-bold text-lg transition-all shadow-xl disabled:opacity-50 flex justify-center items-center gap-3 active:scale-[0.98]"
                >
                    {status === 'loading' ? (
                    <>
                        <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Traitement...
                    </>
                    ) : "Confirmer la réservation"}
                </button>
                
                <p className="text-center text-[10px] text-gray-400 px-4">
                    En confirmant, vous acceptez d'être recontacté pour finaliser les détails du contrat de location.
                </p>
                </form>
            )}
            </div>
        </div>
        </div>
    );
}