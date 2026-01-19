"use client";

import React, { useState, useEffect, useCallback } from "react";
import { slidesData } from "./components/data";
import SlideContent from "./components/SlideContent";
import SliderControls from "./components/SliderControls";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  }, []);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  const handleDotClick = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(handleNext, 7000);
      return () => clearInterval(timer);
    }
  }, [isPaused, handleNext]);

  const currentSlideData = slidesData[currentSlide];

  return (
    <section 
      className="relative w-full h-[85vh] min-h-[600px] overflow-hidden bg-slate-950"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Corporate Real Estate Showcase"
    >
      {/* Capa de refinamiento estético (Overlay) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent" />
      
      {/* Contenido Dinámico */}
      <SlideContent data={currentSlideData} direction={direction} />

      {/* Controles de Navegación */}
      <SliderControls
        slidesCount={slidesData.length}
        currentSlide={currentSlide}
        onPrev={handlePrev}
        onNext={handleNext}
        onDotClick={handleDotClick}
      />

      {/* Indicador visual de progreso (opcional) */}
      <div className="absolute bottom-0 left-0 h-1 bg-blue-600 z-30 transition-all duration-[7000ms] ease-linear"
           style={{ width: isPaused ? '0%' : '100%' }} />
    </section>
  );
};

export default HeroSlider;