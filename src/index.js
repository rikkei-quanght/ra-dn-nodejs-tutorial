// const express = require('express');
import express from 'express'; // Phải thêm "type": "module" ở package.json
import bodyParser from 'body-parser';
import morgan from 'morgan';
import fs from 'fs';

const application = express();

// application.use(express.json());
// application.use(express.urlencoded());

// Cấu hình body parser
// parse application/x-www-form-urlencoded
application.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
application.use(bodyParser.json());

// Cấu hình morgan
const accessLogStream = fs.createWriteStream('src/logs/access.log', { flags: 'a' });
application.use(morgan('combined', { stream: accessLogStream }));


application.get('/users', (req, res, next) => {
    if (req.query.keyword !== undefined) {
        next();
    } else {
        res.send({
            error: 'Invalid request'
        })
    }
}, (req, res) => {
    res.send({
        users: []
    })
});

application.get('/users/:id', (req, res, next) => {
    if (req.params.id === '0') {
        next('route');
    } else {
        next();
    }
}, (req, res) => {
    res.send({
        id: req.params.id
    })
})

application.post('/users', (req, res) => {
    res.send({
        requestBody: req.body
    })
});

application.listen(8000, () => {
    console.log('Server started');
});
