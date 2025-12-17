import {
  User,
  Lock,
  ShoppingBag,
  Heart,
  MessageSquare
} from "lucide-react";
import { useDispatch } from "react-redux";
import { clearSuccessMessage } from "../../../../features/user/usersSlice";

const SECTIONS = [
  { id: "details", label: "Perfil", icon: User },
  { id: "password", label: "Seguridad", icon: Lock },
  { id: "orders", label: "Pedidos", icon: ShoppingBag },
  { id: "wishlist", label: "Favoritos", icon: Heart },
  { id: "reviews", label: "Reseñas", icon: MessageSquare }
];

const SidebarItem = ({ section, active, onClick }) => {
  const Icon = section.icon;

  return (
    <button
      onClick={onClick}
      className={`
        group relative w-full text-left flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium
        transition-all duration-200
        ${
          active
            ? "bg-slate-900 text-white shadow"
            : "text-slate-600 hover:bg-slate-100"
        }
      `}
    >
      <Icon
        className={`w-5 h-5 ${
          active ? "text-white" : "text-slate-400 group-hover:text-slate-600"
        }`}
      />

      <span>{section.label}</span>

      {/* Indicador activo */}
      {active && (
        <span className="absolute right-3 w-1.5 h-1.5 rounded-full bg-indigo-400" />
      )}
    </button>
  );
};

const ProfileSidebar = ({ selectedSection, setSelectedSection }) => {
  const dispatch = useDispatch();

  const handleSelect = (id) => {
    setSelectedSection(id);
    dispatch(clearSuccessMessage());
  };

  return (
    <>
      {/* Mobile navigation (Sección de Pestañas Inferiores - Perfecto para la vista móvil) */}
      <div className="lg:hidden sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="flex justify-around px-2 py-2">
          {SECTIONS.map((section) => {
            const Icon = section.icon;
            const active = selectedSection === section.id;

            return (
              <button
                key={section.id}
                onClick={() => handleSelect(section.id)}
                className={`flex flex-col items-center gap-1 text-xs font-medium transition ${
                  active ? "text-indigo-600" : "text-slate-400"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{section.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Desktop sidebar (Sección de Grid - Cambios aplicados aquí) */}
      {/* ELIMINADO: w-64 (Permitimos que el grid principal maneje el ancho - 1/4)
        AÑADIDO: w-full (Aseguramos que ocupe todo el espacio de su columna)
      */}
      <aside className="hidden lg:flex w-full flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sticky top-28 h-fit">
        <h3 className="px-2 mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Mi cuenta
        </h3>

        {SECTIONS.map((section) => (
          <SidebarItem
            key={section.id}
            section={section}
            active={selectedSection === section.id}
            onClick={() => handleSelect(section.id)}
          />
        ))}
      </aside>
    </>
  );
};

export default ProfileSidebar;