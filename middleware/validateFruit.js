export const validateFruit = (req, res, next) => {
  // if (!req.body.id) {
  //   return res.status(400).json({ message: "id is required" });
  // }

  // if (!req.body.name) {
  //   return res.status(400).json({ message: "name is required" });
  // }

  // if (!req.body.color) {
  //   return res.status(400).json({ message: "color is required" });
  // }

  next();
};
