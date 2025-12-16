import { useDispatch } from "react-redux";
import { AlertCircle, CheckCircle, Loader2, ShieldCheck, Lock } from "lucide-react";
import { updateUserPassword, clearSuccessMessage } from "../../../../features/user/usersSlice";
import { useState } from "react";

const PasswordSecuritySection = ({ loading, error, successMessage }) => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const [localError, setLocalError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalError(null);
    dispatch(clearSuccessMessage());

    if (form.newPassword !== form.confirmPassword) {
      setLocalError("Las contraseñas no coinciden.");
      return;
    }

    if (form.newPassword.length < 8) {
      setLocalError("La contraseña debe tener al menos 8 caracteres.");
      return;
    }

    dispatch(updateUserPassword({
      currentPassword: form.currentPassword,
      newPassword: form.newPassword
    }));

    setForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
  };

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex items-start gap-3">
        <div className="mt-1 text-slate-400">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900">
            Seguridad de la cuenta
          </h3>
          <p className="text-sm text-slate-500">
            Actualiza tu contraseña para mantener tu cuenta protegida
          </p>
        </div>
      </div>

      {/* Card */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 space-y-5 max-w-xl">
        
        {/* Feedback */}
        {successMessage && (
          <div className="flex gap-2 rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-700">
            <CheckCircle className="w-4 h-4 mt-0.5" />
            {successMessage}
          </div>
        )}

        {(error || localError) && (
          <div className="flex gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            <AlertCircle className="w-4 h-4 mt-0.5" />
            {error || localError}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label">Contraseña actual</label>
            <input
              type="password"
              name="currentPassword"
              value={form.currentPassword}
              onChange={handleChange}
              className="input bg-slate-50 border-slate-200"
              required
            />
          </div>

          <div>
            <label className="label">Nueva contraseña</label>
            <input
              type="password"
              name="newPassword"
              value={form.newPassword}
              onChange={handleChange}
              className="input bg-slate-50 border-slate-200"
              minLength={8}
              required
            />
            <p className="hint">Mínimo 8 caracteres</p>
          </div>

          <div>
            <label className="label">Confirmar nueva contraseña</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className="input bg-slate-50 border-slate-200"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Actualizando…
              </>
            ) : (
              <>
                <Lock className="w-4 h-4" />
                Cambiar contraseña
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default PasswordSecuritySection;