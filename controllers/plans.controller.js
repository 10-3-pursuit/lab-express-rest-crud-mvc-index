const express = require('express');
const plans = express.Router();
const plansArr = require('../models/plans.model.js');

plans.get('/', (req, res) => {
    res.json({ plans: plansArr })
});
  

plans.get('/:id',(req,res)=>{
      const { id } = req.params
      const selectedPlan = plansArr.find(plan => plan.id === +id)
      selectedPlan ? res.json(selectedPlan) : res.json({ message: `Plan with ID ${id} could not be found.` });
});
  
module.exports = plans;