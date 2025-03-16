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
app.use('/api/auth', require('./routes/auth.routes') )
app.use('/api/events', require('./routes/events.routes') )

// Authentication

// CRUD: Events

app.listen( process.env.PORT, () => console.log(`Servidor corriendo en puerto ${process.env.PORT}`) )



