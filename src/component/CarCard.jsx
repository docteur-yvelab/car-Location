import React from 'react'

const CarCard = ({ car, onReserve }) => {
    return (
        <div className="group bg-white rounded-[2rem] p-4 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
        <div className="overflow-hidden rounded-[1.5rem] relative">
            <img src={car.image} className="h-56 w-full object-cover group-hover:scale-105 transition duration-500" alt={car.name} />
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-700">
            {car.type}
            </div>
        </div>
        <div className="mt-5 px-2 pb-2">
            <h3 className="text-xl font-bold text-gray-900">{car.name}</h3>
            <p className="text-gray-400 text-sm">{car.fuel} • Transmission Auto</p>
            <div className="mt-6 flex justify-between items-center">
            <div>
                <span className="text-2xl font-black text-gray-900">{car.price}€</span>
                <span className="text-gray-400 text-xs font-medium"> /jour</span>
            </div>
            <button 
                onClick={() => onReserve(car)}
                className="bg-blue-600 text-white px-5 py-3 rounded-2xl font-bold text-sm hover:bg-blue-700 transition shadow-lg shadow-blue-100"
            >
                Réserver
            </button>
            </div>
        </div>
        </div>
    )
}

export default CarCard