
require('dotenv').config();

var express                 = require("express"),
    mongoose                = require("mongoose"),
    passport                = require("passport"),
    bodyParser              = require("body-parser"),
    User                    = require("./models/user"),
    LocalStrategy           = require("passport-local"),
    passportLocalMongoose   = require("passport-local-mongoose")
    
var app = express();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended:true}));

app.use(require("express-session")({
    secret:"Rusty is the best og in the worldpassport ",
    resave: false,
    saveUninitialized: false
}));

app.set('view engine','ejs');
//
app.use(passport.initialize());
app.use(passport.session());
// 
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.get("/",function(req,res){
    res.render("index");
});

// app.get("/home",function(req,res){
//     res.render("index");
// });

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/api/users/login");
}

app.get("/courses",isLoggedIn, function(req, res){
    res.render("courses.ejs");
});

app.get("/games", function(req, res){
    res.render("games.ejs");
});

app.get("/silk", function(req, res){
    res.render("games/weavesilk.ejs");
});

app.get("/noisless", function(req, res){
    res.render("games/noisless.ejs");
});

app.get("/quiz", function(req, res){
    res.render("games/quiz.ejs");
});

app.get("/sinuous", function(req, res){
    res.render("games/sinuous.ejs");
});

/// Auth Routes
app.use('/api/users', require('./routes/users'));


app.listen(3000, function(){
    console.log("connect!");
});