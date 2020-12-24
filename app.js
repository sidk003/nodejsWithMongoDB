const { render } = require("ejs");
const express = require("express");
const { result } = require("lodash");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");
// express app
const app = express();
// connect to mongoDB
const dbURI =
  "mongodb+srv://siddhant:test123@nodejswithmongodb.hahpy.mongodb.net/nodejsWithMongoDB?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

// Middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// Blog routes
app.use("/blogs", blogRoutes);

// Error Page
app.use((req, res) => {
  res.status(404).render("error", { title: "Error" });
});
