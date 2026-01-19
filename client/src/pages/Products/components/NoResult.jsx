import React from "react";
import { SearchX, RotateCcw, Building2 } from "lucide-react";

const NoResults = ({ onResetFilters }) => {
  return (
    <div className="relative overflow-hidden bg-white border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] p-12 md:p-24 text-center">
      
      {/* Elemento decorativo de fondo */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-slate-50 rounded-full blur-3xl opacity-50" />
      
      <div className="relative z-10 max-w-md mx-auto">
        {/* Icono Principal Refinado */}
        <div className="relative inline-flex items-center justify-center mb-8">
          <div className="absolute inset-0 bg-blue-50 rounded-full scale-[1.8] animate-pulse opacity-40" />
          <div className="relative w-20 h-20 bg-white border border-slate-100 rounded-full flex items-center justify-center shadow-sm">
            <SearchX className="w-10 h-10 text-slate-300 stroke-[1.5px]" />
          </div>
          {/* Icono flotante pequeño para contexto de oficina */}
          <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center shadow-lg">
            <Building2 className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Textos Editorial */}
        <h3 className="text-2xl md:text-3xl font-light text-slate-900 mb-4 tracking-tight">
          Sin coincidencias <span className="font-bold">encontradas</span>
        </h3>
        
        <p className="text-slate-500 font-light leading-relaxed mb-10">
          No hemos encontrado oficinas o espacios que coincidan con su búsqueda actual. 
          Le sugerimos simplificar sus filtros o ampliar el rango de ubicación.
        </p>

        {/* Acciones de Recuperación */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => window.location.reload()} // O la lógica de reset que prefieras
            className="flex items-center gap-2 px-8 py-4 bg-slate-950 text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-blue-700 transition-all duration-300 w-full sm:w-auto"
          >
            <RotateCcw className="w-3 h-3" />
            Reiniciar Búsqueda
          </button>
          
          <button 
            className="px-8 py-4 border border-slate-200 text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-slate-50 transition-all duration-300 w-full sm:w-auto"
          >
            Contactar Asesor
          </button>
        </div>
      </div>

      {/* Marca de agua sutil */}
      <div className="mt-16 pt-8 border-t border-slate-50 text-slate-300 text-[10px] uppercase tracking-widest font-bold">
        DZ Mobiliario — Gestión de Espacios Corporativos
      </div>
    </div>
  );
};

export default NoResults;