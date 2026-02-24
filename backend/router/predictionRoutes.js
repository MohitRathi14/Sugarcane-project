import express from "express";
import multer from "multer";
import { predictImage } from "../controller/predictionController.js";

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("image"), predictImage);

export default router;
