const express = require("express");
const cors = require("cors");
const { hostname } = require("os");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "teste" });
});
app.get("/download", (req, res) => {
  const path = require("path");
  const file = path.join(__dirname, "./file.pdf");

  res.download(file, function (err) {
    if (err) {
      console.log("erro");
    } else {
      console.log("sucesso");
    }
  });
});
app.listen(3333, (host) => {
  host: "0.0.0.0";
});
