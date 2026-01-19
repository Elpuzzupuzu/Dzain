


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ShoppingCart, MapPin, Menu, ChevronDown } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../features/user/usersSlice';

import Navigation from '../Navigation/Navigation';
import Search from './Search/Search';
import UserDropdown from './Search/userDropdown';
const Header = ({ onCartToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartAnimating, setIsCartAnimating] = useState(false);
  const [previousCartCount, setPreviousCartCount] = useState(0);
  const [showAddedBadge, setShowAddedBadge] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const rol = useSelector((state) => state.user.user?.rol);
  const cartItems = useSelector((state) => state.cart.items);

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.cantidad, 0);

  const isLoggedIn = !!user;
  const userName = user?.name || user?.nombre || user?.correo || user?.email || 'Usuario';
  const userProfile = user?.foto_perfil;

  const handleLogout = () => dispatch(logoutUser());

  useEffect(() => {
    setPreviousCartCount(prev => {
      if (totalCartItems > prev) {
        setIsCartAnimating(true);
        setShowAddedBadge(true);
        setTimeout(() => setIsCartAnimating(false), 600);
        setTimeout(() => setShowAddedBadge(false), 1500);
      }
      return totalCartItems;
    });
  }, [totalCartItems]);

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 bg-[#0A313E] shadow-sm z-50 font-sans">
        {/* MAIN HEADER (Logo, Search, Actions) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 gap-8">
            
            {/* LOGO DZAIN */}
            <Link to="/" className="flex items-center space-x-2 flex-shrink-0 group">
              <div className="bg-teal-600 text-white px-3 py-1 font-bold text-2xl transition-transform group-hover:scale-105">
                D
              </div>
              <span className="font-bold text-2xl tracking-tighter text-gray-900">ZAIN</span>
            </Link>

            {/* SEARCH (Estilo Template) */}
            <div className="hidden md:flex flex-1 max-w-xl">
              <div className="w-full relative group">
                <Search />
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex items-center gap-6">
              {/* User Dropdown */}
              <div className="hidden lg:block">
                <UserDropdown
                  userName={userName}
                  isLoggedIn={isLoggedIn}
                  onLogout={handleLogout}
                  rol={rol}
                  profilePicture={userProfile}
                />
              </div>

              {/* Cart Button (Estilo Template con lógica de animación) */}
              <button
                onClick={onCartToggle}
                className={`flex items-center gap-2 group transition-colors ${
                  isCartAnimating ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'
                }`}
              >
                <div className="relative">
                  <ShoppingCart size={24} className={isCartAnimating ? 'animate-bounce' : ''} />
                  {totalCartItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-teal-600 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-bold border-2 border-white">
                      {totalCartItems}
                    </span>
                  )}
                </div>
                <div className="hidden sm:flex flex-col items-start leading-none">
                  <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Mi Carrito</span>
                </div>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="lg:hidden p-2 text-gray-600 hover:text-teal-600 transition-colors"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>

        {/* NAVIGATION BAR (Desktop) */}
        <nav className="hidden lg:block border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Navigation rol={rol} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
          </div>
        </nav>

        {/* MOBILE SEARCH BAR */}
        <div className="md:hidden px-4 pb-4">
          <Search />
        </div>
      </header>

      {/* MOBILE MENU OVERLAY (Actualizado con estilo claro) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 bg-white w-72 max-w-[85vw] shadow-2xl flex flex-col">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="bg-teal-600 text-white px-2 py-0.5 font-bold text-lg">D</div>
                <span className="font-bold text-lg">ZAIN</span>
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="text-gray-400">
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4">
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