import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();
export var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});
