const mongoose = require('mongoose');

// all mongoose scherme start like thit
const Schema = mongoose.Schema;

// schema with only one attr: username
const userSchema = new Schema({
    username: {
        // requirement of the data.
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
});


const User = mongoose.model('User', userSchema);

module.exports = User;