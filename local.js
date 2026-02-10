const mongoose = require('mongoose');

// MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels';

// Connect to MongoDB (NO OPTIONS)
mongoose.connect(mongoURL);


// Get default connection
const local = mongoose.connection;

// Events
local.on('connected', () => {
  console.log('MongoDB connection successful');
});

local.on('error', (err) => {
  console.log('MongoDB connection error:', err);
});

local.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

module.exports = local;
