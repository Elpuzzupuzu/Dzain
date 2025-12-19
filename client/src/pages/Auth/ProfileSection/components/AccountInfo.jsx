import React, { useEffect, useState } from "react";
import { User, Camera } from "lucide-react";
import { useDispatch } from "react-redux";
import { updateUserProfile } from "../../../../features/user/usersSlice";
import api from "../../../../api/axios";

const AccountInfo = ({ user }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    phone: "",
    location: "",
    foto_perfil: "", // URL REAL (backend)
  });

  const [file, setFile] = useState(null);
  const [previewImage, setPreviewImage] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  // ===============================
  // Cargar datos iniciales
  // ===============================
  useEffect(() => {
    if (!user) return;

    setFormData({
      nombre: user.nombre || "",
      apellido: user.apellido || "",
      phone: user.phone || "",
      location: user.location || "",
      foto_perfil: user.foto_perfil || "",
    });

    setPreviewImage(user.foto_perfil || "");
    setFile(null);
  }, [user]);

  // ===============================
  // Handlers
  // ===============================
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    setFile(selected);
    setPreviewImage(URL.createObjectURL(selected));
  };

  // ===============================
  // Guardar perfil
  // ===============================
  const handleSave = async () => {
    setSaving(true);
    setError(null);

    try {
      let fotoPerfilUrl = formData.foto_perfil;

      // 1️⃣ Subir imagen solo si cambió
      if (file) {
        const imageForm = new FormData();
        imageForm.append("imagen", file);

        const response = await api.post(
          "/products/upload-image",
          imageForm
        );

        fotoPerfilUrl = response.data.imageUrl;
      }

      // 2️⃣ Payload FINAL (slice lo procesa)
      const payload = {
        ...formData,
        foto_perfil: fotoPerfilUrl,
      };

      // 3️⃣ Dispatch simple
      await dispatch(updateUserProfile(payload)).unwrap();
    } catch (err) {
      console.error("❌ Error al actualizar perfil:", err);
      setError(
        err.response?.data?.message ||
          err.message ||
          "Error al actualizar perfil"
      );
    } finally {
      setSaving(false);
    }
  };

  // ===============================
  // Render
  // ===============================
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100">
      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          {previewImage ? (
            <img
              src={previewImage}
              alt="Avatar"
              className="w-12 h-12 rounded-xl object-cover"
            />
          ) : (
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
          )}

          <label className="absolute -bottom-1 -right-1 bg-blue-500 p-1 rounded-full cursor-pointer">
            <Camera className="w-3 h-3 text-white" />
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleImageChange}
            />
          </label>
        </div>

        <h2 className="text-xl font-semibold text-gray-900">
          Informacion de la cuenta
        </h2>
      </div>

      <div className="space-y-4">
        <input
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          className="w-full border rounded-lg px-3 py-2"
        />

        <input
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          placeholder="Apellido"
          className="w-full border rounded-lg px-3 py-2"
        />

        <p className="text-gray-500">{user?.correo}</p>

        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Teléfono"
          className="w-full border rounded-lg px-3 py-2"
        />

        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Ubicación"
          className="w-full border rounded-lg px-3 py-2"
        />

        {error && <p className="text-sm text-red-500">{error}</p>}

        <button
          onClick={handleSave}
          disabled={saving}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save changes"}
        </button>
      </div>
    </div>
  );
};

export default AccountInfo;
