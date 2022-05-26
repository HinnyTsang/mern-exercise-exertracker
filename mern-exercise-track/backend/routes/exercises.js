const router = require('express').Router();

let Exercise = require('../models/exercise.model');


// default: get data
router.route('/').get((req, res) => {
    Exercise.find() // mongo method to get all data from user table.
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
});

// add data
router.route('/add').post((req, res) => {

    let { username, description, duration, date } = req.body;

    duration = Number(duration);
    date = Date.parse(date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    })

    // save new user to the mongoDB
    newExercise.save()
        .then(() => res.json('Exercise added!')) // if save completed 
        .catch(err => res.status(400).json('Error: ' + err)); // else, raise error
});


// get items by id
router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
});

// delete items by id
router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
});

// update items by id
router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => {
            // update things
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date.parse(req.body.date);

            // save the data
            exercise.save()
                .then(() => res.json('Exercise updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;