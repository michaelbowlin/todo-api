// ::::: NOTE: Filtering endpoints working in Postman
// ::::: *** Still need to wire in model
const mongoose = require('mongoose');

const dietTypeSchema = new mongoose.Schema({
    title: {
        type: String,
        max: 100
    },
    notes: {
        type: String,
        max: 1000
    }
});

module.exports = mongoose.model('todotype', todoTypeSchema);