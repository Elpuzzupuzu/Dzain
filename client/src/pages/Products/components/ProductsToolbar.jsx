import React, { useState, useEffect } from 'react';
import { Grid3x3, List, SlidersHorizontal, Filter } from "lucide-react";
// Importamos el componente Search que ya funciona
import Search from '../../../components/Header/Search/Search'; 

// --- LÓGICA DE DETECCIÓN DE MÓVIL (Tamaño 'sm' de Tailwind) ---
const MOBILE_BREAKPOINT_PX = 640; 

const isMobileWindow = () => {
    // Si no estamos en el navegador (ej. renderizado en el servidor), asumimos falso
    if (typeof window === 'undefined') return false; 
    return window.innerWidth < MOBILE_BREAKPOINT_PX;
};
// -----------------------------------------------------------------

// Botón de filtro adaptativo profesional
const FilterToggleButton = ({ isOpen, onToggle, filterCount }) => (
    <>
        {/* Versión escritorio */}
        <button
            onClick={onToggle}
            className="hidden sm:flex relative flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 font-medium group"
        >
            <SlidersHorizontal className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
            <span className="text-sm">Filtros</span>
            {filterCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md">
                    {filterCount}
                </span>
            )}
        </button>

        {/* Versión móvil: solo icono */}
        <button
            onClick={onToggle}
            className="sm:hidden relative p-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
            aria-label="Filtros"
        >
            <SlidersHorizontal className="w-5 h-5" />
            {filterCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {filterCount}
                </span>
            )}
        </button>
    </>
);

const ProductsToolbar = ({
    sortBy,
    setSortBy,
    itemsPerPage,
    setItemsPerPage,
    viewMode,
    setViewMode,
    sidebarOpen,
    setSidebarOpen,
    getFilterCount
}) => {
    
    // 1. Estado para manejar si es móvil
    const [isMobile, setIsMobile] = useState(false);

    // 2. useEffect para detectar el tamaño de la ventana al montar y al cambiar
    useEffect(() => {
        // Ejecutar al montar
        const handleResize = () => {
            const mobile = isMobileWindow();
            setIsMobile(mobile);
            
            // LÓGICA CLAVE: Si es móvil, forzar siempre el modo de lista
            if (mobile) {
                setViewMode("list");
            }
        };

        handleResize(); // Ejecutar al inicio

        // Escuchar cambios de tamaño de ventana
        window.addEventListener('resize', handleResize);
        
        // Limpieza: Remover el listener al desmontar el componente
        return () => window.removeEventListener('resize', handleResize);
    }, [setViewMode]);
    

    // Manejador del cambio de modo de vista
    const handleViewModeChange = (mode) => {
        // Prevenir el cambio a 'grid' si estamos en modo móvil
        if (isMobile && mode === 'grid') {
            return; 
        }
        setViewMode(mode);
    };

    return (
        <div className="mb-8 bg-white rounded-2xl shadow-sm border border-gray-100 backdrop-blur-sm relative z-40">

            {/* Barra decorativa superior con gradiente profesional */}
            <div className="h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-t-2xl"></div>

            <div className="p-5 lg:p-6 space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-between lg:gap-6">

                {/* Sección de búsqueda */}
                <div className="flex items-center gap-3 flex-1 max-w-2xl">
                    <FilterToggleButton
                        isOpen={sidebarOpen}
                        onToggle={() => setSidebarOpen(prev => !prev)}
                        filterCount={getFilterCount()}
                    />

                    {/* CONTENEDOR DE BÚSQUEDA - Contiene el componente Search */}
                    <div className="relative flex-1 group">
                        <Search /> 
                    </div>
                </div>

                {/* Sección de controles */}
                <div className="flex items-center gap-3 flex-wrap justify-end">

                    {/* Items per page Dropdown */}
                    <div className="hidden sm:flex relative group">
                        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                        <select
                            value={itemsPerPage}
                            onChange={(e) => setItemsPerPage(Math.max(14, Number(e.target.value)))}
                            className="pl-10 pr-10 py-2.5 border border-gray-200 rounded-xl text-sm font-medium bg-white hover:bg-gray-50 hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200 cursor-pointer outline-none appearance-none bg-no-repeat bg-right"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239CA3AF'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                                backgroundPosition: 'right 0.5rem center',
                                backgroundSize: '1.25em 1.25em',
                                paddingRight: '2.5rem'
                            }}
                        >
                            <option value={14}>14 productos</option>
                            <option value={21}>21 productos</option>
                            <option value={42}>42 productos</option>
                        </select>
                    </div>

                    {/* View Mode Toggle */}
                    <div className="flex bg-gray-50 border border-gray-200 rounded-xl p-1 shadow-sm">
                        <button
                            onClick={() => handleViewModeChange("grid")}
                            disabled={isMobile} 
                            className={`p-2 rounded-lg transition-all duration-200 ${
                                isMobile ? "text-gray-300 cursor-not-allowed" : 
                                viewMode === "grid"
                                    ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-sm"
                                    : "text-gray-500 hover:text-gray-700 hover:bg-white"
                            }`}
                            aria-label="Vista de cuadrícula"
                        >
                            <Grid3x3 className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => handleViewModeChange("list")}
                            className={`p-2 rounded-lg transition-all duration-200 ${
                                viewMode === "list"
                                    ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-sm"
                                    : "text-gray-500 hover:text-gray-700 hover:bg-white"
                            }`}
                            aria-label="Vista de lista"
                        >
                            <List className="w-5 h-5" />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductsToolbar;