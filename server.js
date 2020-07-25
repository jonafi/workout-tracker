const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
let Workout = require("./Workout.js");

const PORT = process.env.PORT || 3000;


const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hw17", { useNewUrlParser: true });


//API Routes

app.get("/api/workouts", (req, res) =>{
  Workout.find({}).then((dbworkouts)=>{  
    res.json(dbworkouts);
  })
  

});


app.put("/api/workouts/:id", (req, res) =>{

  console.log(req.body)

  // ObjectID ???
  Workout.update({"_id": req.params.id}, {

   $push:{excersices: req.body}
  })
  .then((dbworkout)=>{
    res.json(dbworkout)
  });


});

app.post("/api/workouts/", (req, res) =>{
  Workout.create(req)
  .then((dbworkout)=>{
    res.json(dbworkout)
  });


});

app.get("/api/workouts/range", (req, res) =>{
  Workout.find({}).then((dbworkouts)=>{  
    res.json(dbworkouts);
  })
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
