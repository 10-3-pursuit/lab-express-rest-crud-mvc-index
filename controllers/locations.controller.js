const express = require('express');
const locations = express.Router(); // kind of like browser router, routes, and routing in react.js
const locationsArr = require('../models/locations.model');
const personsArr = require('../models/persons.model')

locations.get('/', (req, res) => {
    res
    .status(200)
    .json({ locations: locationsArr })
});

// --- BONUS ---
locations.get('/persons', (req, res) => {
    // for every zipcode value in locations array of obj:
    // the data must have a persons array
    // the persons array must have persons objects
    // the persons objects contains mainLocation key where value matches zipcode value in locations array of obj
    let result = locationsArr.map(locationObj => {
        let matchingPersons = personsArr.filter(persons => persons.mainLocation === locationObj.zip) // need to add persons array to each object based on zipcode and main location keys and values so .filter
        return {...locationObj, persons: matchingPersons}//spread op to not mutate original
    }); 
    result.length >= 0 ? res.status(200).json({personLocation: result}) : res.status(400).json({message: "error!"})
})

module.exports = locations;