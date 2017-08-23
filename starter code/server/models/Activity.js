const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const {Schema } = mongoose;

const activitySchema = new Schema({
  content:{
    name: {
      type: String,
      required: [true, 'name is required']
    },
    description: {
      type: String,
      required: [true, 'description is required']
    },
    imgUrl: String,
      },
  organisation:
    {
      latitude:Number,
      longitude:Number,
      schedule: Number,
      quantity: Number,
      place: {
        type: String,
      },
    }
  });
  module.exports = mongoose.model('Activity', activitySchema);
