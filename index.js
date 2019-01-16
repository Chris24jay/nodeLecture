const express = require('express');
const bodyParser = require('body-parser')
const ctrl = require('./controller')

//numbers, string, array, functions, undefined, null, object, booleans, 

const app = express();

app.use(bodyParser.json());

let books = [
    {
        id: 1,
        title: "Gates of Fire",
        author: "Steven Pressfield",
    },
    {
        id: 2,
        tite: "Ready Player One",
        author: "That one dude"
    }
]

let id = 3;

app.use(boydParser.json());

//sting, function(obj,obj)
app.get('/api/book', ctrl.getAll)

app.get('/api/book/:id', ctrl.getOneBook)

app.post('/api/book', ctrl.createBook)

app.put('/api/book/:id', ctrl.updateBook)

app.delete('/api/book/:id', ctrl.deleteBook)

app.listen(8080, () => {
    console.log(`8080 Hello helloooooo`)
})



