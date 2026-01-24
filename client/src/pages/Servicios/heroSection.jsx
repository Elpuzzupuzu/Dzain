import React from "react";
import { Building2, GraduationCap, Briefcase, LayoutGrid } from "lucide-react";

const HeroSection = ({ isVisible }) => {
  // Imagen de oficina ejecutiva moderna
  const officeHero =
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop";

  return (
    <section
      className="w-full relative overflow-hidden py-24"
      style={{ backgroundColor: "#F8FAFC" }}
    >
      {/* Sutiles acentos de fondo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-200/40 rounded-full blur-[100px]" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6">
          {/* Imagen */}
          <div
            className={`animate-fade-in ${
              isVisible?.heroImage ? "visible" : ""
            }`}
            data-animate
            id="heroImage"
          >
            <div className="relative group">
              <div className="absolute -inset-4 border border-slate-200 translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500" />

              <div className="relative overflow-hidden shadow-2xl">
                <img
                  src={officeHero}
                  alt="Mobiliario Ejecutivo DZ"
                  className="w-full h-[550px] object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                <div className="absolute bottom-0 w-full p-8">
                  <div className="border-l-2 border-blue-500 pl-6">
                    <p className="text-white font-light text-xl tracking-wide uppercase">
                      Espacios que <span className="font-bold">inspiran</span>{" "}
                      éxito
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contenido */}
          <div
            className={`animate-fade-in ${isVisible?.hero ? "visible" : ""}`}
            data-animate
            id="hero"
          >
            <div className="space-y-8">
              <div>
                <span className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">
                  Soluciones Integrales
                </span>
                <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tighter leading-none text-slate-900">
                  Nuestra <br />
                  <span className="font-bold text-blue-600">Especialidad</span>
                </h1>
                <div className="w-20 h-[2px] bg-slate-900" />
              </div>

              <p className="text-xl text-slate-600 leading-relaxed font-light">
                Diseñamos y equipamos entornos de alto rendimiento con{" "}
                <span className="font-medium text-slate-900">
                  mobiliario ergonómico de vanguardia
                </span>
                . Desde aulas dinámicas hasta despachos de alta dirección.
              </p>

              {/* Categorías */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                {[
                  {
                    icon: Building2,
                    title: "Corporativo",
                    desc: "Open Office & Cowork",
                    color: "bg-slate-900",
                  },
                  {
                    icon: GraduationCap,
                    title: "Escolar",
                    desc: "Aulas & Bibliotecas",
                    color: "bg-blue-600",
                  },
                  {
                    icon: Briefcase,
                    title: "Ejecutivo",
                    desc: "Alta Dirección",
                    color: "bg-slate-800",
                  },
                ].map((category, i) => (
                  <div
                    key={i}
                    className="bg-white p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex flex-col items-start">
                      <div
                        className={`w-12 h-12 ${category.color} flex items-center justify-center mb-4`}
                      >
                        <category.icon
                          className="w-6 h-6 text-white"
                          strokeWidth={1.5}
                        />
                      </div>
                      <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-1">
                        {category.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 font-medium">
                        {category.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Botón */}
              <div className="pt-6">
                <button
                  aria-label="Explorar líneas de diseño"
                  className="flex items-center gap-3 text-slate-900 font-bold text-[11px] uppercase tracking-[0.2em] border-b-2 border-blue-600 pb-2 hover:text-blue-600 transition-colors"
                >
                  <LayoutGrid className="w-4 h-4" />
                  Explorar Líneas de Diseño
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animaciones */}
      <style>{`
        .animate-fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .animate-fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
