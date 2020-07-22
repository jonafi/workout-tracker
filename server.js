const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;


const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hw17", { useNewUrlParser: true });







//API Routes

app.get("/api/workouts", (req, res) =>{
  res.json({"sample":"json"});
});


app.post("/api/workouts", (req, res) =>{
  res.json({"sample":"json"});
});

app.get("/api/workouts/range", (req, res) =>{
  res.json({"sample":"json"});
});

//HTML ROUTES

app.get("/stats", (req, res) =>{
  res.sendFile(path.join(__dirname + '/public/stats.html'));
});

app.get("/exercise", (req, res) =>{
  res.sendFile(path.join(__dirname + '/public/exercise.html'));
});


//Start Server

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
