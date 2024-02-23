const express = require("express");

const locations = express.Router();

const locationsArray = require("../models/location.model");

const peoplesArray = require("../models/person.model");

locations.get("/", (req, res) => {
  res.json({ locations: locationsArray });
});

locations.get("/people", (req, res) => {
  const updatedInfo = locationsArray.map((location) => {
    const targetPerson = peoplesArray.filter(
      (person) => location.zip === person.mainLocation
    );
    return {
      ...location,
      people: targetPerson,
    };
  });
  res.json(updatedInfo);
});

locations.get("/:id", (req, res) => {
  const { id } = req.params;
  const targetLocation = locationsArray.filter(
    (location) => location.id === parseInt(id)
  );
  if (Object.keys(targetLocation).length > 0) {
    res.json({ location: targetLocation });
  } else {
    res.json({ message: "Nothing Found" });
  }
});

module.exports = locations;
