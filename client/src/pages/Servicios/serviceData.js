import { 
  Building2, GraduationCap, Briefcase, 
  ShieldCheck, PenTool, Layout, 
  Award, Users, Clock, CheckCircle2 
} from "lucide-react";

export const services = [
  { 
    id: "mobiliario-ejecutivo",
    icon: Briefcase, 
    title: 'Mobiliario de Alta Dirección', 
    description: 'Colecciones exclusivas diseñadas para despachos presidenciales y gerenciales que proyectan autoridad y elegancia.',
    items: [
      { name: 'Escritorios de Autor', details: 'Materiales nobles y acabados artesanales.', image: 'https://images.unsplash.com/photo-1585202900225-6d3ac20a6962?q=80&w=1000&auto=format&fit=crop' },
      { name: 'Sillería Ergonómica', details: 'Soporte premium con diseño galardonado.', image: 'https://images.unsplash.com/photo-1505797149-43b0069ec26b?q=80&w=1000&auto=format&fit=crop' },
      { name: 'Sistemas de Almacenaje', details: 'Optimización estética del espacio documental.', image: 'https://images.unsplash.com/photo-1595844730298-b960ff98fee0?q=80&w=1000&auto=format&fit=crop' }
    ],
    color: 'slate-900' // Usamos nombres de colores de nuestra nueva paleta
  },
  { 
    id: "espacios-corporativos",
    icon: Building2, 
    title: 'Entornos Corporativos', 
    description: 'Soluciones integrales para estaciones de trabajo operativas y áreas de colaboración dinámica.',
    items: [
      { name: 'Open Office Solutions', details: 'Diseños que fomentan la colaboración y el enfoque.', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1000&auto=format&fit=crop' },
      { name: 'Panelería Acústica', details: 'Privacidad auditiva en entornos de alto tráfico.', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop' },
      { name: 'Mesas de Juntas', details: 'Tecnología integrada para reuniones de alto nivel.', image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=1000&auto=format&fit=crop' }
    ],
    color: 'blue-600'
  },
  { 
    id: "equipamiento-escolar",
    icon: GraduationCap, 
    title: 'Equipamiento Educativo', 
    description: 'Mobiliario diseñado para el aprendizaje activo, resistente y adaptado a nuevas metodologías pedagógicas.',
    items: [
      { name: 'Aulas Flexibles', details: 'Mobiliario móvil para configuraciones rápidas.', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop' },
      { name: 'Laboratorios Especializados', details: 'Superficies técnicas de alta resistencia.', image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop' },
      { name: 'Zonas de Biblioteca', details: 'Espacios de estudio que inspiran concentración.', image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1000&auto=format&fit=crop' }
    ],
    color: 'slate-800'
  },
  { 
    id: "consultoria-espacios",
    icon: Layout, 
    title: 'Consultoría de Espacios', 
    description: 'Análisis de flujo y optimización de metros cuadrados para maximizar su inversión inmobiliaria.',
    items: [
      { name: 'Layout 2D/3D', details: 'Visualización precisa antes de la ejecución.', image: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=1000&auto=format&fit=crop' },
      { name: 'Gestión de Proyectos', details: 'Supervisión integral de montaje y logística.', image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop' },
      { name: 'Interiorismo Corporativo', details: 'Curaduría de materiales y paletas de color.', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1000&auto=format&fit=crop' }
    ],
    color: 'blue-700'
  },
  { 
    id: "diseño-especializado",
    icon: PenTool, 
    title: 'Mobiliario a Medida', 
    description: 'Fabricación de piezas únicas que se adaptan a las necesidades específicas de su marca o espacio.',
    items: [
      { name: 'Recepciones de Impacto', details: 'La primera impresión de su compañía.', image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1000&auto=format&fit=crop' },
      { name: 'Carpintería Arquitectónica', details: 'Detalles en madera que definen ambientes.', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop' },
      { name: 'Mobiliario de Lounge', details: 'Confort y diseño para zonas de descanso.', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1000&auto=format&fit=crop' }
    ],
    color: 'slate-700'
  },
  { 
    id: "certificaciones-normas",
    icon: ShieldCheck, 
    title: 'Garantía y Normativa', 
    description: 'Cumplimos con los estándares internacionales de ergonomía y sostenibilidad (LEED/BIFMA).',
    items: [
      { name: 'Certificación LEED', details: 'Compromiso con la sostenibilidad ambiental.', image: 'https://images.unsplash.com/photo-1449156059431-789955418929?q=80&w=1000&auto=format&fit=crop' },
      { name: 'Ergonomía Certificada', details: 'Salud y bienestar para sus colaboradores.', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop' },
      { name: 'Mantenimiento Premium', details: 'Aseguramos la vida útil de su inversión.', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6958?q=80&w=1000&auto=format&fit=crop' }
    ],
    color: 'blue-800'
  }
];

export const whyChooseUs = [
  { icon: Award, title: "Liderazgo en el Sector", description: "Más de una década equipando a las empresas más influyentes del país." },
  { icon: Users, title: "Enfoque en Bienestar", description: "Nuestras soluciones mejoran la retención de talento y la productividad." },
  { icon: Clock, title: "Logística Impecable", description: "Entregas programadas y montaje profesional sin interrumpir su operación." },
  { icon: CheckCircle2, title: "Garantía DZ Premium", description: "Respaldo total en herrajes, estructuras y textiles de cada pieza." }
];