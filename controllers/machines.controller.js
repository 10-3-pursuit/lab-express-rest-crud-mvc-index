const express = require('express');
const machines = express.Router(); // can name the variable for express.Router() router, or use the name of the resource. Using the resource name is helpful in reading and understanding the code
const machinesArr = require("../models/machines.model");

machines.get('/', (req, res) => { // the relative path is /. Because this is in a controller, you'll take steps to access this route not at the base route of http://localhost:3000 (typically the landing or home page goes there) but rather at http://localhost:/3000/machines for example (must set up the route in app.js also)
  res
  .status(200)
  .json({ machines: machinesArr })
});

machines.get('/:id',(req,res)=>{
    const { id } = req.params
    const selectedMachine = machinesArr.find(machine => machine.id === +id)
    selectedMachine ? res.status(200).json(selectedMachine) : res.status(400).json({ message: `Machine with ID ${id} could not be found.` })
});

module.exports = machines;