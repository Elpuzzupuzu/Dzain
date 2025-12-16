import { Link } from "react-router-dom";
import { Heart, ImageOff } from "lucide-react";

const WishlistSection = ({ wishlist, loading }) => {
  if (loading) {
    return <p className="text-sm text-slate-500">Cargando lista de deseos...</p>;
  }

  if (!wishlist || wishlist.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-16 text-center">
        <Heart className="w-12 h-12 text-slate-400 mb-4" />
        <p className="text-slate-900 font-semibold">Tu lista de deseos está vacía</p>
        <p className="text-slate-500 text-sm mt-1">
          Guarda productos que te gusten y vuelve cuando estés listo
        </p>
      </div>
    );
  }

  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {wishlist.map((item) => {
        const producto = item.productos || {};

        return (
          <Link
            key={item.producto_id}
            to={`/productos/${item.producto_id}`}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white hover:shadow-md transition"
          >
            {/* Imagen */}
            <div className="relative h-56 bg-slate-100 overflow-hidden">
              {producto.imagen ? (
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <ImageOff className="w-10 h-10 text-slate-400" />
                </div>
              )}

              {/* Heart */}
              {item.deseado && (
                <div className="absolute top-3 right-3 rounded-full bg-white/90 p-2 shadow">
                  <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                </div>
              )}
            </div>

            {/* Info */}
            <div className="p-4">
              <p className="font-semibold text-slate-900 text-sm truncate">
                {producto.nombre}
              </p>

              <div className="mt-2 flex items-center justify-between">
                <span className="text-base font-bold text-slate-900">
                  ${producto.precio?.toFixed(2) || "0.00"}
                </span>

                <span className="text-xs font-medium text-indigo-600 group-hover:underline">
                  Ver producto
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default WishlistSection;
