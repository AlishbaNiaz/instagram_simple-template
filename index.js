const express=require("express");
const app=express();
const path=require("path");
app.set("views",path.join(__dirname,"/views"));
const port=8080;
app.set("view engine","ejs");
app.get("/",(req,res)=>{res.render("home.ejs");});
app.listen(port,()=>{
  console.log(`Listening to the port ${port}`);
});
app.get("/ig/:username",(req,res)=>{
  let username=req.params.username;
  let userdata=require("./data.json");
let data=userdata[username];
  res.render("instagram.ejs",{data});});