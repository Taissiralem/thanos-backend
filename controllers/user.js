import bcrypt from "bcrypt";
import { users } from "../schemas/user.js";

export const getUser = async (req, res) => {
  try {
    const FoundUser = users.findOne({ email: req.body.email });
    if (!FoundUser) {
      return res.status(404).json({ message: "Email is incorrect" });
    }
    console.log(FoundUser, "FoundUser");
    if (!req.body.password) {
      return res.status(400).json({ message: "password is required" });
    }
    const match = await bcrypt.compare(req.body.password, FoundUser.password);

    if (match) {
      return res.status(200).json({ user: FoundUser });
    } else {
      return res
        .status(404)
        .json({ message: "Email or password is incorrect" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addUser = (req, res) => {
  try {
    const FoundUser = users.findOne({ email: req.body.email });
    console.log(req.body.email, "emaill");
    if (!req.body.email) {
      res.status(400).json({ message: "email is required" });
    } else if (!req.body.password) {
      res.status(400).json({ message: "password is required" });
    } else if (!req.body.name) {
      res.status(400).json({ message: "name is required" });
    } else if (FoundUser) {
      res.status(404).json({ message: "user alreay exists" });
    } else {
      bcrypt.hash(req.body.password, 10, function (err, hash) {
        users.create({
          id: req.body.id,
          name: req.body.name,
          email: req.body.email,
          password: hash,
          role: "admin",
        });
        res.status(200).json({
          user: {
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            password: hash,
            role: "admin",
          },
          message: "new user added",
        });
        console.log(hash);
      });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
