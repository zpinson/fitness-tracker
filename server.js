const mongoose = require("mongoose");
const express = require("express");
const { Console } = require("node:console");

const PORT = 3000;

const app = express();

//app.use url json static
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


// bring mongoose.connect
//declare you routes
//declare you api routes

app.listen(PORT, () => {
    console.log(`My app is runningon ${PORT}`)
});