const express = require("express")

const userMachines = express.Router()

const machinesArr = require('../models/machines.models.js')

userMachines.get('/', (req, res) => {
    res.json({equipment: machinesArr})
})

module.exports = userMachines