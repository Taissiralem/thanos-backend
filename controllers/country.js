import { Country } from "../schemas/country.js";

export const createCountry = async (req, res) => {
  const ress = await Country.insertMany(req.body);
  console.log(ress, "res");
  res.json(ress);
};

export const getCountry = async (req, res) => {
  const ress = await Country.find();
  console.log(ress, "res");
  res.json(ress);
};

export const updateCountry = async (req, res) => {
  const ress = await Country.updateMany(
    { name: req.body.name },
    { population: req.body.population }
  );
  console.log(ress, "res");
  res.json(ress);
};

export const deleteCountry = async (req, res) => {
  const ress = await Country.deleteMany({ name: req.body.name });
  console.log(ress, "res");
  res.json(ress);
};
