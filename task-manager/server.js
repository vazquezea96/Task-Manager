const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const todoRoutes = require("./routes/todos");

require("dotenv").config({ path: "./config/.env" });

connectDB();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", mainRoutes);
app.use("/todos", todoRoutes);

/* Tell the app to listen on the specified port
--------------------------------------------------------------- */
app.listen(process.env.PORT, () => {
  console.log("Express is listening to port", process.env.PORT);
});
