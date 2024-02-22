const express = require('express')
const machines = express.Router()
const machinesArr = require("../models/machines.model")

machines.get('/', (req, res) => {
  res.json({ machines: machinesArr })
})

machines.get('/:id',(req,res)=>{
    const { id } = req.params
    const selectedMachine = machinesArr.find(machine => machine.id === +id)
    if(selectedMachine){
        res.json(selectedMachine)
    }else{
        res.json({ message: `Machine with ID ${id} could not be found.` })
    }
})
module.exports = machines