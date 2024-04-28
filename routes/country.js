import express from "express";
import {
  createCountry,
  getCountry,
  updateCountry,
  deleteCountry,
} from "../controllers/country.js";

const router = express.Router();
router.post("/", createCountry);
router.get("/", getCountry);
router.put("/", updateCountry);
router.delete("/", deleteCountry);
export default router;
