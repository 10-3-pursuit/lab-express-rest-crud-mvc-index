const express = require('express');
const persons = express.Router();
const personsArr = require('../models/person.model.js');

persons.get('/', (req, res) => {
  res.json({ persons: personsArr })
});

// same fx for machines but for persons
persons.get('/:id',(req,res)=>{
    const {id} = req.params
    const selectedPerson = personsArr.find(person => person.id === +id)
    if(selectedPerson){
        res.json(selectedPerson)
    }else{
        res.json({ message: `Person with ID ${id} could not be found.` })
    }
});

module.exports = persons;