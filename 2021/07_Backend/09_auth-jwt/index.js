// Modules
const express = require('express');
const app = express();
const PORT = '8080';

// JWT Modules
const jwt = require('jsonwebtoken');

// Middlewares
app.use(express.json());

const books = [];

// Endpoints
app.get('/', (req, res) => {
    const token = jwt.sign({ foo: 'bar' }, 'shhh');
    res.status(200).send({ message: 'Hello, world! from 09', token });
})

    // Login
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send({ message: 'email and password are required' });
    }

    const payload = {
        email,
        password
    }

    const token = jwt.sign(payload, 'shhh');

    return res.status(200).send({ message: 'welcome', token });
})

app.get('/books', (req, res) => {
    res.status(200).send({ message: 'the books are here' });
})

app.post('/books', (req, res) => {
    // Va con split porque ocupa la segunda posicion del header (Bearer token)
    const token = req.headers['authorization'].split(' ')[1];
    console.log(token);
    const decoded = jwt.verify(token, 'shhh');
    console.log(decoded);

    const { name, author } = req.body;

    if (!name || !author) {
        return res.status(400).send({ message: 'name and author is missing' });
    }
    
    const book = {
        id: Math.floor(Math.random() * 1000),
        name,
        author
    }

    books.push(book);

    res.status(200).send({ message: 'book has been created', book });
})

// Listen
app.listen(PORT, () => console.log('Server Running'));

