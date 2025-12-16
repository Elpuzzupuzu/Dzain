import { Camera } from "lucide-react";
import { getInitials } from "../utils/profileUtils";

const ProfileHero = ({ user, isLoading }) => {
  if (isLoading || !user) {
    return (
      <div className="rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 p-8 animate-pulse">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-slate-300" />
          <div className="space-y-3">
            <div className="h-6 w-48 bg-slate-300 rounded" />
            <div className="h-4 w-32 bg-slate-300 rounded" />
          </div>
        </div>
      </div>
    );
  }

  const userName =
    user.name ||
    (user.nombre && user.apellido
      ? `${user.nombre} ${user.apellido}`
      : "Usuario");

  const initials = getInitials(userName);

  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6 sm:p-8">
      {/* fondo decorativo */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-200/30 rounded-full blur-3xl" />

      <div className="relative flex flex-col sm:flex-row items-center gap-6">
        {/* Avatar */}
        <div className="relative group">
          {user.foto_perfil ? (
            <img
              src={user.foto_perfil}
              alt={userName}
              className="w-28 h-28 rounded-full object-cover ring-4 ring-white shadow-lg"
            />
          ) : (
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center text-3xl font-bold shadow-lg">
              {initials}
            </div>
          )}

          {/* acción */}
          <button
            className="absolute bottom-1 right-1 bg-slate-900 text-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition"
            title="Cambiar foto"
          >
            <Camera className="w-4 h-4" />
          </button>
        </div>

        {/* Info */}
        <div className="text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {userName}
          </h1>

          <p className="text-slate-600 text-sm mt-1">
            {user.correo || user.email}
          </p>

          <span className="inline-flex mt-3 items-center rounded-full bg-indigo-600/10 text-indigo-700 px-3 py-1 text-xs font-semibold">
            {user.rol
              ? user.rol.charAt(0).toUpperCase() + user.rol.slice(1)
              : "Cliente"}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProfileHero;
