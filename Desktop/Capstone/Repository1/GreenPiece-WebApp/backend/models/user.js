const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        minlength: 3
    },

    password: {
        type: String,
        require: true,
        trim: true,
        minlength: 3
    },

    username: {
        type: String,
        require: true,
        trim: true,
        minlength: 3
    },

    phonenumber: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        minlength: 3
    },

}, {
    timestamps: true,
});

const User =  mongoose.model('User', userSchema);

module.exports = User;