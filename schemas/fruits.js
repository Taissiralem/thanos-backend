import mongoose from "mongoose";

const fruitSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    count: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    agriculteur: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Agriculteur",
    },
  },
  {
    timestamps: true,
  }
);

export const fruits = mongoose.model("fruits", fruitSchema);
