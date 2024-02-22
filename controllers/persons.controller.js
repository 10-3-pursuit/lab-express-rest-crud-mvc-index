// we need to import express to create the router resourse in this case ressourse is teh bookmarks
const express = require('express')

//we need to create router which is a way to refrence in app.js this file
const persons = express.Router()

// I want to return the data as json from the model using my controller
const personsArray = require('../models/persons.model')


//creeate get route to return json data to the client
persons.get('/', (req, res) => {
  res.json({ persons : personsArray })
})

persons.get('/:id', (req, res) => {
    const { id } = req.params

    const person = personsArray.find((p)=> p.id = +id)
    res.json({ person })
  })

module.exports = persons
