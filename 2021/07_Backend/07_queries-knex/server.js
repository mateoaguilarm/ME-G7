
// Modules
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const router = require('./routes')

const app = express();

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(helmet())

// Endpoints
app.use('/api/v1', router);

module.exports = app;