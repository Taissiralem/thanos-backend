export const logger = (req, res, next) => {
  console.log("une nouvelle requete recue", req.method, Date.now());
  next();
};
