import express from "express";
const app = express();



app.get("/user/:id",(req,res)=>
{
  res.send(req.params)
})
app.get("/user",(req,res)=>
{
res.send(req.query.usedid)
})



app.use("/",(req, res) => {
  res.send("Hello To server");
});
app.listen(8080, () => {
  console.log("Server Running on Port 8080");
});
