const express = require('express');
const persons = express.Router();
const personsArr = require('../models/persons.model.js');

persons.get('/', (req, res) => {
  res
  .status(200)
  .json({ persons: personsArr })
});

// same fx for machines but for persons
persons.get('/:id',(req,res)=>{
    const { id } = req.params
    const selectedPerson = personsArr.find(person => person.id === +id)
    selectedPerson ? res.status(200).json(selectedPerson): res.status(400).json({ message: `Person with ID ${id} could not be found.` })
});

module.exports = persons;