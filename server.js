const express = require("express")
const app = express()
const port = process.env.PORT || 5000
const mongoose = require('mongoose')

// DB config
const db = require('./config/keys').mongoURI

// Connecto to the DB
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB Connected')
    })
    .catch((err) => {
        console.log('Problems to connect to MongoDB', err)
    })


app.get('/', (req, res) => res.send('Hello!') )

app.listen(port, () => console.log(`Server runing on port: ${port}`))