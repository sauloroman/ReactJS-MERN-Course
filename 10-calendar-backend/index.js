const express = require('express')
require('dotenv/config')

const app = express()

app.use( express.static('public') )
app.use( express.json() )

// Routes
const authRoutes = require('./routes/auth.routes')

app.use('/api/auth', authRoutes )

// Authentication

// CRUD: Events

app.listen( process.env.PORT, () => console.log(`Servidor corriendo en puerto ${process.env.PORT}`) )



