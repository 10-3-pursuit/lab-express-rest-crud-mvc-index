const express = require('express')
const persons = express.Router()

const personsArray = require('../models/person.model.js')

persons.get('/', (req, res) => {
    res.json({ persons: personsArray})
})

persons.get('/:id', (req, res) => {
    const {id} = req.params
    const person = personsArray.find((person) => person.id === +id)
    if(person){
        res.json({ person })
    } else {
        res.json({ message: "Location not found"})
    }
  })

  module.exports = persons