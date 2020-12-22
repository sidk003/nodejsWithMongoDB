const express = require("express");
// express app
const app = express();

// register view engine
app.set("view engine", "ejs");

// listen for requests
app.listen(3000);

app.use(express.static("public"));

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Blog number one",
      snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Blog number two",
      snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Blog number three",
      snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

// Error Page
app.use((req, res) => {
  res.status(404).render("error", { title: "Error" });
});
