var express = require("express"),
bodyParser = require("body-parser"),
mongoose = require("mongoose"),
app = express();

//CONNECT DB
mongoose.connect("mongodb://localhost:27017/Auth_App");
app.set("view engine","ejs");

//HOME ROUTE 
app.get("/",function(req,res){
 res.render("home");
});
//SECRET ROUTE
app.get("/secret",function(req,res){
  res.render("secret");
});

//APP LISTENING PORT 
app.listen(5000,function(){
  console.log("Authenticaton App Running At port 5000....")
});