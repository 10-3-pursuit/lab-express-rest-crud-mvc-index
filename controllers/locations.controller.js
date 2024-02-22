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

locations.get('/:id',(req,res)=>{
    const {id} = req.params
    const foundLocation = locationsArray.find(location=> location.id === +id)
    if(foundLocation){
        res.json(foundLocation)
    }else{
        res.json({message: `Sorry, location with an ID of ${id} could not be found`})
    }
})

module.exports = locations