import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ShoppingCart, ChevronRight, Package, Shield, Truck } from "lucide-react";

import { fetchProductById } from "../../features/products/productsSlice";
import useWishlist from "../../hooks/wishList/useWishlist";

// Componentes Modulares
import ProductImage360 from "./components/ProductImage360";
import StarRating from "./components/StarRating";
import RelatedProductsSlider from "../relatedProducts/RelatedProductsSlider";
import ProductReviewsList from "../productReviewsList/ProductReviewsList";
import AddReviewForm from "../productReviewsList/AddReviewForm";

const ProductDetails = ({ onAddToCart }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const products = useSelector((state) => state.adminProducts.items) || [];
  const user = useSelector((state) => state.user);
  const userId = user?.user?.id ?? null;

  const { isInWishlist, toggleWishlist } = useWishlist(userId);
  const [product, setProduct] = useState(null);
  const [addingToCart, setAddingToCart] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const found = products.find((p) => p.id === id);
    if (found) {
      setProduct(found);
    } else {
      dispatch(fetchProductById(id))
        .unwrap()
        .then(setProduct)
        .catch(() => setError("Producto no encontrado."));
    }
  }, [id, products, dispatch]);

  const handleAddToCart = async () => {
    if (!product) return;
    setAddingToCart(true);
    await new Promise((r) => setTimeout(r, 800));
    onAddToCart(product);
    setAddingToCart(false);
  };

  if (error) return <div className="min-h-screen flex items-center justify-center text-red-600 font-medium text-lg">{error}</div>;
  if (!product) return <div className="min-h-screen flex items-center justify-center bg-gray-50"><div className="w-12 h-12 border-4 border-gray-300 border-t-slate-900 rounded-full animate-spin" /></div>;

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-4">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1 text-sm text-gray-600 mb-4">
          <Link to="/" className="hover:text-slate-900 transition-colors">Inicio</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/productos" className="hover:text-slate-900 transition-colors">Productos</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900">{product.nombre}</span>
        </nav>

        {/* Sección Superior: 3 Columnas (Imagen, Info Rápida, Caja de Compra) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          
          {/* 1. Columna Izquierda: Imagen del producto */}
          <div className="lg:col-span-1">
            <ProductImage360 
              product={product} 
              userId={userId} 
              favorite={isInWishlist(product.id)} 
              onToggleWishlist={toggleWishlist} 
            />
          </div>

          {/* 2. Columna Central: Información de cabecera y precios */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h1 className="text-2xl font-medium text-gray-900 mb-2">{product.nombre}</h1>
              <div className="flex items-center gap-2 mb-3">
                <StarRating rating={product.rating} />
                <span className="text-sm text-blue-600">({product.rating ?? 4.6})</span>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-4">
              <div className="text-3xl font-light text-gray-900 mb-1">
                ${product.precio?.toLocaleString('es-MX') || '0'}
                <span className="text-sm align-top">00</span>
              </div>
            </div>

            <div className="space-y-4 text-sm border-t border-gray-100 pt-6">
              <FeatureBadge icon={<Package />} text="Envío incluido" />
              <FeatureBadge icon={<Shield />} text="Garantía 1 año" />
              <FeatureBadge icon={<Truck />} text="Envío rápido" />
            </div>
          </div>

          {/* 3. Columna Derecha: Panel de Compra (Sticky) */}
          <div className="lg:col-span-1">
            <div className="border border-gray-200 rounded-xl p-6 bg-white sticky top-4 shadow-sm">
              <div className="space-y-4">
                <div className="text-sm">
                  <span className="text-green-700 font-semibold text-lg">Disponible</span>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={handleAddToCart}
                    disabled={addingToCart}
                    className={`w-full py-3 rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-all ${
                      addingToCart 
                        ? "bg-gray-200 cursor-not-allowed" 
                        : "bg-yellow-400 hover:bg-yellow-500 text-gray-900 shadow-sm"
                    }`}
                  >
                    {addingToCart ? (
                      <>
                        <div className="w-4 h-4 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                        <span>Agregando...</span>
                      </>
                    ) : (
                      <span>Agregar al carrito</span>
                    )}
                  </button>

                  <button
                    onClick={handleAddToCart}
                    disabled={addingToCart}
                    className="w-full py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm transition-all shadow-sm"
                  >
                    Comprar ahora
                  </button>
                </div>

                <div className="text-xs text-gray-500 space-y-2 pt-4 border-t border-gray-100">
                  <div className="flex justify-between">
                    <span>Envío desde:</span>
                    <span className="text-gray-900 font-medium">Amazon</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Vendido por:</span>
                    <span className="text-gray-900 font-medium">Tienda Official</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección Inferior: Descripción a Ancho Completo */}
        <div className="border-t border-gray-200 pt-10 pb-10">
          <div className="max-w-4xl">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Descripción</h3>
            <p className="text-gray-700 leading-relaxed text-base whitespace-pre-line">
              {product.descripcion}
            </p>
          </div>
        </div>

        {/* Productos Relacionados */}
        <div className="mt-6 border-t border-gray-200 pt-10">
          <RelatedProductsSlider 
            productId={product.id} 
            categoriaId={product.categoria_principal_id} 
            onAddToCart={onAddToCart} 
          />
        </div>

        {/* Reseñas y Comentarios */}
        <div className="mt-10 border-t border-gray-200 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <ProductReviewsList productId={product.id} />
            </div>
            <div className="lg:col-span-1">
              {userId && (
                <div className="bg-gray-50 p-6 rounded-xl">
                  <AddReviewForm productId={product.id} userId={userId} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente para los badges de características
const FeatureBadge = ({ icon, text }) => (
  <div className="flex items-center gap-3">
    <div className="p-2 bg-gray-50 rounded-lg">
      {React.cloneElement(icon, { className: "w-5 h-5 text-gray-600" })}
    </div>
    <span className="text-gray-700 font-medium">{text}</span>
  </div>
);

export default ProductDetails;