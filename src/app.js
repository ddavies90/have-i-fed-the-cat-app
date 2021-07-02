const express = require('express');
const { Cat } = require('./models');

const app = express();

app.use(express.json());

app.get('/cats', (req, res) => {
    Cat.findAll().then(cats => res.status(200).json(cats));
});

app.post('/cats', (req, res) => {
    Cat.create(req.body).then(cat => res.status(201).json(cat));
});

module.exports = app;