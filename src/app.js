import express from "express";
const app = express();

app.use(
  "/user/:id",
  (req, res, next) => {
    next();
  },
  (req, res, next) => {
  res.send("I am under water")
  next()
  },
  (req, res, next) => {
    res.send("I am under water")
  }
);

app.listen(8080, () => {
  console.log("Server Running on Port 8080");
});
