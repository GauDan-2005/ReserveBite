const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
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
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address",
  },
  ratings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Rating",
    },
  ],
  overall_rating: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Hotel", hotelSchema);
