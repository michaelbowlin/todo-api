const mongoose = require('mongoose');

const dietTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        max: 100
    },
    description: {
        type: String,
        max: 1000
    }
});


module.exports = mongoose.model('diettype', dietTypeSchema);