const express = require('express');
const locations = express.Router(); // kind of like browser router, routes, and routing in react.js
const locationsArr = require("../models/locations.model");

locations.get('/', (req, res) => {
    res.json({ locations: locationsArr })
});

module.exports = locations;