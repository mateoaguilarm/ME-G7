// MODULES
const express = require('express');
const app = express();
const PORT = 8080;
const cookieSession = require('cookie-session');

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Usar middleware de cookie-session
// Más información: http://expressjs.com/en/resources/middleware/cookie-session.html
app.use(
    cookieSession({
        name: 'session',
        keys: ['Hola', 'Master', 'Code', 'G7'],

        // Cookie Options
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    })
);

// "Base de Datos"
const books = [];

// ENDPOINTS
app.get('/', (req, res) => {
    // Crear/actualizar cookie views
    req.session.views = (req.session.views || 0) + 1;
    res.status(200).send({ message: 'Hola mundo!', cookies: req.session });
});

app.post('/login', (req, res) => {
    const userID = 'qwe123';
    // Crear cookie
    req.session.userID = userID;
    res.status(200).send({ message: 'Hola desde login!', cookies: req.session });
});

app.post('/logout', (req, res) => {
    // Eliminar cookies
    req.session = null;
    res.status(200).send({ message: 'Hola desde logout!', cookies: req.session });
});

app.get('/books', (req, res) => {
    res.status(200).send({ message: 'Acá están los libros', books })
})

app.post('/books', (req, res) => {
    const { name, author } = req.body;

    if (!name || !author) {
        return res.status(400).send({ message: 'Ingresa un name y author' })
    }

    const book = {
        id: Math.floor(Math.random() * 1000),
        name,
        author
    };

    books.push(book)

    res.status(200).send({ message: 'Libro creado satisfactoriamente!', book });
})

// LISTENER
app.listen(PORT, () => console.log('Servidor corriendo'));