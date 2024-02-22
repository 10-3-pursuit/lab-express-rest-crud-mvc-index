const express = require('express')
const machines = express.Router()

const machinesArray = require('../models/machine.model.js')

machines.get('/', (req, res) => {
    res.json({ machines: machinesArray})
})

machines.get('/:id', (req, res) => {
    const {id} = req.params
    const machine = machinesArray.find((machine) => machine.id === +id)
    if(machine){
        res.json({ machine })
    } else {
        res.json({ message: `Equipment with id of '${id}' not found`})
    }
  })

  module.exports = machines

