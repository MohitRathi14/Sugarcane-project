import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import predictionRoutes from "./router/predictionRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/predict", predictionRoutes);

export default app;
