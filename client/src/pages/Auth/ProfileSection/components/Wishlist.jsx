import React from 'react';
import { Heart } from 'lucide-react';
// Importamos Link de react-router-dom para la navegación
import { Link } from 'react-router-dom'; 

// Wishlist Component
const Wishlist = ({ items, loading, onRemove }) => {

    // ----------------------------------------------------
    // ESTADOS VISUALES (Carga y Vacío)
    // ----------------------------------------------------

    if (loading) {
        return (
            <div className="bg-white rounded-2xl p-12 flex items-center justify-center border border-gray-100 shadow-md">
                <div className="flex items-center space-x-2 text-gray-500">
                    <svg
                        className="animate-spin h-5 w-5 text-indigo-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                    <p>Cargando lista de deseos...</p>
                </div>
            </div>
        );
    }

    if (!items || items.length === 0) {
        return (
            <div className="bg-white rounded-2xl p-12 border border-gray-100 text-center shadow-md">
                <Heart className="w-12 h-12 text-pink-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700">
                    Tu lista de deseos está vacía
                </h3>
                <p className="text-gray-500">
                    Agrega productos que te encanten para verlos aquí.
                </p>
            </div>
        );
    }

    // ----------------------------------------------------
    // RENDER
    // ----------------------------------------------------

    return (
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md">
            {/* Encabezado (sin cambios) */}
            <div className="flex items-center gap-3 mb-6 border-b pb-4">
                <div className="w-10 h-10 bg-pink-500 rounded-xl flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                        Lista de Deseos
                    </h2>
                    <p className="text-sm text-gray-500">
                        Tienes {items.length} productos guardados.
                    </p>
                </div>
            </div>

            {/* Listado */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => {
                    const producto = item.productos || {};
                    const productoId = item.producto_id;

                    return (
                        // 1. Envolvemos cada ítem en el componente Link
                        <Link
                            key={productoId ?? index}
                            to={`/productos/${productoId}`} // <--- URL de redirección
                            className="group relative bg-white border border-gray-100 p-4 rounded-xl shadow-sm hover:shadow-lg transition block"
                        >
                            {/* Imagen */}
                            <img
                                src={
                                    producto.imagen ||
                                    'https://via.placeholder.com/300x200?text=Producto'
                                }
                                alt={producto.nombre}
                                className="w-full h-40 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300" // Efecto de hover añadido
                            />

                            {/* Información */}
                            <h3 className="font-semibold text-gray-900 text-base truncate">
                                {producto.nombre}
                            </h3>

                            <p className="text-xl text-gray-900 font-bold">
                                ${producto.precio ?? '—'}
                            </p>

                            {/* Botón de Remover */}
                            <button
                                // 2. Detenemos la propagación para evitar que el clic active el <Link>
                                onClick={(e) => {
                                    e.preventDefault(); // Previene la navegación
                                    e.stopPropagation(); // Previene que el evento llegue al Link
                                    onRemove(productoId);
                                }}
                                title="Eliminar de la lista de deseos"
                                className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-red-50"
                            >
                                <Heart className="w-4 h-4 text-pink-600 fill-pink-600" />
                            </button>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Wishlist;