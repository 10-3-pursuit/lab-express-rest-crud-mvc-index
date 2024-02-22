// we need to import express to create the router resourse in this case ressourse is teh bookmarks
const express = require('express')

//we need to create router which is a way to refrence in app.js this file
const plans = express.Router()

// I want to return the data as json from the model using my controller
const plansArray = require('../models/plans.model')


//creeate get route to return json data to the client
plans.get('/', (req, res) => {
  res.json({ plans : plansArray })
})

plans.get('/:id', (req, res) => {
    const { id } = req.params

    const plan = plansArray.find((p)=> p.id = +id)
    res.json({ plan })
  })

module.exports = plans
