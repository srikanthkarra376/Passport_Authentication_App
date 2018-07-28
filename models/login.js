var mongoose = require ("mongoose");

var passportLocalMongoose = require("passport-local-mongoose");

var UserLoginSchema = new mongoose.Schema({
  username : String,
  password : String
});

UserLoginSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User",UserLoginSchema);