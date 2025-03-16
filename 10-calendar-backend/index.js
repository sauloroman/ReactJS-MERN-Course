const express = require('express')
const { dbConnection } = require('./database/config')
const cors = require('cors')
require('dotenv/config')

const app = express()
dbConnection()

app.use( cors() )
app.use( express.static('public') )
app.use( express.json() )

// Routes
const authRoutes = require('./routes/auth.routes')

app.use('/api/auth', authRoutes )

// Authentication

// CRUD: Events

app.listen( process.env.PORT, () => console.log(`Servidor corriendo en puerto ${process.env.PORT}`) )



