const express = require("express");

const persons = express.Router();

const personsArray = require("../models/person.model");

persons.get("/", (req, res) => {
  res.json({ people: personsArray });
});

persons.get("/:id", (req, res) => {
  const { id } = req.params;
  const targetPerson = personsArray.filter(
    (person) => person.id === parseInt(id)
  );

  if (targetPerson) {
    res.json({ person: targetPerson });
  } else {
    res.json({ message: "Person not found" });
  }
});

module.exports = persons;
