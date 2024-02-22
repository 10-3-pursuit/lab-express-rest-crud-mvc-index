const express = require("express")

const user = express.Router()

const userArr = require('../models/persons.model.js')

user.get('/', (req, res) => {
    res.json({user: userArr})
})

module.exports = user