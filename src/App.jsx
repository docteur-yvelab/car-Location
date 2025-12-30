import { useState } from 'react';
import './App.css';
import NavBar from './component/NavBar';
import CarCard from './component/CarCard';
import BookingModal from './component/BookingModal'; // On va le créer juste après
import { CARS } from './data/cars'; // Import de tes données

function App() {
  // État pour savoir quelle voiture est en train d'être réservée
  const [selectedCar, setSelectedCar] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-black text-gray-900">Notre Flotte</h1>
          <p className="text-gray-500">Sélectionnez le véhicule qui vous correspond.</p>
        </div>

        {/* Grille de voitures */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CARS.map((car) => (
            <CarCard 
              key={car.id} 
              car={car} 
              onReserve={() => setSelectedCar(car)} 
            />
          ))}
        </div>
      </main>

      {/* Affichage conditionnel de la modale */}
      {selectedCar && (
        <BookingModal 
          car={selectedCar} 
          onClose={() => setSelectedCar(null)} 
        />
      )}
    </div>
  );
}

export default App;
