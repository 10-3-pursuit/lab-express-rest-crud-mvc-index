// we need to import express to create the router for the resporce. In this case the resource is machines
const express = require("express");

// we need to create a Router which is a way to reference in app.js this file
// the Router method comes from the express package
const equipment = express.Router();

// I want to return the data as json from the model using my controller
const machinesArray = require("../models/machine.model");

// create get route to return json data to the client
equipment.get("/", (req, res) => {
  res.json({ equipment: machinesArray });
});

// export line 6 bookmarks variable to be used in the app.js file
module.exports = equipment;
