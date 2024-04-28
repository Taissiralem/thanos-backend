import express from "express";
import {
  getAllTasks,
  addTask,
  deleteTask,
  putTask,
} from "../controllers/todolister.js";

const router = express.Router();
const middleware = (req, res, next) => {
  console.log("middleware");
  next();
};

router.get("/", middleware, getAllTasks);
router.post("/", addTask);
router.delete("/", deleteTask);
router.put("/", putTask);

export default router;
