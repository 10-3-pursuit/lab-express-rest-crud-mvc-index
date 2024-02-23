// we need to import express to create the router for the resporce. In this case the resource is persons
const express = require("express");

// we need to create a Router which is a way to reference in app.js this file
// the Router method comes from the express package
const persons = express.Router();

// I want to return the data as json from the model using my controller
const personsArray = require("../models/person.model");

// create get route to return json data to the client
persons.get("/", (req, res) => {
  res.json({ persons: personsArray });
});

// export line 6 bookmarks variable to be used in the app.js file
module.exports = persons;
