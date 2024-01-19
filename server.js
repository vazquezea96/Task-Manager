const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

let db,
  dbConnectionStr = process.env.MONGODBURI,
  dbName = "todo";

MongoClient.connect(dbConnectionStr).then((client) => {
  console.log(`Connected to ${dbName} Database`);
  db = client.db(dbName);
});

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes - CRUD Actions
app.get("/", async (req, res) => {
  const todoItems = await db.collection("todos").find().toArray();
  const itemsLeft = await db
    .collection("todos")
    .countDocuments({ completed: false });
  res.render("index.ejs", { items: todoItems, left: itemsLeft });
});

app.post("/addTodo", (req, res) => {
  db.collection("todos")
    .insertOne({ thing: req.body.todoItem, completed: false })
    .then((result) => {
      console.log("Todo Added");
      res.redirect("/");
    })
    .catch((error) => console.error(error));
});

app.put("/markComplete", (req, res) => {
  db.collection("todos")
    .updateOne(
      { thing: req.body.itemFromJS },
      {
        $set: {
          completed: true,
        },
      },
      {
        sort: { _id: -1, upsert: false },
      }
    )
    .then((result) => {
      console.log("Marked Complete");
      res.json("Marked Complete");
    })
    .catch((error) => console.error(error));
});

app.put("/MarkUncomplete", (req, res) => {
  db.collection("todos")
    .updateOne(
      { thing: req.body.itemFromJS },
      {
        $set: {
          completed: false,
        },
      },
      {
        sort: { _id: -1 },
        upsert: false,
      }
    )
    .then((result) => {
      console.log("Mark Uncomplete");
      res.json("Marked Uncomplete");
    })
    .catch((error) => console.error(error));
});

app.delete("/deleteItem", (req, res) => {
  db.collection("todos")
    .deleteOne({ thing: req.body.itemFromJS })
    .then((result) => {
      console.log("Todo Deleted");
      res.json("Todo Deleted");
    })
    .catch((error) => console.error(error));
});

/* Tell the app to listen on the specified port
--------------------------------------------------------------- */
app.listen(process.env.PORT, () => {
  console.log("Express is listening to port", process.env.PORT);
});
