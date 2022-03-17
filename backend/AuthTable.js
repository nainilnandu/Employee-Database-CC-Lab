const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AuthSchema = new Schema({
    employee_ID: {
        type: String,
    },
    password: {
        type: String,
    }
})

const Auth = mongoose.model('Auth', AuthSchema);
module.exports = Auth;