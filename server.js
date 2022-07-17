const express = require('express')
const inputCheck = require('./utils/inputCheck')
const db = require('./db/connection')

//Import routes
const apiRoutes = require('./routes/apiRoutes')

const PORT = process.env.PORT || 3001
const app = express()

const { resourceLimits } = require('worker_threads')

// Express middleware
app.use(express.urlencoded({ extended: false}))
app.use(express.json())

// API routes
app.use('/api', apiRoutes)

// Default response for anything not found
app.use((req,res) => {
    res.status(404).end()
})

db.connect(err => {
    if (err) throw err
    console.log('Database connected.')

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
})
