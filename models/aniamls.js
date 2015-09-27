var mongoose = require('mongoose')

var animalSchema = new mongoose.Schema({
  name: String,
  breed: String,
  gender: String,
  family: String
  status: String
  updatedAt: Date
})


var Animal = mongoose.model('Animal', animalSchema)

module.exports = Animal;