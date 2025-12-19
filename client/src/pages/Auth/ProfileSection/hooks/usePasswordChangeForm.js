// src/hooks/usePasswordChangeForm.js (CREACIÓN DEL HOOK)
import { useState } from "react";
import { useDispatch } from "react-redux";
// Importaciones de Redux necesarias para la lógica
import { updateUserPassword, clearSuccessMessage } from "../../../../features/user/usersSlice"; 

/**
 * Custom Hook para gestionar el formulario de cambio de contraseña, 
 * incluyendo estado local, validación y envío de acciones Redux.
 */
export const usePasswordChangeForm = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const [localError, setLocalError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Opcional: limpiar errores locales al comenzar a escribir
    if (localError) setLocalError(null);
  };

  /**
   * Maneja el envío del formulario.
   * @param {object} e - Evento de formulario.
   * @param {boolean} loading - Estado de carga global (opcionalmente pasado desde Redux).
   */
  const handleSubmit = (e, loading = false) => {
    e.preventDefault();
    if (loading) return; 

    setLocalError(null);
    dispatch(clearSuccessMessage()); // Limpiar mensajes de éxito anteriores

    // 1. Validación local: Las contraseñas no coinciden
    if (form.newPassword !== form.confirmPassword) {
      setLocalError("Las contraseñas no coinciden.");
      return;
    }

    // 2. Validación local: Longitud mínima (8 caracteres)
    if (form.newPassword.length < 8) {
      setLocalError("La contraseña debe tener al menos 8 caracteres.");
      return;
    }

    // 3. Envío de la acción Redux
    dispatch(updateUserPassword({
      currentPassword: form.currentPassword,
      newPassword: form.newPassword
    }));

    // 4. Limpiar formulario después del envío (independientemente del éxito)
    setForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
  };

  return {
    form,
    localError,
    handleChange,
    handleSubmit,
    setLocalError,
  };
};