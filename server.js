const mongoose = require("mongoose");
const express = require("express");
const { Console } = require("console");

const PORT = 3000;

const app = express();

//app.use url json static
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


// bring mongoose.connect

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness", {
  useNewUrlParser: true,
  useFindAndModify: false
});
//declare you routes
app.use(require("./routes/api.js"));
//declare you api routes
app.use(require("./routes/html.js"));

app.listen(PORT, () => {
    console.log(`My app is runningon ${PORT}`)
});