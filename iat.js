const express = require("express");

const app = express();

app.use(express.json());

const fs = require("fs");




//static map pathing



app.use("/css", express.static("./css"));
app.use("/js", express.static("./js"));
app.use("/html", express.static("./html"));
app.use("/imag", express.static("./imag"));






//returns the main page

app.get("/", function(req, res) {
    res.send(fs.readFileSync("./html/index.html", "utf8"));
  });

app.get("/about", function(req, res) {
    res.send(fs.readFileSync("./html/about.html", "utf8"));
  });

app.get("/rules", function(req, res) {
    res.send(fs.readFileSync("./html/rules.html", "utf8"));
  });
app.get("/backstory", function(req, res) {
    res.send(fs.readFileSync("./html/backstory.html", "utf8"));
  });



// RUN SERVER

let port = process.env.PORT || 10000;

app.listen(port);

console.log("Listening on port " + port + "!");