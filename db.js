// db.js
const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://root:example@localhost:27017/?authSource=admin' // Just the URI
)
.then(() => console.log('Connected to MongoDB')) // Optional: Add a connection confirmation
.catch(err => console.error('MongoDB connection error:', err)); // Important: Handle errors!

module.exports = mongoose;