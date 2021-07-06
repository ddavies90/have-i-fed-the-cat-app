const express = require('express');
const { Cat } = require('./models');

const app = express();

app.use(express.json());

// Example of async await
app.route('/cats') 
    .get(async (__, res) => {
        try {
        const cats = await Cat.findAll();
        res.status(200).json(cats);
        }
        catch(err) { 
            console.error(err);
        }
    })

//Example of .then promise 
    .post((req, res) => {
        Cat.create(req.body)
        .then(cat => res.status(201).json(cat))
        .catch(err => console.error(err));
    });

app.route('/cats/:catId') 
    .get((req, res) => {
        Cat.findByPk(req.params.catId)
            .then(cat => res.status(200).json(cat))
            .catch(err => console.error(err));
    })
    .patch((req, res) => {
        Cat.findByPk(req.params.catId)
            .then(cat => { 
                cat.update(req.body);
                res.status(200).json(cat);
            })
            .catch(err => console.error(err));
    })
    .delete((req, res) => {
        Cat.destroy( {where: { id: req.params.catId} } )
            .then(res.status(200).send('Deleted'))
            .catch(err => console.error(err));
    });

app.patch('/feed/:catId', (req, res) => {
    Cat.findByPk(req.params.catId)
        .then(cat => { 
            cat.update({ "lastFed": new Date() });
            res.status(200).json(cat);
        })
        .catch(err => console.error(err));
});

module.exports = app;