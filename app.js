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
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//HOME ROUTE 
app.get("/",function(req,res){
 res.render("home");
});
//SECRET ROUTE
app.get("/secret",function(req,res){
  res.render("secret");
});
//AUTH ROUTE
//SHOW SIGHUP FORM
app.get("/register",function(req,res){
  res.render("register");
});

//SIGNUP ROUTE 
app.post("/register",function(req,res){
req.body.username;
req.body.password
User.register(new User({username:req.body.username}),req.body.password,function(err,user){
  if(err){
    console.log(err);
    return res.render('register');
  }else{
    passport.authenticate("local")(req,res,function(){
      res.redirect("/login");
  
    });
  };
});
});
//GET THE LOGIN PAGE 
app.get("/login",function(req,res){
  res.render("login");
});
//LOGIN LOGIC
//MIDDLEWARE
app.post("/login",passport.authenticate("local",

{
  successRedirect:"/secret",
   failureRedirect:"/login"
}),function(req,res){

});
//LOGOUT LOGIC
app.get('/logout',function(req,res){
req.logout();
console.log("user logged out")
});
//TO CHECK WHEHER USER IS LOOGED IN OR
function isLoggedIn(req,res,next){
  if(req.Authenticated()){
    return next();
  }
  res.redirect("/login");
}

//APP LISTENING PORT 
app.listen(5000,function(){
  console.log("Authenticaton App Running At port 5000....")
});