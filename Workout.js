const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: { type: Date, default: Date.now },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Please select Type"
      },
      name: {
        type: String,
        trim: true,
        required: "Must name exercise"
      },
      duration: {
        type: Number
      },
      distance: {
        type: Number
      },
      weight: {
        type: Number
      },
      sets: {
        type: Number
      },
      reps: {
        type: Number
      }
    }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
