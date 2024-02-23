// Bring in express
const express = require("express");

// Save express into app
const app = express();

// declare controller here
const locationsController = require("./controllers/locations.controller");
const machinesController = require("./controllers/machines.controller");
const personsController = require("./controllers/persons.controller");
const plansController = require("./controllers/plans.controller");

//implement the controllers
app.use("/api/locations", locationsController);
app.use("/api/equipment", machinesController);
app.use("/api/people", personsController);
app.use("/api/plans", plansController);

app.get("/", (req, res) => {
  res.send("Hello World");
});

// 404
app.get("*", (req, res) => {
  res.status(404).json({ error: "Sorry, no page found!" });
});

module.exports = app;
