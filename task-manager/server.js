/* Require modules
--------------------------------------------------------------- */
require("dotenv").config();
const path = require("path");
const express = require("express");
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");

/* Require the db connection, models, and seed data
--------------------------------------------------------------- */
const db = require("./models");

/* Require the routes in the controllers folder
--------------------------------------------------------------- */
const todosCtrl = require("./controllers/todos");
const todos = require("./models/seed");

/* Create the Express app
--------------------------------------------------------------- */
const app = express();

/* Configure the app to refresh the browser when nodemon restarts
--------------------------------------------------------------- */
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  // wait for nodemon to fully restart before refreshing the page
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

/* Configure the app (app.set)
--------------------------------------------------------------- */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

/* Middleware (app.use)
--------------------------------------------------------------- */
app.use(express.static("public"));
app.use(connectLiveReload());
// This tells our app to look at the `controllers/todos.js` file
// to handle all routes that begin with `localhost:3000/todos`
app.use("/todos", todosCtrl);

/* Mount routes
--------------------------------------------------------------- */
app.get("/", function (req, res) {
  db.Todo.find({}).then((todos) => {
    res.render("home", {
      todos: todos,
    });
  });
});

// When a GET request is sent to `/seed`, the todos in `seed.js` will be added
//  to the database.
app.get("/seed", function (req, res) {
  // Remove any exisiting todos
  db.Todo.deleteMany({}).then((removedTodos) => {
    console.log(`Removed ${removedTodos.deletedCount} todos`);
    // Seed the todos collection with the seed data
    db.Todo.insertMany(db.seedTodos).then((addedTodos) => {
      console.log(`Added ${addedTodos.length} todos`);
      res.json(addedTodos);
    });
  });
});

/* Tell the app to listen on the specified port
--------------------------------------------------------------- */
app.listen(process.env.PORT, function () {
  console.log("Express is listening to port", process.env.PORT);
});
