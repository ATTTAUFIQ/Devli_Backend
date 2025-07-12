import express from "express";
const app = express();

app.use("/test", (req, res) => {
  res.send("Testing Success");
});

app.use((req, res) => {
  res.send("Hello To server");
});
app.listen(8080, () => {
  console.log("Server Running on Port 8080");
});
