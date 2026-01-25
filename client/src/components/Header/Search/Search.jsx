import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts, clearSearchResults } from "../../../features/products/productsSlice";
import { useNavigate } from "react-router-dom";
import { SearchIcon, X } from "lucide-react";
import debounce from "lodash.debounce";

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { searchResults, searchLoading } = useSelector((state) => state.products);

  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const debouncedSearch = useRef(
    debounce((value) => {
      if (value.trim() === "") {
        dispatch(clearSearchResults());
      } else {
        dispatch(searchProducts(value));
      }
    }, 300)
  ).current;

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  const handleClear = () => {
    setSearchTerm("");
    dispatch(clearSearchResults());
  };

  const handleSearchClick = () => {
    if (searchTerm.trim() !== "") {
      dispatch(searchProducts(searchTerm));
      setIsFocused(true);
    }
  };

  const handleProductClick = (id) => {
    setIsFocused(false);
    navigate(`/productos/${id}`);
    setSearchTerm("");
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto px-4 py-2" ref={containerRef}>
      {/* Contenedor del Input - Estilo de la imagen */}
      <div className="relative flex items-stretch bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-slate-200 transition-all">
        <div className="flex items-center pl-4 text-gray-400">
          <SearchIcon size={20} />
        </div>
        
        <input
          type="text"
          placeholder="Busca escritorios, sillas ergonómicas..."
          value={searchTerm}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onKeyPress={(e) => {
            if (e.key === "Enter") handleSearchClick();
          }}
          className="w-full py-3 px-4 text-sm outline-none text-slate-700 placeholder-gray-400"
        />

        {searchTerm && (
          <button
            onClick={handleClear}
            className="px-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={18} />
          </button>
        )}

        <button
          onClick={handleSearchClick}
          className="bg-[#1a233a] hover:bg-[#121829] text-white px-6 flex items-center justify-center transition-colors"
        >
          <SearchIcon size={20} />
        </button>
      </div>

      {/* Dropdown de Resultados */}
      {isFocused && searchTerm && (
        <div className="absolute top-full left-4 right-4 mt-3 bg-white border border-gray-100 rounded-xl shadow-2xl z-50 overflow-hidden">
          
          <div className="px-5 py-3 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
              Productos Sugeridos
            </span>
            <button onClick={() => setIsFocused(false)} className="text-gray-400 hover:text-gray-600">
              <X size={14} />
            </button>
          </div>

          <div className="max-h-[350px] overflow-y-auto">
            {searchLoading ? (
              <div className="p-6 text-center text-sm text-gray-500 italic">Buscando en catálogo...</div>
            ) : searchResults.length > 0 ? (
              searchResults.map((product) => (
                <button
                  key={product.id}
                  onClick={() => handleProductClick(product.id)}
                  className="w-full flex items-center gap-4 px-5 py-4 hover:bg-slate-50 transition-colors group border-b border-gray-50 last:border-none"
                >
                  {product.imagen && (
                    <div className="w-14 h-14 flex-shrink-0 bg-gray-50 rounded-lg p-1 border border-gray-100 group-hover:bg-white transition-colors">
                      <img
                        src={product.imagen}
                        alt={product.nombre}
                        className="w-full h-full object-contain mix-blend-multiply"
                      />
                    </div>
                  )}
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-bold text-[#1a233a] group-hover:text-blue-700 transition-colors">
                      {product.nombre}
                    </span>
                    {product.precio !== undefined && (
                      <span className="text-xs font-medium text-gray-400 mt-0.5">
                        ${product.precio}
                      </span>
                    )}
                  </div>
                </button>
              ))
            ) : (
              <div className="p-6 text-center text-sm text-gray-400">
                No se encontraron resultados para "{searchTerm}"
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;

