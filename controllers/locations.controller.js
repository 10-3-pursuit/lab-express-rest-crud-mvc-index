const express = require('express');
const locations = express.Router();
const locationsArr = require("../models/locations.model");

locations.get('/', (req, res) => {
    res.json({locations: locationsArr})
});

module.exports = locations;