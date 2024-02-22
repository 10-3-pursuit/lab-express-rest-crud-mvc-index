const express = require("express");
const plans = express.Router();
const plansArray = require("../models/plan.model");

plans.get("/", (req, res) => {
  res.json({ plans: plansArray });
});

plans.get("/:id", (req, res) => {
  const { id } = req.params;
  const plan = plansArray.find((plan) => plan.id === +id);
  plan ? res.json({ plan }) : res.json({ error: "Nothing found" });
});

module.exports = plans;
