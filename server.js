const express = require('express');

//Router import here
const RecipeRouter = require('./recipes/recipe-router');

//Global Middleware here
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`<h2> Node db 4 Project is UP! </h2>`)
    
})

server.use('/api/recipes', RecipeRouter);

module.exports = server;