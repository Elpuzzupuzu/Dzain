import React from 'react';

const WhyChooseUs = ({ whyChooseUs, isVisible }) => {
  return (
    <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header de la sección con estilo minimalista */}
        <div
          className={`text-center mb-20 animate-fade-in-up ${
            isVisible.whyUs ? "visible" : ""
          }`}
          data-animate
          id="whyUs"
        >
          <span className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.5em] mb-4 block">
            Nuestra Propuesta
          </span>
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight text-slate-900">
            ¿Por Qué <span className="font-bold">Elegirnos?</span>
          </h2>
          
          {/* Divisor sofisticado */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-slate-300"></div>
            <div className="w-1.5 h-1.5 bg-slate-900"></div>
            <div className="w-12 h-[1px] bg-slate-300"></div>
          </div>

          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
            Fusionamos ingeniería de vanguardia con un compromiso inquebrantable 
            por la funcionalidad y estética de sus espacios.
          </p>
        </div>

        {/* Grid de Diferenciadores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {whyChooseUs.map((item, i) => (
            <div
              key={i}
              className={`text-center group animate-scale-in ${
                isVisible[`why-${i}`] ? "visible" : ""
              }`}
              data-animate
              id={`why-${i}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Contenedor del Icono: Estilo Geométrico Moderno */}
              <div className="relative w-20 h-20 mx-auto mb-8">
                {/* Fondo decorativo que aparece al hover */}
                <div className="absolute inset-0 bg-blue-600 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out opacity-10"></div>
                
                <div className="w-full h-full border border-slate-200 bg-white flex items-center justify-center relative z-10 transition-all duration-300 group-hover:border-blue-600">
                  <div className="w-12 h-12 bg-slate-900 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-white stroke-[1.5px]" />
                  </div>
                </div>
              </div>

              {/* Título: Tipografía Corporativa */}
              <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-widest group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>

              {/* Descripción: Enfoque Profesional */}
              <p className="text-slate-500 text-sm leading-relaxed font-light px-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .animate-scale-in {
          opacity: 0;
          transform: scale(0.9);
          transition: all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1);
        }

        .animate-scale-in.visible {
          opacity: 1;
          transform: scale(1);
        }

        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .animate-fade-in-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;