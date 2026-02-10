const express = require("express");
const router = express.Router();

// 👇 MUST MATCH EXACT FILE NAME
const MenuItem = require("../model/menuItem");

// POST
router.post("/", async (req, res) => {
  try {
    const item = new MenuItem(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET
router.get("/", async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
