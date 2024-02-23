const express = require('express');
const plans = express.Router();
const plansData = require('../models/plan.model.js');

plans.get('/', (req, res) => {
    res.json({ plans: plansData })
});

module.exports = plans;