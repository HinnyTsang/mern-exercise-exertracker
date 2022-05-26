const mongoose = require('mongoose');

// all mongoose scherme start like thit
const Schema = mongoose.Schema;

// schema with only one attr: username
const exerciseSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true
    }
}, {
    timestamps: true,
});


const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;