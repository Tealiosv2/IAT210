const express = require("express");

const app = express();

app.use(express.json());

const fs = require("fs");




//static map pathing



app.use("/css", express.static("./css"));
app.use("/js", express.static("./js"));
app.use("/html", express.static("./html"));
app.use("/img", express.static("./img"));
app.use("/pdf", express.static("./pdf"));
app.use("/meetinglogs", express.static("./meetinglogs"));



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

app.get("/pillars", function(req, res) {
  res.send(fs.readFileSync("./html/pillars.html", "utf8"));
});

app.get("/board", function(req, res) {
  res.send(fs.readFileSync("./html/board.html", "utf8"));
});

app.get("/flowchart", function(req, res) {
  res.send(fs.readFileSync("./html/flowchart.html", "utf8"));
});

app.get("/meetinglogs", function(req, res) {
  res.send(fs.readFileSync("./html/meetinglogs.html", "utf8"));
});

app.get("/gamedynamics", function(req, res) {
  res.send(fs.readFileSync("./html/gamedynamics.html", "utf8"));
});

app.get("/playSession", function(req, res) {
  res.send(fs.readFileSync("./html/playSession.html", "utf8"));
});


app.get("/gallery", function(req, res) {
  res.send(fs.readFileSync("./html/gallery.html", "utf8"));
});




// RUN SERVER

let port = process.env.PORT || 10000;

app.listen(port);

console.log("Listening on port " + port + "!");