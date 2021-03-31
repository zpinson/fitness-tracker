const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter a exercise",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter a exercise name",
      },
      duration: {
        type: Number,
        required: "Enter a duration",
      },
      weight: {
        type: Number,
        required: "Enter a weight",
      },
      reps: {
        type: Number,
        required: "Enter a reps number",
      },
      sets: {
        type: Number,
        required: "Enter a set number",
      },
      distance: {
        type: Number,
        required: "Enter a distance",
      },
    },
  ],
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;