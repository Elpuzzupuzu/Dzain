import React from 'react';
import { Lock, AlertCircle, Loader2, CheckCircle } from 'lucide-react';
// IMPORTAMOS EL HOOK QUE CONTIENE LA LÓGICA REUTILIZABLE
import { usePasswordChangeForm } from '../../ProfileSection/hooks/usePasswordChangeForm'; 
// Asume que las props 'loading', 'error' y 'successMessage' se obtienen del estado global de Redux 
// y se pasan a este componente, similar al componente original.
// Si no se pasan, debes obtenerlas aquí directamente desde Redux:
// import { useSelector } from 'react-redux';
// const { loading, error, successMessage } = useSelector(state => state.user);

const ChangePassword = ({ loading = false, error = null, successMessage = null }) => {
  // 1. Usar el Custom Hook para obtener la lógica y el estado
  const { 
    form, 
    localError, 
    handleChange, 
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
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Contraseña Actual</label>
          <input
            type="password"
            name="currentPassword" // Es crucial usar 'name' para que el hook lo maneje
            value={form.currentPassword}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Nueva Contraseña</label>
          <input
            type="password"
            name="newPassword" // Es crucial usar 'name' para que el hook lo maneje
            value={form.newPassword}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            minLength={8}
            required
          />
          <p className="mt-1 text-xs text-gray-500">Mínimo 8 caracteres</p>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Confirmar Contraseña</label>
          <input
            type="password"
            name="confirmPassword" // Es crucial usar 'name' para que el hook lo maneje
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
          />
        </div>
        
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