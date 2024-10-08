const express = require("express");
const path = require("node:path");

const app = express();

let storedEmails = [];

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/register", (req, res) => {
  const { email } = req.body;

  storedEmails.push({ email });
  res.render("success", { useremail: email });
});

app.get("/emails", (req, res) => {
  res.render("emails", { registered: storedEmails });
});

app.post("/emails/delete", (req, res) => {
  const { email } = req.body;
  storedEmails = storedEmails.filter((item) => item.email !== email);
  res.redirect("/emails");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Servidor iniciado!");
});
