import React from "react";
import { Building2, Users, Award, TrendingUp, CheckCircle, Eye, Target, Lightbulb, ArrowRight } from "lucide-react";

const AboutUsPage = () => {
  const stats = [
    { number: "15+", label: "Años de Trayectoria" },
    { number: "500+", label: "Proyectos Corporativos" },
    { number: "98%", label: "Tasa de Fidelización" },
    { number: "50+", label: "Expertos en Diseño" }
  ];

  const values = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Visión",
      description: "Ser el referente regional en arquitectura de interiores, redefiniendo el concepto de oficina mediante mobiliario que potencie el capital humano."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Misión",
      description: "Materializar espacios de alto rendimiento que fusionen ergonomía avanzada, estética contemporánea y funcionalidad operativa."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Valores",
      description: "Excelencia técnica, integridad en el servicio, sostenibilidad en materiales y un enfoque obsesivo en el detalle constructivo."
    }
  ];

  const features = [
    { icon: <Award className="w-5 h-5" />, text: "Calidad Premium Garantizada" },
    { icon: <Users className="w-5 h-5" />, text: "Consultoría de Espacios" },
    { icon: <Building2 className="w-5 h-5" />, text: "Logística Especializada" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Sostenibilidad Aplicada" }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative bg-zinc-900 text-white py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/80 to-transparent z-10"></div>
        
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-25"
            alt="Showroom de mobiliario"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-20">
          <span className="text-amber-600 font-bold uppercase tracking-[0.4em] text-sm mb-4 block animate-fade-in">
            Nuestra Esencia
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tighter max-w-4xl">
            Diseñamos el futuro del <br />
            <span className="italic font-light text-stone-300">entorno laboral.</span>
          </h1>
          <p className="text-xl text-stone-300 max-w-2xl leading-relaxed font-light">
            DZ Mobiliario: 15 años transformando metros cuadrados en centros de innovación y productividad.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 px-6 z-30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white border border-stone-200 p-8 text-center hover:bg-stone-50 transition-colors">
                <div className="text-4xl font-bold text-zinc-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-amber-700 font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-zinc-900 mb-8 tracking-tight">
                Una trayectoria forjada en <br />
                <span className="text-amber-700">la excelencia.</span>
              </h2>
              <div className="space-y-6 text-stone-600 text-lg font-light leading-relaxed">
                <p>
                  Desde 2009, nuestra filosofía se ha centrado en entender que la oficina no es solo un lugar, sino una herramienta estratégica para el éxito empresarial.
                </p>
                <p>
                  Lo que inició como un proyecto de diseño boutique ha evolucionado hasta convertirse en la opción preferida de corporativos que buscan soluciones integrales, desde el plano inicial hasta la instalación final.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 border-t border-stone-200 pt-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-700">
                      {feature.icon}
                    </div>
                    <span className="text-sm font-semibold text-zinc-800 uppercase tracking-tight">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="aspect-[4/5] bg-zinc-900 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070" 
                  className="w-full h-full object-cover opacity-80"
                  alt="Equipo de diseño"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-2/3 aspect-square bg-amber-700 p-10 hidden md:flex flex-col justify-end text-white">
                <p className="text-3xl font-bold mb-2">DZ</p>
                <p className="text-sm uppercase tracking-widest opacity-90">Estándar de calidad internacional</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="py-24 px-6 bg-stone-50 border-y border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-zinc-900 mb-4 tracking-tighter">
              Pilares Institucionales
            </h2>
            <div className="w-20 h-1 bg-amber-700 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-stone-300">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-12 hover:bg-stone-50 transition-all duration-300">
                <div className="text-amber-700 mb-8 flex justify-center md:justify-start">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-wider">
                  {value.title}
                </h3>
                <p className="text-stone-600 leading-relaxed font-light">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto bg-zinc-900 rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-700/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              ¿Listo para elevar el estándar <br /> de su espacio corporativo?
            </h2>
            <p className="text-stone-400 mb-12 text-lg max-w-2xl mx-auto font-light">
              Hablemos hoy sobre cómo nuestra ingeniería de espacios puede optimizar el rendimiento de su organización.
            </p>
            <button className="group bg-amber-700 hover:bg-white hover:text-zinc-900 text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-500 flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl">
              Iniciar Consultoría
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;