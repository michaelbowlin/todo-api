const express = require('express');
const mongoose = require('mongoose');
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
        .deleteOne({ todos: req.query.id })
        .exec()
        .then(docs => {
            res.send(docs);
        })
});

// UPDATE TODOS
 
// FILTERING TODOS
app.get('/todo', (req, res) => {
    const _dietTypes = [];
    for (let i = 0; i < req.query.tags.length; i++) {
        (i + 1)
        _dietTypes.push( { tags: req.query.tags[i] } );
    }
    todoModel
        .find(
            {
                $or: _dietTypes
            }
        )
        .exec() // returns a promise
        .then(docs => {
            res.send(docs);
        })
});


// TODO TYPES :::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::
// app.post('/diettype', (req, res) => {
//     const diettype = new diettypeModel(req.body);

//     console.log("req.query....");
//     console.log(req.query);

//     diettype.save((err, diettype) => {
//         if (err) {
//             res.status(400).send('Unable to save');
//         }
//         res.send('dietType successfully created');
//     });
// });

// // GET TODO TYPES
// app.get('/diettype', (req, res) => {
//     diettypeModel
//         .find({ dietTypes: req.query.name })
//         .exec()
//         .then(docs => {
//             res.send(docs);
//         })
// });

mongoose.connect('mongodb://mongo:27017/auth', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, "connection error"));
db.once('open', () => {
    console.log('Connected to MongoDB');

    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    })
});