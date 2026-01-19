import React, { useState, useEffect } from 'react';
import { Grid3x3, List, SlidersHorizontal, ChevronDown } from "lucide-react";
import Search from '../../../components/Header/Search/Search'; 

const MOBILE_BREAKPOINT_PX = 640; 

const isMobileWindow = () => {
    if (typeof window === 'undefined') return false; 
    return window.innerWidth < MOBILE_BREAKPOINT_PX;
};

// Botón de filtro con estética de "Luxury Boutique"
const FilterToggleButton = ({ isOpen, onToggle, filterCount }) => (
    <>
        {/* Versión escritorio: Estilo minimalista oscuro */}
        <button
            onClick={onToggle}
            className="hidden sm:flex relative items-center gap-3 px-6 py-3 bg-slate-900 hover:bg-blue-700 text-white transition-all duration-300 font-bold uppercase tracking-widest text-[10px] shadow-lg shadow-slate-200"
        >
            <SlidersHorizontal className={`w-4 h-4 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
            <span>Filtros</span>
            {filterCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center ring-4 ring-white">
                    {filterCount}
                </span>
            )}
        </button>

        {/* Versión móvil */}
        <button
            onClick={onToggle}
            className="sm:hidden relative p-3 bg-slate-900 text-white rounded-none shadow-md"
            aria-label="Filtros"
        >
            <SlidersHorizontal className="w-5 h-5" />
            {filterCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const mobile = isMobileWindow();
            setIsMobile(mobile);
            if (mobile) setViewMode("list");
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [setViewMode]);

    const handleViewModeChange = (mode) => {
        if (isMobile && mode === 'grid') return; 
        setViewMode(mode);
    };

    return (
        <div className="mb-10 bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative z-40">
            {/* Línea de acento sutil */}
            <div className="h-[2px] bg-slate-100 w-full">
                <div 
                    className="h-full bg-blue-600 transition-all duration-1000" 
                    style={{ width: sidebarOpen ? '100%' : '15%' }}
                />
            </div>

            <div className="p-4 lg:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6">

                {/* Buscador y Filtros */}
                <div className="flex items-center gap-4 flex-1">
                    <FilterToggleButton
                        isOpen={sidebarOpen}
                        onToggle={() => setSidebarOpen(prev => !prev)}
                        filterCount={getFilterCount()}
                    />

                    <div className="relative flex-1 group">
                        {/* El componente Search heredará el estilo del contenedor si es flexible */}
                        <div className="w-full bg-slate-50 border-b border-transparent focus-within:border-blue-600 transition-all duration-300 px-2">
                            <Search /> 
                        </div>
                    </div>
                </div>

                {/* Controles de Visualización */}
                <div className="flex items-center gap-6 justify-between lg:justify-end border-t lg:border-t-0 pt-4 lg:pt-0">
                    
                    {/* Selector de cantidad: Minimalista */}
                    <div className="flex items-center gap-3">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hidden xl:inline">Mostrar:</span>
                        <div className="relative">
                            <select
                                value={itemsPerPage}
                                onChange={(e) => setItemsPerPage(Math.max(14, Number(e.target.value)))}
                                className="appearance-none bg-white border border-slate-200 pl-4 pr-10 py-2 text-xs font-bold text-slate-700 hover:border-slate-400 transition-colors cursor-pointer focus:outline-none"
                            >
                                <option value={14}>14 Unidades</option>
                                <option value={21}>21 Unidades</option>
                                <option value={42}>42 Unidades</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400 pointer-events-none" />
                        </div>
                    </div>

                    {/* Selector de Modo: Industrial/Moderno */}
                    <div className="flex bg-slate-100 p-1 gap-1">
                        <button
                            onClick={() => handleViewModeChange("grid")}
                            disabled={isMobile}
                            className={`p-2 transition-all duration-300 ${
                                isMobile ? "opacity-20 cursor-not-allowed" : 
                                viewMode === "grid"
                                    ? "bg-white text-blue-600 shadow-sm"
                                    : "text-slate-400 hover:text-slate-600"
                            }`}
                        >
                            <Grid3x3 className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => handleViewModeChange("list")}
                            className={`p-2 transition-all duration-300 ${
                                viewMode === "list"
                                    ? "bg-white text-blue-600 shadow-sm"
                                    : "text-slate-400 hover:text-slate-600"
                            }`}
                        >
                            <List className="w-4 h-4" />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductsToolbar;