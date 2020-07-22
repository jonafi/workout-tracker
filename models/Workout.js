const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Must name exercise"
  },

  type: {
    type: String,
    trim: true,
    required: "Please select Type"
  },

  weight: {
    type: Number
    
  },
  sets: {
    type: Number
    
  },
  reps: {
    type: Number
    
  },
  duration: {
    type: Number
    
  }


});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
