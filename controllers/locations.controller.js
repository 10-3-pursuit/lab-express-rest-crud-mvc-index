const express = require("express");

const locations = express.Router();

const locationsArray = require("../models/location.model");

locations.get("/", (req, res) => {
  res.json({ locations: locationsArray });
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
