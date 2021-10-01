
// MODULES
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

// MIDDLEWARES
app.use(express.json()); // para procesar json
app.use(express.urlencoded({ extended: true })); // para procesar docs, imgs, vids, etc

// ENDPOINTS
app.get('/', (req, res) => {
    res
        .status(200)
        .send(`Hello world`)
})

// CRUD de Usuarios
// Create - (POST)
app.post(`/api/v1/users`, (req, res) => {
    // Create Logic
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send({ message: `email and password missing` })
    }

    const user = {
        id: Math.floor(Math.random() * 100),
        ...req.body
    }

    res.status(201).send({ message: `User creado con ID: ${user.id}` })
})

// Read - (GET)
app.get(`/api/v1/users`, (req, res) => {
    // Read All Logic
    res
        .status(200)
        .send({ message: `hola desde GET /api/v1/users` })
})
app.get(`/api/v1/users/:id`, (req, res) => {
    // Read One Logic
    const { id } = req.params.id;
    res
        .status(200)
        .send({ message: `el id de tu user es: ${id}` })
})

// Update - (PUT / PATCH)
app.put('/api/v1/users/:id', (req, res) => {
    // Update Logic
    const { id } = req.params;
    res.status(200).send({ message: `Actualizado el usuario con el id: ${id}!` });
});

app.patch('/api/v1/users/:id', (req, res) => {
    // Partial Update Logic
    const { id } = req.params;
    res
        .status(200)
        .send({ message: `Actualizado parcialmente el usuario con el id: ${id}!` });
});

// Delete - DELETE
app.delete('/api/v1/users/:id', (req, res) => {
    // Delete Logic
    const { id } = req.params;
    res.status(204).send();
});

// LISTENER
app.listen(PORT, () => { // (Puerto, Hostname, Callback)
    console.log(`server en: http://localhost:${PORT}`);
}) 