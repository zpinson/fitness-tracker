const router = require("express").Router();
const Workout = require("../models/workout");

router.post("/api/workout", ({ body }, res) => {
  Transaction.create(body)
    .then((dbworkout) => {
      res.json(dbworkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//GETTING WORKOUT BY ID

// LOOK UP .agregate for mongoose








router.delete("/api/workout", ({ body }, res) => {
  Workout.findById(body.id)
    .then(() => {
      return res.json(true);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
