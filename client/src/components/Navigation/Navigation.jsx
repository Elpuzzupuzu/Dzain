import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  Package,
  Settings,
  Users,
  Phone,
  LogOut,
  User,
  LayoutDashboard,
  ListChecks,
  FileText,
  Handshake,
  LogIn
} from 'lucide-react';

const COMMON_NAV_ITEMS = [
  { path: '/', label: 'INICIO', icon: Home },
  { path: '/productos', label: 'PRODUCTOS', icon: Package },
  { path: '/servicios', label: 'SERVICIOS', icon: Settings },
  { path: '/acerca-de-nosotros', label: 'NOSOTROS', icon: Users },
  // { path: '/contacto', label: 'CONTACTO', icon: Phone },
  // { path: '/catalogo-pdfs', label: 'CATÁLOGOS', icon: FileText },
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
  // Clases base para escritorio: Texto blanco con opacidad al 70% por defecto
  const desktopItemClasses = "text-[13px] tracking-widest font-semibold transition-all duration-300 py-2 border-b-2";

  // Función para determinar el estilo según si el link está activo o no
  const getNavLinkClass = (isActive) => {
    return `${desktopItemClasses} ${
      isActive 
        ? 'text-white border-white' // Activo: Blanco puro y borde sólido
        : 'text-white/60 border-transparent hover:text-white hover:border-white/40' // Inactivo: Opaco, Hover: Blanco
    }`;
  };

  let allNavItems = [...COMMON_NAV_ITEMS];
  if (isLoggedIn) allNavItems = [...allNavItems, ...USER_NAV_ITEMS];
  if (rol === 'admin') allNavItems = [...allNavItems, ...ADMIN_NAV_ITEMS];

  // ---------------------------------------------------------
  // VISTA MÓVIL
  // ---------------------------------------------------------
  if (isMobile) {
    return (
      <nav className="flex flex-col space-y-1 p-4 bg-zinc-950">
        {allNavItems.map(({ path, label, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            onClick={onLinkClick}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-white text-black'
                  : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
              }`
            }
          >
            <Icon size={18} />
            <span className="font-medium text-xs tracking-wider">{label}</span>
          </NavLink>
        ))}

        <div className="border-t border-zinc-800 my-4" />

        {isLoggedIn ? (
          <>
            <NavLink
              to="/mi-cuenta"
              onClick={onLinkClick}
              className="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-white"
            >
              <User size={18} />
              <span className="font-medium text-xs tracking-wider">MI CUENTA</span>
            </NavLink>
            <button
              onClick={() => { onLogout(); onLinkClick(); }}
              className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-950/30 rounded-lg"
            >
              <LogOut size={18} />
              <span className="font-medium text-xs tracking-wider">CERRAR SESIÓN</span>
            </button>
          </>
        ) : (
          <NavLink
            to="/login"
            onClick={onLinkClick}
            className="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-white"
          >
            <LogIn size={18} />
            <span className="font-medium text-xs tracking-wider">INICIAR SESIÓN</span>
          </NavLink>
        )}
      </nav>
    );
  }

  // ---------------------------------------------------------
  // VISTA ESCRITORIO
  // ---------------------------------------------------------
  return (
    <nav className="hidden lg:flex items-center space-x-7">
      {/* Enlaces Comunes */}
      {COMMON_NAV_ITEMS.map(({ path, label }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) => getNavLinkClass(isActive)}
        >
          {label}
        </NavLink>
      ))}

      {/* Enlaces Usuario Logueado (No admin) */}
      {isLoggedIn && rol !== 'admin' &&
        USER_NAV_ITEMS.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) => getNavLinkClass(isActive)}
          >
            {label}
          </NavLink>
        ))}

      {/* Enlaces Administrador */}
      {rol === 'admin' && (
        <>
          <div className="h-5 w-px bg-white/20 mx-2" /> 
          {ADMIN_NAV_ITEMS.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => getNavLinkClass(isActive)}
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