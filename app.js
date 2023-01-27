const express = require("express");
const bodyParser = require("body-parser");
const day = require(__dirname + "/date.js");

const app = express();
app.set("view engine", "ejs");

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use(express.static("public"));

let Items = [];
let workItems = [];

app.get("/", function(req, res) {
    let dayname = day();

    res.render("list", {
        listtitle: dayname,
        Itemspassed: Items,
    });
});

app.get("/work", function(req, res) {
    res.render("list", {
        listtitle: "Work",
        Itemspassed: workItems,
    });
});

app.get("/about", function(req, res) {
    res.render("about");
});

app.post("/", function(req, res) {
    let Item = req.body.newItem;

    if (req.body.listvalue === "Work") {
        workItems.push(Item);
        res.redirect("work");
    } else {
        Items.push(Item);
        res.redirect("/");
    }
});

app.post("/delete", function(req, res) {
    // console.log(req.body);
    if (req.body.currentlist === "Work") {
        workItems = [];
        res.redirect("/work");
    } else {
        Items = [];
        res.redirect("/");
    }
});

app.listen("3000", function() {
    console.log("Server started at port : 3000");
});