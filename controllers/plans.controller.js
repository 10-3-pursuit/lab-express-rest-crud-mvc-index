const express = require('express')
const plans = express.Router()

const plansArray = require('../models/plan.model.js')

plans.get('/', (req, res) => {
    res.json({ plans: plansArray})
})

plans.get('/:id', (req, res)=> {
    const { id } = req.params
    const plan = plansArray.find((plan)=> plan.id === +id)
    if(plan){
        res.json({ plan })
    } else {
        res.json({ message: "Plan not found"})
    }
})

module.exports = plans