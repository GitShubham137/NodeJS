const express = require('express');
const app = express()
const db = require('./db.js');
const bodyParser = require('body-parser');
app.use(bodyParser.json())
require('dotenv').config()

const PORT = process.env.PORT || 3000

app.get('/', function (req, res) {
    res.send('Hello and Welcome to our Hotel...')
})

const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)

const menuRoutes = require('./routes/menuRoutes')
app.use('/menu', menuRoutes)

app.listen(PORT, () => {
    console.log('Server is running on port 3000, http://localhost:3000');
})
