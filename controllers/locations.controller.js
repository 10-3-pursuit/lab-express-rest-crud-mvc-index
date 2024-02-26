const express = require("express");

const locations = express.Router();

const locationsData = require('../models/ location.model');

locations.get("/", (req, res) => {
    res.json({locations: locationsData})
})

module.exports = locations;