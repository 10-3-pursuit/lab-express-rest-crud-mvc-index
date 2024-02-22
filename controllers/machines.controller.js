const express = require('express')

const machines = express.Router();

const machinesArray = require("../models/machine.model")

machines.get('/', (req, res) => {
    res.json({ machines: machinesArray})
})

machines.get("/:id", (req, res) => {
    const { id } = req.params

    const machine = machinesArray.find(m => m.id === +id)

    if(machine) {
        res.json({ machine })
    } else {
        res.json({ message: 'Nothing Found' })
    }
})

module.exports = machines