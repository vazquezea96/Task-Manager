// Creates the Todo model.// Require the Mongoose package
const mongoose = require("mongoose");

// Create a schema to define the properties of the pets collection
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  completed: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

// Export the schema as a Monogoose model.
// The Mongoose model will be accessed in `models/index.js`
module.exports = mongoose.model("Todo", todoSchema);
