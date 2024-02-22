const express = require("express");
const locations = express.Router();
const locationsArray = require("../models/location.model");

locations.get("/", (req, res) => {
  res.json({ locations: locationsArray });
});

locations.get("/:id", (req, res) => {
  const { id } = req.params;
  const location = locationsArray.find((location) => location.id === +id);
  location ? res.json({ location }) : res.json({ error: "Nothing found" });
});

module.exports = locations;
