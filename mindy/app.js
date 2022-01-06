const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const https = require("https");
const { url } = require("inspector");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//require('dotenv').config({path:"/.env"});

app.get("/", function(req, res){
    res.render("index");
  });

  let port = process.env.PORT;
if (port == null || port == "") {
  port = 8080;
}

app.listen(port, function() {
  console.log("Server started on port 8080");
});
