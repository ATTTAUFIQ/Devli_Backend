import express from "express";
const app = express();

const data = {
  name: "Attar Taufiq",
  age: 22,
  city: "Pune",
};

app.get("/user-details", (req, res) => {
  res.send(data);
});

app.post("/user-details", (req, res) => {
  res.send("Posted");
});
app.use("/test/info", (req, res) => {
  res.send("IN test Info");
});
app.use("/test", (req, res) => {
  res.send("Testing Success");
});

app.use((req, res) => {
  res.send("Hello To server");
});
app.listen(8080, () => {
  console.log("Server Running on Port 8080");
});
