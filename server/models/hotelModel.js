const mongoose = require("mongoose");
const address_schema = require("addressSchema");
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: address_schema,
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  time: {
    openingTime: {
      type: String,
      required: true,
    },
    closingTime: {
      type: String,
      required: true,
    },
  },
});

module.exports = mongoose.model("Hotels", hotelSchema);
