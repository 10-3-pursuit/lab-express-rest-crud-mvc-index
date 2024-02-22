const express = require('express')
const plans = express.Router()
const plansArray = require('../models/plan.model.js')

plans.get('/', (req, res) => {
  res.json({plans: plansArray})
})

plans.get('/:id',(req,res)=>{
    const {id} = req.params
    const foundPlan = plansArray.find(plan=> plan.id === +id)
    if(foundPlan){
        res.json(foundPlan)
    }else{
        res.json({message: `Sorry, plan with an ID of ${id} could not be found`})
    }
})
module.exports = plans