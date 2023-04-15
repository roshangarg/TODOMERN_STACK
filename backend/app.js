const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

// Init App 

const app = express()

// middleware

app.use(express.json())
app.use((req , res , next) => {
    console.log(req.path , req.method)
    next()
})

// Routes

app.use('/api/workouts',workoutRoutes)
app.use('/api/user',userRoutes)


// Connect to db 
mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            // listen for request
            app.listen(process.env.PORT,() => {
                console.log("Connected to the mongoose database  request on port number 4000")
            
            })
        })
        .catch(error => {
            console.log(error)
        })

// listen for request 

