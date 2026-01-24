import React from 'react';
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ service, isVisible, index }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/servicios/${service.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className={`group relative bg-white border border-slate-100 p-10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2 animate-scale-in ${
        isVisible ? "visible" : ""
      }`}
      data-animate
      id={`service-${index}`}
      style={{ animationDelay: `${index * 0.1}s`, cursor: "pointer" }}
    >
      {/* Indicador superior de categoría */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-slate-50 overflow-hidden">
        <div className="h-full bg-blue-600 w-0 group-hover:w-full transition-all duration-700 ease-in-out"></div>
      </div>

      {/* Icono Minimalista */}
      <div
        className={`w-14 h-14 bg-slate-50 text-slate-900 border border-slate-100 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500`}
      >
        <service.icon className="w-6 h-6 stroke-[1.5px]" />
      </div>

      {/* Título de la Línea de Mobiliario/Servicio */}
      <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wider group-hover:text-blue-600 transition-colors">
        {service.title}
      </h3>

      {/* Descripción Editorial */}
      <p className="text-slate-500 font-light leading-relaxed mb-8 text-sm md:text-base">
        {service.description}
      </p>

      {/* Lista de Especificaciones */}
      <ul className="space-y-4 mb-10">
        {service.items.map((item, idx) => (
          <li key={idx} className="flex items-start text-[13px] text-slate-600 font-medium">
            <CheckCircle2 className="w-4 h-4 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
            <span className="uppercase tracking-tight">{item.name}</span>
          </li>
        ))}
      </ul>

      {/* Acción Final: Botón Invisible/Minimalista */}
      <div className="flex items-center gap-2 text-slate-900 text-[11px] font-bold uppercase tracking-[0.2em] group-hover:gap-4 transition-all duration-300">
        <span>Explorar Solución</span>
        <ArrowRight className="w-4 h-4 text-blue-600" />
      </div>

      <style>{`
        .animate-scale-in {
          opacity: 0;
          transform: scale(0.95);
          transition: all 0.7s cubic-bezier(0.2, 1, 0.3, 1);
        }

        .animate-scale-in.visible {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>
    </div>
  );
};

export default ServiceCard;