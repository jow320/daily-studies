const express = require("express");
const path = require("node:path");
const router = require("./routes");

const app = express();

// Ejs Config
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// static arch config
app.use(express.static("public"));

//config to read req data
app.use(express.urlencoded({ extended: true }));

// Rotas da aplicação
app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Servidor iniciado!\n Rodando em http://localhost:${PORT}/`)
);
