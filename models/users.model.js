const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  images: Array,
  createdOn:{
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("User", userSchema)