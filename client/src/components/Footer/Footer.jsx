import React from 'react';
import { Facebook, Youtube, Instagram, Mail, Phone, MapPin, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-white text-4xl font-serif italic mb-4">D'ZAIN</h2>
            <p className="text-sm leading-relaxed">
              Elevando el estándar del diseño de interiores con mobiliario de alta gama que combina confort, 
              estética y funcionalidad para transformar tu hogar en un espacio único.
            </p>
          </div>

          {/* Recent News / Blog */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6 uppercase tracking-wider">Tendencias</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FileText size={16} className="text-neutral-500 mt-1 shrink-0" />
                <a href="#" className="hover:text-white transition-colors text-sm">
                  Tendencias de interiorismo para el 2026
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FileText size={16} className="text-neutral-500 mt-1 shrink-0" />
                <a href="#" className="hover:text-white transition-colors text-sm">
                  Cómo elegir el sofá perfecto para tu salón
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FileText size={16} className="text-neutral-500 mt-1 shrink-0" />
                <a href="#" className="hover:text-white transition-colors text-sm">
                  La importancia de la iluminación natural
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FileText size={16} className="text-neutral-500 mt-1 shrink-0" />
                <a href="#" className="hover:text-white transition-colors text-sm">
                  Guía de cuidado para maderas nobles
                </a>
              </li>
            </ul>
          </div>

          {/* Recent Work / Collections */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6 uppercase tracking-wider">Colecciones</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-16 h-12 bg-neutral-800 rounded overflow-hidden">
                  <img 
                    src="/api/placeholder/80/60" 
                    alt="Loft Minimalista" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">Loft Minimalista</h4>
                  <p className="text-xs text-gray-500">Enero 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-16 h-12 bg-neutral-800 rounded overflow-hidden">
                  <img 
                    src="/api/placeholder/80/60" 
                    alt="Residencia La Calma" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">Residencia La Calma</h4>
                  <p className="text-xs text-gray-500">Diciembre 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6 uppercase tracking-wider">Contacto</h3>
            <div className="space-y-3 mb-8">
              <p className="text-sm flex items-center gap-2">
                <Phone size={14} className="text-white" />
                <span className="text-gray-400">+1 234 567 890</span>
              </p>
              <p className="text-sm flex items-center gap-2">
                <Mail size={14} className="text-white" />
                <span className="text-gray-400">contacto@dzain.com</span>
              </p>
              <p className="text-sm flex items-start gap-2">
                <MapPin size={14} className="text-white mt-1 shrink-0" />
                <span className="text-gray-400">Av. Principal de Diseño #123, Ciudad Creativa</span>
              </p>
            </div>
            
            <div className="flex gap-3">
              <a href="#" className="bg-neutral-800 hover:bg-blue-600 p-2 rounded transition-all text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-neutral-800 hover:bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500 p-2 rounded transition-all text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-neutral-800 hover:bg-red-600 p-2 rounded transition-all text-white">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-500 tracking-widest">
            © 2026 D'ZAIN MOBILIARIO. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <nav className="flex flex-wrap justify-center gap-8 text-xs font-medium uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a>
            <a href="#" className="hover:text-white transition-colors">Colecciones</a>
            <a href="#" className="hover:text-white transition-colors">Servicios</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;