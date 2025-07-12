export const adminAuth = (req, res, next) => {
  const token = "valid";

  if (token === "valid") {
    next();
  } else {
    res.status(401).send("Unauthorized request");
  }
};


export const userAuth = (req, res, next) => {
  const token = "valid";

  if (token === "valid") {
    next();
  } else {
    res.status(401).send("Unauthorized request");
  }
};
