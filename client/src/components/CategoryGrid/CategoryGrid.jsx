import React from 'react';
import { Building2, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const CategoryCard = ({ title, image, onClick, subtitle }) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="group relative overflow-hidden bg-white cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 rounded-sm"
    >
      <div className="relative h-[450px] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-90" />
        
        <div className="absolute bottom-0 left-0 w-full p-8">
          <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            Ver Disponibilidad
          </p>
          <h3 className="text-2xl font-light text-white tracking-tight leading-none mb-2">
            {title}
          </h3>
          <p className="text-slate-400 text-sm font-light mb-4 opacity-80 group-hover:opacity-100">
            {subtitle}
          </p>
          <div className="w-0 h-[1px] bg-blue-500 group-hover:w-full transition-all duration-700" />
        </div>
      </div>
    </motion.div>
  );
};

function CategoryGrid() {
  const navigate = useNavigate(); 
  
  const categories = [
    { 
      title: 'Distrito Financiero', 
      subtitle: 'Oficinas Clase A+',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop' 
    },
    { 
      title: 'Centros de Innovación', 
      subtitle: 'Espacios Coworking Premium',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop' 
    },
    { 
      title: 'Sedes Corporativas', 
      subtitle: 'Edificios Independientes',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop' 
    },
    { 
      title: 'Desarrollos Verdes', 
      subtitle: 'Certificación LEED',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop' 
    },
  ];

  return (
    <section className="bg-white py-24 px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-12 bg-blue-600"></span>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.3em]">
                Portafolio Inmobiliario
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight">
              Espacios que inspiran <span className="font-bold border-b-4 border-blue-600/20">éxito.</span>
            </h2>
            <p className="mt-6 text-slate-500 text-lg font-light leading-relaxed">
              Curaduría exclusiva de propiedades corporativas en las ubicaciones más estratégicas de la ciudad.
            </p>
          </div>
          
          <button 
            onClick={() => navigate("/propiedades")}
            className="group flex items-center gap-3 px-10 py-5 bg-slate-950 text-white text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-all duration-500"
          >
            Explorar todas las sedes
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {categories.map((category, index) => (
            <CategoryCard 
              key={index}
              title={category.title}
              subtitle={category.subtitle}
              image={category.image}
              onClick={() => navigate("/propiedades")}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100 border-t border-slate-100 pt-16">
          <ServiceItem 
            Icon={Building2} 
            title="Gestión de Activos" 
            desc="Administración integral de edificios corporativos con estándares internacionales de mantenimiento."
            color="text-slate-900"
            bgColor="bg-slate-50"
          />
          <ServiceItem 
            Icon={ShieldCheck} 
            title="Asesoría Legal" 
            desc="Soporte completo en contratos de arrendamiento, normativas locales y cumplimiento corporativo."
            color="text-blue-600"
            bgColor="bg-blue-50"
          />
          <ServiceItem 
            Icon={MapPin} 
            title="Ubicaciones Prime" 
            desc="Análisis de mercado para asegurar que su empresa se posicione en los hubs de mayor plusvalía."
            color="text-slate-900"
            bgColor="bg-slate-50"
          />
        </div>
      </div>
    </section>
  );
}

const ServiceItem = ({ Icon, title, desc, color, bgColor }) => (
  <div className="flex flex-col p-10 group hover:bg-slate-50 transition-all duration-300">
    <div className={`w-12 h-12 ${bgColor} flex items-center justify-center mb-8 transition-all duration-500 group-hover:bg-slate-900 group-hover:text-white`}>
      <Icon className={`w-5 h-5 transition-colors duration-500`} />
    </div>
    <h4 className="text-xs font-bold text-slate-900 mb-4 uppercase tracking-[0.2em]">{title}</h4>
    <p className="text-slate-500 font-light leading-relaxed text-sm">
      {desc}
    </p>
  </div>
);

export default CategoryGrid;