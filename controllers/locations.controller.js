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

// Note: if using an accumulator and accumulator.push(matchingPersons) in line 20 instead, it pushes length of array instead of values - why? due to the nature of the Array.prototype.push method in JavaScript. The push method adds one or more elements to the end of an array and returns the new length of the array, not the array itself. This is why when you use push within a map or any such operation where you expect to insert the array itself but see only numbers (the array's new length after each push), you're actually seeing the return value of the push method.