const express = require('express');
const plans = express.Router();
const plansArr = require('../models/plans.model.js');

plans.get('/', (req, res) => {
    res.status(200).json({ plans: plansArr })
});

plans.get('/:id',(req,res)=>{
      const { id } = req.params
      const selectedPlan = plansArr.find(plan => plan.id === +id) // + in front of id to make it a number
      selectedPlan ? res.status(200).json(selectedPlan) : res.status(400).json({ message: `Plan with ID ${id} could not be found.` }); //status 200 is ok and status 400 for error - view on postman
});
  
module.exports = plans;