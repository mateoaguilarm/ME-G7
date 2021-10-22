const app = require('./server')
const PORT = 8080;

// Listener
app.listen(PORT, () => console.log(`Server running : http://localhost:${PORT}`)
)