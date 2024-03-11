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

var message = "Hello json";
app.get("/json", (req, res) => {
  if (process.env["MESSAGE_STYLE"] === "uppercase") {
    res.json({ message: message.toUpperCase() });
  } else {
    res.json({ message: message });
  }
});






module.exports = app;
