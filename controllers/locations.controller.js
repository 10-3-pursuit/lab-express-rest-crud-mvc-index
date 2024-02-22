const express = require('express')
const locations = express.Router()

const locationsArray = require('../models/location.model.js')
const personsArray = require('../models/person.model.js')


locations.get('/', (req, res) => {
    res.json({ locations: locationsArray})
})

locations.get('/people', (req, res) => {
    const newArray = locationsArray.map((location) => {
        const newLocationObject = {...location}
        const matchingPeople = personsArray.filter((person) => {
            return person.mainLocation === location.zip
        })

        newLocationObject["people"] = matchingPeople
        return newLocationObject
    })

    res.json({ locations: newArray})
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