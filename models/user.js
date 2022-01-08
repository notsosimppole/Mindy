var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    moodtracker:Object, // {notes, emogi, thoughts}
    games:Object, // {}
    age: Number
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User",UserSchema);

