import express from "express";
import {
  addFruit,
  getAllFruits,
  deleteFruit,
  putFruit,
  getFruit,
  createAgriculteur,
} from "../controllers/fruits.js";

const router = express.Router();
const middleware = (req, res, next) => {
  console.log("middleware");
  next();
};
router.get("/", middleware, getAllFruits);
router.get("/:id", getFruit);
router.post("/", addFruit);
router.delete("/:id", deleteFruit);
router.put("/", putFruit);
router.post("/agriculteur", createAgriculteur);

export default router;
