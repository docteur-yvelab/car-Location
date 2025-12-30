import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log("Tentative de connexion Supabase à :", supabaseUrl);

if (!supabaseUrl || !supabaseKey) {
    console.error("ERREUR : Les variables d'environnement ne sont pas chargées !");
    console.log("Vérifiez que le fichier .env est à la racine et que Vite a été redémarré.");
}

export const supabase = createClient(
    supabaseUrl || 'https://placeholder.supabase.co',
    supabaseKey || 'placeholder'
);