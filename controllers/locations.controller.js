const express = require('express')

const locations = express.Router()

const locationsArray = require('../models/location.model.js')

locations.get('/', (req, res) => {
  res.json({locations: locationsArray})
})

module.exports = locations