var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    notes:Object,
    thoughts:Array
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User",UserSchema);

