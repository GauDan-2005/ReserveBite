const mongoose = require("mongoose");

const rating = new mongoose.Schema({
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
    required: true,
  },
  user_review: {
    type: String,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  hotel_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel",
  },
});

module.exports = mongoose.model("Rating", rating);
