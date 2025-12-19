import React, { useState } from 'react';
import { Lock, AlertCircle, Loader2, CheckCircle, Eye, EyeOff } from 'lucide-react'; 
// Asegúrate de que esta ruta sea correcta para tu proyecto
import { usePasswordChangeForm } from '../hooks/usePasswordChangeForm'; 

// --- 1. Componente Reutilizable para Campo de Contraseña con Toggle ---
const PasswordField = ({ label, name, value, isVisible, toggleVisibility, onChange, hint }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <div className="relative">
        <input
          type={isVisible ? 'text' : 'password'}
          name={name}
          value={value}
          onChange={onChange} // <--- CORREGIDO: Maneja los cambios de input correctamente
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-10"
          minLength={name === 'newPassword' ? 8 : undefined}
          required
        />
        <button
          type="button"
          onClick={() => toggleVisibility(name)}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition"
          aria-label={isVisible ? 'Ocultar contraseña' : 'Mostrar contraseña'}
        >
          {isVisible ? (
            <EyeOff className="w-5 h-5" />
          ) : (
            <Eye className="w-5 h-5" />
          )}
        </button>
      </div>
      {hint && (
        <p className="mt-1 text-xs text-gray-500">{hint}</p>
      )}
    </div>
);


// --- 2. Componente Principal ---
const ChangePassword = ({ loading = false, error = null, successMessage = null }) => {
  
  // Estado para manejar la visibilidad de cada campo de contraseña
  const [showPassword, setShowPassword] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false
  });

  // Función para alternar la visibilidad de un campo específico
  const togglePasswordVisibility = (field) => {
    setShowPassword(prev => ({ ...prev, [field]: !prev[field] }));
  };

  // Usar el Custom Hook para obtener la lógica y el estado del formulario
  const { 
    form, 
    localError, 
    handleChange, // Función para manejar el cambio de inputs
    handleSubmit: handleFormSubmit 
  } = usePasswordChangeForm();

  // Función wrapper para llamar a handleSubmit del hook con la prop 'loading'
  const handleSubmit = (e) => {
    handleFormSubmit(e, loading); 
  };
  
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 max-w-lg mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center">
          <Lock className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Cambiar Contraseña</h2>
      </div>

      {/* --- Feedback (Éxito y Error) --- */}
      {successMessage && (
        <div className="flex gap-2 rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-700 mb-4">
          <CheckCircle className="w-4 h-4 mt-0.5" />
          {successMessage}
        </div>
      )}

      {(error || localError) && (
        <div className="flex gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700 mb-4">
          <AlertCircle className="w-4 h-4 mt-0.5" />
          {error || localError}
        </div>
      )}
      
      {/* --- Formulario --- */}
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Campo de Contraseña Actual */}
        <PasswordField
          label="Contraseña Actual"
          name="currentPassword"
          value={form.currentPassword}
          isVisible={showPassword.currentPassword}
          toggleVisibility={togglePasswordVisibility}
          onChange={handleChange}
        />
        
        {/* Campo de Nueva Contraseña */}
        <PasswordField
          label="Nueva Contraseña"
          name="newPassword"
          value={form.newPassword}
          isVisible={showPassword.newPassword}
          toggleVisibility={togglePasswordVisibility}
          onChange={handleChange}
          hint="Mínimo 8 caracteres"
        />

        {/* Campo de Confirmar Contraseña */}
        <PasswordField
          label="Confirmar Contraseña"
          name="confirmPassword"
          value={form.confirmPassword}
          isVisible={showPassword.confirmPassword}
          toggleVisibility={togglePasswordVisibility}
          onChange={handleChange}
        />
        
        <button
          type="submit"
          disabled={loading}
          className="w-full px-4 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-colors font-medium flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Actualizando...
            </>
          ) : (
            <>
              <Lock className="w-5 h-5" />
              Actualizar Contraseña
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;