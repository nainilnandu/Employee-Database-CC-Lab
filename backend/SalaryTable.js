const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const SalarySchema = new Schema({
    employee_ID: {
        type: String,
    },
    jobRole: {
        type: String,
    },
    monthlySalary: {
        type: String,
    },
    yearlyBonus: {
        type: String,
    },

})

const Salary = mongoose.model('salary', SalarySchema);
module.exports = Salary;