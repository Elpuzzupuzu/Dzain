import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: "dnwhgn36g",
  api_key: "577858199532838",
  api_secret: "HheMNapcjW0dsTavlkm60RCcjqs",
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
