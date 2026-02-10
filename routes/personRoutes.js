const express = require("express");
const router = express.Router();
const Person = require("../model/person");



router.post("/", async (req, res) => {
 

  try {
    const data = req.body;
    const person = new Person(data);
    const result = await person.save();
    console.log('data saved')
    res.status(201).json(result);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType.toLowerCase();
    const allowed = ["chef", "waiter", "manager"];

    if (!allowed.includes(workType)) {
      return res.status(404).json({ error: "Invalid work type" });
    }

    const data = await Person.find({ work: workType });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatePersonData = req.body;
    const response = await Person.findByIdAndUpdate(id, updatePersonData,
       { new: true,
      runValidators: true 
    });
    if (!response){
      return res.status(404).json({ error: "Person not found" });
    }
    console.log('data updated')
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.delete("/:id", async (req, res) => { 
  try {
    const personId = req.params.id;
    const response = await Person.findByIdAndDelete(personId);
    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    } 
    console.log('data deleted')
    res.status(200).json({ message: "Person deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  } 
});
module.exports = router;
