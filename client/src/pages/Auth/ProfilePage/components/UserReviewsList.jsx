// src/pages/Profile/components/UserReviewsList.jsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Star, ImageOff, MessageSquare } from "lucide-react";
import { fetchUserReviews } from "../../../../features/user/usersSlice";

const UserReviewsList = ({ userId }) => {
  const dispatch = useDispatch();
  const { reviews, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserReviews(userId));
    }
  }, [userId, dispatch]);

  /* ---------- Loading ---------- */
  if (loading) {
    return (
      <div className="flex justify-center p-16 text-sm text-slate-500">
        Cargando tus reseñas...
      </div>
    );
  }

  /* ---------- Error ---------- */
  if (error) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
        Error: {error}
      </div>
    );
  }

  /* ---------- Empty state ---------- */
  if (!reviews || reviews.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-16 text-center">
        <MessageSquare className="w-12 h-12 text-slate-400 mb-4" />
        <p className="font-semibold text-slate-900">Aún no has escrito reseñas</p>
        <p className="text-slate-500 text-sm mt-1">
          Tus opiniones sobre los productos aparecerán aquí
        </p>
      </div>
    );
  }

  /* ---------- Reviews feed ---------- */
  return (
    <section className="space-y-4">
      {reviews.map((review, i) => {
        const producto = review.productos || {};
        const rating = Math.min(Math.max(review.calificacion || 0, 0), 5);

        return (
          <article
            key={review.producto_id || i}
            className="rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-sm transition"
          >
            <div className="flex gap-4">
              {/* Producto */}
              {producto.imagen ? (
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-14 h-14 rounded-lg object-cover border border-slate-200"
                />
              ) : (
                <div className="w-14 h-14 flex items-center justify-center bg-slate-100 border border-slate-200 rounded-lg">
                  <ImageOff className="w-5 h-5 text-slate-400" />
                </div>
              )}

              {/* Contenido */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-slate-900 truncate">
                      {producto.nombre || "Producto"}
                    </p>
                    <p className="text-sm text-slate-600 mt-0.5">
                      {review.titulo_reseña || "Sin título"}
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-4 h-4"
                        fill={idx < rating ? "#f59e0b" : "none"}
                        stroke={idx < rating ? "#f59e0b" : "#cbd5e1"}
                      />
                    ))}
                  </div>
                </div>

                {/* Fecha */}
                <p className="text-xs text-slate-500 mt-2">
                  {review.fecha_reseña
                    ? new Date(review.fecha_reseña).toLocaleDateString("es-MX", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })
                    : "Fecha no disponible"}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default UserReviewsList;
