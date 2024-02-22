const express = require('express')

const persons = express.Router()

const personsArray = require('../models/person.model.js')

persons.get('/', (req, res) => {
  res.json({people: personsArray})
})

module.exports = persons