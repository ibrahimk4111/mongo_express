const path = require('path')
const express = require("express");
const app = express();
require("./config/mongodb")

// static middleware to use images, css and Javascript
app.use(express.static(path.join(__dirname, "views")))

// parsing data into json
// app.use(express.urlencoded({extended: true})); # express js build in alternet of body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// using cors to fetch safe 
const cors = require('cors')
app.use(cors())


// using router to navigate into different routes
const userRouter = require('./routes/users.route')
app.use(userRouter)

// for none defined routes
app.use((req, res, next) => {
  res.status(404).json({message: "404 || Page Not Found"});
});

// server error
app.use((err, req, res, next)=>{
    res.status(500).json({message: "something broken in server"})
})

module.exports = app;
