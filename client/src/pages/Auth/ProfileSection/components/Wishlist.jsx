import React from 'react';
import { Heart } from 'lucide-react';

// Wishlist Component
const Wishlist = ({ items, onRemove }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-pink-500 rounded-xl flex items-center justify-center">
          <Heart className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Wishlist</h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {items.map((item) => (
          <div key={item.id} className="group relative">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-xl mb-3"
            />
            <h3 className="font-medium text-gray-900 text-sm">{item.name}</h3>
            <p className="text-gray-900 font-bold">${item.price}</p>
            <button
              onClick={() => onRemove(item.id)}
              className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
            >
              <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;