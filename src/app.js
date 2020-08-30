const express = require("express");
const path = require("path");
const { errors } = require("celebrate");
const routes = require("./routes");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.static(path.join(__dirname, "..", "build")));

app.get("/", function (req, res) {
  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
  });
});

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;
