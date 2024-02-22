const express = require('express')
const locations = express.Router()
const locationsArray = require('../models/location.model.js')
const personsArray = require('../models/person.model.js')

locations.get('/', (req, res) => {
  res.json({locations: locationsArray})
})

// Bonus
locations.get('/people', (req, res)=>{
    const modifiedLocations = [...locationsArray]
    modifiedLocations.forEach(location=>{
            location.people = personsArray.filter(person=> person.mainLocation === location.zip)   
    })
    res.json(modifiedLocations)
})

module.exports = locations