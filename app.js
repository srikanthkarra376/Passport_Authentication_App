var express = require("express"),
app = express(),
bodyParser = require("body-parser"),
mongoose = require("mongoose"),
passport =require("passport"),
LocalStrategy = require("passport-local"),
passportLocalMongoose = require("passport-local-mongoose"),
User = require("./models/user");


//CONNECT DB
mongoose.connect("mongodb://localhost:27017/Auth_App", { useNewUrlParser: true });

app.use(require("express-session")({
   secret:"Iam eager learner",
   resave:false,
   saveUninitialized:false
}));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(passport.initialize());
app.use(passport.session());

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