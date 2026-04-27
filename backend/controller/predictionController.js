import { uploadToCloudinary } from "../services/cloudinaryService.js";
import { sendToMLService } from "../services/mlService.js";
import { getTreatmentInfo } from "../data/diseaseTreatments.js";
import fs from "fs";

export const predictImage = async (req, res) => {
  try {

    const imageUrl = await uploadToCloudinary(req.file.path);

    const prediction = await sendToMLService(imageUrl);

    // Get treatment information based on the predicted disease
    const diseaseName = prediction.disease || prediction.status;
    const treatmentInfo = getTreatmentInfo(diseaseName);

    fs.unlinkSync(req.file.path); // delete local temp file

    res.status(200).json({
      imageUrl,
      ...prediction,
      treatment: treatmentInfo
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Prediction failed" });
  }
};
