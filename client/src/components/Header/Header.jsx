import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ShoppingCart, Menu } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../features/user/usersSlice';

import Navigation from '../Navigation/Navigation';
import Search from './Search/Search';
import UserDropdown from './Search/userDropdown';

const Header = ({ onCartToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartAnimating, setIsCartAnimating] = useState(false);
  const [previousCartCount, setPreviousCartCount] = useState(0);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const rol = useSelector((state) => state.user.user?.rol);
  const cartItems = useSelector((state) => state.cart.items);

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.cantidad, 0);

  const isLoggedIn = !!user;
  const userName = user?.name || user?.nombre || 'Usuario';
  const userProfile = user?.foto_perfil;

  const handleLogout = () => dispatch(logoutUser());

  useEffect(() => {
    if (totalCartItems > previousCartCount) {
      setIsCartAnimating(true);
      const timer = setTimeout(() => setIsCartAnimating(false), 600);
      setPreviousCartCount(totalCartItems);
      return () => clearTimeout(timer);
    }
    setPreviousCartCount(totalCartItems);
  }, [totalCartItems, previousCartCount]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  return (
    <>
      {/* HEADER PRINCIPAL - Negro sofisticado con gradiente sutil */}
      <header className="sticky top-0 bg-gradient-to-b from-[#0d0d0d] to-black z-50 font-sans shadow-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 gap-8">
            
            {/* LOGO D'ZAIN con efecto premium */}
            <Link to="/" className="flex items-center group flex-shrink-0">
              <span className="text-3xl font-serif italic font-bold tracking-tight text-white group-hover:text-amber-400 transition-all duration-300 drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]">
                D'ZAIN
              </span>
            </Link>

            {/* SEARCH con diseño glassmorphism */}
            <div className="hidden md:flex flex-1 max-w-md">
              <div className="w-full relative group">
                <Search className="bg-white/5 backdrop-blur-sm border-white/10 text-white placeholder-gray-400 focus:ring-amber-400/50 focus:border-amber-400/50 hover:bg-white/[0.07] transition-all duration-200" />
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex items-center gap-4 sm:gap-6">
              {/* User Dropdown con separador elegante */}
              <div className="hidden lg:block border-r border-white/10 pr-6 text-gray-300 hover:text-white transition-colors">
                <UserDropdown
                  userName={userName}
                  isLoggedIn={isLoggedIn}
                  onLogout={handleLogout}
                  rol={rol}
                  profilePicture={userProfile}
                />
              </div>

              {/* Cart Button con efecto premium */}
              <button
                onClick={onCartToggle}
                className={`relative flex items-center gap-3 py-2.5 px-4 rounded-xl transition-all duration-300 border ${
                  isCartAnimating 
                    ? 'scale-105 bg-gradient-to-r from-amber-500 to-amber-600 text-white border-amber-400 shadow-lg shadow-amber-500/30' 
                    : 'text-gray-300 hover:bg-white/5 hover:text-white border-white/10 hover:border-white/20 backdrop-blur-sm'
                }`}
              >
                <div className="relative">
                  <ShoppingCart 
                    size={22} 
                    className={`${isCartAnimating ? 'animate-bounce' : ''}`} 
                    strokeWidth={2} 
                  />
                  {totalCartItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-amber-500 text-black text-[10px] rounded-full min-w-[18px] h-[18px] flex items-center justify-center font-bold ring-2 ring-black shadow-lg">
                      {totalCartItems}
                    </span>
                  )}
                </div>
                <div className="hidden sm:flex flex-col items-start leading-none">
                  <span className="text-[11px] text-gray-400 uppercase font-semibold tracking-wider">Carrito</span>
                </div>
              </button>

              {/* Mobile Menu Toggle con efecto hover */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="lg:hidden p-2.5 text-white hover:bg-white/10 rounded-xl transition-all duration-200 border border-white/10 hover:border-white/20"
              >
                <Menu size={24} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>

        {/* NAVIGATION BAR (Desktop) - Separación profesional */}
        <nav className="hidden lg:block border-t border-white/5 bg-gradient-to-b from-black to-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center h-12">
            <Navigation 
              rol={rol} 
              isLoggedIn={isLoggedIn} 
              onLogout={handleLogout} 
              className="text-gray-400 hover:text-white" 
            />
          </div>
        </nav>

        {/* MOBILE SEARCH BAR con diseño refinado */}
        <div className="md:hidden px-4 pb-4 pt-2 bg-black">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-1 border border-white/10 shadow-inner">
            <Search />
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY con blur profesional */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 bg-gradient-to-b from-[#0d0d0d] to-black w-80 max-w-[90vw] shadow-2xl flex flex-col border-l border-white/10 animate-in slide-in-from-right duration-300">
            <div className="p-6 flex items-center justify-between border-b border-white/10 bg-white/[0.02]">
              <span className="text-2xl font-serif italic font-bold text-white drop-shadow-[0_0_10px_rgba(251,191,36,0.2)]">D'ZAIN</span>
              <button 
                onClick={() => setIsMenuOpen(false)} 
                className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 border border-transparent hover:border-white/20"
              >
                <X size={24} strokeWidth={2} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-6 text-white">
              <div className="lg:hidden border-b border-white/10 pb-6">
                <UserDropdown
                  userName={userName}
                  isLoggedIn={isLoggedIn}
                  onLogout={handleLogout}
                  rol={rol}
                  profilePicture={userProfile}
                />
              </div>
              <Navigation
                isMobile
                onLinkClick={() => setIsMenuOpen(false)}
                isLoggedIn={isLoggedIn}
                onLogout={handleLogout}
                rol={rol}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;