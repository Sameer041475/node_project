const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  work: {
    type: String,
    enum: ["chef", "waiter", "manager", "cleaner"],
    required: true
  },
  mobile: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  address: { type: String, required: true },
  salary: { type: Number, required: true }
});

module.exports =
  mongoose.model.person || mongoose.model("person", personSchema);
