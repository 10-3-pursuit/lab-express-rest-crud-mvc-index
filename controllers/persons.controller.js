const express = require('express')
const persons = express.Router()
const personsArray = require('../models/persons.model.js')


persons.get('/', (req, res) => {
  res.json({ persons: personsArray})
})

module.exports = persons