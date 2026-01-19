import React from 'react';
import { Grid3x3, List, SlidersHorizontal, Filter, TrendingUp, PlusCircle, ChevronDown } from "lucide-react";
import Search from "../adminToolbar/adminSearch";

const FilterToggleButton = ({ isOpen, onToggle, filterCount }) => (
  <>
    {/* Versión escritorio */}
    <button
      onClick={onToggle}
      className="hidden sm:flex relative items-center gap-3 px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white transition-all duration-300 font-bold uppercase tracking-widest text-[10px] shadow-sm group"
    >
      <SlidersHorizontal className={`w-4 h-4 transition-transform duration-500 ${isOpen ? 'rotate-90' : ''}`} />
      <span>Filtros</span>
      {filterCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg ring-2 ring-white">
          {filterCount}
        </span>
      )}
    </button>

    {/* Versión móvil */}
    <button
      onClick={onToggle}
      className="sm:hidden relative p-3 bg-slate-900 text-white shadow-md"
      aria-label="Filtros"
    >
      <SlidersHorizontal className="w-5 h-5" />
      {filterCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
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
  getFilterCount,
  onAdminProductSelect,
  onOpenCreateModal 
}) => (
  <div className="mb-10 bg-white border border-slate-200 shadow-sm relative z-40">
    
    {/* Línea decorativa superior sutil */}
    <div className="h-[3px] bg-slate-100 w-full">
        <div className="h-full bg-blue-600 w-24"></div>
    </div>

    <div className="p-5 lg:p-6 space-y-5 lg:space-y-0 lg:flex lg:items-center lg:justify-between lg:gap-6">

      {/* Búsqueda + Acciones Principales */}
      <div className="flex items-center gap-4 flex-1 max-w-3xl">
        
        <FilterToggleButton
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(prev => !prev)}
          filterCount={getFilterCount()}
        />

        {/* Botón Añadir: Estilo Corporativo */}
        <button
          onClick={onOpenCreateModal}
          className="flex items-center gap-3 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 font-bold uppercase tracking-widest text-[10px] shadow-sm"
        >
          <PlusCircle className="w-4 h-4" />
          <span className="hidden md:inline">Nuevo Producto/servicio</span>
        </button>

        {/* Buscador: Contenedor refinado */}
        <div className="relative flex-1 group">
          <div className="bg-slate-50 border-b border-transparent focus-within:border-blue-600 transition-all duration-300 px-1">
            <Search onAdminProductSelect={onAdminProductSelect} />
          </div>
        </div>
      </div>

      {/* Controles de Visualización y Orden */}
      <div className="flex items-center gap-4 flex-wrap justify-end">

        {/* Selector: Ordenar */}
        <div className="hidden sm:block relative group">
          <TrendingUp className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5 pointer-events-none" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="appearance-none pl-9 pr-10 py-2.5 bg-white border border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-700 hover:border-slate-400 focus:outline-none cursor-pointer transition-colors"
          >
            <option value="price-asc">Precio: Ascendente</option>
            <option value="price-desc">Precio: Descendente</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400 pointer-events-none" />
        </div>

        {/* Selector: Items por página */}
        <div className="hidden sm:block relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5 pointer-events-none" />
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Math.max(14, Number(e.target.value)))}
            className="appearance-none pl-9 pr-10 py-2.5 bg-white border border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-700 hover:border-slate-400 focus:outline-none cursor-pointer transition-colors"
          >
            <option value={14}>14 Resultados</option>
            <option value={21}>21 Resultados</option>
            <option value={42}>42 Resultados</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400 pointer-events-none" />
        </div>

        {/* Toggle de Vista: Estilo Minimalista */}
        <div className="flex bg-slate-100 p-1 gap-1">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 transition-all duration-300 ${
              viewMode === "grid"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-slate-400 hover:text-slate-600"
            }`}
            aria-label="Vista de cuadrícula"
          >
            <Grid3x3 className="w-4 h-4" />
          </button>

          <button
            onClick={() => setViewMode("list")}
            className={`p-2 transition-all duration-300 ${
              viewMode === "list"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-slate-400 hover:text-slate-600"
            }`}
            aria-label="Vista de lista"
          >
            <List className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  </div>
);

export default ProductsToolbar;