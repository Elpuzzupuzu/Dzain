import React from 'react';
import { MapPin, Phone, Mail, Navigation, Clock } from 'lucide-react';

const Location = () => {
  const companyInfo = {
    name: 'DZ Mobiliario',
    address: 'Calle 69d #686b, Jardines de Caucel, C.P. 97314, Mérida, Yucatán',
    phone: '9999684966',
    email: 'dzmobiliario@outlook.com',
    // URL de Google Maps para el iframe (Sustituir por el src real de "Compartir > Insertar mapa")
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.87123456789!2d-89.7000000!3d20.9800000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDU4JzQ4LjAiTiA4OcKwNDInMDAuMCJX!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx',
  };

  return (
    <section className="bg-slate-50 py-24 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Encabezado Editorial */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-slate-400"></span>
              <span className="text-xs font-bold tracking-[0.3em] text-slate-500 uppercase">Presencia Local</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 leading-tight">
              Visite nuestro <span className="font-bold">Showroom</span>
            </h2>
          </div>
          <p className="text-slate-500 text-lg font-light max-w-sm border-l border-slate-200 pl-6">
            Atención personalizada para proyectos corporativos y residenciales de alto impacto.
          </p>
        </div>

        <div className="bg-white shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Columna de Información (Lado Izquierdo) */}
          <div className="lg:w-2/5 p-10 md:p-16 flex flex-col justify-between bg-slate-900 text-white">
            <div className="space-y-12">
              
              {/* Bloque: Dirección */}
              <div className="group">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Ubicación Principal</h3>
                </div>
                <p className="text-xl font-light leading-relaxed text-slate-200">
                  {companyInfo.address}
                </p>
              </div>

              {/* Bloque: Contacto Directo */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-1">
                <div className="group">
                  <div className="flex items-center gap-3 mb-2">
                    <Phone className="w-4 h-4 text-blue-400" />
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Teléfono</h3>
                  </div>
                  <a href={`tel:${companyInfo.phone}`} className="text-lg font-light hover:text-blue-400 transition-colors">
                    {companyInfo.phone}
                  </a>
                </div>

                <div className="group">
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Email</h3>
                  </div>
                  <a href={`mailto:${companyInfo.email}`} className="text-lg font-light hover:text-blue-400 transition-colors break-words">
                    {companyInfo.email}
                  </a>
                </div>
              </div>

              {/* Bloque: Horarios */}
              <div className="pt-8 border-t border-slate-800">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Horario de Oficina</span>
                </div>
                <div className="space-y-1 text-sm text-slate-300 font-light">
                  <p>Lunes — Viernes: 08:00 a 18:00 hrs</p>
                  <p>Sábado: 09:00 a 14:00 hrs</p>
                </div>
              </div>
            </div>

            {/* Botón CTA */}
            <div className="mt-12">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(companyInfo.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 w-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                <Navigation className="w-4 h-4" />
                Obtener Ruta
              </a>
            </div>
          </div>

          {/* Contenedor del Mapa (Lado Derecho) */}
          <div className="lg:w-3/5 min-h-[500px] relative grayscale hover:grayscale-0 transition-all duration-700">
            <iframe
              title="Sede DZ Mobiliario"
              src={companyInfo.mapEmbedUrl}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;