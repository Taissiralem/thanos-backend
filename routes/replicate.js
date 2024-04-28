import express from "express";
import { CreateImage, TextGeneration } from "../controllers/replicate.js";

const router = express.Router();

router.post("/text-to-image", CreateImage);
router.post("/text-to-text", TextGeneration);

export default router;
