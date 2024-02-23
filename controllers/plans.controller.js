const express = require("express");

const plans = express.Router();

const plansArray = require("../models/plan.model");

plans.get("/", (req, res) => {
  res.json({ plans: plansArray });
});

plans.get("/:id", (req, res) => {
  const { id } = req.params;
  const targetPlan = plansArray.filter((plan) => plan.id === parseInt(id));
  Object.keys(targetPlan).length > 0
    ? res.json({ plan: targetPlan })
    : res.json({ message: "Plan not found" });
});

module.exports = plans;
