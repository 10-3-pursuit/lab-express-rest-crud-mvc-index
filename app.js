const express = require("express");

const app = express();

const locationsController = require("./controllers/locations.controllers");
const machinesController = require("./controllers/machines.controller");
const personsController = require("./controllers/persons.controller");
const plansController = require("./controllers/plans.controller");

app.use("/locations", locationsController);
app.use("/equipment", machinesController);
app.use("/persons", personsController);
app.use("/plans", plansController);

app.get("/", (req, res) => {
  res.json("Hello World");
});

app.get("*", (req, res) => {
  res.json({ error: "Sorry, no page found" });
});

module.exports = app;
