const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const {Schema} = mongoose;

const PlaceSchema = new Schema({
  name: {
  type: String,
  required: true
},
latitude: {
  type: Number,
  required: true
},
longitude: {
  type: Number,
  required: true
},
id: Number,
unity: String
});
module.exports = mongoose.model('Place', PlaceSchema);
