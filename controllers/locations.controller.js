const express = require('express')

const locations = express.Router();

const locationsArray = require("../models/location.model")

locations.get('/', (req, res) => {
    res.json({ locations: locationsArray})
})

locations.get("/:id", (req, res) => {
    const { id } = req.params

    const location = locationsArray.find(l => l.id === +id)

    if(location) {
        res.json({ location })
    } else {
        res.json({ message: 'Nothing Found' })
    }
})
module.exports = locations