// 

import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

console.log("🔵 Cargando configuración de Supabase...");

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// 🔍 Validación de variables de entorno
if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Variables de entorno de Supabase faltantes");
  console.error("SUPABASE_URL:", supabaseUrl ? "OK" : "❌ NO DEFINIDA");
  console.error("SUPABASE_KEY:", supabaseKey ? "OK" : "❌ NO DEFINIDA");

  throw new Error("Debes definir SUPABASE_URL y SUPABASE_KEY en .env");
}

console.log("🧩 SUPABASE_URL cargada correctamente");
console.log("🔐 SUPABASE_KEY cargada correctamente");

export const supabase = createClient(supabaseUrl, supabaseKey);

// =======================================================
// 🔌 VERIFICACIÓN DE CONEXIÓN A SUPABASE
// =======================================================
(async () => {
  try {
    console.log("🔌 Verificando conexión con Supabase...");

    const { data, error } = await supabase.auth.getSession();

    if (error) {
      throw error;
    }

    console.log("✅ Supabase accesible y respondiendo correctamente");

  } catch (err) {
    console.error("❌ Error al conectar con Supabase");
    console.error("📛 Mensaje:", err.message);
  }
})();
