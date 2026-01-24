import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  Package,
  Settings,
  Users,
  Phone,
  LogIn,
  LogOut,
  User,
  LayoutDashboard,
  ListChecks,
  FileText,
  Handshake,
} from 'lucide-react';

const COMMON_NAV_ITEMS = [
  { path: '/', label: 'INICIO', icon: Home },
  { path: '/productos', label: 'PRODUCTOS', icon: Package },
  { path: '/servicios', label: 'SERVICIOS', icon: Settings },
  { path: '/acerca-de-nosotros', label: 'NOSOTROS', icon: Users },
  { path: '/contacto', label: 'CONTACTO', icon: Phone },
  { path: '/catalogo-pdfs', label: 'CATÁLOGOS', icon: FileText },
];

const USER_NAV_ITEMS = [
  { path: '/cotizaciones', label: 'COTIZACIONES', icon: Handshake },
];

const ADMIN_NAV_ITEMS = [
  { path: '/admin/products', label: 'ADMIN PRODUCTOS', icon: LayoutDashboard },
  { path: '/admin/quotations', label: 'GESTIONAR COTIZACIONES', icon: ListChecks },
  { path: '/admin/manage', label: 'ADMIN GENERAL', icon: Settings },
];

const Navigation = ({
  isMobile = false,
  onLinkClick,
  isLoggedIn = false,
  onLogout,
  rol,
}) => {
  // Clases base del template
  const desktopItemClasses = "text-sm font-medium transition-colors py-4";

  let allNavItems = [...COMMON_NAV_ITEMS];
  if (isLoggedIn) allNavItems = [...allNavItems, ...USER_NAV_ITEMS];
  if (rol === 'admin') allNavItems = [...allNavItems, ...ADMIN_NAV_ITEMS];

  // ---------------------------------------------------------
  // VISTA MÓVIL (Mantiene estructura con colores del template)
  // ---------------------------------------------------------
  if (isMobile) {
    return (
      <nav className="flex flex-col space-y-2 p-4">
        {allNavItems.map(({ path, label, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            onClick={onLinkClick}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md transition-all ${
                isActive
                  ? 'bg-amber-50 text-amber-700'
                  : 'text-zinc-700 hover:bg-stone-50 hover:text-amber-700'
              }`
            }
          >
            <Icon size={18} />
            <span className="font-medium text-xs">{label}</span>
          </NavLink>
        ))}

        <div className="border-t border-stone-200 my-2" />

        {isLoggedIn ? (
          <>
            <NavLink
              to="/mi-cuenta"
              onClick={onLinkClick}
              className="flex items-center gap-3 px-3 py-2 text-zinc-700 hover:text-amber-700"
            >
              <User size={18} />
              <span className="font-medium text-xs">MI CUENTA</span>
            </NavLink>
            <button
              onClick={() => { onLogout(); onLinkClick(); }}
              className="flex items-center gap-3 px-3 py-2 text-red-600 hover:bg-red-50"
            >
              <LogOut size={18} />
              <span className="font-medium text-xs">CERRAR SESIÓN</span>
            </button>
          </>
        ) : (
          <NavLink
            to="/login"
            onClick={onLinkClick}
            className="flex items-center gap-3 px-3 py-2 text-zinc-700 hover:text-amber-700"
          >
            <LogIn size={18} />
            <span className="font-medium text-xs">INICIAR SESIÓN</span>
          </NavLink>
        )}
      </nav>
    );
  }

  // ---------------------------------------------------------
  // VISTA ESCRITORIO (Estilo exacto del Template)
  // ---------------------------------------------------------
  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {/* Enlaces Comunes */}
      {COMMON_NAV_ITEMS.map(({ path, label }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            `${desktopItemClasses} ${
              isActive 
                ? 'text-amber-700 border-b-2 border-amber-700' 
                : 'text-zinc-700 hover:text-amber-700'
            }`
          }
        >
          {label}
        </NavLink>
      ))}

      {/* Enlaces Usuario Logueado */}
      {isLoggedIn && rol !== 'admin' &&
        USER_NAV_ITEMS.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `${desktopItemClasses} ${
                isActive 
                  ? 'text-amber-700 border-b-2 border-amber-700' 
                  : 'text-amber-600 hover:text-amber-700'
              }`
            }
          >
            {label}
          </NavLink>
        ))}

      {/* Enlaces Administrador */}
      {rol === 'admin' && (
        <>
          <div className="h-6 w-px bg-stone-300" /> {/* Separador visual del template */}
          {ADMIN_NAV_ITEMS.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `${desktopItemClasses} font-bold ${
                  isActive 
                    ? 'text-amber-700 border-b-2 border-amber-700' 
                    : 'text-zinc-700 hover:text-amber-700'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </>
      )}
    </nav>
  );
};

export default Navigation;