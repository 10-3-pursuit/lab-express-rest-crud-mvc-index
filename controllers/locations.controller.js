// we need to import express to create the router for the resporce. In this case the resource is locations
const express = require("express");

// we need to create a Router which is a way to reference in app.js this file
// the Router method comes from the express package
const locations = express.Router();

// I want to return the data as json from the model using my controller
const locationsArray = require("../models/location.model.js");

// create get route to return json data to the client
locations.get("/", (req, res) => {
  res.json({ locations: locationsArray });
});

// export line 6 locations variable to be used in the app.js file
module.exports = locations;
