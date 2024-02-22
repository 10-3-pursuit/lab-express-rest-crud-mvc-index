const express = require('express')
const machines = express.Router()
const machinesArray = require('../models/machine.model.js')

machines.get('/', (req, res) => {
  res.json({machines: machinesArray})
})

machines.get('/:id',(req,res)=>{
    const {id} = req.params
    const foundMachine = machinesArray.find(machine=> machine.id === +id)
    if(foundMachine){
        res.json(foundMachine)
    }else{
        res.json({message: `Sorry, machine with an ID of ${id} could not be found`})
    }
})
module.exports = machines