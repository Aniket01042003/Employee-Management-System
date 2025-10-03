const mongoose = require('mongoose');


const EmployeeSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    position: { type: String, required: true, trim: true },
}, { timestamps: true });


module.exports = mongoose.model('Employee', EmployeeSchema);