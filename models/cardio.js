const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardioSchema = new Schema({
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
      distance: {
        type: Number,
        required: "Enter a distance",
      },
     
    },
  ],
});

const Cardio = mongoose.model("cardio", cardioSchema);

module.exports = Cardio;
