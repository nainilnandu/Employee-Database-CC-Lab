const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    employee_ID: {
        type: String,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    contact: {
        type: String,
    },
    dob: {
        type: String,
    }
});


const User = mongoose.model('User', UserSchema);
module.exports = User;
