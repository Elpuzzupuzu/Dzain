import React, { useState } from "react";
import { Heart } from "lucide-react";

const ProductImage360 = ({ product, userId, favorite, onToggleWishlist }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="w-full max-w-2xl relative mb-10">

      {/* Contenedor de imagen con diseño profesional */}
      <div className="relative rounded-lg bg-white border border-gray-200 shadow-sm overflow-hidden">

        {/* Skeleton loader minimalista */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-50">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent animate-pulse" />
          </div>
        )}

        {/* Imagen del producto */}
        <img
          src={product.imagen}
          alt={product.nombre}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-40 lg:h-[225px] object-contain transition-opacity duration-300 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Borde superior sutil */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent pointer-events-none" />
      </div>

      {/* Botón de wishlist profesional */}
      {userId && (
        <button
          onClick={() => onToggleWishlist(product.id)}
          className={`absolute top-4 right-4 p-2.5 rounded-md shadow-sm transition-all duration-200 border ${
            favorite
              ? "bg-slate-900 hover:bg-slate-800 border-slate-900"
              : "bg-white hover:bg-gray-50 border-gray-300"
          }`}
        >
          <Heart
            className={`w-5 h-5 transition-colors duration-200 ${
              favorite
                ? "text-white fill-white"
                : "text-gray-600"
            }`}
          />
        </button>
      )}
    </div>
  );
};

export default ProductImage360;