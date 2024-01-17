// Contains all the routes for any URI starting with /todos.
/* 
---------------------------------------------------------------------------------------
NOTE: Remember that all routes on this page are prefixed with `localhost:3000/pets`
---------------------------------------------------------------------------------------
*/

/* Require modules
--------------------------------------------------------------- */
const express = require("express");
const router = express.Router();

/* Require the db connection, and models
--------------------------------------------------------------- */
const db = require("../models");
const Todo = require("../models/todo");

/* Routes
--------------------------------------------------------------- */
// Index Route (GET/Read): Will display all of the todos in the database.
router.get("/", function (req, res) {
  db.Todo.find({}).then((todos) => res.render("home", { todos: todos }));
});

// Show Route (GET/Read): Will display a single todo from the database.
router.get("/:id", function (req, res) {
  db.Todo.findById(req.params.id)
    .then((todo) => res.render("todo-details", { todo: todo }))
    .catch(() => res.send("404 Error: Page Not Found."));
});

// Create Route (POST/Create): Will add a new todo to the database.
router.post("/", function (req, res) {
  db.Todo.create(req.body)
    .then(() => res.redirect("/todos"))
    .catch(() => res.send("404 Error: Page Not Found."));
});

// Update Route (PUT/Update): Will update a todo in the database.
router.put("/:id", function (req, res) {
  db.Todo.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.redirect("/todos"))
    .catch(() => res.send("404 Error: Page Not Found."));
});

// Delete Route (DELETE/Delete): Will delete a todo from the database.
router.delete("/:id", function (req, res) {
  db.Todo.findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/todos"))
    .catch(() => res.send("404 Error: Page Not Found."));
});

/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router;
