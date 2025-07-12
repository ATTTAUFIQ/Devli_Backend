import express from "express";
import { connectDB } from "./config/db.js";
const app = express();

connectDB()
  .then((res) => {
    console.log("DB connected Success!");
    app.listen(8080, () => {
      console.log("Server Running on Port 8080");
    });
  })
  .catch((err) => {
    console.log("Connection failed" + err);
  });
