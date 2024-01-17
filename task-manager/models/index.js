// Connects to the database. Contains all the exported models and seed data.
// Require the Mongoose package & your environment configuration
const mongoose = require("mongoose");
require("dotenv").config();

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODBURI);
const db = mongoose.connection;

db.on("connected", function () {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});

module.exports = {
  Todo: require("./todo"),
  seedTodos: require("./seed"),
};
