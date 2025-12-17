import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AlertCircle, ShoppingBag, Heart } from 'lucide-react';
import { 
    clearSuccessMessage, 
    fetchUserPurchaseHistory, 
    fetchUserWishlist 
} from '../../../features/user/usersSlice';

import ProfilePictureSection from './components/ProfilePictureSection';
import ProfileDetailsForm from './components/ProfileDetailsForm';
import PasswordChangeForm from './components/PasswordChangeForm';
import ProfileInfoCards from './components/ProfileInfoCards';
import ProfileSidebar from '../../Auth/ProfilePage/components/ProfileSidebar';
import PurchaseHistoryList from './components/PurchaseHistoryList';
import UserReviewsList from './components/UserReviewsList'; 
import WishlistList from './components/WishlistList'; // 🔹 Nuevo componente

const ProfilePage = () => {
    const dispatch = useDispatch();
    const { 
        user, 
        loading, 
        error, 
        successMessage, 
        authChecked, 
        purchaseHistory,
        wishlist
    } = useSelector((state) => state.user);

    const [selectedSection, setSelectedSection] = useState('details');

    useEffect(() => {
        if (successMessage || error) {
            const timer = setTimeout(() => {
                dispatch(clearSuccessMessage());
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [successMessage, error, dispatch]);

    useEffect(() => {
        if (!user?.id) return;

        // Carga de datos específica según la sección
        if (selectedSection === "orders") {
            dispatch(fetchUserPurchaseHistory(user.id));
        }

        if (selectedSection === "wishlist") {
            dispatch(fetchUserWishlist(user.id));
        }
    }, [selectedSection, dispatch, user?.id]);


    // --- Condiciones de Carga y Error ---

    if (!authChecked) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <p className="text-gray-500 text-lg">Verificando sesión...</p>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-screen bg-gray-50 py-10 px-4 flex items-center justify-center">
                <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-sm w-full">
                    <AlertCircle className="w-12 h-12 mx-auto text-red-500 mb-4" />
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Acceso denegado</h1>
                    <p className="text-base text-gray-600">Por favor, inicia sesión para ver tu perfil.</p>
                </div>
            </div>
        );
    }

    const isProfileDataReady = !!user.nombre;
    if (!isProfileDataReady) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <p className="text-gray-500 text-lg">Cargando datos del perfil...</p>
            </div>
        );
    }

    const isActionLoading = loading && !error && !successMessage;

    // --- Función de Renderizado de Contenido ---

    const renderContent = () => {
        // Tu lógica de switch case sigue siendo perfecta
        switch (selectedSection) {
            case 'details':
                return (
                    <div className="space-y-4 sm:space-y-6">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">Información General</h1>
                        <ProfilePictureSection user={user} isLoading={!isProfileDataReady} />
                        <ProfileInfoCards user={user} />
                        <div className="pt-4 sm:pt-6 border-t border-gray-200">
                            <ProfileDetailsForm 
                                user={user}
                                loading={isActionLoading}
                                error={error}
                                successMessage={successMessage}
                            />
                        </div>
                    </div>
                );

            case 'password':
                return (
                    <div className="space-y-6">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">Cambiar Contraseña</h1>
                        <PasswordChangeForm
                            loading={isActionLoading}
                            error={error}
                            successMessage={successMessage}
                        />
                    </div>
                );

            case 'orders':
                return (
                    <div className="space-y-6">
                         {/* Se puede mover el icono y título a un componente de cabecera */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-indigo-600 w-12 h-12 rounded-full flex items-center justify-center">
                                <ShoppingBag className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">Historial de Compras</h2>
                                <p className="text-sm text-gray-500">
                                    Aquí puedes ver todas tus órdenes y los productos que has comprado.
                                </p>
                            </div>
                        </div>

                        <PurchaseHistoryList 
                            userId={user.id}
                            history={purchaseHistory}
                            loading={loading}
                        />
                    </div>
                );

            case 'reviews':
                return (
                    <div className="space-y-6">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">Tus Reseñas</h1>
                        <UserReviewsList userId={user.id} />
                    </div>
                );

            case 'wishlist':
                return (
                    <div className="space-y-6">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">Lista de Deseos</h1>
                        <WishlistList wishlist={wishlist?.data || []} loading={loading} />
                    </div>
                );

            default:
                return null;
        }
    };

    // --- RENDERIZADO PRINCIPAL (GRID MODERNO) ---

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* APLICACIÓN DE GRID
                  grid-cols-1: Móvil (Sidebar y Contenido apilados)
                  lg:grid-cols-4: Escritorio (4 columnas)
                  gap-8: Espacio entre columnas
                */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    
                    {/* BARRA LATERAL (Sidebar - Ocupa 1/4) */}
                    <ProfileSidebar 
                        selectedSection={selectedSection}
                        setSelectedSection={setSelectedSection}
                        // En desktop, el sidebar se queda en la primera columna (col-span-1)
                        className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 h-fit"
                    />

                    {/* CONTENIDO PRINCIPAL (Main Area - Ocupa 3/4) */}
                    <main className="lg:col-span-3 bg-white p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-100">
                        {renderContent()}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;