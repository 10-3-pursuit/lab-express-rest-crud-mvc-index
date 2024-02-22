// we need to import express to create the router resourse in this case ressourse is teh bookmarks
const express = require('express')

//we need to create router which is a way to refrence in app.js this file
const machines = express.Router()

// I want to return the data as json from the model using my controller
const machinesArray = require('../models/machines.model.js')


//creeate get route to return json data to the client
machines.get('/', (req, res) => {
  res.json({ machines : machinesArray })
})

machines.get('/:id', (req, res) => {
    const { id } = req.params

    const machine = machinesArray.find((m)=> m.id = +id)
    res.json({ machine })
  })

module.exports = machines
