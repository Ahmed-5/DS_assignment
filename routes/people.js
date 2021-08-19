const express = require("express");
const People = require("../models/People");

const router = express.Router();

// get all people
router.get("/", async (req, res, next) => {
  const people = await People.find();
  res.send(people).status(200);
});

// get person by name
router.get("/:name", async (req, res, next) => {
  const person = await People.findOne({name: req.params.name});
  res.send(person).status(200);
});

// post person
router.post("/", async (req, res, next) => {
  const person = new People(req.body);
  try {
    await person.save();
    res.send(person).status(200);
  } catch (error) {
    res.send(error).status(400);
  }
});

// delete person
router.delete("/:id", async (req, res, next) => {
  try {
    await People.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    res.send(error).status(400);
  }
});

module.exports = router;
