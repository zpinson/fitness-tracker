const router = require("express").Router();
const Workout = require("../models/workout");


router.post("/api/workouts", ({ body }, res) => {
  // Transaction.create(body)
  Workout.create({})
    .then((dbworkout) => {
      res.json(dbworkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  console.log(body)
  Workout.findByIdAndUpdate(params.id, { $set: { exercises: body }})
    .then((dbworkout) => {
     res.json(dbworkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
//GETTING WORKOUT BY ID

router.get("/api/workouts/", ({ body }, res) => {
  Workout.find({})
    .then((dbworkout) => {
       res.json(dbworkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});


// LOOK UP .agregate for mongoose

router.get('/api/workouts/', function (req, res) {
  Workout.aggregate([
    {$match: {}},
      { 
          $group: { 
              _id: "$weight",
              total: { $sum: 1 }
          }
      }
  ], 
  // function (err, bears) {
  //     console.log(err, bears);
  //     // remap the results
  //     var viewcounts = bears.map(function (bear) {
  //         // using ES6 to compute property name
  //         return { [bear._id]: bear.viewcount };
  //     });
  //     console.log(viewcounts);
  )});







router.delete("/api/workouts", ({ body }, res) => {
  Workout.findById(body.id)
    .then(() => {
      return res.json(true);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router