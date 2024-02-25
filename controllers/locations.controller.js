const express = require('express');
const locations = express.Router(); // kind of like browser router, routes, and routing in react.js
const locationsArr = require('../models/locations.model');
const personsArr = require('../models/persons.model')

locations.get('/', (req, res) => {
    res
    .status(200)
    .json({ locations: locationsArr })
});

/* --- BONUS ---
need to make path /persons in this file so it can be locations/persons
need to get data from location and transform it (.map because .map can change data type or structure)
"The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array."
then add persons array of objects?
*/
locations.get('/persons', (req, res) => {
    // for every zipcode value in locations array of obj:
    // the data must have a persons array
    // the persons array must have persons objects
    // the persons objects contains mainLocation key where value matches zipcode value in locations array of obj
    let result = locationsArr.map(locationObj => {
        let matchingPersons = personsArr.filter(person => person.mainlocation === locationObj.zip)
        return {...locationObj, person: matchingPersons}
        //spread op to not mutate original
    }); // need to add persons array to each object based on zipcode and main location keys and values so .filter
        // make objects ?
    res.status(200).json({personLocation: result})
    // make ternary for error
})

module.exports = locations;