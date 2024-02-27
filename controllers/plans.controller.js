const express = require("express");
const plans = express.Router();
const plansArray = require('../models/plan.model');
plans.get("/", (req, res) => {
    res.json({plans: plansArray});
});
module.exports = plans;