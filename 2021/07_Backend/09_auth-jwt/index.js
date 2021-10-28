// Modules
const express = require('express');
const app = express();
const PORT = '8080';

// Middlewares
app.use(express.json());

// Endpoints
app.get('/', (req, res) => {
    res.status(200).send({ message: 'Hello, world!' });
})

// Listen
app.listen(PORT, () => console.log('Server Running...'));

