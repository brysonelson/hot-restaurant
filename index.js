// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var http = require("http");
var fs = require("fs");
var PORT = 5000;

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
   console.log("App listening on PORT " + PORT);
});







var server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:" + PORT);
});

// Create a function which handles incoming requests and sends responses
function handleRequest(req, res) {

  // Capture the url the request is made to
  var path = req.url;
  // Depending on the URL, display a different HTML file.
  switch (path) {

    //http://localhost:5000/
  case "/":
    return   fs.readFile(__dirname + "/home.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });

      //http://localhost:5000/reserve
  case "/reserve":
    return fs.readFile(__dirname + "/reserve.html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });

      //http://localhost:5000/tables
      case "/tables":
      return fs.readFile(__dirname + "/tables.html", function(err, data) {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        });
      
  default:
    return display404(path, req, res);
  }
}