// src/components/profile/ProfileDetailsForm.jsx (ACTUALIZADO)
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AlertCircle, CheckCircle, Loader2, Camera } from 'lucide-react';
import { updateUserProfile } from '../../../../features/user/usersSlice';
import { useUserProfileImage } from '../../../../hooks/userProfile/useUserProfileImage';

const ProfileDetailsForm = ({ user, loading, error, successMessage }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({ nombre: '', apellido: '', correo: '' });

    const {
        file,
        imagePreview,
        uploading,
        uploadError,
        handleFileChange,
        handleDrag,
        handleDrop,
        uploadImage,
    } = useUserProfileImage(); // Eliminado resetImage si no se usa

    useEffect(() => {
        if (user) {
            setFormData({
                nombre: user.nombre || '',
                apellido: user.apellido || '',
                correo: user.correo || user.email || '',
            });
        }
    }, [user]);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        let imageUrl = user?.foto_perfil || "";

        if (file) {
            const uploadedUrl = await uploadImage(user.id);
            if (uploadedUrl) imageUrl = uploadedUrl;
        }

        dispatch(updateUserProfile({ ...formData, foto_perfil: imageUrl }));
    };

    return (
        // Se mantiene el contenedor principal con el espaciado y estilo.
        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7 bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 border-b pb-3 mb-4">Editar Detalles</h3>

            {/* Feedback (No se modifican) */}
            {successMessage && (
                <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm">
                    <CheckCircle className="w-5 h-5" /> <span>{successMessage}</span>
                </div>
            )}
            {error && (
                <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                    <AlertCircle className="w-5 h-5" /> <span>{error}</span>
                </div>
            )}

            {/* Foto de perfil (No se modifica) */}
            <div className="flex flex-col items-center gap-3">
                <div
                    onDragEnter={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-gray-300 shadow-sm flex items-center justify-center cursor-pointer hover:shadow-md transition"
                >
                    {imagePreview || user?.foto_perfil ? (
                        <img src={imagePreview || user.foto_perfil} alt="Foto de perfil" className="w-full h-full object-cover" />
                    ) : (
                        <span className="text-gray-400 text-sm sm:text-base">Arrastra o selecciona</span>
                    )}
                    <input type="file" accept="image/*" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                    <div className="absolute bottom-2 right-2 bg-indigo-600 hover:bg-indigo-700 text-white p-1.5 rounded-full shadow-md transition">
                        <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                </div>
                {uploading && <p className="flex items-center gap-2 text-indigo-600 text-sm"><Loader2 className="w-4 h-4 animate-spin" /> Subiendo...</p>}
                {uploadError && <p className="text-red-600 text-sm">{uploadError}</p>}
            </div>

            {/*
                CAMBIO CLAVE: Reemplazamos el 'grid grid-cols-1 sm:grid-cols-2 gap-4'
                por un apilamiento vertical simple, similar al patrón aprobado.
            */}
            <div className="space-y-4"> 
                {/* Input Nombre */}
                <div>
                    <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-1">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg p-2.5 text-sm shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                        required
                    />
                </div>

                {/* Input Apellido (Ahora debajo de Nombre) */}
                <div>
                    <label htmlFor="apellido" className="block text-sm font-semibold text-gray-700 mb-1">Apellido</label>
                    <input
                        type="text"
                        id="apellido"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg p-2.5 text-sm shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                        required
                    />
                </div>

                {/* Correo (Se mantiene apilado) */}
                <div>
                    <label htmlFor="correo" className="block text-sm font-semibold text-gray-700 mb-1">Correo Electrónico</label>
                    <input
                        type="email"
                        id="correo"
                        name="correo"
                        value={formData.correo}
                        disabled
                        className="w-full border border-gray-300 rounded-lg p-2.5 text-sm bg-gray-50 text-gray-500 cursor-not-allowed shadow-sm"
                    />
                    <p className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <AlertCircle className="w-3 h-3" /> El correo no puede cambiarse desde aquí.
                    </p>
                </div>
            </div>

            {/* Botón (No se modifica) */}
            <button
                type="submit"
                disabled={loading || uploading}
                className={`w-full flex justify-center items-center gap-2 py-2.5 px-4 rounded-lg text-white font-semibold shadow-md text-sm transition transform hover:scale-[1.02] ${
                    loading || uploading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800'
                }`}
            >
                {loading || uploading ? (
                    <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Guardando...
                    </>
                ) : 'Guardar Cambios'}
            </button>
        </form>
    );
};

export default ProfileDetailsForm;