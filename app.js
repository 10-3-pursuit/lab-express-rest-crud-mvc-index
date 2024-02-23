// DEPENDENCIES
const express = require("express");

// CONFIGURATION
// invoke our express package in order to use .get and such
const app = express();

// import the locations controller in order to tell the application to use the specifc resource's controller
// Locations Controller
const locationsController = require("./controllers/locations.controller");

// Machines Controller
const machinesController = require("./controllers/machines.controller");

// Persons Controller
const personsController = require("./controllers/persons.controller");
// Plans Controller
const plansController = require("./controllers/plans.controller");

// MIDDLEWARE FOR CONTROLLERS
// I want to use the bookMarkController routes with this base url
app.use("/locations/", locationsController);

app.use("/equipment/", machinesController);

app.use("/persons/", personsController);

app.use("/plans/", plansController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// 404 PAGE
app.get("*", (req, res) => {
  res.json({ error: "Page not found dummy!" });
});

// EXPORT
module.exports = app;
