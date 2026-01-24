import { useEffect, useState } from "react";
import HeroSection from "./heroSection";
import ServicesGrid from "./serviceGrid";
import WhyChooseUs from "./whyChooseUs";
import CTASection from "./CTASection";
import { services, whyChooseUs } from "./serviceData";
import "./Animations.css";

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      <section 
        id="hero-container" 
        data-animate 
        className="relative bg-slate-900 overflow-hidden"
      >
        {/* Capa de overlay sutil para mejorar legibilidad global */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-white/10 z-[1]"></div>
        
        <div className="relative z-10">
          <HeroSection isVisible={isVisible} />
        </div>
      </section>

      {/* Sección 2: Servicios con espaciado optimizado */}
      <section 
        id="servicesHeader" 
        data-animate 
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <ServicesGrid services={services} isVisible={isVisible} />
        </div>
      </section>

      {/* Sección 3: Diferenciadores con fondo Slate para contraste de sección */}
      <section 
        id="whyUs" 
        data-animate 
        className="py-24 bg-slate-50 border-y border-slate-100"
      >
        <div className="max-w-7xl mx-auto px-6">
          <WhyChooseUs whyChooseUs={whyChooseUs} isVisible={isVisible} />
        </div>
      </section>

      {/* Sección 4: Cierre con énfasis en el CTA */}
      <section 
        id="cta-section" 
        data-animate 
        className="py-24 bg-white"
      >
        <CTASection isVisible={isVisible} />
      </section>
      
    </main>
  );
};

export default ServicesPage;