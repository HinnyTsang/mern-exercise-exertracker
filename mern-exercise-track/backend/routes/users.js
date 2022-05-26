const router = require('express').Router();

let User = require('../models/user.model');

// get data
router.route('/').get((req, res) => {

    console.log("get data request");
    console.log(req.url);
    
    User.find() // mongo method to get all data from user table.
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// add data
router.route('/add').post((req, res) => {

    const username = req.body.username;

    const newUser = new User({ username });

    // save new user to the mongoDB
    newUser.save()
        .then(() => res.json('User added!')) // if save completed 
        .catch(err => res.status(400).json('Error: ' + err)); // else, raise error
});

// get items by id
router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

// delete items by id
router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

// update items by id
router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            // update things
            user.username = req.body.username;

            // save the data
            user.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;