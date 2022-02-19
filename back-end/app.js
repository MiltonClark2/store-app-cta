// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const cryptoController = require("./controllers/cryptoController.js");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/cryptos", cryptoController);







// 404
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
