const express = require('express')
const locations = express.Router()

const locationsArray = require('../models/location.model.js')

locations.get('/', (req, res) => {
    res.json({ locations: locationsArray})
})

locations.get('/:id', (req, res) => {
    const {id} = req.params
    const location = locationsArray.find((location) => location.id === +id)
    if(location){
        res.json({ location })
    } else {
        res.json({ message: "Location not found"})
    }
  })
  

module.exports = locations