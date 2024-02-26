const express = require("express");

const persons = express.Router();

const personsData = require('../models/person.model')

persons.get("/", (req, res) => {
    res.json({persons: personsData})
})
//for one person by ID
persons.get("/:id", (req, res) => {
    const { id } = req.params
    //iterate thru persons data ,then do an if statement or ternary that if person.id === +id => res.json(result)
    persons.get('/:id',(req,res)=>{
        const { id } = req.params
        const selectedPerson = personsArr.find(person => person.id === +id)// Add a 400 error message if id not found and vice versa
        selectedPerson ? res.status(200).json(selectedPerson) : res.status(400).json({ message: `Person with ID ${id} could not be found.` })
    });
})

module.exports = persons;
