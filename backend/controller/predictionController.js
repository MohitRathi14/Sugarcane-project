import { uploadToCloudinary } from "../services/cloudinaryService.js";
import { sendToMLService } from "../services/mlService.js";
import fs from "fs";

export const predictImage = async (req, res) => {
  try {

    const imageUrl = await uploadToCloudinary(req.file.path);

    const prediction = await sendToMLService(imageUrl);

    fs.unlinkSync(req.file.path); // delete local temp file

    res.status(200).json({
      imageUrl,
      ...prediction
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Prediction failed" });
  }
};
