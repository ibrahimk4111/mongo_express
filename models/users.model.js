const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  file: String,
  createdOn:{
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("User", userSchema)