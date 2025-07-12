import express from "express";
import { adminAuth,userAuth } from "./middleware/auth.js";
const app = express();

app.use("/admin", adminAuth);
app.use("/user",userAuth);

app.use("/admin/getalldata", (req, res) => {
  res.send("Founded all the data");
});

app.use("/admin/deleteUser", (req, res) => {
  res.send("deleted all the data");
});

app.use("/admin/addData", (req, res) => {
  res.send("Added all the data");
});
app.use((req, res) => {
  res.send("Welcome to the Devli");
});

app.listen(8080, () => {
  console.log("Server Running on Port 8080");
});
