const express = require("express")

const userLocations = express.Router()

const locationArr = require('../models/location.model.js')

userLocations.get('/', (req, res) => {
    res.json({location: locationArr})
})

module.exports = userLocations