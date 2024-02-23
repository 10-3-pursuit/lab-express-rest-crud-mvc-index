// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();

const locationsController = require("./controllers/locations.controller");

const machinesController = require("./controllers/machines.controller");

const personsController = require("./controllers/persons.controller.js");

const plansController = require("./controllers/plans.controller.js");

// We want to use the locationsController route with this base url
app.use("/locations", locationsController);

// We want to use the machinesController route with this base url
app.use("/machines", machinesController);

// We want to use the personsController route with this base url
app.use("/persons", personsController);

// We want to use the plansController route with this base url
app.use("/plans", plansController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// 404 PAGE
app.get("*", (req, res) => {
  res.json({ error: "Sorry, no page found!" });
});

// EXPORT
module.exports = app;
