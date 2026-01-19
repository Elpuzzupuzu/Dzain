import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: "deko4lz8w",
  api_key: "133891872281196",
  api_secret: "AxQwdWFj5pH9zXlLFIJUkLN8H2k",
});

export default async function uploadImageToCloudinary(file) {
  try {
    const result = await cloudinary.uploader.upload(file, { resource_type: 'auto' });
    console.log("✅ Cloudinary upload success:", result.secure_url);
    return result.secure_url;
  } catch (error) {
    console.error("❌ Cloudinary upload failed:", error);
    throw new Error("Error subiendo imagen a Cloudinary");
  }
}
