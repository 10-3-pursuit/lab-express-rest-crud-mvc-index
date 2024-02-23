const express = require("express");
const locations = express.Router();
const locationsArray = require("../models/location.model");
const personsArray = require("../models/person.model");

locations.get("/", (req, res) => {
  res.json({ locations: locationsArray });
});

locations.get("/people", (req, res) => {
  const locationsWithPeople = locationsArray.map((location) => {
    const newLocationObject = { ...location };
    const filteredPeople = personsArray.filter((person) => {
      return person.mainLocation === newLocationObject.zip;
    });
    newLocationObject["people"] = filteredPeople;
    return newLocationObject;
  });
  res.json({ locations: locationsWithPeople });
});

locations.get("/:id", (req, res) => {
  const { id } = req.params;
  const location = locationsArray.find((location) => location.id === +id);
  location ? res.json({ location }) : res.json({ error: "Nothing found" });
});

module.exports = locations;
