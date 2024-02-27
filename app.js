const express = require("express");
const app = express();

const locationsController = require("./controllers/locations.controller");
const machinesController = require("./controllers/machines.controller");
const personsController = require("./controllers/persons.controller");
const plansController = require("./controllers/plans.controller");

// using the different routes to find the url by their specific dif handles
app.use("/locations", locationsController);
app.use("/machines", machinesController);
app.use("/persons", personsController);
app.use("/plans", plansController);

app.get('/',(request, response) => {
    response.send("Hello, World!");
});

// 404 Page error message
app.get("*", (request, response) => {
    respond.json({error: "Sorry no page found!"})
});

module.exports = app;
