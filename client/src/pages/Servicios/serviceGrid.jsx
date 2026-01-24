import React from 'react';
import ServiceCard from "./serviceCard";

const ServicesGrid = ({ services, isVisible }) => {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header de Sección: Estilo Editorial */}
        <div
          className={`text-center mb-24 animate-fade-in-up ${
            isVisible.servicesHeader ? "visible" : ""
          }`}
          data-animate
          id="servicesHeader"
        >
          {/* Label superior */}
          <span className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.5em] mb-4 block">
            Expertise & Calidad
          </span>
          
          <h2 className="text-4xl md:text-6xl font-light text-slate-900 mb-6 tracking-tight">
            Nuestros <span className="font-bold">Servicios Integrales</span>
          </h2>
          
          {/* Divisor minimalista en lugar de gradiente rojo */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-slate-200"></div>
            <div className="w-2 h-2 bg-blue-600 rotate-45"></div>
            <div className="w-12 h-[1px] bg-slate-200"></div>
          </div>

          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
            Creamos entornos que potencian la productividad y el bienestar, 
            fusionando ingeniería ergonómica con diseño vanguardista.
          </p>
        </div>

        {/* Grid de Servicios: Ajustado para destacar el contenido */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              data-animate 
              id={`service-${index}`}
            >
              <ServiceCard
                service={service}
                isVisible={isVisible[`service-${index}`]}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-fade-in-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* En caso de que uses la clase gradient-text, la redefinimos a algo más elegante */
        .gradient-text {
          background: linear-gradient(to bottom, #0f172a, #334155);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </section>
  );
};

export default ServicesGrid;