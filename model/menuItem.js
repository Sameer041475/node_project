const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  taste: {
    type: String,
    enum: ["spicy", "sweet", "sour", "bitter"],
    required: true
  },
  is_drink: {
    type: Boolean,
    default: false
  },
  ingredients: {
    type: [String]
  }
});
//comment added for testing purpose
module.exports = mongoose.model("Menu", menuSchema);
