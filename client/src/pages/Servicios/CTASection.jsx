import { Building2, GraduationCap, Briefcase } from "lucide-react";

const HeroSection = ({ isVisible }) => {
  // Imagen de showroom de mobiliario moderno y oficinas
  const officeHero = "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop";

  return (
    <section
      className="w-full relative overflow-hidden py-24 md:py-32 bg-white" 
    >
      
      {/* Elementos decorativos minimalistas */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-3xl"></div>
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-3xl"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6">
          
          {/* Contenido de Texto - Izquierda */}
          <div
            className={`animate-fade-in-up ${isVisible?.hero ? "visible" : ""} order-2 lg:order-1`}
            data-animate
            id="hero"
          >
            <div className="space-y-6 md:space-y-8">
              <div>
                <p className="text-sm text-blue-600 mb-2 uppercase tracking-[0.4em] font-bold">
                  Diseño • Ergonomía • Innovación
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-4 tracking-tighter leading-none">
                  <span className="text-slate-900">Mobiliario de</span>
                  <br />
                  <span className="font-bold bg-gradient-to-r from-blue-700 via-blue-800 to-slate-900 bg-clip-text text-transparent">
                    Alto Rendimiento
                  </span>
                </h1>
                
                <div className="w-24 h-1 bg-blue-600 mt-4"></div>
              </div>

              <p className="text-xl text-slate-600 leading-relaxed font-light max-w-xl">
                Especialistas en equipamiento **corporativo, ejecutivo y escolar**. Creamos espacios que potencian la productividad con estándares internacionales de calidad.
              </p>

              {/* Categorías Corporativas */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                {[
                  {
                    icon: Building2,
                    title: "Corporativo",
                    count: "Open Office",
                    color: "from-slate-800 to-slate-900",
                    delay: "0s",
                  },
                  {
                    icon: Briefcase,
                    title: "Ejecutivo",
                    count: "Alta Dirección",
                    color: "from-blue-700 to-blue-900",
                    delay: "0.1s",
                  },
                  {
                    icon: GraduationCap,
                    title: "Escolar",
                    count: "Aulas Modernas",
                    color: "from-blue-500 to-cyan-600",
                    delay: "0.2s",
                  },
                ].map((category, i) => (
                  <div
                    key={i}
                    className="group relative bg-white rounded-none p-5 border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/5 cursor-pointer"
                    style={{ animationDelay: category.delay }}
                  >
                    <div className="relative z-10">
                      <div className={`w-10 h-10 bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-lg`}>
                        <category.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-bold text-slate-900 mb-1 text-xs uppercase tracking-widest group-hover:text-blue-600 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">
                        {category.count}
                      </p>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Lado de Imagen - Derecha */}
          <div
            className={`animate-scale-in ${isVisible?.heroImage ? "visible" : ""} order-1 lg:order-2`}
            data-animate
            id="heroImage"
          >
            <div className="relative group p-3 bg-slate-900 shadow-2xl"> 
              <div className="relative overflow-hidden">
                <img
                  src={officeHero}
                  alt="DZ Mobiliario Corporativo"
                  className="w-full h-[550px] object-cover border border-white/10"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

                <div className="absolute bottom-0 w-full p-8 text-white">
                  <div className="w-12 h-1 bg-blue-500 mb-4"></div>
                  <p className="font-light text-2xl tracking-tight leading-snug">
                    Ingeniería aplicada al <span className="font-bold">confort y la eficiencia</span> de su equipo.
                  </p>
                </div>
              </div>

              {/* Badge de Garantía */}
              <div className="absolute -top-6 -right-6 bg-white text-slate-900 px-6 py-4 shadow-xl border border-slate-100 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Garantía DZ</span>
                  <span className="text-xl font-black">10 AÑOS</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .animate-scale-in {
          opacity: 0;
          transform: scale(0.98);
          transition: all 0.8s cubic-bezier(0.2, 1, 0.3, 1);
        }
        .animate-scale-in.visible {
          opacity: 1;
          transform: scale(1);
        }
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.2, 1, 0.3, 1);
        }
        .animate-fade-in-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default HeroSection;