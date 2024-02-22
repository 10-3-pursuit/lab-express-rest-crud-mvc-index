const express = require('express')
const persons = express.Router()
const personsArray = require('../models/person.model.js')

persons.get('/', (req, res) => {
  res.json({persons: personsArray})
})
persons.get('/:id',(req,res)=>{
    const {id} = req.params
    const foundPerson = personsArray.find(person=> person.id === +id)
    if(foundPerson){
        res.json(foundPerson)
    }else{
        res.json({message: `Sorry, person with an ID of ${id} could not be found`})
    }
})
module.exports = persons