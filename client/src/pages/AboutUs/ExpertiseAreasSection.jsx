import React from 'react';

const ExpertiseCard = ({ 
  title, 
  description, 
  image, 
  animationClass, 
  id, 
  style 
}) => (
  <div
    id={id}
    className={`group relative overflow-hidden rounded-none border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 ${animationClass}`}
    data-animate
    style={style}
  >
    {/* Contenedor de Imagen con Overlay de Contraste */}
    <div className="relative h-80 overflow-hidden bg-slate-900">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
      />
      {/* Gradiente de seguridad para legibilidad de texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
    </div>

    {/* Contenido con Tipografía Minimalista */}
    <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
      <p className="text-[10px] uppercase tracking-[0.3em] text-blue-400 font-bold mb-2">Especialidad</p>
      <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-slate-300 leading-relaxed font-light opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        {description}
      </p>
      <div className="mt-4">
        <div className="w-8 h-[1px] bg-blue-500 group-hover:w-full transition-all duration-700"></div>
      </div>
    </div>
  </div>
);

const ExpertiseAreasSection = ({ expertiseAreas = [], getAnimationClass = (key, fallback = 'fade-in') => fallback }) => {
  const defaultExpertiseAreas = [
    {
      title: "Mobiliario de Alta Dirección",
      description: "Escritorios presidenciales y sillería ergonómica de autor.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800"
    },
    {
      title: "Arquitectura de Interiores",
      description: "Optimización de flujos de trabajo y diseño de espacios colaborativos.",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800"
    },
    {
      title: "Equipamiento Educativo",
      description: "Aulas dinámicas diseñadas para las metodologías de aprendizaje del futuro.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800"
    },
    {
      title: "Sistemas de Almacenaje",
      description: "Archiveros y estantería inteligente integrada a la estética de la oficina.",
      image: "https://images.unsplash.com/photo-1595844730298-b960ff98fee0?q=80&w=800"
    },
    {
      title: "Acústica y Privacidad",
      description: "Paneles fonoabsorbentes y cabinas de enfoque para entornos ruidosos.",
      image: "https://images.unsplash.com/photo-1505797149-43b0069ec26b?q=80&w=800"
    },
    {
      title: "Consultoría de Espacios",
      description: "Renders 3D y planificación estratégica de metros cuadrados.",
      image: "https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=800"
    }
  ];

  const areas = expertiseAreas.length > 0 ? expertiseAreas : defaultExpertiseAreas;

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div 
          className={`mb-16 ${getAnimationClass('expertise')}`}
          data-animate
          id="expertise"
        >
          <span className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.5em] mb-4 block">Capacidades</span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-slate-900">
            Nuestras Áreas de <span className="font-bold italic">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-slate-900 mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {areas.map((area, index) => (
            <ExpertiseCard 
              key={area.title}
              {...area} 
              animationClass={getAnimationClass(`area-${index}`, 'scale-in')}
              id={`area-${index}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseAreasSection;