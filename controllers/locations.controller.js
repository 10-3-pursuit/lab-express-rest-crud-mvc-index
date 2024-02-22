// we need to import express to create the router resourse in this case ressourse is teh bookmarks
const express = require('express')

//we need to create router which is a way to refrence in app.js this file
const locations = express.Router()

// I want to return the data as json from the model using my controller
const locationsArray = require('../models/locations.model.js')

//Bonus
const personsArray = require('../models/persons.model');

//create GET route at /locations/people
locations.get('/persons', (req, res) => {
    const locationsWithPeople = [];

    // go through each location
    locationsArray.forEach(location => {
        // Filter persons based on mainLocation
        const peopleAtLocation = personsArray.filter(person => person.mainLocation === location.zip);

        // Create new object for the location with people
        const locationWithPeople = {
            street: location.street,
            city: location.city,
            state: location.state,
            zip: location.zip,
            persons: peopleAtLocation
        };
        locationsWithPeople.push(locationWithPeople);
    });
    //return new objects array with locations and their people.
    res.json(locationsWithPeople);
});

//creeate get route to return json data to the client
locations.get('/', (req, res) => {
  res.json({ locations : locationsArray })
})

locations.get('/:id', (req, res) => {
  const { id } = req.params
  const location = locationsArray.find((l)=> l.id = +id)
  res.json({ location })
})

module.exports = locations
