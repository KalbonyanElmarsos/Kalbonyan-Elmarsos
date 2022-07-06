const path = require("path");
const hbs = require("hbs");
const express = require("express");
const { getLatLong } = require("./utiles/geoCode");
const { forecast } = require("./utiles/forecast");

const app = express();
app.use(express.static(path.join(__dirname, "./public")));

const viewsPath = path.join(__dirname, "./views/mainViews");
const partialPath = path.join(__dirname, "./views/partialViews");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialPath);

app.get("", (req, res) => {
  // res.send("hello");
  res.render("home", {
    pageTitle: "Home Page",
    title: "Weather",
    content: "Created by JOE JOE",
    author: "Mahmoud farag",
  });
});

app.get("/help", (req, res) => {
  // res.send("help page");
  res.render("help", {
    pageTitle: "Help Page",
    title: "Weather",
    author: "Mahmoud farag",
  });
});
app.get("/help/*", (req, res) => {
  // res.send("help page");
  res.render("notArticle", {
    pageTitle: "Not found",
    title: "Weather",
    author: "Mahmoud farag",
  });
});

app.get("/weather", (req, res) => {
  const { address } = req.query;

  if (address) {
    getLatLong(address, (err, data) => {
      if (err) {
        return res.send({ errorMessage: err });
      }

      if (!data.location?.lat && !data.location?.lon) {
        return res.send({
          errorMessage: "Error happen check your input and try again ",
        });
      }
      const { lat, lon } = data.location;

      forecast(lat, lon, (err, data) => {
        if (err) return res.send({ errorMessage: err });

        res.json(data);
      });
    });
  } else {
    res.render("weather", {
      pageTitle: "Weather Page",
      title: "Weather",
      author: "Mahmoud farag",
      forecast: "It's windy today",
      location: "Egypt",
    });
  }
});

app.get("/about", (req, res) => {
  // res.send("<h1>about page</h1>");
  res.render("about", {
    pageTitle: "About Page",
    title: "Weather",
    content: "About page",
    author: "Mahmoud farag",
  });
});

// ? TEsting route

app.get("/products", (req, res) => {
  const { search } = req.query;

  if (!search) {
    return res.send({ errorMessage: "You have to input search value!!" });
  }

  res.send({ forecast: "It's windy today", location: "Egypt" });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    content: "Page Not found ",
    author: "ALi baba",
  });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server Up");
});
