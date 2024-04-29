import express from "express";
import dotenv from "dotenv";
import routerFruits from "./routes/fruits.js";
import routerEmail from "./routes/email.js";
import routerUsers from "./routes/user.js";
import routerReplicate from "./routes/replicate.js";
import routerLister from "./routes/todolister.js";
import routerCountry from "./routes/country.js";
import bodyParser from "body-parser";
import cors from "cors";
import { TextGeneration } from "./controllers/replicate.js";
import { logger } from "./middleware/logs.js";
import { validateFruit } from "./middleware/validateFruit.js";
import multer from "multer";
import mongoose from "mongoose";

dotenv.config();

const upload = multer({ dest: "uploads/" });

// app.post("/", upload.single("avatar"), function (req, res, next) {
// req.file is the `avatar` file
// req.body will hold the text fields, if there were any
// });

const app = express();

app.use(
  cors({
    origin: [
      "https://react-router-frotend.vercel.app",
      "https://thanos-backend.onrender.com/fruits",
    ],
  })
);
app.use(logger);
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/country", routerCountry);
app.use("/send-email", routerEmail);
app.use("/fruits", validateFruit, routerFruits);
app.use("/users", routerUsers);
app.use("/replicate", routerReplicate);
app.use("/todos", routerLister);
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
app.post("/", upload.single("avatar"), (req, res) => {
  res.send("hello world");
});
app.get("/", (req, res) => {
  res.send("hello world");
});
