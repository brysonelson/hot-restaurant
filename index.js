// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


var http = require("http");
var fs = require("fs");
var PORT = 5000;

 //http://localhost:5000/
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

   //http://localhost:5000/reserve
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

//http://localhost:5000/tables
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });
  
  //http://localhost:5000/api/tables
  app.get("/api/tables", function(req, res) {
    return res.json(characters);
  });

    //http://localhost:5000/api/reserve
    app.get("/api/waitlist", function(req, res) {
        return res.json(characters);
      });

      app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
      });