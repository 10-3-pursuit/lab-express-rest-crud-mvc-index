const express = require('express');
const location = express.Router();
const locationsArray = require('../models/location.model.js');

location.get('/', (req, res) => {
  res.json({ locations: locationsArray });
});

module.exports = location;
