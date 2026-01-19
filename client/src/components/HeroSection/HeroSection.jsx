import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2 } from 'lucide-react';

export default function HeroSection({ heroImage }) {
  return (
    <div className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden bg-slate-950">
      
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={ "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2070&auto=format&fit=crop"} 
          alt="DZ Mobiliario - Espacios de Oficina" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="max-w-2xl">
          
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-blue-600/10 border border-blue-500/30">
            <Building2 className="w-3 h-3 text-blue-500" />
            <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em]">
              Real Estate & Management
            </span>
          </div>

          <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-light mb-6 leading-tight">
            Encuentre su próxima <br />
            <span className="font-bold text-blue-500 underline decoration-blue-500/30 underline-offset-8">
              sede corporativa
            </span>
          </h1>
          
          <p className="text-slate-300 text-lg md:text-xl mb-10 leading-relaxed font-light">
            Especialistas en la comercialización de oficinas <strong>clase A+</strong> y mobiliario ejecutivo. 
            Calidad garantizada para empresas que buscan proyectar liderazgo y éxito.
          </p>

          {/* Único Link del Hero */}
          <Link
            to="/inmuebles-corporativos" 
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-[0.2em] px-10 py-5 transition-all duration-300 shadow-lg shadow-blue-900/20"
          >
            Ver Propiedades
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* Features */}
          <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
            <Feature text="Ubicaciones Prime" />
            <Feature text="Certificación LEED" />
            <Feature text="Diseño Ergonómico" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({ text }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-1.5 h-1.5 bg-blue-500"></div>
      <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
        {text}
      </span>
    </div>
  );
}
