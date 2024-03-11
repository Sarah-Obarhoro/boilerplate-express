let express = require('express');
let app = express();
require("dotenv").config();

// app.get("/", function (req, res) {
//   res.send("Hello Express");
// });

app.get("/", function (req, res) {
  res.sendFile((absolutePath = __dirname + "/views/index.html"));
});

app.use("/public", express.static( __dirname + "/public"));

app.get("/json", function (req, res) {
  res.json({ message: "Hello json" });
  if (process.env.VAR_NAME === "allCaps") {
    response = "Hello World".toUpperCase();
  } else {
    response = "Hello World";
  }
});



































 module.exports = app;
