const express = require('express');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const todoModel = require('./models/todo.model');
const app = express();
const port = 8080;

app.use(express.json());

// GET TODOS
app.get('/todos', (req, res) => {
    todoModel
        .find({ todos: req.query.name })
        .exec()
        .then(docs => {
            res.send(docs);
        })
});

// POST TODO
app.post('/todo', (req, res) => {
    const 
        todo = new todoModel(req.body),
        now = new Date(),
        jsonDate = now.toJSON();
    req.body.date = jsonDate;
    todo
        .save(req.body)
        .then(docs => {
            res.send(docs);
        })
});
 
// DELETE TODOS
app.delete('/todos', (req, res) => {
    todoModel
        .deleteOne({ _id: new mongodb.ObjectID('' + req.query._id +  '') })
        .exec()
        .then(docs => {
            res.send(docs);
        })
});
 
// FILTERING TODOS
// ::::: NOTE: Filtering endpoints working in Postman
app.get('/todo', (req, res) => {
    const _tags = [];
    for (let i = 0; i < req.query.tags.length; i++) {
        (i + 1)
        _tags.push( { tags: req.query.tags[i] } );
    }
    todoModel
        .find(
            {
                $or: _tags
            }
        )
        .exec() // returns a promise
        .then(docs => {
            res.send(docs);
        })
});

mongoose.connect('mongodb://mongo:27017/auth', { useNewUrlParser: true });

// ::::::::::::::::::::::::::::::;
// ::::::::::::::::::::::::::::::;
// ::::    NOTE: DB also resides on MongoDB cloud
// ::::     ** Work in progress
// mongoose.connect('mongodb+srv://guest:abc123_xyz!@cluster0-ylm6l.mongodb.net/test?retryWrites=true&w=majority/auth', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, "connection error"));
db.once('open', () => {
    console.log('Connected to MongoDB');

    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    })
});