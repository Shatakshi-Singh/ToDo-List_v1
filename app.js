//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js"); //npm is not downloaded, things has been done locally



const app = express();

const items = ["Study", "Read manga", "Eat food"]; //Const doesnt affect the array
const workItems = [];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res) {

const day = date.getDate();

  res.render("list", {
    listTitle: day,
    newListItems: items
  }); //rendering a file called list and iterate with key:value pair
});

app.post("/", function(req, res) {
  const item = req.body.newItems;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work")
  } else {
    items.push(item);
    res.redirect("/"); //redirect to the home route
  }


});

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems
  })
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.post("/work", function(req, res) {
  const item = req.body.newItems;
  workItems.push(item);
  res.redirect("/work");
});
app.listen(3000, function() {
  console.log("This server is running on port 3000");
});
