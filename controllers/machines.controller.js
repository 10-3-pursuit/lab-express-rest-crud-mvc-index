const express = require("express");
const machines = express.Router();
const machinesArray = require("../models/machine.model");

machines.get("/", (req, res) => {
  res.json({ machines: machinesArray });
});

machines.get("/:id", (req, res) => {
  const { id } = req.params;
  const machine = machinesArray.find((machine) => machine.id === +id);
  machine ? res.json({ machine }) : res.json({ error: `Nothing found` });
});

module.exports = machines;
