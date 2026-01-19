import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const SlideContent = ({ data, direction }) => {
  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={data.id}
        initial={{ opacity: 0, x: direction * 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -direction * 50 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 w-full h-full"
      >
        {/* Imagen de Fondo con Zoom Suave */}
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8 }}
          src={data.image}
          alt={data.title}
          className="object-cover w-full h-full"
        />

        {/* Información de la Oficina */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-2xl">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-widest text-blue-400 uppercase border border-blue-400/30 bg-blue-400/10 backdrop-blur-md"
              >
                {data.category || "Premium Real Estate"}
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-5xl md:text-7xl font-light text-white leading-tight mb-6"
              >
                {data.title} <span className="font-bold text-blue-500">.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-lg md:text-xl text-slate-300 mb-10 font-light leading-relaxed"
              >
                {data.description}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap gap-4"
              >
                <a 
                  href={data.link} 
                  className="px-8 py-4 bg-white text-slate-900 font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  Ver Detalles
                </a>
                <a 
                  href="/contacto" 
                  className="px-8 py-4 border border-white/30 text-white font-medium hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                >
                  Agendar Visita
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SlideContent;