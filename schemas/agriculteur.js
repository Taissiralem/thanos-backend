import mongoose from "mongoose";

const AgriculteurSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
      required: true,
    },
    prenom: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "argiculteur", "client"],
      default: "argiculteur",
    },
    fruits: [
      {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "fruits",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Agriculteur = mongoose.model("Agriculteur", AgriculteurSchema);
