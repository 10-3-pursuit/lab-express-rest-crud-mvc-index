const express = require("express");

const machines = express();

const machinesArray = require("../models/machine.model");

machines.get("/", (req, res) => {
  res.json({ equipment: machinesArray });
});

machines.get("/:id", (req, res) => {
  const { id } = req.params;
  const targetedMachine = machinesArray.filter(
    (machine) => machine.id === parseInt(id)
  );
  if (targetedMachine) {
    res.json({ equipment: targetedMachine });
  } else {
    res.json({ message: "No equipment found" });
  }
});

module.exports = machines;
