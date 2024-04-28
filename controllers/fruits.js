import { Agriculteur } from "../schemas/agriculteur.js";
import { fruits } from "../schemas/fruits.js";

// export var fruits = [
//   {
//     id: 1,
//     name: "apple",
//     color: "Red",
//   },
//   {
//     id: 2,
//     name: "banana",
//     color: "yellow",
//   },
// ];
export const addFruit = async (req, res) => {
  const ress = await fruits.insertMany(req.body);
  console.log(ress, "res");
  res.json(ress);
};

export const getAllFruits = async (req, res) => {
  const ress = await fruits.find().populate("agriculteur");
  console.log(ress, "res");
  res.json(ress);
};
export const getFruit = async (req, res) => {
  const ress = await fruits
    .findOne({ _id: req.params.id })
    .populate("agriculteur");
  console.log(ress, "res");
  res.json(ress);
};

// export const addFruit = (req, res) => {
//   if (!req.body.id) {
//     res.status(400).json({ message: "id is required" });
//   }
//   console.log(req.body.id);
//   fruits.push(req.body);
//   res.json({ message: "new fruit added" });
// };

export const deleteFruit = async (req, res) => {
  const ress = await fruits.deleteMany({ _id: req.params.id });
  console.log(ress, "res");

  res.json({ message: "fruit deleted", ress: ress });
};

export const putFruit = async (req, res) => {
  const ress = await fruits.updateMany({
    $set: req.body,
  });
  console.log(ress, "res");
  res.json(ress);
};

export const createAgriculteur = async (req, res) => {
  console.log(req.body);
  const agriculteur = await Agriculteur.create(req.body);
  res.json({ newAgriculteur: agriculteur });
};
