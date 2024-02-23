const express = require("express");
const persons = express.Router();
const personsArray = require("../models/person.model");

persons.get("/", (req, res) => {
  res.json({ persons: personsArray });
});

persons.get("/:id", (req, res) => {
  const { id } = req.params;
  const person = personsArray.find((person) => person.id === +id);
  person ? res.json({ person }) : res.json({ error: "Nothing found" });
});

module.exports = persons;
