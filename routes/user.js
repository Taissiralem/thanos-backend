import express from "express";
import { addUser, getUser } from "../controllers/user.js";

const router = express.Router();

router.post("/login", getUser);
router.post("/signup", addUser);

export default router;
