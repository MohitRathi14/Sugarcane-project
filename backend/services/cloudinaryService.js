import cloudinary from "../config/cloudinary.js";

export const uploadToCloudinary = async (filePath) => {
  const result = await cloudinary.uploader.upload(filePath, {
    folder: "sugarcane",
  });

  return result.secure_url;
};
