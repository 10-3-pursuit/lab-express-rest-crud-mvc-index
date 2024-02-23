const express = require('express');
const people = express.Router();
const peopleData = require('../models/people.model.js');

people.get('/', (req, res) => {
    res.json({ people: peopleData })
});

module.exports = people