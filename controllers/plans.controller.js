const express = require("express");

const plans = express.Router();

const plansData = require('../models/plan.model')

plans.get("/", (req, res) => {
    res.json({plans: plansData})
})
//looking for one plan by ID
plans.get("/:id", (req, res) => {
    const { id } = req.params
    //iterate thru plans data ,then do an if statement or ternary that if machine.id === +id => res.json(result)
    plans.get('/:id',(req,res)=>{
        const { id } = req.params
        const selectedPlan = plansArr.find(plan => plan.id === +id)// Add a 400 error message if id not found and vice versa
        selectedPlan ? res.status(200).json(selectedPlan) : res.status(400).json({ message: `Plan with ID ${id} could not be found.` })
    });
})

module.exports = plans;