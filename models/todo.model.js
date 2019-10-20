const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    max: 60
  },
  notes: {
    type: String,
    max: 1000
  },
  tags: {
    type: Array
  },
  date: {
    type: String
  }
})

module.exports = mongoose.model('todos', todoSchema)

