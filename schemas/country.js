import mongoose from "mongoose";

const countrySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    superficie: {
      type: String,
      required: true,
    },
    population: {
      type: Number,
      required: true,
    },
    taille: {
      type: String,
      enum: ["small", "medium", "large"],
      default: "medium",
    },
  },
  {
    timestamps: true,
  }
);

export const Country = mongoose.model("Country", countrySchema);
