
// Modules
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(helmet())

// Endpoints
app.get('/', (req, res) => {
    res.status(200).send('Hola desde server!')
});

module.exports = app;