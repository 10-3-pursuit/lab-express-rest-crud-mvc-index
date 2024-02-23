const express = require("express");

const machines = express.Router();

const machinesData = require('../models/machine.model')

machines.get("/", (req, res) => {
    res.json({machines: machinesData})
})
//for one machine by ID
machines.get("/:id", (req, res) => {
    const { id } = req.params
    //iterate thru machines data ,then do an if statement or ternary that if machine.id === +id => res.json(result)
    machines.get('/:id',(req,res)=>{
        const { id } = req.params
        const selectedMachine = machinesArr.find(machine => machine.id === +id)// Add a 400 error message if id not found and vice versa
        selectedMachine ? res.status(200).json(selectedMachine) : res.status(400).json({ message: `Machine with ID ${id} could not be found.` })
    });
})

module.exports = machines;