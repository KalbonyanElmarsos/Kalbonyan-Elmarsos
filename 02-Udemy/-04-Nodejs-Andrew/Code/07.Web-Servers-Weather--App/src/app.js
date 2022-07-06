const path = require("path");
const hbs = require("hbs");
const express = require("express");

const app = express();
app.use(express.static(path.join(__dirname, "../public")));

const viewsPath = path.join(__dirname, "../views/mainViews");
const partialPath = path.join(__dirname, "../views/partialViews");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialPath);

app.get("", (req, res) => {
  // res.send("hello");
  res.render("home", {
    pageTitle: "Home Page",
    title: "Weather",
    content: "Created by JOE JOE",
    author: "ALi baba",
  });
});

app.get("/help", (req, res) => {
  // res.send("help page");
  res.render("help", {
    pageTitle: "Help Page",
    title: "Weather",
    author: "ALi baba",
  });
});
app.get("/help/*", (req, res) => {
  // res.send("help page");
  res.render("notArticle", {
    pageTitle: "Not found",
    title: "Weather",
    author: "ALi baba",
  });
});

app.get("/weather", (req, res) => {
  // res.json({ forecast: "Very windy", location: "Egypt" });
  res.render("weather", {
    pageTitle: "Weather Page",
    title: "Weather",
    author: "ALi baba",
  });
});
app.get("/about", (req, res) => {
  // res.send("<h1>about page</h1>");
  res.render("about", {
    pageTitle: "About Page",
    title: "Weather",
    content: "About page",
    author: "ALi baba",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    content: "Page Not found ",
    author: "ALi baba",
  });
});

app.listen(3001, () => {
  console.log("Server Up");
});
