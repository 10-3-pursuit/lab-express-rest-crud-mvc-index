const express = require('express')

const people = express.Router();

const peopleArray = require("../models/person.model")

people.get('/', (req, res) => {
    res.json({ people: peopleArray})
})

people.get("/:id", (req, res) => {
    const { id } = req.params

    const person = peopleArray.find(p => p.id === +id)

    if(person) {
        res.json({ person })
    } else {
        res.json({ message: 'Nothing Found' })
    }
})
module.exports = people